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
            backgroundColor: theme("colors.gray.50"),
            borderRadius: theme("borderRadius.full"),
            outline: "none",
            width: theme("width.8"),
            height: theme("height.8"),
            position: "relative",
            ".icon-button-inner": {
              width: "100%",
              height: "100%",
              borderRadius: theme("borderRadius.full"),
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            },
            "&:focus": {
              outline: "none",
            },
            "&:active": {
              backgroundColor: theme("colors.gray.200"),
            },
            "&:hover": {
              backgroundColor: theme("colors.gray.100"),
              color: theme("colors.gray.800"),
              "&::after": {
                content: "attr(data-label)",
                display: "inline-flex",
                left: "50%",
                top: 0,
                padding: `${theme("spacing.1")} ${theme("spacing.2")}`,
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
          },
        },
      ]);
    };
  },
  () => ({ theme })
);

/* @mixin icon-button {
  @apply inline-flex justify-center items-center  text-base text-gray-800 bg-gray-100 rounded-full outline-none w-8 h-8 transition bg-opacity-50 relative dark:bg-gray-800 dark:text-white;

  .icon-button-inner {
    @apply w-full h-full rounded-full inline-flex justify-center items-center;
  }

  &:focus {
    @apply outline-none;
  }

  &:hover {
    @apply bg-gray-50 dark:bg-gray-700;

    &::after {
      content: attr(data-label);

      @apply inline-flex left-1/2 -top-10 px-4 py-1 absolute transform -translate-x-1/2 bg-gray-100 rounded text-sm whitespace-nowrap dark:bg-gray-800 dark:text-white bg-opacity-50;
    }
  }

  &:active {
    @apply bg-gray-200 dark:bg-gray-800;
  }
} */
