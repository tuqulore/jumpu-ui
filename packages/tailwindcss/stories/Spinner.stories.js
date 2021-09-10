export default {
  title: "Loading/Spinner",
};

const Template = () => {
  return `
    <div class="spinner">
        <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20"></circle>
        </svg>
    </div>
    `;
};

export const Default = Template.bind({});

const ColoredTemplate = () => {
  return `
  <div class="spinner text-primary-500">
      <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
      </svg>
  </div>
  <div class="spinner text-red-400">
      <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
      </svg>
  </div>
  <div class="spinner text-purple-400">
      <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
      </svg>
  </div>
  <div class="spinner text-yellow-600">
      <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
      </svg>
  </div>
  <div class="spinner text-pink-500">
      <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
      </svg>
  </div>
  <div class="spinner text-green-500">
      <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
      </svg>
  </div>
    `;
};

export const Colored = ColoredTemplate.bind({});
