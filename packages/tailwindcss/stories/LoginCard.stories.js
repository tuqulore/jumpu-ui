export default {
  title: "Galleries/LoginCard",
};

const Template = () => {
  return `
    <div class="card w-96 mx-auto">
        <div class="p-8">
            <form action="#">
                <div class="text-xl my-4 text-center">ログイン</div>
                <label class="mb-4 block">
                    <div class="text-sm mb-2">アカウント</div>
                    <input type="text" class="text-input w-full" placeholder="example@hoge.com" aria-required="true" required>
                </label>
                <label class="mb-4 block">
                    <div class="text-sm mb-2">パスワード</div>
                    <input type="password" class="text-input w-full" required>
                </label>
                <div class="mb-4">
                    <label class="flex items-center">
                        <input type="checkbox" class="input-check mr-2">
                        <span class="text-sm">次回から自動でログイン</span>
                    </label>
                </div>
                <div class="mb-4">
                    <a class="text-primary-500 text-sm" href="#">ログインにお困りの方はこちら</a>
                </div>
                <input type="submit" class="button w-full" value="ログイン">
            </form>
        </div>
    </div>
    `;
};
export const Default = Template.bind({});

const NotEnteredTemplate = () => {
  return `
      <div class="card w-96 mx-auto">
          <div class="p-8">
              <form action="#">
                  <div class="text-xl my-4 text-center">ログイン</div>
                  <label class="mb-4 block">
                      <div class="text-sm mb-2">アカウント</div>
                      <input type="text" class="text-input w-full" placeholder="example@hoge.com" aria-required="true" required>
                  </label>
                  <label class="mb-4 block">
                      <div class="text-sm mb-2">パスワード</div>
                      <input type="password" class="text-input w-full" required>
                  </label>
                  <div class="mb-4">
                      <label class="flex items-center">
                          <input type="checkbox" class="input-check mr-2">
                          <span class="text-sm">次回から自動でログイン</span>
                      </label>
                  </div>
                  <div class="mb-4">
                    <a class="text-primary-500 text-sm" href="#">ログインにお困りの方はこちら</a>
                  </div>
                  <input type="submit" disabled class="button w-full" value="ログイン">
              </form>
          </div>
      </div>
      `;
};
export const NotEntered = NotEnteredTemplate.bind({});

const InvalidTemplate = () => {
  return `
        <div class="card w-96 mx-auto">
            <div class="p-8">
                <form action="#">
                    <div class="text-xl my-4 text-center">ログイン</div>
                    <div class="rounded-md bg-danger text-xs text-white px-4 py-3 mb-4">
                        申し訳ありません...入力したアカウントが存在しないようです
                    </div>
                    <label class="mb-4 block">
                        <div class="text-sm mb-2">アカウント</div>
                        <input type="text" class="text-input w-full border-danger bg-danger bg-opacity-5" placeholder="example@hoge.com" aria-required="true" required>
                    </label>
                    <label class="mb-4 block">
                        <div class="text-sm mb-2">パスワード</div>
                        <input type="password" class="text-input w-full" required>
                    </label>
                    <div class="mb-4">
                        <label class="flex items-center">
                            <input type="checkbox" class="input-check mr-2">
                            <span class="text-sm">次回から自動でログイン</span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <a class="text-primary-500 text-sm" href="#">ログインにお困りの方はこちら</a>
                    </div>
                    <input type="submit" disabled class="button w-full" value="ログイン">
                </form>
            </div>
        </div>
        `;
};
export const Invalid = InvalidTemplate.bind({});
