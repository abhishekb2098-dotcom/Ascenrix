"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                ASCENRIX
              </h1>
              <p className="text-xs text-blue-600">
                Built to Ascend.
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>

            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>

            <Link href="/technologies" className="hover:text-blue-600">
              Technologies
            </Link>

            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>

            <Link href="/leads" className="hover:text-blue-600 text-sm">
              Leads
            </Link>

            <Link href="/schedule" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">
              Schedule Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">

            <div className="flex flex-col gap-4">

              <Link href="/">Home</Link>

              <Link href="/about">About</Link>

              <Link href="/services">Services</Link>

              <Link href="/technologies">Technologies</Link>

              <Link href="/contact">Contact</Link>

              <Link href="/leads">Leads</Link>

              <Link href="/schedule" className="bg-blue-600 text-white px-5 py-3 rounded-lg">
                Schedule Consultation
              </Link>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}