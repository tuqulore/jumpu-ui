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

const SmallTemplate = () => {
  return `
        <div class="avatar w-8 h-8">
          <img src="${avatarImage}" alt="城田 亜利沙" />
        </div>
      `;
};
export const Small = SmallTemplate.bind({});
