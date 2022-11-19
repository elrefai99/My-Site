/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        first_bg: "#e5e5e5",
        second_bg: "#e3e3e3",
        first_text: "#101010",
        second_text: "#303030"
      }
    },
  },
  plugins: [],
}
