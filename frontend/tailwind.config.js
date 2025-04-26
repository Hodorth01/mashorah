/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amethyst: {
          800: "#1B0B53", // Mashorah Color
        },
      },
    },
  },
  plugins: [],
};
