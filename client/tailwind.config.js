/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        blueTheme: '#3389FF',
        },
      
      fontFamily: {
        'logo': 'Roboto'
      }
    },
  },
  plugins: [],
}