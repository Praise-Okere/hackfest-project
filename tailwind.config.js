/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#DEF1FC",
        primary: "#57C3FD",
        secondary: "#A7D5EB",
        accent: "#2190C3",
      },
    },
  },
  plugins: [],
};
