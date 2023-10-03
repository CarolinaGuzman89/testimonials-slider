/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/main.jsx",
    "./src/App.jsx",
    "./src/components/Slide.jsx",
    "./src/components/Ejemplo.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/pattern-bg.svg')",
        'image-bg': "url('/src/assets/images/pattern-curve.svg')",
      }
    },
  },
  plugins: [],
}

