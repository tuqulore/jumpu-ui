const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const iconButtonStyle = require("./lib/iconButtonStyle");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      const { base, heart, liked } = iconButtonStyle(theme);
      addComponents({
        [`.${theme("jumpu.prefix")}like-button`]: {
          ...base,
          "&::before": {
            ...heart("transparent", theme("colors.primary.700")),
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
      });
    };
  },
  () => ({ theme })
);
