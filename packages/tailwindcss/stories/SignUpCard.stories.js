export default {
  title: "Galleries/SignUpCard",
};

const Template = () => {
  return `
    <div class="card w-96 mx-auto">
        <div class="p-8">
            <form action="#">
                <div class="text-xl my-4 text-center">新規登録</div>
                <label class="mb-4 block relative">
                    <div class="text-sm mb-2">メールアドレス</div>
                    <input type="text" class="text-input w-full" placeholder="example@hoge.com" aria-required="true" required>
                </label>
                <label class="mb-4 block relative">
                    <div class="text-sm mb-2">パスワード</div>
                    <input type="password" class="text-input w-full" required>
                </label>
                <label class="mb-6 block relative">
                    <div class="text-sm mb-2">確認用パスワード（上記と同じもの）</div>
                    <input type="password" class="text-input w-full" required>
                </label>
                <div class="mb-6 bg-warning bg-opacity-10 rounded-md">
                    <label class="flex px-4 py-3">
                        <input type="checkbox" class="input-check mr-2">
                        <div class="text-sm">
                            <a class="text-primary-500" href="#">ご利用規約</a>
                            を読んで内容に同意しました
                        </div>
                    </label>
                </div>
                <input type="submit" class="button w-full" value="登録する">
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
                <div class="text-xl my-4 text-center">新規登録</div>
                <label class="mb-4 block relative">
                    <div class="text-sm mb-2">メールアドレス</div>
                    <input type="text" class="text-input w-full" placeholder="example@hoge.com" aria-required="true" required>
                </label>
                <label class="mb-4 block relative">
                    <div class="text-sm mb-2">パスワード</div>
                    <input type="password" class="text-input w-full" required>
                </label>
                <label class="mb-6 block relative">
                    <div class="text-sm mb-2">確認用パスワード（上記と同じもの）</div>
                    <input type="password" class="text-input w-full" required>
                </label>
                <div class="mb-6 bg-warning bg-opacity-10 rounded-md">
                    <label class="flex px-4 py-3">
                        <input type="checkbox" class="input-check mr-2">
                        <div class="text-sm">
                            <a class="text-primary-500" href="#">ご利用規約</a>
                            を読んで内容に同意しました
                        </div>
                    </label>
                </div>
                <input type="submit" disabled class="button w-full" value="登録する">
            </form>
        </div>
    </div>
      `;
};
export const NotEntered = NotEnteredTemplate.bind({});

const ValidTemplate = () => {
  return `
  <div class="card w-96 mx-auto">
        <div class="p-8">
            <form action="#">
                <div class="text-xl my-4 text-center">新規登録</div>
                <label class="mb-4 block relative">
                    <div class="text-sm mb-2">メールアドレス</div>
                    <input type="text" class="text-input w-full" placeholder="example@hoge.com" aria-required="true" required>
                    <i class="fas fa-check absolute text-success right-3 top-1/2 transform translate-y-1/2"></i>
                </label>
                <label class="mb-4 block relative">
                    <div class="text-sm mb-2">パスワード</div>
                    <input type="password" class="text-input w-full" required>
                    <i class="fas fa-check absolute text-success right-3 top-1/2 transform translate-y-1/2"></i>
                </label>
                <label class="mb-6 block relative">
                    <div class="text-sm mb-2">確認用パスワード（上記と同じもの）</div>
                    <input type="password" class="text-input w-full" required>
                    <i class="fas fa-check absolute text-success right-3 top-1/2 transform translate-y-1/2"></i>
                </label>
                <div class="mb-6 bg-warning bg-opacity-10 rounded-md">
                    <label class="flex px-4 py-3">
                        <input type="checkbox" class="input-check mr-2">
                        <div class="text-sm">
                            <a class="text-primary-500" href="#">ご利用規約</a>
                            を読んで内容に同意しました
                        </div>
                    </label>
                </div>
                <input type="submit" class="button w-full" value="登録する">
            </form>
        </div>
    </div>
        `;
};
export const Valid = ValidTemplate.bind({});

const InvalidTemplate = () => {
  return `
    <div class="card w-96 mx-auto">
        <div class="p-8">
            <form action="#">
                <div class="text-xl my-4 text-center">新規登録</div>
                <div class="rounded-md bg-danger text-xs text-white px-4 py-3 mb-4">
                    正しいメールアドレスを入力してください<br>
                    パスワードが違うようです...<br>
                    ご利用規約への同意が必要です
                </div>
                <label class="mb-4 block relative">
                    <div class="text-sm mb-2">メールアドレス</div>
                    <input type="text" class="text-input w-full border-danger bg-danger bg-opacity-5" placeholder="example@hoge.com" aria-required="true" required>
                </label>
                <label class="mb-4 block relative">
                    <div class="text-sm mb-2">パスワード</div>
                    <input type="password" class="text-input w-full border-danger bg-danger bg-opacity-5" required>
                </label>
                <label class="mb-6 block relative">
                    <div class="text-sm mb-2">確認用パスワード（上記と同じもの）</div>
                    <input type="password" class="text-input w-full border-danger bg-danger bg-opacity-5" required>
                </label>
                <div class="mb-6 bg-danger bg-opacity-10 rounded-md">
                    <label class="flex px-4 py-3">
                        <input type="checkbox" class="input-check mr-2">
                        <div class="text-sm">
                            <a class="text-primary-500" href="#">ご利用規約</a>
                            を読んで内容に同意しました
                        </div>
                    </label>
                </div>
                <input type="submit" disabled class="button w-full" value="登録する">
            </form>
        </div>
    </div>
        `;
};
export const Invalid = InvalidTemplate.bind({});