const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".toggle-switch": {
            position: "relative",

            input: {
              position: "absolute",
              left: 0,
              top: 0,
              width: theme("width.full"),
              height: theme("height.full"),
              "z-index": 5,
              opacity: 0,
              cursor: "pointer",
            },

            label: {
              width: theme("width.full"),
              height: theme("height.full"),
              background: theme("colors.gray.300"),
              position: "relative",
              display: "inline-block",
              "border-radius": theme("borderRadius.full"),
              transition: "0.1s",
              "box-sizing": "border-box",

              span: {
                position: "absolute",
                "border-radius": theme("borderRadius.full"),
                left: 0,
                top: 0,
                "z-index": 2,
                background: theme("colors.white"),
                "box-shadow": "0 0 5px rgba(0, 0, 0, 0.2)",
                transition: "0.1s",
              },
            },

            "input:checked": {
              "+label": {
                "background-color": theme("colors.primary.500"),
                span: {
                  transform: "translateX(100%)",
                },
              },
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
