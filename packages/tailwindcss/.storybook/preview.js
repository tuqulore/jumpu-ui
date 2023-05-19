import "./tailwindcss.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Overview", ["Introduction"], "*", "Galleries"],
    },
  },
  docs: {
    source: {
      format: "dedent",
    },
  },
};
