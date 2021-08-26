const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
    // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
    () => {
        return ({ addComponents, theme }) => {
            addComponents([
                {
                    ".card": {
                        backgroundColor: theme("colors.white"),
                        borderRadius: theme("borderRadius.md"),
                        "border-color": theme("colors.gray.300"),
                        "border-width": "1px",
                        overflow: "hidden",

                        "&.card-shadow": {
                            "border-color": theme("colors.gray.100"),
                            "box-shadow": `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                        },
                    },
                },
            ]);
        };
    },
    () => ({ theme })
);
