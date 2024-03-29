const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        [`.${theme("jumpu.prefix")}balloon`]: {
          display: "inline-block",
          padding: `${theme("spacing.3")} ${theme("spacing.4")}`,
          backgroundColor: `${theme("colors.gray.100")}`,
          borderRadius: `${theme("borderRadius.2xl")}`,
          a: {
            textDecoration: "underline",
          },
        },
      });
    };
  },
  () => ({ theme }),
);
