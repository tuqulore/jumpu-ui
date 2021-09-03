import { useEffect } from "@storybook/client-api";

export default {
  title: "Forms/Input",
};

const TextTemplate = () => {
  return `<input type="text" class="input" placeholder="名前" />`;
};
export const Text = TextTemplate.bind({});

const TextIconTemplate = () => {
  return `
  <div class="prose">
  <p>
    Font Awesome 5を使った例です
  </p>
  <h3>Search &#xf002;</h3>
  <input type="text" class="input-icon" placeholder="&#xf002; Search" />

  <h3>Mail &#xf002;</h3>
  <input type="email" class="input-icon" placeholder="&#xf0e0; Search" />

  <h3>Search &#xf002;</h3>
  <input type="text" class="input-icon" placeholder="&#xf002; Search" />

  <h3>Search &#xf002;</h3>
  <input type="text" class="input-icon" placeholder="&#xf002; Search" />
  </div>
  `;
};
export const TextIcon = TextIconTemplate.bind({});

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

const RadioTemplate = () => {
  return `
      <input type="radio" name="radio-sample" value="radio-1" class="mr-4" checked />
      <input type="radio" name="radio-sample" value="radio-2" />
  `;
};
export const Radio = RadioTemplate.bind({});

const CheckboxTemplate = () => {
  useEffect(() => {
    document.querySelector("#checkbox input:nth-child(3)").indeterminate = true;
  });
  return `
    <div id="checkbox">
      <input type="checkbox" value="checkbox-1" class="mr-4" checked />
      <input type="checkbox" value="checkbox-2" class="mr-4" />
      <input type="checkbox" value="checkbox-3" />
    </div>
  `;
};
export const Checkbox = CheckboxTemplate.bind({});

const FileTemplate = () => {
  return `<input type="file" />`;
};
export const File = FileTemplate.bind({});
