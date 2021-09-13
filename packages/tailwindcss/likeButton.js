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
              ...heart("transparent", theme("colors.primary.500")),
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
          ".labeled-like-button": {
            ...base,
            width: "auto",
            whiteSpace: "nowrap",
            fontSize: theme("fontSize.sm"),
            fontWeight: "bold",
            padding: `0 ${theme("spacing.2")}`,
            lineHeight: 1,
            "&::before": {
              ...heart("transparent", theme("colors.primary.500")),
              width: "20px",
              position: "relative",
              marginRight: theme("spacing.1"),
            },
            "&[aria-pressed=true]": {
              ...liked,
              "&::before": {
                ...heart("transparent", theme("colors.white")),
              },
              /* color: theme("colors.white"),
              backgroundColor: theme("colors.primary.500"), */
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
