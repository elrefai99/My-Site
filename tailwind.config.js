/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        first_bg: "#d8d8d8",
        second_bg: "#e1e1e1",
        first_text: "#101010",
        second_text: "#303030"
      }
    },
  },
  plugins: [],
}
