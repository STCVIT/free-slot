/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        blueTheme: '#3389FF',
        greytheme: '#898989',
      },

      fontFamily: {
        'logo': 'Roboto'
      }
    },
  },
  plugins: [],
}