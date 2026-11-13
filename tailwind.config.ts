import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#14263F", paper: "#F5F7FA", accent: "#4F7CAC" },
      boxShadow: { soft: "0 18px 60px rgba(20, 38, 63, 0.08)" },
      fontFamily: { display: ["Arial", "Helvetica", "sans-serif"] }
    },
  },
  plugins: [],
};
export default config;