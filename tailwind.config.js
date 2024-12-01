/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3B45',
          light: '#264B57',
          dark: '#122A32'
        }
      },
      fontFamily: {
        arabic: ['Noto Sans Arabic', 'sans-serif']
      }
    },
  },
  plugins: [],
}