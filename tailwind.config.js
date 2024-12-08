/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      color:{
        'bgColor': '#1C1C21',
        secondary: '#FFFFFF26',
        textColor: '#797C86',
        brand: '#E6AA32',
      }
    },
  },
  plugins: [],
}

