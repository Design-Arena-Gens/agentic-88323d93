import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5",
        surface: "#ffffff",
        accent: "#d46a32",
        "accent-soft": "#f1c8ae"
      },
      fontFamily: {
        sans: ["var(--font-primary)", "sans-serif"],
        secondary: ["var(--font-secondary)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(212, 106, 50, 0.4)",
        subtle: "0 15px 45px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "mesh-gradient": "radial-gradient(circle at 20% 20%, rgba(212,106,50,0.25), transparent 35%), radial-gradient(circle at 80% 0%, rgba(15,23,42,0.25), transparent 45%)",
        "wireframe-grid": "linear-gradient(90deg, rgba(212,106,50,0.15) 1px, transparent 1px), linear-gradient(rgba(212,106,50,0.15) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
