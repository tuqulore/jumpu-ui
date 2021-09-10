export default {
  title: "Forms/ToggleSwitch",
};

const Template = () => {
  return `
    <div class="toggle-switch w-16 h-8">
      <input id="default" type='checkbox' />
      <label for="default" />
      <span class="w-8 h-8"></span>
    </div> 
    `;
};
export const Default = Template.bind({});

const SmallTemplate = () => {
  return `
    <div class="toggle-switch w-8 h-4">
      <input id="small" type='checkbox' />
      <label for="small" />
      <span class="w-4 h-4"></span>
    </div> 
    `;
};
export const Small = SmallTemplate.bind({});
