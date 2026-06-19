"use client";

import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "What We Do", href: "/services", hasDropdown: true },
  { label: "What We Think", href: "/about", hasDropdown: false },
  { label: "Who We Are", href: "/about", hasDropdown: true },
  { label: "Careers", href: "/contact", hasDropdown: true },
  { label: "Contact Us", href: "/contact", hasDropdown: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight">ASCENRIX</span>
            <span className="hidden md:block text-xs text-purple-400 font-medium">
              Built to Ascend.
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 h-16 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown size={13} className="opacity-50" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <Search size={18} />
            </button>
            <Link
              href="/schedule"
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-2 font-medium transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 text-sm text-white/80 hover:text-white border-b border-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/schedule"
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-3 text-center font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
