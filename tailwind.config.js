/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F4F4F',  //deep olive green
        secondary: '#E1E2DB',  // lite greenish gray
        accent: '#FFC857',   // ripe yellow
        neutral: '#3D5A80',   // dark blue
        background: '#293241',  // dark slate
      },
    },
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [daisyui],
}

