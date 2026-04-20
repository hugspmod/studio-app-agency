"use client";

import { Smartphone, Palette, Zap, Code, Layers, Cpu, Rocket, Gauge } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Apps Mobiles Premium",
      description: "Applications natives et cross-platform haute performance.",
      features: [
        "React Native & Flutter",
        "Swift & Kotlin natifs",
        "Performance optimale",
        "Support multi-plateforme",
        "Offboarding utilisateur fluide",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Palette,
      title: "Design UX/UI Award",
      description: "Interfaces captivantes et intuitives, reconnaissables.",
      features: [
        "Design award-winning",
        "Research utilisateur profonde",
        "Prototypes interactifs",
        "Design system complet",
        "Animations fluides",
      ],
      technologies: ["Figma", "Framer", "Design Tokens"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Code,
      title: "Backend & Infrastructure",
      description: "Architectures robustes, scalables et sécurisées.",
      features: [
        "APIs RESTful et GraphQL",
        "Bases de données optimisées",
        "Architecture cloud",
        "CI/CD pipelines",
        "Monitoring & Logs",
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "AWS"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
  ];

  const process = [
    { number: "01", title: "Discovery", desc: "Audit et stratégie" },
    { number: "02", title: "Design", desc: "Prototypes & UX" },
    { number: "03", title: "Development", desc: "Code & Testing" },
    { number: "04", title: "Launch", desc: "Deploy & Optimize" },
    { number: "05", title: "Support", desc: "24/7 Maintenance" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background animation elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12">
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Nos</span>
              <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Solutions complètes pour transformer votre idée en application mobile performante, captivante et future-proof.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl overflow-hidden border ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-xl p-8 hover:border-cyan-500/50 transition-all duration-300`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                        <Icon size={28} className="text-cyan-400" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                          <span className="text-sm text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-cyan-400 border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Notre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Processus</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Une approche structurée et itérative pour garantir le succès de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <div key={i} className="relative">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Services Livrés" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Premium" },
              { number: "10+", label: "Ans Expérience" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Prêt à démarrer
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              votre projet?
            </span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et explorer comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">
                Commencer un Projet
              </button>
            </a>
            <a href="/">
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer">
                Retour à l'accueil
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
