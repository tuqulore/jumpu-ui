const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        [`.${theme("jumpu.prefix")}card`]: {
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.md"),
          overflow: "hidden",
          "border-width": "1px",
        },
      });
    };
  },
  () => ({ theme }),
);
