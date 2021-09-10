const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".tabs": {
            "-webkit-overflow-scrolling": "touch",
            "white-space": "nowrap",
            overflow: "hidden",
            overflowX: "auto",
            display: "flex",
            "justify-content": "flex-start",
            "align-items": "center",
            "[role=tablist]": {
              margin: 0,
              padding: 0,
              display: "flex",
              "justify-content": "flex-start",
              "align-items": "center",
              "flex-shrink": 0,
              "flex-grow": 1,
              "border-bottom": `1px solid ${theme("colors.gray.300")}`,
            },
            "[role=tab]": {
              margin: 0,
              marginRight: `${theme("spacing.2")}`,
              textDecoration: "none",
              "border-bottom": `1px solid ${theme("colors.gray.300")}`,
              display: "flex",
              "justify-content": "space-between",
              "align-items": "center",
              "margin-bottom": "-1px",
              padding: "0.6em 0.8em",
              "vertical-align": "top",
              "&:hover": {
                "border-bottom": `1px solid ${theme("colors.gray.400")}`,
              },
              "&[aria-selected=true]": {
                "border-bottom": `1px solid ${theme("colors.primary.500")}`,
                color: `${theme("colors.primary.500")}`,
                cursor: "pointer",
                "&:hover": {
                  "border-bottom": `1px solid ${theme("colors.primary.600")}`,
                },
                "&:active": {
                  backgroundColor: `${theme("colors.gray.50")}`,
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
