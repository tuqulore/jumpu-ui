export default {
  title: "Buttons/Button",
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

const Template = ({ label, disabled }) => {
  return `<button type="button" class="button" ${
    disabled && "disabled"
  }>${label}</button>`;
};

export const Default = Template.bind({});
Default.args = {
  label: "ボタン",
};

const LongTextTemplate = () => {
  return `<button type="button" class="button">利用規約に同意して登録</button>`;
};

export const LongText = LongTextTemplate.bind({});

const FontSizedTemplate = () => {
  return `
    <p class="mb-4">
      <button type="button" class="button text-xs">極小のボタン</button>
    </p>
    <p class="mb-4">
      <button type="button" class="button text-sm">小さなボタン</button>
    </p>
    <p class="mb-4">
      <button type="button" class="button text-lg">大きなボタン</button>
    </p>
    <p>
      <button type="button" class="button text-xl">もっと大きなボタン</button>
    </p>
  `;
};

export const FontSized = FontSizedTemplate.bind({});

const FullWidthTemplate = () => {
  return `<button type="button" class="button w-full">横幅がいっぱいのボタン</button>`;
};

export const FullWidth = FullWidthTemplate.bind({});

const RoundedFullTemplate = () => {
  return `
    <p class="mb-4">
      水平方向の余白が狭く見えてしまうときにpx-6など指定してみるとよい
    </p>
    <p class="mb-4">
      <button type="button" class="button rounded-full">角丸のボタン</button>
    </p>
    <p>
      <button type="button" class="button rounded-full px-6">角丸のボタン</button>
    </p>
  `;
};

export const RoundedFull = RoundedFullTemplate.bind({});

const ColoredTemplate = () => {
  return `
    <p class="mb-4">
      <button type="button" class="button bg-success">成功しました</button>
    </p>
    <p class="mb-4">
      <button type="button" class="button bg-danger">削除します</button>
    </p>
    <p class="mb-4">
      <button type="button" class="button bg-warning text-black">下書き保存</button>
    </p>
    <p class="mb-4">
      <button type="button" class="button bg-gray-100 text-black">白いボタン</button>
    </p>
    <p>
      <button type="button" class="button bg-gray-700">黒いボタン</button>
    </p>
  `;
};

export const Colored = ColoredTemplate.bind({});

const DisabledTemplate = () => {
  return `
    <button type="button" disabled class="button">利用できないボタン</button>
    `;
};

export const Disabled = DisabledTemplate.bind({});

const OtherTemplate = () => {
  return `
    <h4>focus時、Tailwind CSSのRingユーティリティを使用した例</h4>
    <p>マウスやタッチなどでfocus状態にする</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 py-4 mb-8">
      <button type="button" class="button ring-opacity-50 focus:ring-4">ボタン</button>
      <button type="button" class="button bg-success ring-success ring-opacity-50 focus:ring-4">成功</button>
      <button type="button" class="button bg-danger ring-danger ring-opacity-50 focus:ring-4">削除</button>
      <button type="button" class="button bg-warning text-black ring-warning ring-opacity-50 focus:ring-4">下書き保存</button>
      <button type="button" class="button bg-gray-100 text-black ring-gray-200 ring-opacity-60 focus:ring-4">ボタン</button>
      <button type="button" class="button bg-gray-700 ring-gray-700 ring-opacity-50 focus:ring-4">ボタン</button>
    </div>

    <h4>focus時、Tailwind CSSのRing Offsetユーティリティを使用した例</h4>
    <p>マウスやタッチなどでfocus状態にする</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 py-4">
      <button type="button" class="button ring-opacity-50 ring-offset-1 focus:ring-4">ボタン</button>
      <button type="button" class="button bg-success ring-success ring-opacity-50 ring-offset-1 focus:ring-4">成功しました</button>
      <button type="button" class="button bg-danger ring-danger ring-opacity-50 ring-offset-1 focus:ring-4">削除します</button>
      <button type="button" class="button bg-warning text-black ring-warning ring-opacity-50 ring-offset-1 focus:ring-4">下書き保存</button>
      <button type="button" class="button bg-gray-100 text-black ring-gray-200 ring-opacity-60 ring-offset-1 focus:ring-4">ボタン</button>
      <button type="button" class="button bg-gray-700 ring-gray-700 ring-opacity-50 ring-offset-1 focus:ring-4">ボタン</button>
    </div>
  `;
};

export const Others = OtherTemplate.bind({});
