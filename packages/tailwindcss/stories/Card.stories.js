const html = require("./html");

export default {
  title: "Card/Card",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = ({ label }) => {
  return html` <div class="card px-4 py-3 mb-4">${label}</div> `;
};

export const Default = Template.bind({});
Default.args = {
  label: "カード",
};

const AnchorTemplate = () => {
  return html` <a href="#" class="card px-4 py-3 mb-4">リンクカード</a> `;
};

export const Anchor = AnchorTemplate.bind({});

const ShadowedTemplate = ({ label }) => {
  return html` <div class="card px-4 py-3 border-0 shadow-lg">${label}</div> `;
};

export const Shadowed = ShadowedTemplate.bind({});
Shadowed.args = {
  label: "カード",
};
