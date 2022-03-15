const typography = require("@tailwindcss/typography");

module.exports = {
  content: ["stories/**/*.mdx"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["10px", "1.6em"],
      },
    },
  },
  plugins: [typography, ...require("./")],
};
