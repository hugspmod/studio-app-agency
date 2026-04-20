"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/process", label: "Processus" },
    { href: "/team", label: "Équipe" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-lg"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Studio - Retour à l'accueil"
        >
          Studio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="hidden md:block">
          <button
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-cyan-400"
            aria-label="Commencer un projet"
          >
            Commencer
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white/5 border-t border-white/20 py-4 px-6 space-y-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg mt-4">
              Commencer
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
