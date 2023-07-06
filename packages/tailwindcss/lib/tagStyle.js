const svgToDataUri = require("mini-svg-data-uri");

module.exports = (theme) => {
  return {
    base: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      padding: `${theme("spacing.1")} ${theme("spacing.3")}`,
      fontSize: theme("fontSize.xs"),
      borderRadius: theme("borderRadius.md"),
      border: `1px solid ${theme("colors.gray.100")}`,
      background: theme("colors.gray.50"),
      textDecoration: "none",
      lineHeight: 1.3,
    },
    close: ({ fill = theme("colors.gray.900") } = {}) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: theme("spacing.2"),
      "background-image": `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="${fill}" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path>
        </svg>`,
      )}")`,
      "background-position": `center`,
      "background-repeat": `no-repeat`,
      "background-size": `${theme("spacing.rel4")} ${theme("spacing.rel4")}`,
      width: theme("spacing.2"),
      height: theme("spacing.2"),
    }),
  };
};
