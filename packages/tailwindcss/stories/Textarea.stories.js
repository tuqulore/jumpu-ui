export default {
  title: "Forms/Textarea",
  argTypes: {
    label: { control: "text" },
  },
};

const TextareaTemplate = ({ label }) => {
  return `<textarea placeholder="名前"></textarea>`;
};

export const Default = TextareaTemplate.bind({});
