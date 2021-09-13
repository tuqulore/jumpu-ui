export default {
  title: "Buttons/LabeledLikeButton",
};

const Template = () => {
  return `
        <button class="labeled-like-button">いいね</button>
    `;
};
export const Default = Template.bind({});

const LikedLabeledTemplate = () => {
  return `
        <button class="labeled-like-button" aria-pressed="true">いいね</button>
    `;
};
export const LikedLabeled = LikedLabeledTemplate.bind({});
