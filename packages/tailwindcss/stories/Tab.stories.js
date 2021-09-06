export default {
  title: "Tab/Default",
};

const Template = () => {
  return `
  <div class="tabs">
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
  <div class="tabs tabs-boxed">
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
