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
          ".outlined-button": {
            ...base,
            background: "transparent",
            color: theme("colors.primary.500"),
            borderColor: theme("colors.primary.500"),
            "&:hover": {
              background: theme("colors.primary.100"),
              filter: "brightness(120%)",
              boxShadow: `var(--tw- ring - inset) 0 0 0 calc(3px + var(--tw - ring - offset - width)) var(--tw - ring - color); `,
            },
            "&:active": {
              filter: "brightness(110%)",
            },
            "&:focus": {
              outline: "none",
            },
            "&[disabled]": {
              ...disabled,
              color: theme("colors.white"),
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);