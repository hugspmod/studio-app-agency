"use client";

import { useState } from "react";
import { Star, Download, Globe } from "lucide-react";

export const metadata = {
  title: "Portfolio | Studio",
  description: "Découvrez les applications que nous avons créées.",
};

const projects = [
  {
    id: 1,
    name: "E-Commerce Premium",
    category: "Retail",
    downloads: "50K+",
    rating: 4.8,
    description: "Plateforme e-commerce mobile avec paiement intégré et recommandations AI.",
    image: "bg-gradient-to-br from-blue-500/40 to-cyan-500/20",
    tags: ["React Native", "Node.js", "MongoDB"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    name: "Fitness App",
    category: "Health",
    downloads: "100K+",
    rating: 4.9,
    description: "Application de suivi fitness avec coaching personnalisé et communauté.",
    image: "bg-gradient-to-br from-emerald-500/40 to-green-500/20",
    tags: ["Flutter", "Firebase", "ML Kit"],
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: 3,
    name: "SaaS Platform",
    category: "Business",
    downloads: "500+",
    rating: 4.7,
    description: "Plateforme SaaS complète avec analytics en temps réel et dashboards.",
    image: "bg-gradient-to-br from-purple-500/40 to-pink-500/20",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    name: "Delivery App",
    category: "Logistics",
    downloads: "1M+",
    rating: 4.6,
    description: "Application de livraison avec tracking GPS en temps réel et système de notation.",
    image: "bg-gradient-to-br from-orange-500/40 to-red-500/20",
    tags: ["React Native", "Maps API", "Kotlin"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    name: "Marketplace",
    category: "Commerce",
    downloads: "2K+",
    rating: 4.5,
    description: "Marketplace multi-vendeurs avec système de commission et paiement sécurisé.",
    image: "bg-gradient-to-br from-indigo-500/40 to-blue-500/20",
    tags: ["Flutter", "Firebase", "Stripe"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 6,
    name: "Banking App",
    category: "Finance",
    downloads: "100K+",
    rating: 4.9,
    description: "Application bancaire sécurisée avec authentification biométrique avancée.",
    image: "bg-gradient-to-br from-cyan-500/40 to-teal-500/20",
    tags: ["Swift", "Kotlin", "Biometric API"],
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    id: 7,
    name: "Social Network",
    category: "Social",
    downloads: "500K+",
    rating: 4.7,
    description: "Réseau social avec messaging temps réel et notifications push intelligentes.",
    image: "bg-gradient-to-br from-pink-500/40 to-rose-500/20",
    tags: ["React Native", "GraphQL", "WebSocket"],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 8,
    name: "Education Hub",
    category: "Education",
    downloads: "75K+",
    rating: 4.8,
    description: "Plateforme e-learning avec vidéos HD, quiz interactifs et certification.",
    image: "bg-gradient-to-br from-amber-500/40 to-yellow-500/20",
    tags: ["Flutter", "AWS", "HLS Streaming"],
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: 9,
    name: "Travel Planner",
    category: "Travel",
    downloads: "30K+",
    rating: 4.6,
    description: "Planificateur de voyages avec recommandations IA et guide hors ligne.",
    image: "bg-gradient-to-br from-sky-500/40 to-blue-500/20",
    tags: ["React Native", "Google Maps", "Offline First"],
    color: "from-sky-500/20 to-blue-500/20",
  },
];

const categories = ["Tous", "Retail", "Health", "Business", "Logistics", "Commerce", "Finance", "Social", "Education", "Travel"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background animation elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Notre</span>
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            50+ applications créées pour des clients du monde entier. Des projets variés, tous caractérisés par excellence et innovation.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                    : "border-2 border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-xl cursor-pointer"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} group-hover:opacity-100 opacity-0 transition-all duration-300`} />

                {/* Image Section */}
                <div className={`relative h-56 ${project.image} flex flex-col items-end justify-end p-4 overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="relative flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className={j < Math.floor(project.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-600"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-300 font-semibold ml-1">{project.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-2">
                        <span className="text-cyan-400 text-xs font-semibold">{project.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-1 rounded bg-white/5 text-xs text-slate-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      <Download size={16} className="text-cyan-400" />
                      <span className="text-cyan-400 font-semibold text-sm">{project.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <Globe size={16} className="text-slate-400" />
                      <span className="text-slate-400 text-sm">Voir plus</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Vous aimez ce que vous voyez?
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Parlons de votre projet
            </span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Nous créons des applications mobiles exceptionnelles. Découvrez comment nous pouvons transformer votre vision en réalité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">
                Démarrer un Projet
              </button>
            </a>
            <a href="/services">
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer">
                Voir nos Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
