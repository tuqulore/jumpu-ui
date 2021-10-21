export default {
  title: "Buttons/LikeButton",
};

const Template = () => {
  return `
        <button type="button" class="like-button" aria-pressed="false" aria-label="いいね"></button>
    `;
};
export const Default = Template.bind({});

const LikedTemplate = () => {
  return `
        <button type="button" class="like-button" aria-pressed="true" aria-label="いいね"></button>
    `;
};
export const Liked = LikedTemplate.bind({});
