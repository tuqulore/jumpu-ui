// NOTE: なぜか@storybook/addon-postcssはpostcss-load-configに対応していない
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
