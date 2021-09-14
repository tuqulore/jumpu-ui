const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const tagStyle = require("./lib/tagStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, close } = tagStyle(theme);
      addComponents([
        {
          ".tag": {
            ...base,
            button: close(),
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
