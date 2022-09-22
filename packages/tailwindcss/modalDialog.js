const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const tagStyle = require("./lib/tagStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { close } = tagStyle(theme);
      addComponents({
        [`.${theme("jumpu.prefix")}modal-dialog`]: {
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.xl"),
          overflow: "hidden",
          "border-width": "1px",
          "border-color": theme("colors.gray.300"),
          top: 0,
          bottom: 0,
          "&::backdrop": {
            backgroundColor: theme("colors.gray.300"),
          },
          "[role='button']": {
            ...close(),
            position: "absolute",
            right: theme("spacing.2"),
            top: theme("spacing.2"),
            width: theme("spacing.8"),
            height: theme("spacing.8"),
          },
        },
      });
    };
  },
  () => ({ theme })
);
