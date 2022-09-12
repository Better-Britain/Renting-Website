/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          'uk': "hsl(222, 98%, 21%)",
        },
        'white': {
          'uk': '#fff',
        },
      },
    },
  },
  plugins: [],
}
