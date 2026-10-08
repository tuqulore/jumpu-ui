# サインアップ

新しい利用者に、アカウントを作らせる場面です。

## 設計の指針

入力の要件は**入力させる前に**示します。
送信してから「8 文字以上必要です」と伝えるのでは遅すぎます。

条件を満たしたことも伝えてください。
満たしている項目に印を出すと、あとどれだけ必要かがわかります。

利用規約への同意は、チェックボックスで明示的に取ります。
「登録すると同意したことになります」という書き方では、同意した記録になりません。

エラーの色は [danger](/tokens/colors#ステータス)、注意の色は [warning](/tokens/colors#ステータス)、完了の印は [success](/tokens/colors#ステータス) を使います。

## 例

### 通常

:::raw

<div class="jumpu-card w-96 mx-auto">
  <div class="p-8">
    <form action="#">
      <div class="text-xl my-4 text-center">新規登録</div>
      <label class="mb-4 block relative">
        <span class="text-sm mb-2 block">メールアドレス</span>
        <input
          type="text"
          class="jumpu-input w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="mb-4 block relative">
        <span class="text-sm mb-2 block">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <label class="mb-6 block relative">
        <span class="text-sm mb-2 block"
          >確認用パスワード（上記と同じもの）</span
        >
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="mb-6 bg-warning/10 rounded-md">
        <label class="flex px-4 py-3">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">
            <a class="text-primary-500" href="#">ご利用規約</a>
            を読んで内容に同意しました
          </span>
        </label>
      </div>
      <input type="submit" class="jumpu-button w-full" value="登録する" />
    </form>
  </div>
</div>

:::

```html
<div class="jumpu-card mx-auto w-96">
  <div class="p-8">
    <form action="#">
      <div class="my-4 text-center text-xl">新規登録</div>
      <label class="relative mb-4 block">
        <span class="mb-2 block text-sm">メールアドレス</span>
        <input
          type="text"
          class="jumpu-input w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="relative mb-4 block">
        <span class="mb-2 block text-sm">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <label class="relative mb-6 block">
        <span class="mb-2 block text-sm"
          >確認用パスワード（上記と同じもの）</span
        >
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="bg-warning/10 mb-6 rounded-md">
        <label class="flex px-4 py-3">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">
            <a class="text-primary-500" href="#">ご利用規約</a>
            を読んで内容に同意しました
          </span>
        </label>
      </div>
      <input type="submit" class="jumpu-button w-full" value="登録する" />
    </form>
  </div>
</div>
```

### 未入力

:::raw

<div class="jumpu-card w-96 mx-auto">
  <div class="p-8">
    <form action="#">
      <div class="text-xl my-4 text-center">新規登録</div>
      <label class="mb-4 block relative">
        <span class="text-sm mb-2 block">メールアドレス</span>
        <input
          type="text"
          class="jumpu-input w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="mb-4 block relative">
        <span class="text-sm mb-2 block">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <label class="mb-6 block relative">
        <span class="text-sm mb-2 block"
          >確認用パスワード（上記と同じもの）</span
        >
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="mb-6 bg-warning/10 rounded-md">
        <label class="flex px-4 py-3">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">
            <a class="text-primary-500" href="#">ご利用規約</a>
            を読んで内容に同意しました
          </span>
        </label>
      </div>
      <input
        type="submit"
        disabled
        class="jumpu-button w-full"
        value="登録する"
      />
    </form>
  </div>
</div>

:::

```html
<div class="jumpu-card mx-auto w-96">
  <div class="p-8">
    <form action="#">
      <div class="my-4 text-center text-xl">新規登録</div>
      <label class="relative mb-4 block">
        <span class="mb-2 block text-sm">メールアドレス</span>
        <input
          type="text"
          class="jumpu-input w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="relative mb-4 block">
        <span class="mb-2 block text-sm">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <label class="relative mb-6 block">
        <span class="mb-2 block text-sm"
          >確認用パスワード（上記と同じもの）</span
        >
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="bg-warning/10 mb-6 rounded-md">
        <label class="flex px-4 py-3">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">
            <a class="text-primary-500" href="#">ご利用規約</a>
            を読んで内容に同意しました
          </span>
        </label>
      </div>
      <input
        type="submit"
        disabled
        class="jumpu-button w-full"
        value="登録する"
      />
    </form>
  </div>
</div>
```

### 条件を満たしたとき

:::raw

<div class="jumpu-card w-96 mx-auto">
  <div class="p-8">
    <form action="#">
      <div class="text-xl my-4 text-center">新規登録</div>
      <label class="mb-4 block relative">
        <span class="text-sm mb-2 block">メールアドレス</span>
        <input
          type="text"
          class="jumpu-input w-full"
          value="example@hoge.com"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
        <i
          class="fas fa-check absolute text-success right-3 top-1/2 transform translate-y-1/2"
        ></i>
      </label>
      <label class="mb-4 block relative">
        <div class="text-sm mb-2">パスワード</div>
        <input
          type="password"
          class="jumpu-input w-full"
          value="password"
          required
        />
        <i
          class="fas fa-check absolute text-success right-3 top-1/2 transform translate-y-1/2"
        ></i>
      </label>
      <label class="mb-6 block relative">
        <div class="text-sm mb-2">確認用パスワード（上記と同じもの）</div>
        <input
          type="password"
          class="jumpu-input w-full"
          required
          value="password"
        />
        <i
          class="fas fa-check absolute text-success right-3 top-1/2 transform translate-y-1/2"
        ></i>
      </label>
      <div class="mb-6 bg-warning/10 rounded-md">
        <label class="flex px-4 py-3">
          <input type="checkbox" class="jumpu-input mr-2" checked />
          <span class="text-sm">
            <a class="text-primary-500" href="#">ご利用規約</a>
            を読んで内容に同意しました
          </span>
        </label>
      </div>
      <input type="submit" class="jumpu-button w-full" value="登録する" />
    </form>
  </div>
</div>

:::

```html
<div class="jumpu-card mx-auto w-96">
  <div class="p-8">
    <form action="#">
      <div class="my-4 text-center text-xl">新規登録</div>
      <label class="relative mb-4 block">
        <span class="mb-2 block text-sm">メールアドレス</span>
        <input
          type="text"
          class="jumpu-input w-full"
          value="example@hoge.com"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
        <i
          class="fas fa-check text-success absolute top-1/2 right-3 translate-y-1/2 transform"
        ></i>
      </label>
      <label class="relative mb-4 block">
        <div class="mb-2 text-sm">パスワード</div>
        <input
          type="password"
          class="jumpu-input w-full"
          value="password"
          required
        />
        <i
          class="fas fa-check text-success absolute top-1/2 right-3 translate-y-1/2 transform"
        ></i>
      </label>
      <label class="relative mb-6 block">
        <div class="mb-2 text-sm">確認用パスワード（上記と同じもの）</div>
        <input
          type="password"
          class="jumpu-input w-full"
          required
          value="password"
        />
        <i
          class="fas fa-check text-success absolute top-1/2 right-3 translate-y-1/2 transform"
        ></i>
      </label>
      <div class="bg-warning/10 mb-6 rounded-md">
        <label class="flex px-4 py-3">
          <input type="checkbox" class="jumpu-input mr-2" checked />
          <span class="text-sm">
            <a class="text-primary-500" href="#">ご利用規約</a>
            を読んで内容に同意しました
          </span>
        </label>
      </div>
      <input type="submit" class="jumpu-button w-full" value="登録する" />
    </form>
  </div>
</div>
```

### 入力に誤りがあるとき

:::raw

<div class="jumpu-card w-96 mx-auto">
  <div class="p-8">
    <form action="#">
      <div class="text-xl my-4 text-center">新規登録</div>
      <div class="rounded-md bg-danger text-xs text-white px-4 py-3 mb-4">
        正しいメールアドレスを入力してください<br />
        パスワードが違うようです...<br />
        ご利用規約への同意が必要です
      </div>
      <label class="mb-4 block relative">
        <span class="text-sm mb-2 block">メールアドレス</span>
        <input
          type="text"
          class="jumpu-input w-full border-danger bg-danger/5"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="mb-4 block relative">
        <div class="text-sm mb-2">パスワード</div>
        <input
          type="password"
          class="jumpu-input w-full border-danger bg-danger/5"
          required
        />
      </label>
      <label class="mb-6 block relative">
        <div class="text-sm mb-2">確認用パスワード（上記と同じもの）</div>
        <input
          type="password"
          class="jumpu-input w-full border-danger bg-danger/5"
          required
        />
      </label>
      <div class="mb-6 bg-danger/10 rounded-md">
        <label class="flex px-4 py-3">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">
            <a class="text-primary-500" href="#">ご利用規約</a>
            を読んで内容に同意しました
          </span>
        </label>
      </div>
      <input
        type="submit"
        disabled
        class="jumpu-button w-full"
        value="登録する"
      />
    </form>
  </div>
</div>

:::

```html
<div class="jumpu-card mx-auto w-96">
  <div class="p-8">
    <form action="#">
      <div class="my-4 text-center text-xl">新規登録</div>
      <div class="bg-danger mb-4 rounded-md px-4 py-3 text-xs text-white">
        正しいメールアドレスを入力してください<br />
        パスワードが違うようです...<br />
        ご利用規約への同意が必要です
      </div>
      <label class="relative mb-4 block">
        <span class="mb-2 block text-sm">メールアドレス</span>
        <input
          type="text"
          class="jumpu-input border-danger bg-danger/5 w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="relative mb-4 block">
        <div class="mb-2 text-sm">パスワード</div>
        <input
          type="password"
          class="jumpu-input border-danger bg-danger/5 w-full"
          required
        />
      </label>
      <label class="relative mb-6 block">
        <div class="mb-2 text-sm">確認用パスワード（上記と同じもの）</div>
        <input
          type="password"
          class="jumpu-input border-danger bg-danger/5 w-full"
          required
        />
      </label>
      <div class="bg-danger/10 mb-6 rounded-md">
        <label class="flex px-4 py-3">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">
            <a class="text-primary-500" href="#">ご利用規約</a>
            を読んで内容に同意しました
          </span>
        </label>
      </div>
      <input
        type="submit"
        disabled
        class="jumpu-button w-full"
        value="登録する"
      />
    </form>
  </div>
</div>
```
