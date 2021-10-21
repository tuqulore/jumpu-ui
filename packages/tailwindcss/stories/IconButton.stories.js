export default {
  title: "Buttons/IconButton",
};

const Template = () => {
  return `
        <button class="icon-button" aria-label="Twitter">    
            <i class="fab fa-twitter"></i>
        </button>

        <button class="icon-button" aria-label="Email">    
            <i class="fas fa-envelope"></i>
        </button>

        <button class="icon-button" aria-label="ホーム">    
            <i class="fas fa-home"></i>
        </button>

        <button class="icon-button" aria-label="その他">    
            <i class="fas fa-ellipsis-h"></i>
        </button>
    `;
};
export const Default = Template.bind({});

const TooltipTemplate = () => {
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
export const Tooltip = TooltipTemplate.bind({});

const AnchorTemplate = () => {
  return `
          <a href="#" class="icon-button" aria-label="Twitter">    
              <i class="fab fa-twitter"></i>
          </a>
  
          <a href="#" class="icon-button" aria-label="Email">    
              <i class="fas fa-envelope"></i>
          </a>
  
          <a href="#" class="icon-button" aria-label="ホーム">    
              <i class="fas fa-home"></i>
          </a>
  
          <a href="#" class="icon-button" aria-label="その他">    
              <i class="fas fa-ellipsis-h"></i>
          </a>
      `;
};
export const Anchor = AnchorTemplate.bind({});

const TooltipAnchorTemplate = () => {
  return `
    <a href="#" class="icon-button" aria-describedby="tooltip-Twitter">    
        <i class="fab fa-twitter"></i>
        <span id="tooltip-Twitter" role="tooltip">Twitter</span>
    </a>

    <a href="#" class="icon-button" aria-describedby="tooltip-envelope">    
        <i class="fas fa-envelope"></i>
        <span id="tooltip-envelope" role="tooltip">メール</span>
    </a>

    <a href="#" class="icon-button" aria-describedby="tooltip-home">    
        <i class="fas fa-home"></i>
        <span id="tooltip-home" role="tooltip">ホーム</span>
    </a>

    <a href="#" class="icon-button" aria-describedby="tooltip-etc">    
        <i class="fas fa-ellipsis-h"></i>
        <span id="tooltip-etc" role="tooltip">その他</span>
    </a>
    `;
};
export const TooltipAnchor = TooltipAnchorTemplate.bind({});

const LargeTemplate = () => {
  return `
        <button class="icon-button text-lg w-12 h-12" aria-label="Twitter">    
            <i class="fab fa-twitter"></i>
        </button>

        <button class="icon-button text-lg w-12 h-12" aria-label="Email">    
            <i class="fas fa-envelope"></i>
        </button>

        <button class="icon-button text-lg w-12 h-12" aria-label="ホーム">    
            <i class="fas fa-home"></i>
        </button>

        <button class="icon-button text-lg w-12 h-12" aria-label="その他">    
            <i class="fas fa-ellipsis-h"></i>
        </button>
      `;
};
export const Large = LargeTemplate.bind({});

const SmallTemplate = () => {
  return `
        <button class="icon-button text-xs w-6 h-6" aria-label="Twitter">    
            <i class="fab fa-twitter"></i>
        </button>

        <button class="icon-button text-xs w-6 h-6" aria-label="Email">    
            <i class="fas fa-envelope"></i>
        </button>

        <button class="icon-button text-xs w-6 h-6" aria-label="ホーム">    
            <i class="fas fa-home"></i>
        </button>

        <button class="icon-button text-xs w-6 h-6" aria-label="その他">    
            <i class="fas fa-ellipsis-h"></i>
        </button>
        `;
};
export const Small = SmallTemplate.bind({});
