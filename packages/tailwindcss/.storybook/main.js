module.exports = {
  stories: ["../stories/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-styling",
      options: {
        postcss: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
