"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  preferredDate: string;
  message: string;
}

const services = [
  "Salesforce Consulting",
  "Cybersecurity",
  "Cloud Solutions",
  "AI & Automation",
  "Digital Transformation",
  "PMO Consulting",
];

export default function ScheduleConsultationPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("loading");

    try {
      // Submit to consultation API
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit consultation");
      }

      const data = await response.json();

      // Also create a lead
      await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "consultation",
        }),
      });

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        preferredDate: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Schedule a Consultation</h1>
          <p className="text-xl text-slate-600">
            Let's discuss how ASCENRIX can help transform your business. Fill
            out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <p className="text-green-800 font-semibold">
                ✓ Consultation request submitted successfully! We'll be in
                touch soon.
              </p>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-red-800 font-semibold">
                ✗ Error: {errorMessage}
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Service Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Tell us about your project *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Describe your project, challenges, and goals..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Schedule Consultation"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            Want to see our technology stack?
          </p>
          <Link
            href="/technologies"
            className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition font-semibold"
          >
            View Technologies
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
