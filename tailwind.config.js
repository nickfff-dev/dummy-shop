/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,css}', './components/**/*.{js,ts,jsx,tsx,css}', './images/*{png,jpg,jpeg,svg}'],
  theme: {
    extend: {
      colors: {
        "dummygreen": "#0aad0a",
        "black": "#343538"
      },
      backgroundImage: {
        "baridi": "url('/images/banner.svg')"
      }
    },
  },
  plugins: [],
}
