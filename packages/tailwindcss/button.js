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
            backgroundColor: theme("colors.primary.500"),
            color: "#fff",
            "&:hover": {
              filter: "brightness(95%)",
              boxShadow: `var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);`,
            },
            "&:active": {
              filter: "brightness(80%)",
            },
            "&:focus": {
              outline: "none",
            },
            "&[disabled]": disabled,
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
