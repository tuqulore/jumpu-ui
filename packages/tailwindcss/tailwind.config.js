const colors = require("tailwindcss/colors");
const jumpuColors = require("./colors");
const typography = require("@tailwindcss/typography");

module.exports = {
  content: ["stories/**/*.mdx"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["10px", "1.6em"],
      },
      colors: {
        white: colors.white,
        black: colors.black,
        ...jumpuColors,
      },
    },
  },
  plugins: [typography, ...require("./")],
};
