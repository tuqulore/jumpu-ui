const html = require("./html");

export default {
  title: "Loading/Spinner",
};

const Template = () => {
  return html`
    <div class="spinner">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  `;
};

export const Default = Template.bind({});

const SizedTemplate = () => {
  return html`
    <div class="flex items-center">
      <div class="spinner w-4 h-4">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
      <div class="spinner w-6 h-6">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
      <div class="spinner w-8 h-8">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
      <div class="spinner w-16 h-16">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
    </div>
  `;
};

export const Sized = SizedTemplate.bind({});

const ColoredTemplate = () => {
  return html`
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
