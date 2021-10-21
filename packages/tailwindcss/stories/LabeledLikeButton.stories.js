export default {
  title: "Buttons/LabeledLikeButton",
};

const Template = () => {
  return `
        <button type="button" class="labeled-like-button" aria-pressed="false" aria-label="いいね">いいね</button>
    `;
};
export const Default = Template.bind({});

const LikedLabeledTemplate = () => {
  return `
        <button type="button" class="labeled-like-button" aria-pressed="true" aria-label="いいね">いいね</button>
    `;
};
export const LikedLabeled = LikedLabeledTemplate.bind({});
