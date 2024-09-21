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
        primary: '#2F4F4F',
        secondary: '#E1E2DB',
        accent: '#FFC857',
        neutral: '#3D5A80',
        background: '#293241',
      },
    },
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [daisyui],
}

