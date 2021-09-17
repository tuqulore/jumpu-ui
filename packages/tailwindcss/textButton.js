const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const buttonStyle = require("./lib/buttonStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, disabled } = buttonStyle(theme);
      addComponents([
        {
          ".text-button": {
            ...base,
            background: "transparent",
            borderColor: "transparent",
            color: theme("colors.primary.500"),
            "&:hover": {
              background: theme("colors.primary.50"),
            },
            "&:active": {
              filter: "brightness(90%)",
            },
            "&[disabled]": disabled,
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
