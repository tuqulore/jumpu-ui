const html = require("./html");

export default {
  title: "Galleries/Chat",
};

const avatarImage = require("./assets/avatar_photo.jpg");
const posterImage = require("./assets/Cover.png");
const faviconImage = require("./assets/sample_favicon.ico");

const Template = () => {
  return html`
    <div class="container max-w-2xl">
      <div class="mb-4 flex">
        <div class="avatar flex-shrink-0 mr-4">
          <a href="#">
            <img src="${avatarImage}" alt="城田 亜利沙" />
          </a>
        </div>
        <div>
          <div class="flex items-center mb-2">
            <div class="font-bold mr-4"><a href="#">城田 亜利沙</a></div>
            <div class="text-xs">9:15</div>
          </div>
          <div class="balloon">
            オッケー 👍
            13時からオンラインのミーティングなのでそのまえにちょっと話そうか 😃
          </div>
        </div>
      </div>
    </div>
  `;
};

export const Default = Template.bind({});

const ShareTemplate = () => {
  return html`
    <div class="container max-w-2xl">
      <div class="mb-4 flex">
        <div class="avatar flex-shrink-0 mr-4">
          <a href="#">
            <img src="${avatarImage}" alt="城田 亜利沙" />
          </a>
        </div>
        <div>
          <div class="flex items-center mb-2">
            <div class="font-bold mr-4"><a href="#">城田 亜利沙</a></div>
            <div class="text-xs">9:15</div>
          </div>
          <div
            class="flex items-center border border-gray-300 rounded-lg overflow-hidden"
          >
            <a href="#" class="w-32 h-32 flex-shrink-0">
              <img
                src="${posterImage}"
                alt=""
                class="w-full h-full object-cover"
              />
            </a>
            <div class="px-4 py-3">
              <a href="#" class="mb-1 font-bold block hover:underline"
                >つくり・つたえるUIデザイン | 株式会社ツクロア</a
              >
              <div class="mb-2 text-sm text-gray-700">
                人の行動と心を理解しプロジェクトの成長を支援するUIデザイン・アドバイザー
              </div>
              <div class="text-xs text-gray-500 leading-none flex items-center">
                <img src="${faviconImage}" class="w-3 h-3 inline mr-1" alt="" />
                <a href="#">tuqulore.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const Share = ShareTemplate.bind({});
