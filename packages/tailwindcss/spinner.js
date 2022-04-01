const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        [`.${theme("jumpu.prefix")}spinner`]: {
          "text-align": "center",
          width: theme("width.12"),
          height: theme("height.12"),
          svg: {
            height: "100%",
            width: "100%",
            animation: "loading-rotate 2s linear infinite",
            stroke: "currentColor",
          },
          circle: {
            animation: "loading-dash 1.5s ease-in-out infinite",
            "stroke-dasharray": "90,150",
            "stroke-dashoffset": 0,
            "stroke-width": 2,
            "stroke-linecap": "round",
            fill: "none",
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
      });
    };
  },
  () => ({ theme })
);
