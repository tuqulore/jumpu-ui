export default {
  title: "Galleries/Chat",
};

const avatarImage = require("./assets/avatar_photo.jpg");

const Template = () => {
  return `
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
