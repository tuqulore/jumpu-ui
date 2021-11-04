import { useEffect } from "@storybook/client-api";
const html = require("./html");

export default {
  title: "Forms/Input",
};

const TextTemplate = () => {
  return html`<input type="text" class="input" placeholder="名前" />`;
};
export const Text = TextTemplate.bind({});

const TextIconTemplate = () => {
  return html`
    <p class="mb-4">Font Awesome 5を使った例です</p>

    <div class="mt-4">
      <h3 class="mb-1"><i class="fas fa-search"></i> 検索</h3>
      <input type="text" class="input-icon" placeholder="&#xf002; 検索" />
    </div>

    <div class="mt-4">
      <h3 class="mb-1"><i class="fas fa-envelope"></i> メール</h3>
      <input type="email" class="input-icon" placeholder="&#xf0e0; メール" />
    </div>
  `;
};
export const TextIcon = TextIconTemplate.bind({});

const NumberTemplate = () => {
  return html`<input type="number" placeholder="0" />`;
};
export const Number = NumberTemplate.bind({});

const EmailTemplate = () => {
  return html`<input type="email" placeholder="example@hoge.com" />`;
};
export const Email = EmailTemplate.bind({});

const DateTemplate = () => {
  return html`<input type="date" />`;
};
export const Date = DateTemplate.bind({});

const RadioTemplate = () => {
  return html`
    <input
      type="radio"
      name="radio-sample"
      value="radio-1"
      class="mr-4"
      checked
    />
    <input type="radio" name="radio-sample" value="radio-2" />
  `;
};
export const Radio = RadioTemplate.bind({});

const CheckboxTemplate = () => {
  useEffect(() => {
    document.querySelector("#checkbox input:nth-child(3)").indeterminate = true;
  });
  return html`
    <div id="checkbox">
      <input type="checkbox" value="checkbox-1" class="mr-4" checked />
      <input type="checkbox" value="checkbox-2" class="mr-4" />
      <input type="checkbox" value="checkbox-3" />
    </div>
  `;
};
export const Checkbox = CheckboxTemplate.bind({});

const FileTemplate = () => {
  return html`<input type="file" />`;
};
export const File = FileTemplate.bind({});
