
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        richBlack: '#0A0A0A',
        gold: '#C9A84C',
        goldLight: '#D4AF37',
        warmWhite: '#F5F5F0',
        mutedGray: '#888888',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.3em',
      }
    },
  },
  plugins: [],
}
