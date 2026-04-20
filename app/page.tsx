"use client";

import Link from "next/link";
import { ArrowRight, Smartphone, Palette, Wrench, Star, Zap } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: Smartphone,
    title: "Apps Mobiles Premium",
    description: "Applications natives et cross-platform haute performance.",
    features: [
      "React Native & Flutter",
      "Performance optimale",
      "Support multi-plateforme",
    ],
  },
  {
    icon: Palette,
    title: "Design UX/UI Award",
    description: "Interfaces captivantes et intuitives, reconnaissables.",
    features: [
      "Design award-winning",
      "Prototypes interactifs",
      "User research",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance 24/7",
    description: "Support complet et évolutions continues.",
    features: ["Support 24/7", "Mises à jour régulières", "Optimisation"],
  },
];

const portfolio = [
  { name: "E-Commerce Premium", category: "Retail", downloads: "50K+" },
  { name: "Fitness App", category: "Health", downloads: "100K+" },
  { name: "SaaS Platform", category: "Business", downloads: "500+" },
  { name: "Delivery App", category: "Logistics", downloads: "1M+" },
  { name: "Marketplace", category: "Commerce", downloads: "2K+" },
  { name: "Banking App", category: "Finance", downloads: "100K+" },
];

const testimonials = [
  {
    name: "Jean Moreau",
    company: "TechStart Inc",
    quote: "Incroyable ! L'app dépasse nos attentes.",
  },
  {
    name: "Marie Laurent",
    company: "Eco Solutions",
    quote: "Une équipe professionnelle et passionnée.",
  },
  {
    name: "Pierre Leclerc",
    company: "FinanceFlow",
    quote: "La meilleure agence pour nos besoins.",
  },
];

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-lg">
              <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
                <Zap size={16} /> Lancez votre app en 2024
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white mb-3">Créez des apps</span>
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Extraordinaires
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Studio transforme vos idées en applications mobiles performantes, accessibles et captivantes.
            Design award-winning, développement natif, support 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                Démarrer un Projet
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                Voir le Portfolio
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { number: "50+", label: "Apps Créées" },
              { number: "500K+", label: "Téléchargements" },
              { number: "10", label: "Ans Expérience" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Services <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Exceptionnels</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Solutions complètes pour transformer votre vision en réalité digitale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO SECTION ==================== */}
      <section className="py-32 px-4 relative bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Portfolio <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Impressionnant</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              50+ applications créées pour des clients du monde entier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-cyan-500/50 hover:bg-white/15 transition-all duration-300 backdrop-blur-xl cursor-pointer h-48"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300" />

                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4">
                      <span className="text-cyan-400 text-xs font-semibold">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{project.downloads}</span>
                    <Star size={20} className="text-cyan-400 group-hover:fill-cyan-400 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/portfolio">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">
                Voir Tous les Projets
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Ce que nos <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">clients disent</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic text-lg">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-cyan-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Prêt à créer votre
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              application exceptionnelle?
            </span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrez comment nous
            pouvons transformer votre vision en succès.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">
                Commencer Maintenant
              </button>
            </Link>
            <Link href="/process">
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer">
                En Savoir Plus
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
