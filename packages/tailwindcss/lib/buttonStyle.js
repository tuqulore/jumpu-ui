module.exports = (theme) => ({
  base: {
    appearance: "none",
    borderRadius: theme("borderRadius.md"),
    display: "inline-block",
    padding: ".6em 1.2em",
    textDecoration: "none !important",
  },
  disabled: {
    color: theme("colors.white"),
    backgroundColor: theme("colors.gray.300"),
    "border-color": theme("colors.gray.300"),
    "--tw-ring-color": theme("colors.gray.200"),
    cursor: "default",
    "&:hover, &:active": {
      filter: "none",
      boxShadow: "none",
    },
  },
});
