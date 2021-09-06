const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const svgToDataUri = require("mini-svg-data-uri");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          select: {
            "background-image": `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${theme(
                "colors.gray.500"
              )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
            )}")`,
            "background-position": `right ${theme("spacing.2")} center`,
            "background-repeat": `no-repeat`,
            "background-size": `1.5em 1.5em`,
            "padding-right": theme("spacing.10"),
            "color-adjust": `exact`,
          },
          "[multiple]": {
            "background-image": "initial",
            "background-position": "initial",
            "background-repeat": "unset",
            "background-size": "initial",
            "padding-right": theme("spacing.3"),
            "color-adjust": "unset",
          },
        },
      ]);
    };
  },
  () => ({ theme })
);