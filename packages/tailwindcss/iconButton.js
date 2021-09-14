const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".icon-button": {
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme("colors.gray.600"),
            borderRadius: theme("borderRadius.md"),
            outline: "none",
            width: theme("width.8"),
            height: theme("height.8"),
            position: "relative",
            "&:focus": {
              outline: "none",
            },
            "&:hover": {
              backgroundColor: theme("colors.gray.50"),
              color: theme("colors.gray.800"),
              "&::after": {
                content: "attr(data-label)",
                display: "inline-flex",
                left: "50%",
                top: 0,
                position: "absolute",
                transition: "0.2s",
                transform: "translateX(-50%) translateY(-110%)",
                backgroundColor: theme("colors.white"),
                borderRadius: theme("borderRadius.md"),
                fontSize: theme("fontSize.xs"),
                whiteSpace: "nowrap",
                color: theme("colors.gray.500"),
                lineHeight: 1.2,
              },
            },
            "&:active": {
              backgroundColor: theme("colors.gray.200"),
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
