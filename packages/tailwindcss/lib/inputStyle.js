module.exports = (theme) => ({
  base: {
    appearance: "none",
    borderRadius: theme("borderRadius.md"),
    borderWidth: theme("borderWidth.DEFAULT"),
    color: theme("colors.gray.900"),
    borderColor: theme("colors.gray.300"),
    padding: `${theme("spacing.rel2")} ${theme("spacing.rel3")}`,
    "&::placeholder": {
      color: theme("colors.gray.300"),
    },
    "&:focus": {
      borderColor: theme("colors.primary.700"),
    },
  },
});
