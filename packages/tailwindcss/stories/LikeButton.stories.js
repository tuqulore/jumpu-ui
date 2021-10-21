export default {
  title: "Buttons/LikeButton",
};

const Template = () => {
  return `
        <button type="button" class="like-button" aria-pressed="false" aria-label="いいねする"></button>
    `;
};
export const Default = Template.bind({});

const LikedTemplate = () => {
  return `
        <button type="button" class="like-button" aria-pressed="true" aria-label="いいねを取り消す"></button>
    `;
};
export const Liked = LikedTemplate.bind({});
