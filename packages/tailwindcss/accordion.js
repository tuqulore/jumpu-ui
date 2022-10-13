const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const svgToDataUri = require("mini-svg-data-uri");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        [`.${theme("jumpu.prefix")}accordion`]: {
          details: {
            summary: {
              width: "100%",
              padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
              paddingLeft: theme("spacing.6"),
              "list-style": "none",
              position: "relative",
              cursor: "pointer",
              "&::marker": {
                display: "none",
              },
              "&::before": {
                content: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path></svg>`
                )}")`,
                width: `${theme("width.3")}`,
                display: "block",
                position: "absolute",
                left: 0,
                transform: "rotate(-90deg)",
              },
            },
            "&[open]": {
              summary: {
                "&::before": {
                  transform: "rotate(0deg)",
                },
              },
            },
          },
        },
      });
    };
  },
  () => ({ theme })
);
