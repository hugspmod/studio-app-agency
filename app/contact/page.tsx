"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden relative">
      {/* Background animation elements - subtle and non-blocking */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-4 z-10">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Parlons de votre
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              projet
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@studio.com",
                  href: "mailto:hello@studio.com",
                },
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: "+33 (0) 00 00 00 00",
                  href: "tel:+33000000000",
                },
                {
                  icon: MapPin,
                  label: "Localisation",
                  value: "France",
                  href: "#",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-start gap-4 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 px-2 py-1 rounded"
                  >
                    <Icon
                      size={24}
                      className="text-cyan-400 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-sm text-slate-400">{item.label}</div>
                      <div className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Form */}
            <div className="relative border border-white/10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300 rounded-2xl" />
              <div className="relative">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Merci!
                  </h3>
                  <p className="text-slate-300">
                    Nous vous recontacterons bientôt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Nom
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors focus:ring-2 focus:ring-cyan-400/50"
                      placeholder="Votre nom"
                      aria-label="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors focus:ring-2 focus:ring-cyan-400/50"
                      placeholder="votre.email@example.com"
                      aria-label="Votre email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors focus:ring-2 focus:ring-cyan-400/50 resize-none"
                      placeholder="Décrivez votre projet..."
                      aria-label="Votre message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-cyan-400 cursor-pointer"
                  >
                    Envoyer le Message
                  </button>
                </form>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
