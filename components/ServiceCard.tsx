"use client";

import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  index = 0,
}: ServiceCardProps) {
  return (
    <div
      className="group"
      style={{
        animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-200 focus-within:ring-2 focus-within:ring-cyan-400">
        {/* Icon */}
        <Icon
          size={32}
          className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200"
          aria-hidden="true"
        />

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-cyan-400 text-lg leading-none mt-1">
                ✓
              </span>
              <span className="text-slate-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="mt-8 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-cyan-400 cursor-pointer"
          aria-label={`En savoir plus sur ${title}`}
        >
          En Savoir Plus
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
