/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        newgolden: "#B88E2F",
        newred: "#E97171",
        newcyan: "#2EC1AC",
        newwhite: {
          800: "#FFF3E3",
          700: "#FAF3EA",
          600: "#F9F1E7",
          500: "#FCF8F3",
          400: "#F4F5F7",
        },
        newgray: {
          800: "#242424",
          700: "#333333",
          600: "#3A3A3A",
          500: "#666666",
          400: "#616161",
          300: "#898989",
          200: "#B0B0B0",
          100: "#9F9F9F",
          50: "#D9D9D9",
          25: "#D8D8D8",
        },
      },

      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
      },

      backgroundImage: {
        loginImage: "url(../src/assets/login-bg.jpg)",
        pageTopSectionImage: "url(../src/assets/pageInfo-bg.png)",
        homeTopSectionImage: "url(../src/assets/home-image.png)",
      },
    },
  },
  plugins: [],
};
