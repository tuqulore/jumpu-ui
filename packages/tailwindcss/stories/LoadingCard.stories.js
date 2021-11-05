import html from "./html";

export default {
  title: "Galleries/LoadingCard",
};

const Template = () => {
  return html`
    <div class="card w-96 h-48 flex items-center justify-center mx-auto">
      <div class="spinner">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
    </div>
  `;
};
export const Default = Template.bind({});

const HeadingTemplate = () => {
  return html`
    <div
      class="card w-96 h-48 flex items-center justify-center flex-col mx-auto"
    >
      <div class="font-bold mb-4">読み込み中です</div>
      <div class="spinner">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
    </div>
  `;
};
export const Heading = HeadingTemplate.bind({});
