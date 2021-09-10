export default {
  title: "Galleries/ProfileCard",
};

const bgImage = require("./assets/chat-photo.jpg");
const avatarImage = require("./assets/avatar_photo.jpg");
const avatarImage2 = require("./assets/avatar_hideki.jpg");

const Template = () => {
  return `
  <div class="flex">
    <div class="card w-80 mr-4">
        <div class="h-32 bg-center bg-cover" style="background-image: url(${bgImage});"></div>
        <div class="relative py-2 px-4 flex justify-end align-center">
            <div class="avatar absolute left-4 -top-10 border-4 border-white w-20 h-20">
                <img src="${avatarImage}" alt="須田 知世" />
            </div>
            <div class="flex align-center">
                <a type="button" class="like-button like-button-labeled mr-4">
                    <div class="icon-button-inner"></div>
                    <div class="icon-button-label">いいね</div>
                </a>
                <button type="button" class="icon-button" aria-label="email" data-label="メール">
                    <div class="icon-button-inner">
                        <i class="fas fa-envelope"></i>
                    </div>
                </button>

                <button type="button" class="icon-button" aria-label="etc" data-label="その他">
                    <div class="icon-button-inner">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </button>
            </div>
        </div>
        <div class="px-4 flex justify-between items-end">
            <div class="">
                須田 知世
                <div class="text-xxs text-gray-600">@tomoyo_suda_000</div>
            </div>
            <div class="flex">
                <div class="text-center text-sm mr-4">
                    1480
                    <div class="text-xxs text-gray-600">
                        フォロワー
                    </div>
                </div>
                <div class="text-center text-sm">
                    80
                    <div class="text-xxs text-gray-600">
                        フォロー
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 py-4 text-sm">
            元ファッションモデル。都内でウォーキンレッスンのインストラクターをしています。お仕事のご依頼はDMまで。
        </div>

        <div class="px-4 mb-4 flex">
            <a href="#" class="avatar border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
            <a href="#" class="avatar -ml-2 border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
            <a href="#" class="avatar -ml-2 border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
            <a href="#" class="avatar -ml-2 border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
            <a href="#" class="avatar -ml-2 border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
        </div>

        <div class="mb-4 px-4 text-gray-500 text-xs">marieさん、DLOさん、Kateさん…他3人がフォロー中</div>
    </div>

    <div class="card w-80">
        <div class="h-32 bg-center bg-cover bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
        <div class="relative py-2 px-4 flex justify-end align-center">
            <div class="avatar absolute left-4 -top-10 border-4 border-white w-20 h-20">
                <img src="${avatarImage2}" alt="秋葉 秀樹" />
            </div>
            <div class="flex align-center">
                <a type="button" class="like-button like-button-labeled mr-4">
                    <div class="icon-button-inner"></div>
                    <div class="icon-button-label">いいね</div>
                </a>
                <button type="button" class="icon-button" aria-label="email" data-label="メール">
                    <div class="icon-button-inner">
                        <i class="fas fa-envelope"></i>
                    </div>
                </button>

                <button type="button" class="icon-button" aria-label="etc" data-label="その他">
                    <div class="icon-button-inner">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </button>
            </div>
        </div>
        <div class="px-4 flex justify-between items-end">
            <div class="">
            秋葉 秀樹
                <div class="text-xxs text-gray-600">@hidetaro7</div>
            </div>
            <div class="flex">
                <div class="text-center text-sm mr-4">
                    1480
                    <div class="text-xxs text-gray-600">
                        フォロワー
                    </div>
                </div>
                <div class="text-center text-sm">
                    80
                    <div class="text-xxs text-gray-600">
                        フォロー
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 py-4 text-sm">
        クリエイター・デザイナー。アングラな音楽ユニット、ニューロナのサウンドクリエイター。本業はUX・UI、デザインエンジニアですが仕事関係は 
        @tuqulore
         にて。
        </div>

        <div class="px-4 mb-4 flex">
            <a href="#" class="avatar border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
            <a href="#" class="avatar -ml-2 border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
            <a href="#" class="avatar -ml-2 border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
            <a href="#" class="avatar -ml-2 border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
            <a href="#" class="avatar -ml-2 border-2 border-white w-10 h-10">
                <img src="${avatarImage}" alt="城田 亜利沙" />
            </a>
        </div>

        <div class="mb-4 px-4 text-gray-500 text-xs">marieさん、DLOさん、Kateさん…他3人がフォロー中</div>
    </div>
</div>
    `;
};
export const Default = Template.bind({});
