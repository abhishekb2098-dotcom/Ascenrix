"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Award, Users, TrendingUp } from "lucide-react";

const insights = [
  {
    category: "Perspective",
    title: "The Future of Salesforce in the Age of AI",
    description: "How intelligent automation is reshaping CRM and business processes across industries.",
    bg: "bg-purple-600",
  },
  {
    category: "Research",
    title: "Cybersecurity Trends in the Middle East",
    description: "Key findings from our annual security landscape report for enterprise leaders.",
    bg: "bg-slate-800",
  },
  {
    category: "Case Study",
    title: "Cloud Migration at Scale",
    description: "How we helped a Fortune 500 company migrate 1,200+ applications to AWS.",
    bg: "bg-blue-700",
  },
  {
    category: "Insight",
    title: "Building AI-Ready Organizations",
    description: "A practical framework for embedding intelligence across your enterprise operations.",
    bg: "bg-emerald-700",
  },
];

const caseStudies = [
  {
    client: "Global Financial Group",
    industry: "Financial Services",
    title: "Salesforce CRM Transformation",
    impact: "40% reduction in case resolution time",
  },
  {
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    title: "AI-Powered Patient Management",
    impact: "3× improvement in patient outcomes tracking",
  },
  {
    client: "Retail Enterprise",
    industry: "Retail & Consumer",
    title: "Cloud Migration & Modernization",
    impact: "60% cost savings in infrastructure spend",
  },
];

const awards = [
  {
    Icon: Award,
    title: "Top Salesforce Partner",
    subtitle: "Certified Salesforce Platinum Partner for 5 consecutive years.",
  },
  {
    Icon: Users,
    title: "Best Employer 2024",
    subtitle: "Ranked #4 in Best Places to Work in Technology by Great Place to Work®.",
  },
  {
    Icon: TrendingUp,
    title: "Gartner Recognition",
    subtitle: "Named a Leader in Digital Transformation Services in the Magic Quadrant.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Global Support" },
];

const footerServices = [
  "Salesforce Consulting",
  "Cybersecurity",
  "Cloud Solutions",
  "AI & Automation",
  "Digital Transformation",
];

const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Technologies", href: "/technologies" },
  { label: "Contact Us", href: "/contact" },
  { label: "Schedule Consultation", href: "/schedule" },
];

const footerLegal = ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Accessibility"];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-purple-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Together We Ascend
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-black leading-tight mb-6 max-w-4xl">
              Built to Ascend.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
              Transforming businesses through Salesforce, Cybersecurity, Cloud,
              AI and Digital Innovation.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-medium hover:bg-purple-600 transition-colors"
              >
                Schedule Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-black text-black px-8 py-4 font-medium hover:bg-black hover:text-white transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Latest Insights ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-black">Latest Insights</h2>
            <Link
              href="/about"
              className="text-purple-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              See all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {insights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`${item.bg} h-44 mb-4 flex items-end p-4`}>
                  <span className="text-white text-xs font-semibold uppercase tracking-widest bg-black/20 px-2 py-1">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-black mb-2 group-hover:text-purple-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 360° Value ── */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-6">
              360° Value
            </p>
            <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-10">
              Every day, we create value for businesses and communities across the globe.
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-colors"
            >
              See how we do it <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Client Success Stories ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-black">Client Success Stories</h2>
            <Link
              href="/services"
              className="text-purple-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  {cs.industry}
                </p>
                <p className="text-purple-600 font-semibold text-sm mb-4">{cs.client}</p>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors">
                  {cs.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{cs.impact}</p>
                <span className="text-sm font-medium text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <ChevronRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-bold text-black mb-2">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-12">Recognition & Awards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map(({ Icon, title, subtitle }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-gray-100 hover:border-purple-200 transition-colors"
              >
                <Icon size={32} className="text-purple-600 mb-4" />
                <h3 className="font-bold text-black text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Careers CTA ── */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-purple-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Join Us
            </p>
            <h2 className="text-4xl font-bold max-w-xl leading-tight">
              Build a career that&apos;s as exciting as the world we&apos;re shaping.
            </h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 font-semibold hover:bg-purple-50 transition-colors"
          >
            Join Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-1">ASCENRIX</h3>
              <p className="text-purple-400 text-sm mb-4">Built to Ascend.</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses through technology, innovation, and expertise.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {footerServices.map((s) => (
                  <li key={s}>
                    <Link
                      href="/services"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {footerCompany.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
                Get In Touch
              </h4>
              <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                Ready to transform your business? Let&apos;s talk.
              </p>
              <Link
                href="/schedule"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm px-6 py-3 transition-colors font-medium"
              >
                Schedule a Consultation
              </Link>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © 2026 ASCENRIX. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {footerLegal.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-gray-500 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
