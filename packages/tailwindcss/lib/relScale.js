const theme = require("tailwindcss/defaultTheme");

/**
 * 相対フォントサイズ(em)のスケール
 */
const relScale = Object.fromEntries(
  Object.entries(theme.spacing).map(([key, value]) => [
    "rel" + key,
    value.replace(/rem/, "em"),
  ])
);

module.exports = relScale;
