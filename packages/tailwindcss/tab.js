const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        [`.${theme("jumpu.prefix")}tabs`]: {
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
            display: "flex",
            "justify-content": "space-between",
            "align-items": "center",
            padding: `${theme("spacing[rel2.5]")} ${theme("spacing[rel3.5]")}`,
            "vertical-align": "top",
            "border-bottom": `1px solid rgba(0,0,0,0)`,
            "&[aria-selected=true]": {
              "border-bottom": `1px solid ${theme("colors.primary.700")}`,
              color: `${theme("colors.primary.700")}`,
              cursor: "default",
              "pointer-events": "none",
            },
            "&:not(&[aria-selected=true])": {
              cursor: "pointer",
              position: "relative",
              "&:hover": {
                "border-bottom": `1px solid ${theme("colors.gray.400")}`,
              },
              "&:active": {
                backgroundColor: `${theme("colors.gray.50")}`,
              },
            },
          },
        },
      });
    };
  },
  () => ({ theme })
);
