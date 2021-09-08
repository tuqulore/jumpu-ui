export default {
  title: "Spinner/Spinner",
};

const Template = () => {
  return `
    <div class="spinner">
        <svg viewBox="25 25 50 50" class="circular">
            <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
    </div>
    `;
};

export const Default = Template.bind({});
