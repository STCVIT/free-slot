/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        myBlue: "#3389FF",
        myGrey: "#898989",
        myBg: "#FBFBFB",
      },

      fontFamily: {
        logo: ["Roboto"],
        head: ["Roboto"],
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
