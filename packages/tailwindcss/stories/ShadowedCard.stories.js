
export default {
    title: "Cards/ShadowedCard",
    argTypes: {
        label: { control: 'text' },
    },
};

const Template = ({ label}) => {
    return `<div class="shadowed-card">${label}</div>`;
};

export const Default = Template.bind({});
Default.args = {
    label: "カード",
};
