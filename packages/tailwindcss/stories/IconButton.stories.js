export default {
  title: "Buttons/IconButton",
};

const Template = () => {
  return `
        <button type="button" class="icon-button" aria-label="Twitter" data-label="Twitter">    
            <i class="fab fa-twitter"></i>
        </button>
        <button type="button" class="icon-button" aria-label="メール" data-label="メール">
            <i class="fas fa-envelope"></i>
        </button>
        <button type="button" class="icon-button" aria-label="ホーム" data-label="ホーム">
            <i class="fas fa-home"></i>
        </button>
        <button type="button" class="icon-button" aria-label="その他" data-label="その他">
            <i class="fas fa-ellipsis-h"></i>
        </button>
    `;
};
export const Default = Template.bind({});

const NoLabelTemplate = () => {
  return `
        <button type="button" class="icon-button" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
        </button>
        <button type="button" class="icon-button" aria-label="メール">
            <i class="fas fa-envelope"></i>
        </button>
        <button type="button" class="icon-button" aria-label="ホーム">
            <i class="fas fa-home"></i>
        </button>
        <button type="button" class="icon-button" aria-label="その他">
            <i class="fas fa-ellipsis-h"></i>
        </button>
      `;
};
export const NoLabel = NoLabelTemplate.bind({});

const LargeTemplate = () => {
  return `
        <button type="button" class="icon-button text-lg w-12 h-12" aria-label="Twitter" data-label="Twitter">    
            <i class="fab fa-twitter"></i>
        </button>
        <button type="button" class="icon-button text-lg w-12 h-12" aria-label="メール" data-label="メール">
            <i class="fas fa-envelope"></i>
        </button>
        <button type="button" class="icon-button text-lg w-12 h-12" aria-label="ホーム" data-label="ホーム">
            <i class="fas fa-home"></i>
        </button>
        <button type="button" class="icon-button text-lg w-12 h-12" aria-label="その他" data-label="その他">
            <i class="fas fa-ellipsis-h"></i>
        </button>
      `;
};
export const Large = LargeTemplate.bind({});

const SmallTemplate = () => {
  return `
        <button type="button" class="icon-button text-xs w-6 h-6" aria-label="Twitter" data-label="Twitter">    
            <i class="fab fa-twitter"></i>
        </button>
        <button type="button" class="icon-button text-xs w-6 h-6" aria-label="メール" data-label="メール">
            <i class="fas fa-envelope"></i>
        </button>
        <button type="button" class="icon-button text-xs w-6 h-6" aria-label="ホーム" data-label="ホーム">
            <i class="fas fa-home"></i>
        </button>
        <button type="button" class="icon-button text-xs w-6 h-6" aria-label="その他" data-label="その他">
            <i class="fas fa-ellipsis-h"></i>
        </button>
        `;
};
export const Small = SmallTemplate.bind({});
