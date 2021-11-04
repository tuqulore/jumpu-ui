const html = require("./html");

export default {
  title: "Menus/Tabs",
};

const Template = () => {
  return html`
    <div class="tabs">
      <div role="tablist" aria-label="Sample BoxedTabs">
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-1"
          id="tab-1"
          tabindex="0"
        >
          ホーム
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          id="tab-2"
          tabindex="-1"
        >
          タスク
        </button>
        <button
          role="tab"
          aria-selected="true"
          aria-controls="panel-3"
          id="tab-3"
          tabindex="-1"
        >
          実績
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-4"
          id="tab-4"
          tabindex="-1"
        >
          会話
        </button>
      </div>
    </div>
  `;
};
export const Default = Template.bind({});

const AnchorTemplate = () => {
  return html`
    <div class="tabs">
      <div role="tablist" aria-label="Sample BoxedTabs">
        <a
          href="#"
          role="tab"
          aria-selected="false"
          aria-controls="panel-1"
          id="tab-1"
          tabindex="0"
          >ホーム</a
        >
        <a
          href="#"
          role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          id="tab-2"
          tabindex="-1"
          >タスク</a
        >
        <a
          href="#"
          role="tab"
          aria-selected="true"
          aria-controls="panel-3"
          id="tab-3"
          tabindex="-1"
          >実績</a
        >
        <a
          href="#"
          role="tab"
          aria-selected="false"
          aria-controls="panel-4"
          id="tab-4"
          tabindex="-1"
          >会話</a
        >
      </div>
    </div>
  `;
};
export const Anchor = AnchorTemplate.bind({});

const SmallTemplate = () => {
  return html`
    <div class="tabs">
      <div class="text-sm" role="tablist" aria-label="Sample BoxedTabs">
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-1"
          id="tab-1"
          tabindex="0"
        >
          ホーム
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          id="tab-2"
          tabindex="-1"
        >
          タスク
        </button>
        <button
          role="tab"
          aria-selected="true"
          aria-controls="panel-3"
          id="tab-3"
          tabindex="-1"
        >
          実績
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-4"
          id="tab-4"
          tabindex="-1"
        >
          会話
        </button>
      </div>
    </div>
  `;
};
export const Small = SmallTemplate.bind({});
