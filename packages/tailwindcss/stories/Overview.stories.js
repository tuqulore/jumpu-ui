export default {
  title: "Overview/Introduction",
};

const Template = () => {
  return `
    <div class="introduction prose">
        <h1>Overview</h1>
        <h2>Repo</h2>
        <ul>
          <li>リスト</li>
          <li>リスト</li>
          <li>リスト</li>
        </ul>
        <p>
              <a href="https://github.com/tuqulore/tuqulore-ui/">https://github.com/tuqulore/tuqulore-ui/</a>
        </p>
        <p>
          <a href="#" class="button">ボタン</a>
        </p>
    </div>
    `;
};
export const Default = Template.bind({});
