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
              marginRight: `${theme("spacing.2")}`,
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
                color: `${theme("colors.primary.700")}`,
                textDecoration: "none",
                "border-bottom": `1px solid ${theme("colors.gray.300")}`,
                display: "flex",
                "justify-content": "space-between",
                "align-items": "center",
                "margin-bottom": "-1px",
                padding: `${theme("spacing.3")} ${theme("spacing.4")}`,
                "vertical-align": "top",
              },
            },
            "li:not(.is-active)": {
              a: {
                cursor: "pointer",
                "&:hover": {
                  "border-bottom": `1px solid ${theme("colors.gray.400")}`,
                  color: `${theme("colors.primary.800")}`,
                  backgroundColor: `${theme("colors.gray.50")}`,
                },
                "&:active": {
                  backgroundColor: `${theme("colors.gray.100")}`,
                },
              },
            },
            "&-boxed": {
              li: {
                a: {
                  border: "1px solid transparent",
                  "border-radius": `${theme("borderRadius.md")} ${theme(
                    "borderRadius.md"
                  )} 0 0`,
                },
                "&.is-active": {
                  a: {
                    border: `1px solid ${theme("colors.gray.300")}`,
                    "background-color": `${theme("colors.white")}`,
                    "border-bottom-color": "transparent",
                  },
                },
              },
            },
            "&-boxed li:not(.is-active)": {
              a: {
                "&:hover": {
                  "background-color": `${theme("colors.gray.50")}`,
                  border: `1px solid ${theme("colors.gray.300")}`,
                  borderBottom: `1px solid ${theme("colors.white")}`,
                },
                "&:active": {
                  backgroundColor: `${theme("colors.gray.100")}`,
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
