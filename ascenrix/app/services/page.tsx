"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Database,
  Shield,
  Cloud,
  Brain,
  Briefcase,
  Settings,
} from "lucide-react";

const services = [
  "Salesforce Consulting",
  "Cybersecurity",
  "Cloud Solutions",
  "AI & Automation",
  "Digital Transformation",
  "PMO Consulting",
];

const serviceDetails = [
  {
    name: "Salesforce Consulting",
    icon: Database,
    description:
      "Enterprise-grade Salesforce implementation and consulting services tailored to your business goals.",
    features: [
      "CRM Implementation",
      "Cloud Integration",
      "Custom Development",
      "User Training",
    ],
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    description:
      "Comprehensive cybersecurity solutions to protect your enterprise from evolving threats.",
    features: [
      "Threat Assessment",
      "Security Audits",
      "Compliance Management",
      "Incident Response",
    ],
  },
  {
    name: "Cloud Solutions",
    icon: Cloud,
    description:
      "Scalable cloud infrastructure solutions for AWS, Azure, and Google Cloud.",
    features: [
      "Cloud Migration",
      "Infrastructure Design",
      "Cost Optimization",
      "Multi-Cloud Strategy",
    ],
  },
  {
    name: "AI & Automation",
    icon: Brain,
    description:
      "Leverage artificial intelligence and automation to transform your business processes.",
    features: [
      "AI Implementation",
      "Process Automation",
      "Machine Learning",
      "RPA Solutions",
    ],
  },
  {
    name: "Digital Transformation",
    icon: Briefcase,
    description:
      "End-to-end digital transformation strategy and implementation services.",
    features: [
      "Strategy Planning",
      "Technology Selection",
      "Change Management",
      "Performance Tracking",
    ],
  },
  {
    name: "PMO Consulting",
    icon: Settings,
    description:
      "Project Management Office setup and consulting for successful project delivery.",
    features: [
      "PMO Setup",
      "Project Governance",
      "Resource Planning",
      "Risk Management",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive consulting and technology solutions to drive your
            business forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold">{service.name}</h3>
                </div>

                <p className="text-slate-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    Key Features:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-slate-600">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/schedule"
                  className="inline-block text-blue-600 hover:text-blue-700 font-semibold transition"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your business achieve its
            goals.
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </main>
  );
}