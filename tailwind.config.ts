import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f5ff",
          100: "#e0ebff",
          200: "#c7d7ff",
          300: "#aec3ff",
          400: "#95afff",
          500: "#0066FF", // Primary blue
          600: "#0052cc",
          700: "#003d99",
          800: "#002966",
          900: "#001433",
        },
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#ddd6fe",
          400: "#c084fc",
          500: "#7C3AED", // Purple
          600: "#6d28d9",
          700: "#581c87",
          800: "#3f0f5c",
          900: "#1a0533",
        },
        accent: "#00D9FF", // Cyan
        dark: {
          bg: "#0A0E27",
          light: "#111827",
        },
      },
      backgroundImage: {
        "gradient-futuristic": "linear-gradient(135deg, #0066FF 0%, #7C3AED 50%, #00D9FF 100%)",
        "gradient-dark": "linear-gradient(to bottom, #0A0E27 0%, #111827 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "scale-in": "scaleIn 0.8s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
