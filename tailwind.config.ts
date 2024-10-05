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
        background: "var(--background)",
        foreground: "var(--foreground)",
        price: "#F48745",
        selectedCard: "#FFD9C2",
        bgTop: "#FDBB94",
        primary: "#C5500B",
      },
      boxShadow: {
        card: "0px 5px 0px -1px #C5500B",
        button: "0px 5px 0px 0px #C5500B",
      },
    },
  },
  plugins: [],
};
export default config;
