export default {
  title: "Buttons/IconButton",
};

const Template = () => {
  return `
        <div class="p-6">
            <button class="icon-button" aria-label="Twitter" data-label="Twitter">    
                <i class="fab fa-twitter"></i>
            </button>
            <button class="icon-button" aria-label="閉じる" data-label="閉じる">
                <i class="fas fa-times"></i>
            </button>
            <button class="icon-button" aria-label="ホーム" data-label="ホーム">
                <i class="fas fa-home"></i>
            </button>
            <button class="icon-button" aria-label="その他" data-label="その他">
                <i class="fas fa-ellipsis-h"></i>
            </button>
        </div>
    `;
};
export const Default = Template.bind({});

const LargeTemplate = () => {
  return `
        <div class="p-6">
            <button class="icon-button text-lg w-12 h-12" aria-label="Twitter" data-label="Twitter">    
                <i class="fab fa-twitter"></i>
            </button>
            <button class="icon-button text-lg w-12 h-12" aria-label="閉じる" data-label="閉じる">
                <i class="fas fa-times"></i>
            </button>
            <button class="icon-button text-lg w-12 h-12" aria-label="ホーム" data-label="ホーム">
                <i class="fas fa-home"></i>
            </button>
            <button class="icon-button text-lg w-12 h-12" aria-label="その他" data-label="その他">
                <i class="fas fa-ellipsis-h"></i>
            </button>
        </div>
      `;
};
export const Large = LargeTemplate.bind({});

const SmallTemplate = () => {
  return `
        <div class="p-6">
            <button class="icon-button text-xs w-6 h-6" aria-label="Twitter" data-label="Twitter">    
                <i class="fab fa-twitter"></i>
            </button>
            <button class="icon-button text-xs w-6 h-6" aria-label="閉じる" data-label="閉じる">
                <i class="fas fa-times"></i>
            </button>
            <button class="icon-button text-xs w-6 h-6" aria-label="ホーム" data-label="ホーム">
                <i class="fas fa-home"></i>
            </button>
            <button class="icon-button text-xs w-6 h-6" aria-label="その他" data-label="その他">
                <i class="fas fa-ellipsis-h"></i>
            </button>
        </div>
        `;
};
export const Small = SmallTemplate.bind({});
