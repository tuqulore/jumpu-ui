const html = require("./html");

export default {
  title: "Buttons/OutlinedButton",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = ({ label }) => {
  return html`<button type="button" class="outlined-button">${label}</button>`;
};

export const Default = Template.bind({});
Default.args = {
  label: "ボタン",
};

const AnchorTemplate = () => {
  return html`<a href="#" class="outlined-button">リンクボタン</a>`;
};

export const Anchor = AnchorTemplate.bind({});

const DisabledTemplate = ({ label }) => {
  return html`
    <button type="button" disabled class="outlined-button">${label}</button>
  `;
};

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  ...Default.args,
};
