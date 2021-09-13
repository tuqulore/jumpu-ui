export default {
  title: "Buttons/LikeButton",
};

const Template = () => {
  return `
        <a class="like-button"></a>
    `;
};
export const Default = Template.bind({});

const LikedTemplate = () => {
  return `
        <a class="like-button" aria-pressed="true"></a>
    `;
};
export const Liked = LikedTemplate.bind({});
