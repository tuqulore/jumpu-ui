export default {
  title: "Buttons/LikeButton",
};

const Template = () => {
  return `
    <div class="p-6">
        <a type="button" class="like-button">
            <div class="icon-button-inner"></div>
        </a>
    </div>
    `;
};
export const Default = Template.bind({});

const LikedTemplate = () => {
  return `
    <div class="p-6">
        <a type="button" class="like-button like-button-liked">
            <div class="icon-button-inner"></div>
        </a>
    </div>
    `;
};
export const Liked = LikedTemplate.bind({});

const LabeledTemplate = () => {
  return `
    <div class="p-6">
        <a type="button" class="like-button like-button-labeled">
            <div class="icon-button-inner"></div>
            <div class="icon-button-label">
            いいね
            </div>
        </a>
    </div>
    `;
};
export const Labeled = LabeledTemplate.bind({});

const LikedLabeledTemplate = () => {
  return `
    <div class="p-6">
        <a type="button" class="like-button like-button-liked like-button-labeled">
            <div class="icon-button-inner"></div>
            <div class="icon-button-label">
            いいね
            </div>
        </a>
    </div>
    `;
};
export const LikedLabeled = LikedLabeledTemplate.bind({});
