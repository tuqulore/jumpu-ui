export default {
  title: "Status/Badge",
};

const Template = () => {
  return `
    <div class="p-4">
        <div class="badge bg-gray-100 ">100</div>
        <div class="badge bg-green-100 text-green-800">16</div>
        <div class="badge bg-red-100 text-red-800">2</div>
        <div class="badge bg-yellow-100 text-yellow-800">312</div>
        <div class="badge bg-pink-100 text-pink-800">18</div>
        <div class="badge bg-gray-100 text-gray-800">7</div>
        <div class="badge bg-blue-100 text-blue-800">89</div>
        <div class="badge bg-indigo-100 text-indigo-800">32</div>
        <div class="badge bg-purple-100 text-purple-800">1</div>
    </div>
    `;
};
export const Default = Template.bind({});

const SmallTemplate = () => {
  return `
      <div class="p-4">
          <div class="badge text-xs bg-gray-100 ">100</div>
          <div class="badge text-xs bg-green-100 text-green-800">16</div>
          <div class="badge text-xs bg-red-100 text-red-800">2</div>
          <div class="badge text-xs bg-yellow-100 text-yellow-800">312</div>
          <div class="badge text-xs bg-pink-100 text-pink-800">18</div>
          <div class="badge text-xs bg-gray-100 text-gray-800">7</div>
          <div class="badge text-xs bg-blue-100 text-blue-800">89</div>
          <div class="badge text-xs bg-indigo-100 text-indigo-800">32</div>
          <div class="badge text-xs bg-purple-100 text-purple-800">1</div>
      </div>
      `;
};
export const Small = SmallTemplate.bind({});
