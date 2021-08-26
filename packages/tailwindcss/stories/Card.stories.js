import clsx from "clsx";

export default {
    title: "Card",
    argTypes: {
        shadow: { control: 'boolean' },
    },
};

const Template = ({ label, shadow, ...args }) => {
    return `<div class="${clsx(
        "card",
        { "card-shadow": shadow },
    )}">${label}</div>`;
};

export const Default = Template.bind({});
Default.args = {
    label: "カード",
};
