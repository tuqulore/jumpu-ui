module.exports = (theme) => ({
    base: {
        appearance: "none",
        borderRadius: theme("borderRadius.md"),
        borderWidth: theme("borderWidth.DEFAULT"),
        display: "inline-block",
        fontWeight: 700,
        padding: ".8em 3.2em",
        textDecoration: "none !important",
    },
    disabled: {
        backgroundColor: theme("colors.gray.300"),
        "border-color": theme("colors.gray.300"),
        "--tw-ring-color": theme("colors.gray.200"),
        cursor: "default",
        "&:hover": {
            filter: "none",
            boxShadow: "none",
        },
    }
})