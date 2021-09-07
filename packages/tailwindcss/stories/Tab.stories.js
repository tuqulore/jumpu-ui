export default {
  title: "Menus/Tab",
};

const Template = () => {
  return `
  <div class="tab">
    <ul>
        <li class=""><a>ホーム</a></li>
        <li class=""><a>タスク</a></li>
        <li class="is-active"><a>実績</a></li>
        <li><a>会話</a></li>
    </ul>
  </div>
    `;
};
export const Default = Template.bind({});

const BoxedTemplate = () => {
  return `
  <div class="tab tab-boxed">
    <ul>
        <li class="is-active"><a>ホーム</a></li>
        <li><a>タスク</a></li>
        <li><a>実績</a></li>
        <li><a>会話</a></li>
    </ul>
  </div>
     `;
};
export const Boxed = BoxedTemplate.bind({});
