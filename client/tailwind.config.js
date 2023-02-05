/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        pageEnd: "16px",
      },
      animation: {
        bringCards: "bringCardsKeyframes 5s ease-in-out",
        showImage: "showImageKeyframes 1s ease-in-out",
      },
      keyframes: {
        bringCardsKeyframes: {
          "0%": { position: "absolute", left: "-1000px" },
          "50%": { position: "static", left: "0" },
        },
        showImageKeyframes: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        primary: "#006BFF",
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
