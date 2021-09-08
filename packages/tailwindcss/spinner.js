const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".spinner": {
            "text-align": "center",
            position: "absolute",
            ".circular": {
              height: "42px",
              width: "42px",
              animation: "loading-rotate 2s linear infinite",
            },
            ".path": {
              animation: "loading-dash 1.5s ease-in-out infinite",
              "stroke-dasharray": "90,150",
              "stroke-dashoffset": 0,
              "stroke-width": 2,
              stroke: theme("colors.primary.500"),
              "stroke-linecap": "round",
            },
          },
          "@keyframes loading-rotate": {
            "100%": {
              transform: "rotate(1turn)",
            },
          },
          "@keyframes loading-dash": {
            "0%": {
              "stroke-dasharray": "1,200",
              "stroke-dashoffset": 0,
            },
            "50%": {
              "stroke-dasharray": "90,150",
              "stroke-dashoffset": "-40px",
            },
            "100%": {
              "stroke-dasharray": "90,150",
              "stroke-dashoffset": "-120px",
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
