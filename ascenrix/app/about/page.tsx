"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About ASCENRIX
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-8 max-w-3xl">
            ASCENRIX is a consulting and technology partner helping
            organizations accelerate growth, strengthen security,
            and drive digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              Our Vision
            </h2>

            <p className="text-slate-700 leading-relaxed">
              To become a trusted global transformation partner
              enabling organizations to thrive in the digital era through
              innovative technology, strategic consulting, and unwavering commitment
              to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              Our Mission
            </h2>

            <p className="text-slate-700 leading-relaxed">
              To empower businesses through innovative technology,
              cybersecurity, cloud, AI and consulting solutions that
              drive measurable outcomes and sustainable growth.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Why Choose ASCENRIX?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <p className="text-slate-200">
                10+ years of experience across Salesforce, Cloud, Cybersecurity,
                and digital transformation with proven track record of success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-slate-200">
                150+ successful projects delivered with 98% customer satisfaction
                rate, ensuring measurable business outcomes for every engagement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Global Team</h3>
              <p className="text-slate-200">
                24/7 support across multiple regions with certified experts in
                enterprise technologies and best practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Security First</h3>
              <p className="text-slate-200">
                Security integrated into every solution with compliance to
                international standards and industry best practices.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's explore how ASCENRIX can help your organization achieve
            its goals and drive sustainable growth.
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-bold"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </main>
  );
}