const colors = require("tailwindcss/colors");
const relScale = require("./lib/relScale");

module.exports = {
  tuqulore: {
    input: {
      radius: "8px",
    },
  },
  extend: {
    spacing: relScale,
    colors: {
      primary: {
        ...colors.blue,
      },
      tq: {
        50: "#FFE6EB",
        100: "#FFCCD5",
        200: "#FF99AB",
        300: "#FF6682",
        400: "#FF3358",
        500: "#FF002E",
        600: "#BF0023",
        700: "#800017",
        800: "#40000C",
        900: "#1A0005",
      },
      white: colors.white,
      black: colors.black,
      success: "#00A93E",
      emphasis: "#FF002E",
      warning: "#FACC15",
      danger: "#B80000",
    },
  },
};
