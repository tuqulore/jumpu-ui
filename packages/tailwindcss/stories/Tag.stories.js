const html = require("./html");

export default {
  title: "Status/Tag",
};

const Template = () => {
  return html`
    <div class="tag ">デフォルト</div>
    <div class="tag bg-green-100 ">検討中</div>
    <div class="tag bg-red-100 ">着手</div>
    <div class="tag bg-yellow-100 ">作業済</div>
    <div class="tag bg-pink-100 ">確認中</div>
    <div class="tag bg-gray-100 ">ペンディング</div>
    <div class="tag bg-blue-100 ">TypeScript</div>
    <div class="tag bg-indigo-100 ">Git</div>
    <div class="tag bg-purple-100 ">Design</div>
  `;
};
export const Default = Template.bind({});

const AnchorTemplate = () => {
  return html`
    <a href="#" class="tag ">デフォルト</a>
    <a href="#" class="tag bg-green-100 ">検討中</a>
    <a href="#" class="tag bg-red-100 ">着手</a>
    <a href="#" class="tag bg-yellow-100 ">作業済</a>
    <a href="#" class="tag bg-pink-100 ">確認中</a>
    <a href="#" class="tag bg-gray-100 ">ペンディング</a>
    <a href="#" class="tag bg-blue-100 ">TypeScript</a>
    <a href="#" class="tag bg-indigo-100 ">Git</a>
    <a href="#" class="tag bg-purple-100 ">Design</a>
  `;
};
export const Anchor = AnchorTemplate.bind({});

const RoundedTemplate = () => {
  return html`
    <div class="tag rounded-full ">デフォルト</div>
    <div class="tag rounded-full bg-green-100 ">検討中</div>
    <div class="tag rounded-full bg-red-100 ">着手</div>
    <div class="tag rounded-full bg-yellow-100 ">作業済</div>
    <div class="tag rounded-full bg-pink-100 ">確認中</div>
    <div class="tag rounded-full bg-gray-100 ">ペンディング</div>
    <div class="tag rounded-full bg-blue-100 ">TypeScript</div>
    <div class="tag rounded-full bg-indigo-100 ">Git</div>
    <div class="tag rounded-full bg-purple-100 ">Design</div>
  `;
};
export const Rounded = RoundedTemplate.bind({});

const CloseButtonTemplate = () => {
  return html`
    <div class="tag">
      デフォルト
      <button />
    </div>
  `;
};
export const CloseButton = CloseButtonTemplate.bind({});
