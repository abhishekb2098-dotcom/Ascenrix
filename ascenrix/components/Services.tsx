"use client";

import { Brain, Briefcase, Cloud, Database, Settings, Shield } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Salesforce Consulting",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
  },
  {
    icon: Brain,
    title: "AI & Automation",
  },
  {
    icon: Briefcase,
    title: "Digital Transformation",
  },
  {
    icon: Settings,
    title: "PMO Consulting",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="border rounded-xl p-8 hover:shadow-xl transition"
              >
                <Icon size={40} className="mb-4 text-blue-600" />

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                <p className="text-slate-600">
                  Enterprise-grade consulting and implementation services.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
