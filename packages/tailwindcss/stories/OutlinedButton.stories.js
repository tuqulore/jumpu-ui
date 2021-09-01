export default {
  title: "Buttons/OutlinedButton",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = ({ label }) => {
  return `<button type="button" class="outlined-button">${label}</button>`;
};

export const Default = Template.bind({});
Default.args = {
  label: "ボタン",
};

const DisabledTemplate = ({ label }) => {
  return `
    <button type="button" disabled class="outlined-button">${label}</button>
    `;
};

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  ...Default.args,
};
