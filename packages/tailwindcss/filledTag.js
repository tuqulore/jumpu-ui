const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const tagStyle = require("./lib/tagStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, close } = tagStyle(theme);
      addComponents({
        [`.${theme("jumpu.prefix")}filled-tag`]: {
          ...base,
          border: "none",
          backgroundColor: theme("colors.primary.700"),
          color: theme("colors.white"),
          "&:is(button, a, [role='button']):hover": {
            filter: "brightness(90%)",
          },
          button: close({ fill: theme("colors.white") }),
        },
      });
    };
  },
  () => ({ theme })
);
