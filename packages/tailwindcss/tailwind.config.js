module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: ["10px", "1.6em"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [...require("./")],
};
