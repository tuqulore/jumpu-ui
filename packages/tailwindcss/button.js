const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const buttonStyle = require("./lib/buttonStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, disabled } = buttonStyle(theme);
      addComponents([
        {
          ".button": {
            ...base,
            backgroundColor: theme("colors.primary.700"),
            color: "#fff",
            transition: "30ms filter cubic-bezier(0, 0, 0.12, 1)",
            "&:hover": {
              filter: "brightness(90%)",
            },
            "&:active": {
              filter: "brightness(75%)",
            },
            "&[disabled]": disabled,
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
