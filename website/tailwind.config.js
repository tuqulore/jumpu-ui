module.exports = {
  purge: ["./pages/**/U.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [...require("../packages/tailwindcss/index.js")],
};
