const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
  () => {
    return ({ addUtilities, theme }) => {
      addUtilities({
        ".status-success": {
          "background-color": theme("colors.success"),
          "border-color": theme("colors.success"),
          "--tw-ring-color": theme("colors.green.200"),
        },
        ".status-danger": {
          "background-color": theme("colors.danger"),
          "border-color": theme("colors.danger"),
          "--tw-ring-color": theme("colors.red.200"),
        },
        ".status-emphasis": {
          "background-color": theme("colors.emphasis"),
          "border-color": theme("colors.emphasis"),
          "--tw-ring-color": theme("colors.red.100"),
        },
        warning: {
          "background-color": theme("colors.warning"),
          "border-color": theme("colors.warning"),
          color: theme("colors.gray.600"),
          "--tw-ring-color": theme("colors.yellow.100"),
        },
      });
    };
  },
  () => ({ theme })
);
