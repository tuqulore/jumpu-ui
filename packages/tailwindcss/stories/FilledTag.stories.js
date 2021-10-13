export default {
  title: "Status/FilledTag",
};

const Template = () => {
  return `
        <div class="filled-tag">デフォルト</div>
        <div class="filled-tag bg-green-700 ">検討中</div>
        <div class="filled-tag bg-red-700 ">着手</div>
        <div class="filled-tag bg-yellow-700 ">作業済</div>
        <div class="filled-tag bg-pink-600 ">確認中</div>
        <div class="filled-tag bg-gray-600 ">ペンディング</div>
        <div class="filled-tag bg-blue-700 ">TypeScript</div>
        <div class="filled-tag bg-indigo-600 ">Git</div>
        <div class="filled-tag bg-purple-600 ">Design</div>
    `;
};
export const Default = Template.bind({});

const RoundedTemplate = () => {
  return `
          <div class="filled-tag rounded-full">デフォルト</div>
          <div class="filled-tag rounded-full bg-green-700 ">検討中</div>
          <div class="filled-tag rounded-full bg-red-700 ">着手</div>
          <div class="filled-tag rounded-full bg-yellow-700 ">作業済</div>
          <div class="filled-tag rounded-full bg-pink-600 ">確認中</div>
          <div class="filled-tag rounded-full bg-gray-600 ">ペンディング</div>
          <div class="filled-tag rounded-full bg-blue-700 ">TypeScript</div>
          <div class="filled-tag rounded-full bg-indigo-600 ">Git</div>
          <div class="filled-tag rounded-full bg-purple-600 ">Design</div>
      `;
};
export const Rounded = RoundedTemplate.bind({});

const CloseButtonTemplate = () => {
  return `
        <div class="filled-tag">デフォルト
            <button />
        </div>
     `;
};
export const CloseButton = CloseButtonTemplate.bind({});
