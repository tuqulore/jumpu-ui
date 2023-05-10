const colors = require("tailwindcss/colors");
const relScale = require("./lib/relScale");

module.exports = {
  jumpu: {
    prefix: `jumpu-`,
  },
  extend: {
    spacing: relScale,
    colors: {
      primary: colors.blue,
      border: colors.gray[300],
    },
  },
};
