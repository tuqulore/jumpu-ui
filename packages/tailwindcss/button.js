const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".button": {
            appearance: "none",
            backgroundColor: theme("colors.primary.500"),
            borderRadius: theme("borderRadius.md"),
            color: "#fff",
            borderWidth: theme("borderWidth.DEFAULT"),
            borderColor: theme("colors.primary.500"),
            display: "inline-block",
            fontWeight: 700,
            padding: ".8em 3.2em",
            textDecoration: "none !important",
            "&:hover": {
              filter: "brightness(95%)",
              boxShadow: `var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);`,
            },
            "&:active": {
              /* outline: outline.none[0],
              "outline-offset": outline.none[1], */
              filter: "brightness(80%)",
            },
            "&:focus": {
              outline: "none",
            },
            "&.button-outlined": {
              background: "transparent",
              color: `${theme("colors.primary.500")} !important`,
              "&:hover": {
                background: theme("colors.primary.100"),
                filter: "brightness(120%)",
              },
              "&:active": {
                filter: "brightness(110%)",
              },
            },
            "&.button-text": {
              background: "transparent",
              borderColor: "transparent",
              color: theme("colors.primary.500"),
              "&:hover": {
                background: theme("colors.primary.100"),
                filter: "brightness(120%)",
              },
              "&:active": {
                filter: "brightness(110%)",
              },
            },
            "&.button-success": {
              "background-color": theme("colors.success"),
              "border-color": theme("colors.success"),
              "--tw-ring-color": theme("colors.green.200"),
            },
            "&.button-danger": {
              "background-color": theme("colors.danger"),
              "border-color": theme("colors.danger"),
              "--tw-ring-color": theme("colors.red.200"),
            },
            "&.button-emphasis": {
              "background-color": theme("colors.emphasis"),
              "border-color": theme("colors.emphasis"),
              "--tw-ring-color": theme("colors.red.100"),
            },
            "&.button-warning": {
              "background-color": theme("colors.warning"),
              "border-color": theme("colors.warning"),
              color: theme("colors.gray.600"),
              "--tw-ring-color": theme("colors.yellow.100"),
            },
            "&.button-light": {
              "background-color": theme("colors.gray.50"),
              "border-color": theme("colors.gray.50"),
              color: theme("colors.gray.900"),
              "--tw-ring-color": theme("colors.gray.200"),
            },
            "&.button-dark": {
              "background-color": theme("colors.gray.900"),
              "border-color": theme("colors.gray.900"),
              "--tw-ring-color": theme("colors.gray.200"),
            },

            "&[disabled]": {
              backgroundColor: theme("colors.gray.300"),
              "border-color": theme("colors.gray.300"),
              "--tw-ring-color": theme("colors.gray.200"),
              cursor: "default",
              "&:hover": {
                filter: "none",
                boxShadow: "none",
              },
            },
            "&.is-rounded": {
              borderRadius: theme("borderRadius.full"),
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
