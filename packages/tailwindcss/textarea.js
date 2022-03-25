const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const inputStyle = require("./lib/inputStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base } = inputStyle(theme);
      addComponents([
        {
          [`.${theme("jumpu.prefix")}textarea`]: base,
        },
      ]);
    };
  },
  () => ({ theme })
);
