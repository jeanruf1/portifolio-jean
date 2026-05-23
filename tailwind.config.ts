import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        neutral: {
          950: "#050505",
          900: "#111111",
          800: "#222222",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
