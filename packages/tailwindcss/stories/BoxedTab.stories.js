export default {
  title: "Menus/BoxedTabs",
};

const Template = () => {
  return `
  <div class="boxed-tabs">
    <div role="tablist" aria-label="Sample BoxedTabs">
      <button role="tab" aria-selected="false" aria-controls="panel-1" id="tab-1" tabindex="0">ホーム</button>
      <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">タスク</button>
      <button role="tab" aria-selected="true" aria-controls="panel-3" id="tab-3" tabindex="-1">実績</button>
      <button role="tab" aria-selected="false" aria-controls="panel-4" id="tab-4" tabindex="-1">会話</button>
    </div>
  </div>
    `;
};
export const Default = Template.bind({});

const SmallTemplate = () => {
  return `
  <div class="boxed-tabs">
    <div class="text-sm" role="tablist" aria-label="Sample BoxedTabs">
      <button role="tab" aria-selected="false" aria-controls="panel-1" id="tab-1" tabindex="0">ホーム</button>
      <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">タスク</button>
      <button role="tab" aria-selected="true" aria-controls="panel-3" id="tab-3" tabindex="-1">実績</button>
      <button role="tab" aria-selected="false" aria-controls="panel-4" id="tab-4" tabindex="-1">会話</button>
    </div>
  </div>
    `;
};
export const Small = SmallTemplate.bind({});
