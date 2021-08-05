import clsx from "clsx";

export default {
  title: "Button",
  argTypes: {
    label: {control: 'text'},
    text: { control: 'boolean' },
    rounded: { control: 'boolean' },
    stretched: { control: 'boolean' },
  },
};

const Template = ({ label, text, rounded, stretched, ...args }) => {
  return `<button type="button" class="${clsx(
    "btn",
    { "is-text": text },
    { "is-rounded": rounded },
    { "is-stretched": stretched },
  )}">${label}</button>`;
};

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
