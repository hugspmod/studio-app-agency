"use client";

import { Award, Users, Zap, Target, Heart, Rocket } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      desc: "Nous recherchons la perfection dans chaque détail de nos créations.",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Nous utilisons les dernières technologies pour rester en avance.",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Heart,
      title: "Passion",
      desc: "Nous aimons créer et nous montrons dans chaque projet.",
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30",
    },
    {
      icon: Target,
      title: "Précision",
      desc: "Nous comprennons vos objectifs et les transformons en réalité.",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Nous travaillons en partenariat étroit avec nos clients.",
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30",
    },
    {
      icon: Rocket,
      title: "Croissance",
      desc: "Nous aidons vos applications à décoller et à se développer.",
      color: "from-cyan-500/20 to-teal-500/20",
      borderColor: "border-cyan-500/30",
    },
  ];

  const timeline = [
    { year: "2014", title: "Fondation", desc: "Studio est créé par une équipe passionnée" },
    { year: "2016", title: "50 Apps", desc: "Nous franchissons le cap des 50 applications créées" },
    { year: "2018", title: "Expansion", desc: "Ouverture à l'international et augmentation de l'équipe" },
    { year: "2020", title: "Award", desc: "Première récompense pour design et innovation" },
    { year: "2022", title: "500K+ Users", desc: "Nos apps atteignent 500K+ téléchargements" },
    { year: "2024", title: "Aujourd'hui", desc: "Leader reconnu en développement d'apps mobiles" },
  ];

  const stats = [
    { number: "50+", label: "Apps Créées" },
    { number: "100%", label: "Satisfaction Client" },
    { number: "10", label: "Ans d'Expérience" },
    { number: "500K+", label: "Téléchargements" },
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
              <span className="block text-white mb-2">À Propos de</span>
              <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Studio
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Depuis 2014, nous créons des applications mobiles exceptionnelles qui transforment les idées en succès pour les entreprises du monde entier.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
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

      {/* Values Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Nos <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Valeurs</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ce qui nous guide dans chaque décision et chaque projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl overflow-hidden border ${value.borderColor} bg-gradient-to-br ${value.color} backdrop-blur-xl p-8 hover:border-cyan-500/50 transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

                  <div className="relative">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                        <Icon size={24} className="text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Notre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Histoire</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent hidden lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className={`lg:flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Timeline dot */}
                    <div className="hidden lg:flex w-16 justify-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-slate-900" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-3">
                        <span className="text-cyan-400 text-sm font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Prêt à collaborer?
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Commençons votre projet
            </span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Nous aimerions en savoir plus sur vos objectifs et comment nous pouvons vous aider à les atteindre.
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
