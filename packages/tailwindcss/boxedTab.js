const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        [`.${theme("jumpu.prefix")}boxed-tabs`]: {
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
            borderBottomWidth: theme("borderWidth.DEFAULT"),
          },
          "[role=tab]": {
            display: "block",
            marginRight: `${theme("spacing.2")}`,
            textDecoration: "none",
            "justify-content": "space-between",
            "align-items": "center",
            "margin-bottom": "-1px",
            "vertical-align": "top",
            borderWidth: theme("borderWidth.DEFAULT"),
            borderColor: "transparent",
            "border-radius": `${theme("borderRadius.md")} ${theme(
              "borderRadius.md",
            )} 0 0`,
            padding: `${theme("spacing[rel1.5]")} ${theme("spacing.rel5")}`,
            "&[aria-selected=true]": {
              borderColor: theme("borderColor.DEFAULT"),
              "background-color": `${theme("colors.white")}`,
              "border-bottom-color": "transparent",
              position: "relative",
              paddingTop: theme("spacing.rel2"),
              paddingBottom: theme("spacing[rel1.5]"),
            },
          },
        },
      });
    };
  },
  () => ({ theme }),
);
