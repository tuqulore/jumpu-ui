const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".chat": {
            ".message-content": {
              display: "inline-block",
              padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
              backgroundColor: `${theme("colors.gray.100")}`,
              borderRadius: `${theme("borderRadius.2xl")}`,
              maxWidth: "80%",
            },
            "&.align-right": {
              display: "flex",
              justifyContent: "flex-end",
            },
            ".message-image": {
              display: "inline-block",
              borderRadius: `${theme("borderRadius.2xl")}`,
              border: `${theme("spacing.4")} solid ${theme("colors.gray.100")}`,
              maxWidth: "80%",
            },
            ".message-share": {
              maxWidth: "80%",
              img: {
                border: `1px solid ${theme("colors.gray.100")}`,
                borderRadius: `${theme("borderRadius.md")}`,
                marginBottom: theme("spacing.1"),
              },
              "&__title": {
                fontWeight: "bold",
                a: {
                  padding: `${theme("spacing.2")} 0`,
                  display: "inline-block",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                },
              },
              "&__description": {
                fontSize: theme("fontSize.xs"),
                color: theme("colors.gray.600"),
                marginBottom: theme("spacing.1"),
              },
              "&__url": {
                fontSize: theme("fontSize.xs"),
                color: theme("colors.gray.400"),
              },
            },
          },
          ".chat-date": {
            fontSize: theme("fontSize.xs"),
            color: theme("colors.gray.600"),
            textAlign: "center",
            padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
