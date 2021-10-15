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
        50: "#E9F1F9",
        100: "#C7DAEF",
        200: "#91B6E1",
        300: "#5990D1",
        400: "#60A5FA",
        500: "#0950C3",
        600: "#2563EB",
        700: "#113661",
        800: "#081B30",
        900: "#030B13",
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
