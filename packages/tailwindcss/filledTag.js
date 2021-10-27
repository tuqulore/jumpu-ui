const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const tagStyle = require("./lib/tagStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, close } = tagStyle(theme);
      addComponents([
        {
          ".filled-tag": {
            ...base,
            border: "none",
            backgroundColor: theme("colors.primary.700"),
            color: theme("colors.white"),
            button: close({ fill: theme("colors.white") }),
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
