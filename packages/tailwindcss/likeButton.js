const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const iconButtonStyle = require("./lib/iconButtonStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, heart, liked } = iconButtonStyle(theme);
      addComponents([
        {
          ".like-button": {
            ...base,
            "&::before": {
              ...heart("transparent", theme("colors.gray.400")),
              width: "100%",
              position: "absolute",
            },
            "&[aria-pressed=true]": {
              ...liked,
              "&::before": {
                ...heart("transparent", theme("colors.white")),
              },
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
