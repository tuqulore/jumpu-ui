export default {
  title: "Communications/Avatar",
};

const avatarImage = require("./assets/avatar_photo.jpg");

const Template = () => {
  return `
      <div class="avatar">
        <img src="${avatarImage}" alt="城田 亜利沙" />
      </div>
    `;
};
export const Default = Template.bind({});

const AnchorTemplate = () => {
  return `
      <a href="#" class="avatar">
        <img src="${avatarImage}" alt="城田 亜利沙" />
      </a>
    `;
};
export const Anchor = AnchorTemplate.bind({});

const squareAvatarImage = () => {
  return `
      <div class="avatar rounded-none">
        <img src="${avatarImage}" alt="城田 亜利沙" />
      </div>
    `;
};
export const Square = squareAvatarImage.bind({});

const smallRadiusAvatarImage = () => {
  return `
      <div class="avatar rounded">
        <img src="${avatarImage}" alt="城田 亜利沙" />
      </div>
    `;
};
export const Radius = smallRadiusAvatarImage.bind({});

const SmallTemplate = () => {
  return `
        <div class="avatar w-8 h-8">
          <img src="${avatarImage}" alt="城田 亜利沙" />
        </div>
      `;
};
export const Small = SmallTemplate.bind({});
