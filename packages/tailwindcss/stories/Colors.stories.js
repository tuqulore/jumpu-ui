export default {
  title: "Systems/Colors",
};

const Template = () => {
  return `
    <div class="grid grid-cols-10 gap-2 text-center mb-8">
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-50">
            <div class="text-gray-700">50</div>
        </div>
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-100">
            <div class="text-gray-700">100</div>
        </div>
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-200">
            <div class="text-gray-700">200</div>
        </div>
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-300">
            <div class="text-gray-700">300</div>
        </div>
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-400">
            <div class="text-gray-100">400</div>
        </div>
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-500">
            <div class="text-gray-100">500</div>
        </div>
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-600">
            <div class="text-gray-100">600</div>
        </div>
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-700">
            <div class="text-gray-100">700</div>
        </div>
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-800">
            <div class="text-gray-100">800</div>
        </div>
        <div class="rounded-full flex items-center justify-center w-16 h-16 bg-primary-900">
            <div class="text-gray-100">900</div>
        </div>
        
    </div>
    `;
};
export const Primary = Template.bind({});
