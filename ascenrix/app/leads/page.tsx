"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Lead {
  id: string;
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  source: "consultation" | "inquiry" | "direct";
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  notes?: string;
  createdAt: string;
  lastUpdated: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newStatus, setNewStatus] = useState<string>("");

  useEffect(() => {
    fetchLeads();
  }, [filter]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const url = filter
        ? `/api/leads?status=${filter}`
        : "/api/leads";
      const response = await fetch(url);
      const data = await response.json();
      setLeads(data.leads || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (leadId: string, status: string) => {
    try {
      const response = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status }),
      });

      if (response.ok) {
        setEditingId(null);
        fetchLeads();
      }
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  const statusColors = {
    new: "bg-blue-100 text-blue-800",
    contacted: "bg-yellow-100 text-yellow-800",
    qualified: "bg-purple-100 text-purple-800",
    converted: "bg-green-100 text-green-800",
    lost: "bg-red-100 text-red-800",
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold mb-4">Leads Management</h1>
        <p className="text-xl text-slate-600 mb-8">
          Track and manage all captured leads from consultations and inquiries.
        </p>
      </motion.div>

      <div className="mb-8 flex gap-4 flex-wrap">
        <button
          onClick={() => setFilter("")}
          className={`px-4 py-2 rounded-lg transition ${
            filter === ""
              ? "bg-blue-600 text-white"
              : "bg-white border border-slate-300"
          }`}
        >
          All ({leads.length})
        </button>
        {["new", "contacted", "qualified", "converted", "lost"].map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg transition capitalize ${
                filter === status
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-slate-300"
              }`}
            >
              {status}
            </button>
          )
        )}
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-slate-600">Loading leads...</p>
        </div>
      ) : leads.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-50 p-12 rounded-lg text-center"
        >
          <p className="text-slate-600 mb-4">No leads found</p>
          <Link href="/schedule" className="text-blue-600 hover:underline">
            Create your first lead
          </Link>
        </motion.div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b-2">
                <th className="px-6 py-4 text-left font-bold">Name</th>
                <th className="px-6 py-4 text-left font-bold">Company</th>
                <th className="px-6 py-4 text-left font-bold">Service</th>
                <th className="px-6 py-4 text-left font-bold">Status</th>
                <th className="px-6 py-4 text-left font-bold">Source</th>
                <th className="px-6 py-4 text-left font-bold">Date</th>
                <th className="px-6 py-4 text-left font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold">{lead.fullName}</p>
                      <p className="text-sm text-slate-600">{lead.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">{lead.company}</td>
                  <td className="px-6 py-4">{lead.service}</td>
                  <td className="px-6 py-4">
                    {editingId === lead.id ? (
                      <select
                        value={newStatus || lead.status}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="px-2 py-1 border rounded"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                        <option value="lost">Lost</option>
                      </select>
                    ) : (
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                          statusColors[
                            lead.status as keyof typeof statusColors
                          ]
                        }`}
                      >
                        {lead.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 capitalize">{lead.source}</td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    {editingId === lead.id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            updateLeadStatus(lead.id, newStatus)
                          }
                          className="text-green-600 hover:text-green-700 font-semibold"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-slate-600 hover:text-slate-700"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingId(lead.id);
                          setNewStatus(lead.status);
                        }}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 p-6 bg-blue-50 rounded-lg"
      >
        <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <p className="text-slate-600">Total Leads</p>
            <p className="text-3xl font-bold">{leads.length}</p>
          </div>
          <div>
            <p className="text-slate-600">New</p>
            <p className="text-3xl font-bold text-blue-600">
              {leads.filter((l) => l.status === "new").length}
            </p>
          </div>
          <div>
            <p className="text-slate-600">Converted</p>
            <p className="text-3xl font-bold text-green-600">
              {leads.filter((l) => l.status === "converted").length}
            </p>
          </div>
          <div>
            <p className="text-slate-600">Conversion Rate</p>
            <p className="text-3xl font-bold">
              {leads.length > 0
                ? (
                    ((leads.filter((l) => l.status === "converted").length /
                      leads.length) *
                      100).toFixed(1) + "%"
                  )
                : "0%"}
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
