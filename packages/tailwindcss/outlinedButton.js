const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const buttonStyle = require("./lib/buttonStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, disabled } = buttonStyle(theme);
      addComponents({
        [`.${theme("jumpu.prefix")}outlined-button`]: {
          ...base,
          background: "transparent",
          color: theme("colors.primary.700"),
          borderColor: theme("colors.primary.700"),
          borderWidth: theme("borderWidth.DEFAULT"),
          "&:hover": {
            background: theme("colors.primary.100"),
            filter: "brightness(120%)",
            boxShadow: `var(--tw- ring - inset) 0 0 0 calc(3px + var(--tw - ring - offset - width)) var(--tw - ring - color); `,
          },
          "&:active": {
            filter: "brightness(110%)",
          },
          "&[disabled]": {
            ...disabled,
            color: theme("colors.white"),
          },
        },
      });
    };
  },
  () => ({ theme })
);
