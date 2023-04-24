/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg-hero.webp')",
      },
      screens: { sm: { max: "750px" } },
    },
  },
  plugins: [],
};
