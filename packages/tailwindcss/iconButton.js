const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        [`.${theme("jumpu.prefix")}icon-button`]: {
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme("colors.gray.600"),
          borderRadius: theme("borderRadius.md"),
          width: theme("width.8"),
          height: theme("height.8"),
          position: "relative",
          "[role='tooltip']": {
            transform: "translateX(-50%) translateY(-110%) scale(0)",
            display: "inline-flex",
            left: "50%",
            top: 0,
            position: "absolute",
            transition: "0.1s",
            opacity: 0,
            backgroundColor: theme("colors.gray.500"),
            padding: `${theme("spacing.1")} ${theme("spacing.2")}`,
            borderRadius: theme("borderRadius.DEFAULT"),
            fontSize: theme("fontSize.xs"),
            whiteSpace: "nowrap",
            color: theme("colors.white"),
            lineHeight: theme("lineHeight.tight"),
          },
          "&:hover": {
            backgroundColor: theme("colors.gray.50"),
            color: theme("colors.gray.800"),
            "[role='tooltip']": {
              transform: "translateX(-50%) translateY(-110%) scale(1)",
              opacity: 1,
            },
          },
          "&:active": {
            backgroundColor: theme("colors.gray.200"),
          },
        },
      });
    };
  },
  () => ({ theme })
);
