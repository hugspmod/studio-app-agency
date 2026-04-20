"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Share2, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950/50 backdrop-blur-xl border-t border-white/10 py-16 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Studio
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Créateur d'applications mobiles de classe mondiale pour les entreprises. Design award-winning et développement performant.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "Services", "Portfolio", "Blog"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 px-2 py-1 rounded"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {["Apps Mobiles", "Design UX/UI", "Backend API", "Maintenance"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 px-2 py-1 rounded"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@studio.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 px-2 py-1 rounded cursor-pointer"
                >
                  <Mail size={16} aria-hidden="true" />
                  hello@studio.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33000000000"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 px-2 py-1 rounded cursor-pointer"
                >
                  <Phone size={16} aria-hidden="true" />
                  +33 (0) 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={16} aria-hidden="true" />
                <span>France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm">
            &copy; 2024 Studio. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Share2, href: "#", label: "LinkedIn" },
              { icon: Code, href: "#", label: "GitHub" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                title={label}
                aria-label={label}
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link
              href="/privacy"
              className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 px-2 py-1 rounded"
            >
              Confidentialité
            </Link>
            <Link
              href="/terms"
              className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 px-2 py-1 rounded"
            >
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
