const plugin = require("tailwindcss/plugin");
const theme = require("./theme");
const svgToDataUri = require("mini-svg-data-uri");

module.exports = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".like-button": {
            width: `${theme("spacing.8")}`,
            height: `${theme("spacing.8")}`,
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme("colors.white"),
            borderRadius: theme("borderRadius.full"),
            border: `1px solid ${theme("colors.primary.300")}`,
            outline: "none",
            overflow: "hidden",
            cursor: "pointer",
            ".icon-button-inner": {
              "background-image": `url("${svgToDataUri(
                `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0664 1.96094C16.918 0.164062 13.7539 0.4375 11.7617 2.50781L11.0195 3.28906L10.2383 2.50781C8.63672 0.867188 5.43359 -0.148438 2.93359 1.96094C0.472656 4.07031 0.355469 7.82031 2.54297 10.0859L10.1211 17.8984C10.3555 18.1328 10.668 18.25 10.9805 18.25C11.332 18.25 11.6445 18.1328 11.8789 17.8984L19.457 10.0859C21.6445 7.82031 21.5273 4.07031 19.0664 1.96094ZM18.5586 9.22656L11.0195 17.0391L3.44141 9.22656C1.95703 7.66406 1.64453 4.73438 3.75391 2.9375C5.90234 1.10156 8.40234 2.42969 9.33984 3.36719L11.0195 5.08594L12.6602 3.36719C13.5586 2.42969 16.0977 1.10156 18.2461 2.9375C20.3555 4.73438 20.043 7.66406 18.5586 9.22656Z" fill="${theme(
                  "colors.primary.300"
                )}" /></svg>`
              )}")`,
              "background-position": `center`,
              "background-repeat": `no-repeat`,
              "background-size": `${theme("spacing.4")}`,
              width: "100%",
              height: "100%",
            },
            "&:focus": {
              outline: "none",
            },
            "&:hover": {
              backgroundColor: theme("colors.primary.50"),
            },
            "&:active": {
              backgroundColor: theme("colors.primary.100"),
            },
            "&.like-button-liked": {
              backgroundColor: theme("colors.primary.500"),
              border: `1px solid ${theme("colors.primary.500")}`,
              ".icon-button-inner": {
                "background-image": `url("${svgToDataUri(
                  `<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0469 1.96094C16.8984 0.125 13.7344 0.476562 11.7422 2.50781L11 3.28906L10.2188 2.50781C8.26562 0.476562 5.0625 0.125 2.91406 1.96094C0.453125 4.07031 0.335938 7.82031 2.52344 10.0859L10.1016 17.8984C10.5703 18.4062 11.3906 18.4062 11.8594 17.8984L19.4375 10.0859C21.625 7.82031 21.5078 4.07031 19.0469 1.96094Z" fill="${theme(
                    "colors.white"
                  )}"/>
                  </svg>
                  `
                )}")`,
              },
              ".icon-button-label": {
                color: theme("colors.white"),
              },
              "background-position": `center`,
              "background-repeat": `no-repeat`,
              "background-size": `${theme("spacing.4")}`,
              "&:hover": {
                backgroundColor: theme("colors.primary.600"),
              },
              "&:active": {
                backgroundColor: theme("colors.primary.700"),
              },
            },
            "&.like-button-labeled": {
              width: "auto",
              whiteSpace: "nowrap",
              color: theme("colors.primary.500"),
              ".icon-button-inner": {
                width: `${theme("spacing.8")}`,
              },
              ".icon-button-label": {
                paddingRight: theme("spacing.2"),
                fontSize: theme("fontSize.xs"),
              },
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);
