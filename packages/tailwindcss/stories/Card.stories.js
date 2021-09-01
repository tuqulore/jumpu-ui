export default {
  title: "Cards/Card",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = ({ label }) => {
  return `
        <div class="card px-4 py-3 mb-4">${label}</div> 
    `;
};

export const Default = Template.bind({});
Default.args = {
  label: "カード",
};

const ShadowedTemplate = ({ label }) => {
  return `
        <div class="card px-4 py-3 border-0 shadow-lg">${label}</div>    
    `;
};

export const Shadowed = ShadowedTemplate.bind({});
Shadowed.args = {
  label: "カード",
};
