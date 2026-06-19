
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  projectDetails: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      // Submit to inquiry API
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      // Also create a lead
      await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          source: "inquiry",
        }),
      });

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        projectDetails: "",
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
    <main className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">
          Get in touch with our team. We're here to help transform your business.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid md:grid-cols-3 gap-8 mb-12"
      >
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-slate-600 text-sm">Email</p>
          <p className="text-xl font-bold">hello@ascenrix.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-slate-600 text-sm">Location</p>
          <p className="text-xl font-bold">Dubai, UAE & Gurugram, India</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-slate-600 text-sm">Response Time</p>
          <p className="text-xl font-bold">24-48 hours</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white p-8 rounded-xl shadow-lg"
      >
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <p className="text-green-800 font-semibold">
              ✓ Inquiry submitted successfully! We'll be in touch soon.
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
                placeholder="Your full name"
                className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
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
                placeholder="your@email.com"
                className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
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
                placeholder="Your company"
                className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
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
                className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Tell us about your project *
            </label>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Describe your project, challenges, and what you're looking for..."
              className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-slate-600 mb-4">Ready to schedule a consultation?</p>
        <Link
          href="/schedule"
          className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition font-semibold"
        >
          Schedule Consultation
        </Link>
      </motion.div>
    </main>
  );
}