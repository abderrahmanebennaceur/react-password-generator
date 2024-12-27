/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#003366',
        'vibrant-green': '#4CAF50',
        'bright-yellow': '#FFEB3B',
        'sleek-gray': '#B0BEC5',
        'soft-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}