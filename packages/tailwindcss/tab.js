const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".tabs": {
            "-webkit-overflow-scrolling": "touch",
            whitespace: "nowrap",
            overflow: "hidden",
            overflowX: "auto",
            display: "flex",
            "justify-content": "flex-start",
            "align-items": "center",
            ul: {
              color: `${theme("colors.gray.600")}`,
              margin: 0,
              padding: 0,
              display: "flex",
              "justify-content": "flex-start",
              "align-items": "center",
              "flex-shrink": 0,
              "flex-grow": 1,
              "border-bottom": `1px solid ${theme("colors.gray.300")}`,
            },
            li: {
              display: "block",
              margin: 0,
              padding: 0,
              "&::before, &::after": {
                display: "none",
              },
              "&.is-active": {
                a: {
                  "border-bottom": `1px solid ${theme("colors.gray.500")}`,
                  color: `${theme("colors.primary.500")}`,
                },
              },
              a: {
                cursor: "pointer",
                color: `${theme("colors.primary.700")}`,
                textDecoration: "none",
                "border-bottom": `1px solid ${theme("colors.gray.300")}`,
                display: "flex",
                "justify-content": "space-between",
                "align-items": "center",
                "margin-bottom": "-1px",
                padding: `${theme("spacing.3")} ${theme("spacing.4")}`,
                "vertical-align": "top",
                "&:hover": {
                  "border-bottom": `1px solid ${theme("colors.gray.900")}`,
                  color: `${theme("colors.primary.800")}`,
                },
              },
            },
            "&-boxed": {
              a: {
                border: "1px solid transparent",
                "border-radius": `${theme("borderRadius.md")} ${theme(
                  "borderRadius.md"
                )} 0 0`,
                "&:hover": {
                  "background-color": `${theme("colors.white")}`,
                  border: `1px solid ${theme("colors.gray.300")}`,
                },
              },
              li: {
                "&.is-active": {
                  a: {
                    border: `1px solid ${theme("colors.gray.300")}`,
                    "background-color": `${theme("colors.white")}`,
                    "border-bottom-color": "transparent",
                  },
                },
              },
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
