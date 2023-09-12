/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Cormorant-Garamond': ['Cormorant Garamond', 'sans-serif'],
        'IBM-Plex-Sans':[ 'IBM Plex Sans',' sans-serif'],
      },
    },
  },
  plugins: [],
}

