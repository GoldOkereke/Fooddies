/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ff6b35',
        secondary:'#00cc66',
        accent: '#ffd166'
      }
    },
  },
  plugins: [],
}

