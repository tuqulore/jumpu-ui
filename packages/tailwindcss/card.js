const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const cardStyle = require("./lib/cardStyle");

module.exports = plugin.withOptions(
    // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
    () => {
        return ({ addComponents, theme }) => {
            const { base } = cardStyle(theme);
            addComponents([
                {
                    ".card": {
                        ...base,
                        "border-color": theme("colors.gray.200"),
                    },

                    ".shadowed-card": {
                        ...base,
                        "border-color": theme("colors.gray.100"),
                        "box-shadow": `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                    },
                },
            ]);
        };
    },
    () => ({ theme })
);
