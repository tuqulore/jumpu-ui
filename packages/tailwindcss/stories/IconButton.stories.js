export default {
  title: "Buttons/IconButton",
};

const Template = () => {
  return `
        <button class="icon-button" aria-describedby="tooltip-Twitter">    
            <i class="fab fa-twitter"></i>
            <span id="tooltip-Twitter" role="tooltip">Twitter</span>
        </button>

        <button class="icon-button" aria-describedby="tooltip-envelope">    
            <i class="fas fa-envelope"></i>
            <span id="tooltip-envelope" role="tooltip">メール</span>
        </button>

        <button class="icon-button" aria-describedby="tooltip-home">    
            <i class="fas fa-home"></i>
            <span id="tooltip-home" role="tooltip">ホーム</span>
        </button>

        <button class="icon-button" aria-describedby="tooltip-etc">    
            <i class="fas fa-ellipsis-h"></i>
            <span id="tooltip-etc" role="tooltip">その他</span>
        </button>

    `;
};
export const Default = Template.bind({});

const NoLabelTemplate = () => {
  return `
        <button class="icon-button" aria-describedby="tooltip-Twitter">    
            <i class="fab fa-twitter"></i>
        </button>

        <button class="icon-button" aria-describedby="tooltip-envelope">    
            <i class="fas fa-envelope"></i>
        </button>

        <button class="icon-button" aria-describedby="tooltip-home">    
            <i class="fas fa-home"></i>
        </button>

        <button class="icon-button" aria-describedby="tooltip-etc">    
            <i class="fas fa-ellipsis-h"></i>
        </button>
      `;
};
export const NoLabel = NoLabelTemplate.bind({});

const LargeTemplate = () => {
  return `
        <button class="icon-button text-lg w-12 h-12" aria-describedby="tooltip-Twitter">    
            <i class="fab fa-twitter"></i>
            <span id="tooltip-Twitter" role="tooltip">Twitter</span>
        </button>

        <button class="icon-button text-lg w-12 h-12" aria-describedby="tooltip-envelope">    
            <i class="fas fa-envelope"></i>
            <span id="tooltip-envelope" role="tooltip">メール</span>
        </button>

        <button class="icon-button text-lg w-12 h-12" aria-describedby="tooltip-home">    
            <i class="fas fa-home"></i>
            <span id="tooltip-home" role="tooltip">ホーム</span>
        </button>

        <button class="icon-button text-lg w-12 h-12" aria-describedby="tooltip-etc">    
            <i class="fas fa-ellipsis-h"></i>
            <span id="tooltip-etc" role="tooltip">その他</span>
        </button>
      `;
};
export const Large = LargeTemplate.bind({});

const SmallTemplate = () => {
  return `
        <button class="icon-button text-xs w-6 h-6" aria-describedby="tooltip-Twitter">    
            <i class="fab fa-twitter"></i>
            <span id="tooltip-Twitter" role="tooltip">Twitter</span>
        </button>

        <button class="icon-button text-xs w-6 h-6" aria-describedby="tooltip-envelope">    
            <i class="fas fa-envelope"></i>
            <span id="tooltip-envelope" role="tooltip">メール</span>
        </button>

        <button class="icon-button text-xs w-6 h-6" aria-describedby="tooltip-home">    
            <i class="fas fa-home"></i>
            <span id="tooltip-home" role="tooltip">ホーム</span>
        </button>

        <button class="icon-button text-xs w-6 h-6" aria-describedby="tooltip-etc">    
            <i class="fas fa-ellipsis-h"></i>
            <span id="tooltip-etc" role="tooltip">その他</span>
        </button>
        `;
};
export const Small = SmallTemplate.bind({});
