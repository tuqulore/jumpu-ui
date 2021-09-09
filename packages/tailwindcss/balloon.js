const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".balloon ": {
            display: "inline-block",
            padding: `${theme("spacing.3")} ${theme("spacing.4")}`,
            backgroundColor: `${theme("colors.gray.100")}`,
            borderRadius: `${theme("borderRadius.2xl")}`,
            maxWidth: "80%",
            a: {
              textDecoration: "underline",
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
