/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        bringCards: "bringCardsKeyframes 5s ease-in-out",
      },
      keyframes: {
        bringCardsKeyframes: {
          "0%": { position: "absolute", left: "-1000px" },
          "50%": { position: "static", left: "0" },
        },
      },
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
