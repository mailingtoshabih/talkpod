/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Figtree', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('./src/assets/Untitled.png')",
      },

    },
  },
  plugins: [],
}

