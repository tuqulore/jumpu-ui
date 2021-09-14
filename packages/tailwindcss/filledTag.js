const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const tagStyle = require("./lib/tagStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, close } = tagStyle(theme, {
        close: { fill: theme("colors.white") },
      });
      addComponents([
        {
          ".filled-tag": {
            ...base,
            border: "none",
            backgroundColor: theme("colors.primary.500"),
            color: theme("colors.white"),
            button: close,
          },
        },
      ]);
    };
  },
  () => ({ theme })
);