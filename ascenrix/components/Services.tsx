"use client";

import { Brain, Briefcase, Cloud, Database, Settings, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    Icon: Database,
    title: "Salesforce Consulting",
    description:
      "End-to-end Salesforce implementation, optimization, and support for enterprise CRM.",
  },
  {
    Icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security assessments, threat detection, and compliance management.",
  },
  {
    Icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud architecture, migration, and managed services across major platforms.",
  },
  {
    Icon: Brain,
    title: "AI & Automation",
    description:
      "Intelligent process automation and AI integration to supercharge your operations.",
  },
  {
    Icon: Briefcase,
    title: "Digital Transformation",
    description:
      "Strategic roadmaps and execution frameworks for enterprise-wide digital change.",
  },
  {
    Icon: Settings,
    title: "PMO Consulting",
    description:
      "Project management office setup, governance models, and delivery excellence.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-black">What We Do</h2>
          <Link
            href="/services"
            className="text-purple-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            All services <ChevronRight size={16} />
          </Link>
        </div>

        {/* Grid separated by 1px gray lines */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-100">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 hover:bg-gray-50 transition-colors group cursor-pointer"
            >
              <Icon size={32} className="mb-5 text-purple-600" />
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-purple-600 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>
              <span className="text-sm font-medium text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ChevronRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
