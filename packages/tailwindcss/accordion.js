const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".accordion": {
            ".accordion-header": {
              width: "100%",
              padding: `${theme("spacing.3")} ${theme("spacing.4")}`,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              border: `1px solid ${theme("colors.gray.300")}`,
              cursor: "pointer",
              outline: "none",
              "&:hover": {
                backgroundColor: `${theme("colors.gray.50")}`,
              },
              "&:active": {
                backgroundColor: `${theme("colors.gray.100")}`,
              },
              ".ballet ": {
                transition: "0.5s",
                marginRight: `${theme("spacing.4")}`,
                fill: `${theme("colors.gray.900")}`,
                width: `${theme("width.4")}`,
                height: `${theme("height.4")}`,
              },
            },
            ".accordion-body": {
              transition: "0.2s",
              overflow: "hidden",
            },
            "&.accordion-collapsed": {
              ".accordion-header": {
                ".ballet": {
                  transform: "rotate(180deg)",
                },
              },
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
