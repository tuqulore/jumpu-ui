const svgToDataUri = require("mini-svg-data-uri");

module.exports = (theme) => {
  return {
    heart: (fill, stroke) => ({
      content: '""',
      left: 0,
      top: 0,
      display: "block",
      "background-image": `url("${svgToDataUri(
        `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0664 1.96094C16.918 0.164062 13.7539 0.4375 11.7617 2.50781L11.0195 3.28906L10.2383 2.50781C8.63672 0.867188 5.43359 -0.148438 2.93359 1.96094C0.472656 4.07031 0.355469 7.82031 2.54297 10.0859L10.1211 17.8984C10.3555 18.1328 10.668 18.25 10.9805 18.25C11.332 18.25 11.6445 18.1328 11.8789 17.8984L19.457 10.0859C21.6445 7.82031 21.5273 4.07031 19.0664 1.96094ZM18.5586 9.22656L11.0195 17.0391L3.44141 9.22656C1.95703 7.66406 1.64453 4.73438 3.75391 2.9375C5.90234 1.10156 8.40234 2.42969 9.33984 3.36719L11.0195 5.08594L12.6602 3.36719C13.5586 2.42969 16.0977 1.10156 18.2461 2.9375C20.3555 4.73438 20.043 7.66406 18.5586 9.22656Z" fill="${fill}" stroke="${stroke}" /></svg>`
      )}")`,
      "background-position": `center`,
      "background-repeat": `no-repeat`,
      "background-size": `${theme("spacing.4")}`,
      height: "100%",
    }),
    base: {
      width: `${theme("spacing.8")}`,
      height: `${theme("spacing.8")}`,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme("colors.white"),
      borderRadius: theme("borderRadius.full"),
      border: `1px solid currentColor`,
      outline: "none",
      overflow: "hidden",
      cursor: "pointer",
      position: "relative",
      color: theme("colors.primary.500"),
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        backgroundColor: theme("colors.primary.50"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary.100"),
      },
    },
    liked: {
      color: theme("colors.white"),
      backgroundColor: theme("colors.primary.500"),
      border: `1px solid ${theme("colors.primary.500")}`,
      "&:hover": {
        backgroundColor: theme("colors.primary.600"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary.700"),
      },
    },
  };
};
