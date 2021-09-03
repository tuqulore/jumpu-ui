export default {
  title: "Forms/ToggleSwitch",
};

const ToggleSwitchTemplate = () => {
  return `
    <div class="switch">
      <input id="toggle" class="switch-input" type='checkbox' />
      <label for="toggle" class="switch-label"/>
        <span></span>
    </div> 
    `;
};
export const Default = ToggleSwitchTemplate.bind({});
