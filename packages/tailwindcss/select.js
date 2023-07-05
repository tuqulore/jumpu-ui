const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const inputStyle = require("./lib/inputStyle");
const svgToDataUri = require("mini-svg-data-uri");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base } = inputStyle(theme);
      addComponents({
        [`.${theme("jumpu.prefix")}select`]: {
          ...base,
          "background-image": `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${theme(
              "colors.gray.500",
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`,
          )}")`,
          "background-position": `right ${theme("spacing.2")} center`,
          "background-repeat": `no-repeat`,
          "background-size": theme("spacing.rel6"),
          "padding-right": theme("spacing.10"),
          printColorAdjust: `exact`,
          "&[multiple]": {
            "background-image": "initial",
            "background-position": "initial",
            "background-repeat": "unset",
            "background-size": "initial",
            "padding-right": theme("spacing.3"),
            printColorAdjust: "unset",
          },
        },
      });
    };
  },
  () => ({ theme }),
);
