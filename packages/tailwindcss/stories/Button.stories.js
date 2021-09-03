export default {
  title: "Buttons/Button",
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

const Template = ({ label, disabled }) => {
  return `<button type="button" class="button" ${
    disabled && "disabled"
  }>${label}</button>`;
};

export const Default = Template.bind({});
Default.args = {
  label: "ボタン",
};
