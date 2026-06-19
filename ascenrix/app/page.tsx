"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          Built to Ascend.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl text-slate-300 mb-8"
        >
          Transforming businesses through Salesforce,
          Cybersecurity, Cloud, AI and Digital Innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 flex-wrap"
        >
          <Link href="/schedule" className="inline-block bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold">
            Schedule Consultation
          </Link>

          <Link href="/services" className="inline-block border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition font-semibold">
            Explore Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}