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
          "[role=tablist]": {
            display: "flex",
            "align-items": "center",
            "flex-shrink": 0,
            "flex-grow": 1,
            gap: theme("spacing.2"),
            borderBottomWidth: theme("borderWidth.DEFAULT"),
          },
          "[role=tab]": {
            borderBottomWidth: theme("borderWidth.DEFAULT"),
            "margin-bottom": "-1px",
            padding: `${theme("spacing[rel2.5]")} ${theme("spacing[rel3.5]")}`,
            "&:hover": {
              borderBottomWidth: theme("borderWidth.DEFAULT"),
              borderColor: theme("colors.gray.400"),
            },
            "&[aria-selected=true]": {
              "border-bottom": `1px solid ${theme("colors.primary.700")}`,
              color: `${theme("colors.primary.700")}`,
              cursor: "pointer",
              "&:hover": {
                "border-bottom": `1px solid ${theme("colors.primary.800")}`,
              },
            },
            "&:active": {
              backgroundColor: `${theme("colors.gray.50")}`,
            },
          },
        },
      });
    };
  },
  () => ({ theme }),
);
