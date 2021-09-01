const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".card": {
            backgroundColor: theme("colors.white"),
            borderRadius: theme("borderRadius.md"),
            overflow: "hidden",
            "border-width": "1px",
            "border-color": theme("colors.gray.200"),
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
