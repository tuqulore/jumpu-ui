import path from "node:path";

const getAbsolutePath = (packageName) =>
  path.dirname(require.resolve(path.join(packageName, "package.json")));

module.exports = {
  stories: ["../src/**/*.mdx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-a11y"),
    "@chromatic-com/storybook",
  ],
  framework: getAbsolutePath("@storybook/preact-vite"),
};
