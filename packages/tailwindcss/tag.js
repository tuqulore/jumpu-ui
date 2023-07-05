const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const tagStyle = require("./lib/tagStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, close } = tagStyle(theme);
      addComponents({
        [`.${theme("jumpu.prefix")}tag`]: {
          ...base,
          "&:is(button, a, [role='button']):hover": {
            borderColor: theme("borderColor.DEFAULT"),
          },
          "[role='button']": close(),
        },
      });
    };
  },
  () => ({ theme }),
);
