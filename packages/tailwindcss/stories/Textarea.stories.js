import html from "./html";

export default {
  title: "Forms/Textarea",
};

const TextareaTemplate = () => {
  return html`<textarea placeholder="お問い合わせ内容..."></textarea>`;
};
export const Default = TextareaTemplate.bind({});

const TextareaFullTemplate = () => {
  return html`<textarea
    class="w-full"
    placeholder="お問い合わせ内容..."
  ></textarea>`;
};
export const Full = TextareaFullTemplate.bind({});

const TextareaHeightAdjustTemplate = () => {
  return html`<textarea
    class="h-64"
    placeholder="お問い合わせ内容..."
  ></textarea>`;
};
export const Height = TextareaHeightAdjustTemplate.bind({});
