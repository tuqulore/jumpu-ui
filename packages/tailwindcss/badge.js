const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".badge": {
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            padding: `${theme("spacing.1")} ${theme("spacing.3")}`,
            fontSize: `${theme("fontSize.sm")}`,
            borderRadius: `${theme("borderRadius.full")}`,
            textDecoration: "none",
            fontWeight: "bold",
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
