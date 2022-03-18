const colors = require("tailwindcss/colors");
const relScale = require("./lib/relScale");

module.exports = {
  jumpu: {
    prefix: `jumpu-`,
  },
  extend: {
    spacing: relScale,
    colors: {
      primary: colors.blue,
      white: colors.white,
      black: colors.black,
      success: "#00A93E",
      emphasis: "#FF002E",
      warning: "#FACC15",
      danger: "#B80000",
    },
  },
};
