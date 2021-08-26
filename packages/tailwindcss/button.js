const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".button": {
            backgroundColor: theme("colors.primary.500"),
            borderRadius: theme("borderRadius.md"),
            color: "#fff",
            display: "inline-block",
            fontWeight: 700,
            lineHeight: 1,
            padding: "15px 60px",
            "&:hover": {
              backgroundColor: theme("colors.primary.600"),
            },
            "&:active": {
              backgroundColor: theme("colors.primary.400"),
            },
            "&:disabled": {
              backgroundColor: theme("colors.gray.500"),
              cursor: "default",
            },
            "&.is-outlined": {
              backgroundColor: "#fff",
              border: `1px solid ${theme("colors.primary.500")}`,
              color: theme("colors.primary.500"),
              "&:hover": {
                backgroundColor: theme("colors.primary.100"),
              },
              "&:active": {
                backgroundColor: theme("colors.primary.50"),
              },
              "&:disabled": {
                color: "#fff",
                backgroundColor: theme("colors.gray.500"),
                borderColor: theme("colors.gray.500"),
              },
            },
            "&.is-text": {
              backgroundColor: "transparent",
              color: theme("colors.primary.500"),
              "&:hover": {
                backgroundColor: theme("colors.primary.50"),
              },
              "&:active": {
                backgroundColor: theme("colors.primary.50"),
              },
              "&:disabled": {
                color: theme("colors.gray.500"),
                backgroundColor: "transparent",
              },
            },
            "&.is-rounded": {
              borderRadius: "23px",
            },
            "&.is-stretched": {
              width: "100%",
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
