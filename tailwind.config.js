/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        background: "#f4f4f4",
        color: "#212121",
        accent: "#333333",
      },
    },
  },
  plugins: [],
};
