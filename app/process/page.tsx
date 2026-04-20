"use client";

import { Microscope, Palette, Code, Bug, Rocket, Headphones } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: 1,
      icon: Microscope,
      title: "Discovery & Strategy",
      duration: "1-2 semaines",
      description: "Nous écoutons vos objectifs, analysons le marché et créons une stratégie robuste.",
      activities: ["Audit du marché", "Définition des objectifs", "Recherche utilisateur", "Spécifications fonctionnelles"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      number: 2,
      icon: Palette,
      title: "Design & UX",
      duration: "2-3 semaines",
      description: "Création de wireframes, prototypes interactifs et design final award-winning.",
      activities: ["Wireframing", "Prototypage", "User Research Testing", "Design System"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      number: 3,
      icon: Code,
      title: "Development",
      duration: "4-8 semaines",
      description: "Développement itératif avec code reviews et optimisations continues.",
      activities: ["Architecture API", "Développement Frontend/Backend", "Intégrations", "Database Design"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      number: 4,
      icon: Bug,
      title: "Testing & QA",
      duration: "1-2 semaines",
      description: "Tests rigoureux pour assurer qualité, performance et sécurité.",
      activities: ["Tests Unitaires", "Tests d'Intégration", "Tests de Performance", "Security Audit"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      number: 5,
      icon: Rocket,
      title: "Launch & Deploy",
      duration: "1 semaine",
      description: "Déploiement sur App Store/Play Store avec monitoring et optimisations.",
      activities: ["App Store Setup", "Deployment", "Launch Marketing", "Initial Monitoring"],
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      number: 6,
      icon: Headphones,
      title: "Support 24/7",
      duration: "Ongoing",
      description: "Support continu, maintenance et évolutions de votre application.",
      activities: ["Bug Fixes", "Updates & Features", "Performance Monitoring", "User Support"],
      color: "from-cyan-500/20 to-teal-500/20",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden relative">
      {/* Background animation elements - subtle and non-blocking */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Notre</span>
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Processus
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Une approche structurée et éprouvée pour transformer votre idée en application mobile exceptionnelle.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative"
                >
                  {/* Timeline connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-cyan-500 to-transparent top-32 hidden lg:block" />
                  )}

                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:grid-cols-2" : ""}`}>
                    {/* Left side - for even steps, right side for odd */}
                    <div className={`order-1 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className={`rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${step.color} backdrop-blur-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group relative`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

                        <div className="relative">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="inline-flex p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300 flex-shrink-0">
                              <Icon size={28} className="text-cyan-400" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {step.title}
                              </h3>
                              <p className="text-sm text-cyan-400 mt-1">{step.duration}</p>
                            </div>
                          </div>

                          <p className="text-slate-300 mb-6 leading-relaxed">
                            {step.description}
                          </p>

                          <div className="space-y-2">
                            {step.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                                <span className="text-sm text-slate-400">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - step number */}
                    <div className={`hidden lg:flex justify-center order-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="relative flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-cyan-500/50 z-10">
                          {step.number}
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-1 h-24 bg-gradient-to-b from-cyan-500 to-transparent mt-4" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Timeline <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Estimée</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mb-3">
                  {step.number}
                </div>
                <p className="text-sm text-slate-400 text-center">{step.duration}</p>
                {i < steps.length - 1 && (
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-transparent mt-3" />
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center"
              >
                <div className="text-lg font-bold text-white mb-1">{step.title}</div>
                <div className="text-sm text-cyan-400">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Pourquoi notre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">processus</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Une approche complète et itérative qui assure la qualité et le succès de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Qualité Garantie", desc: "Tests rigoureux à chaque étape pour une application sans bugs." },
              { title: "Alignement Client", desc: "Communication régulière et transparence du début à la fin." },
              { title: "Évolutivité", desc: "Architecture conçue pour supporter la croissance future." },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400">{item.desc}</p>
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
            Prêt à démarrer?
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contactez-nous aujourd'hui
            </span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Commençons à transformer votre vision en une application mobile exceptionnelle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">
                Démarrer Maintenant
              </button>
            </a>
            <a href="/services">
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer">
                Voir les Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
