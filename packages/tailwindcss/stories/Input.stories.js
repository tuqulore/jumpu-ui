export default {
  title: "Forms/Input",
};

const TextTemplate = () => {
  return `<input type="text" class="input" placeholder="名前" />`;
};
export const Text = TextTemplate.bind({});

const NumberTemplate = () => {
  return `<input type="number" placeholder="0" />`;
};
export const Number = NumberTemplate.bind({});

const EmailTemplate = () => {
  return `<input type="email" placeholder="example@hoge.com" />`;
};
export const Email = EmailTemplate.bind({});

const DateTemplate = () => {
  return `<input type="date" />`;
};
export const Date = DateTemplate.bind({});
