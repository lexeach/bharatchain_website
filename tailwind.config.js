/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sovereignBlue: "#002147",
        ashokaSaffron: "#FF9933",
        digitalWhite: "#F4F7F9",
      },
      fontFamily: {
        sans: ['Public Sans', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}