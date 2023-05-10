module.exports = (theme) => ({
  base: {
    appearance: "none",
    borderRadius: theme("borderRadius.md"),
    display: "inline-block",
    padding: `${theme("spacing[rel2.5]")} ${theme("spacing.rel5")}`,
    textDecoration: "none !important",
  },
  disabled: {
    color: theme("colors.white"),
    backgroundColor: theme("colors.gray.300"),
    "border-color": theme("borderColor.DEFAULT"),
    cursor: "default",
    "&:hover, &:active": {
      filter: "none",
      boxShadow: "none",
    },
  },
});
