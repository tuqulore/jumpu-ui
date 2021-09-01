
export default {
    title: "Cards/Card",
    argTypes: {
        label: { control: 'text' },
    },
};

const Template = ({ label }) => {
    return `<div class="card">${label}</div>`;
};

export const Default = Template.bind({});
Default.args = {
    label: "カード",
};
