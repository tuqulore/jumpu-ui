const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const buttonStyle = require("./lib/buttonStyle");


module.exports = plugin.withOptions(
  // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
  () => {
    return ({ addComponents, theme }) => {
      const { base, disabled } = buttonStyle(theme);
      addComponents([
        {
          ".button": {
            ...base,
            backgroundColor: theme("colors.primary.500"),
            color: "#fff",
            borderColor: theme("colors.primary.500"),
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
            "&.button-outlined": {
              background: "transparent",
              color: `${theme("colors.primary.500")} !important`,
              "&:hover": {
                background: theme("colors.primary.100"),
                filter: "brightness(120%)",
              },
              "&:active": {
                filter: "brightness(110%)",
              },
            },
            "&.button-text": {
              background: "transparent",
              borderColor: "transparent",
              color: theme("colors.primary.500"),
              "&:hover": {
                background: theme("colors.primary.100"),
                filter: "brightness(120%)",
              },
              "&:active": {
                filter: "brightness(110%)",
              },
            },
            "&[disabled]": disabled,
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
