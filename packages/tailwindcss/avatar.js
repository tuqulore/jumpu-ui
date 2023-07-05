const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        [`.${theme("jumpu.prefix")}avatar`]: {
          overflow: "hidden",
          "border-radius": theme("borderRadius.full"),
          width: theme("width.16"),
          height: theme("height.16"),
          img: {
            width: theme("width.full"),
            height: theme("height.full"),
          },
          "a&": {
            display: "block",
          },
        },
      });
    };
  },
  () => ({ theme }),
);
