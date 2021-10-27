export default {
  title: "Buttons/TextButton",
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

const Template = ({ label, disabled }) => {
  return `<button class="text-button" ${
    disabled && "disabled"
  }>${label}</button>`;
};

export const Default = Template.bind({});
Default.args = {
  label: "ボタン",
};

const AnchorTemplate = ({ disabled }) => {
  return `<a href="#" class="text-button" ${
    disabled && "disabled"
  }>リンクボタン</a>`;
};

export const Anchor = AnchorTemplate.bind({});

const DisabledTemplate = ({ label }) => {
  return `
    <button disabled class="text-button">${label}</button>
    `;
};

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  ...Default.args,
};
