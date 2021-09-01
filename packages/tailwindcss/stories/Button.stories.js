export default {
  title: "Buttons/Button",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = ({ label }) => {
  return `<button type="button" class="button">${label}</button>`;
};

export const Default = Template.bind({});
Default.args = {
  label: "ボタン",
};

const disabledTemplate = ({ label }) => {
  return `
  <button type="button" disabled class="button">${label}</button>
  `;
};

export const Disabled = disabledTemplate.bind({});
Disabled.args = {
  ...Default.args,
};
