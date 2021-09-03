const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".switch": {
            position: "relative",
            width: theme("spacing.16"),
            height: theme("spacing.8"),
            input: {
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
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
              transition: "0.2s",
              "box-sizing": "border-box",
              span: {
                content: "",
                position: "absolute",
                width: theme("spacing.8"),
                height: theme("height.full"),
                "border-radius": "100%",
                left: 0,
                top: 0,
                "z-index": 2,
                background: theme("colors.white"),
                "box-shadow": "0 0 5px rgba(0, 0, 0, 0.2)",
                transition: "0.2s",
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
