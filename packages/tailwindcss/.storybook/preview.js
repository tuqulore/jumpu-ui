import "../src/style.css";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Introduction", "Principles", "Recipes", "Tokens", "Components"],
    },
  },
  docs: {
    source: {
      format: "dedent",
    },
  },
};
export const tags = ["autodocs"];
