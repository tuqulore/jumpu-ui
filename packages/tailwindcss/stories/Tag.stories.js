export default {
  title: "Status/Tag",
};

const Template = () => {
  return `
    <div class="p-4">
        <div class="tag ">デフォルト</div>
        <div class="tag bg-green-100 ">検討中</div>
        <div class="tag bg-red-100 ">着手</div>
        <div class="tag bg-yellow-100 ">作業済</div>
        <div class="tag bg-pink-100 ">確認中</div>
        <div class="tag bg-gray-100 ">ペンディング</div>
        <div class="tag bg-blue-100 ">TypeScript</div>
        <div class="tag bg-indigo-100 ">Git</div>
        <div class="tag bg-purple-100 ">Design</div>
    </div>
    <div class="p-4">
        <div class="tag tag-fill ">デフォルト</div>
        <div class="tag tag-fill bg-green-700 ">検討中</div>
        <div class="tag tag-fill bg-red-700 ">着手</div>
        <div class="tag tag-fill bg-yellow-700 ">作業済</div>
        <div class="tag tag-fill bg-pink-600 ">確認中</div>
        <div class="tag tag-fill bg-gray-600 ">ペンディング</div>
        <div class="tag tag-fill bg-blue-700 ">TypeScript</div>
        <div class="tag tag-fill bg-indigo-600 ">Git</div>
        <div class="tag tag-fill bg-purple-600 ">Design</div>
    </div>

    <div class="p-4">
        <div class="tag tag-fill tag-rounded ">デフォルト</div>
        <div class="tag tag-fill tag-rounded bg-green-700 ">検討中</div>
        <div class="tag tag-fill tag-rounded bg-red-700 ">着手</div>
        <div class="tag tag-fill tag-rounded bg-yellow-700 ">作業済</div>
        <div class="tag tag-fill tag-rounded bg-pink-600 ">確認中</div>
        <div class="tag tag-fill tag-rounded bg-gray-600 ">ペンディング</div>
        <div class="tag tag-fill tag-rounded bg-blue-700 ">TypeScript</div>
        <div class="tag tag-fill tag-rounded bg-indigo-600 ">Git</div>
        <div class="tag tag-fill tag-rounded bg-purple-600 ">Design</div>
    </div>
    `;
};
export const Default = Template.bind({});

const CloseButtonTemplate = () => {
  return `
        <div class="tag">デフォルト
            <div class="close">
            </div>
        </div>
     `;
};
export const CloseButton = CloseButtonTemplate.bind({});
