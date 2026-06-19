"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Shield,
  Zap,
  Database,
  Cpu,
  GitBranch,
  Layers,
} from "lucide-react";

interface Technology {
  name: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const technologies: Technology[] = [
  // Frontend
  {
    name: "React/Next.js",
    category: "Frontend",
    icon: <Code2 className="w-8 h-8" />,
    description: "Modern React framework with server-side rendering",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: <Code2 className="w-8 h-8" />,
    description: "Type-safe JavaScript for robust applications",
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <Layers className="w-8 h-8" />,
    description: "Utility-first CSS framework for rapid UI development",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    icon: <Zap className="w-8 h-8" />,
    description: "Animation library for React components",
    color: "from-purple-500 to-pink-500",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: <Cpu className="w-8 h-8" />,
    description: "JavaScript runtime for server-side development",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Next.js API Routes",
    category: "Backend",
    icon: <GitBranch className="w-8 h-8" />,
    description: "Serverless functions for API endpoints",
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "RESTful APIs",
    category: "Backend",
    icon: <Database className="w-8 h-8" />,
    description: "Standard API architecture for data exchange",
    color: "from-orange-500 to-red-500",
  },

  // Cloud & DevOps
  {
    name: "Salesforce",
    category: "Platform",
    icon: <Cloud className="w-8 h-8" />,
    description: "Enterprise CRM and business cloud platform",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: <Cloud className="w-8 h-8" />,
    description: "Comprehensive cloud computing services",
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    icon: <Cloud className="w-8 h-8" />,
    description: "Google's cloud infrastructure and AI services",
    color: "from-red-400 to-blue-600",
  },
  {
    name: "Cybersecurity",
    category: "Security",
    icon: <Shield className="w-8 h-8" />,
    description: "Advanced threat detection and compliance",
    color: "from-red-600 to-pink-600",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: <Layers className="w-8 h-8" />,
    description: "Containerization for consistent deployments",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    icon: <Layers className="w-8 h-8" />,
    description: "Orchestration platform for container management",
    color: "from-blue-600 to-blue-800",
  },

  // AI & Automation
  {
    name: "AI & Machine Learning",
    category: "AI",
    icon: <Zap className="w-8 h-8" />,
    description: "Artificial intelligence and predictive analytics",
    color: "from-purple-600 to-indigo-600",
  },
  {
    name: "Automation",
    category: "AI",
    icon: <Zap className="w-8 h-8" />,
    description: "Process automation and workflow optimization",
    color: "from-green-600 to-emerald-600",
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    description: "Advanced relational database system",
    color: "from-blue-700 to-blue-900",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    description: "NoSQL document database for flexible schemas",
    color: "from-green-600 to-green-800",
  },
];

const categories = [
  "Frontend",
  "Backend",
  "Cloud",
  "DevOps",
  "Database",
  "Security",
  "AI",
  "Platform",
];

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our Technology Stack
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver scalable,
            secure, and innovative solutions for our clients.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categoryTechs = technologies.filter(
            (tech) => tech.category === category
          );

          if (categoryTechs.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-slate-900">
                {category}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTechs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                      duration: 0.4,
                    }}
                    whileHover={{ y: -8 }}
                    className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
                  >
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} text-white mb-4`}
                    >
                      {tech.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                    <p className="text-slate-600">{tech.description}</p>

                    <div className="mt-4 pt-4 border-t">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                        {tech.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 p-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Custom Tech Solutions</h3>
          <p className="mb-6">
            Beyond our core stack, we specialize in integrating and customizing
            enterprise technologies to match your specific business needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-bold mb-2">⚡ Performance</p>
              <p className="text-blue-100">
                Optimized for speed and scalability
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">🔒 Security</p>
              <p className="text-blue-100">
                Enterprise-grade security standards
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">🎯 Integration</p>
              <p className="text-blue-100">
                Seamless integration with existing systems
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
