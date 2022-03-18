const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const svgToDataUri = require("mini-svg-data-uri");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          [`.${theme("jumpu.prefix")}accordion`]: {
            "& > [aria-expanded]": {
              width: "100%",
              padding: `${theme("spacing.3")} ${theme("spacing.4")}`,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              border: `1px solid ${theme("colors.gray.300")}`,
              cursor: "pointer",
              "&::before": {
                content: "''",
                display: "block",
                transition: "0.5s",
                width: `${theme("width.4")}`,
                height: `${theme("height.4")}`,
                marginRight: theme("spacing.2"),
                "background-image": `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path></svg>`
                )}")`,
                "background-position": `center`,
                "background-repeat": `no-repeat`,
                "background-size": `${theme("spacing.4")}`,
              },
              "&:hover": {
                backgroundColor: `${theme("colors.gray.50")}`,
              },
              "&:active": {
                backgroundColor: `${theme("colors.gray.100")}`,
              },
              "&[aria-expanded='false']": {
                "&::before": {
                  transform: "rotate(180deg)",
                },
              },
            },
            "& > [aria-hidden]": {
              transition: "0.2s",
              overflow: "hidden",
              "&[aria-hidden='true']": {
                display: "none",
              },
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
