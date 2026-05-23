import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        accent: ["var(--font-accent)", "Abril Fatface", "cursive"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        chili: {
          DEFAULT: "#C0392B",
          dark: "#922B21",
        },
        ember: "#E67E22",
        cream: {
          DEFAULT: "#FDF6EC",
          dark: "#F5E6CC",
        },
        charcoal: "#1C1C1C",
        gold: "#D4A017",
      },
    },
  },
  plugins: [],
};
export default config;
