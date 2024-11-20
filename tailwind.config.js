/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bubblegum: '#FD75B4',
        chalk: '#C6CACC',
        charcoal: '#4A555D',
        sunshine: '#FDE48C',
        black: '#1D2B35'
      },
      fontFamily: {
        sigmar: ['Sigmar', 'cursive'],
        nunito: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};