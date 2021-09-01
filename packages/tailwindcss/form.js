const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

module.exports = plugin.withOptions(
  // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          ".label": {
            color: theme("colors.gray.600"),
            fontSize: "12px",
            lineHeight: 1,
            marginBottom: "1em",
          },
        },
        {
          "[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select": {
            borderRadius: theme("borderRadius.md"),
            borderWidth: theme("borderWidth.DEFAULT"),
            color: theme("colors.gray.900"),
            borderColor: theme("colors.gray.300"),
            padding: "0.5em 0.75em",
            "&::placeholder": {
              color: theme("colors.gray.300"),
            },
            "&:focus": {
              borderColor: theme("colors.primary.600"),
            },
          },
        },
      ]);
    };
  },
  () => ({ theme })
);


