/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        rancho: ["Rancho", "cursive"],
      },
      backgroundImage: {
        "header-bg": "url('./src/assets/more/15.jpg')",
        "footer-bg": "url('./src/assets/more/13.jpg')",
        "hero-bg": "url('./src/assets/more/3.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
