module.exports = (theme) => ({
  base: {
    appearance: "none",
    borderRadius: theme("borderRadius.md"),
    display: "inline-block",
    padding: `${theme("padding['rel2.5']")} ${theme("padding.rel4")}`,
    textDecoration: "none !important",
  },
  disabled: {
    color: theme("colors.white"),
    backgroundColor: theme("colors.gray.300"),
    "border-color": theme("colors.gray.300"),
    cursor: "default",
    "&:hover, &:active": {
      filter: "none",
      boxShadow: "none",
    },
  },
});
