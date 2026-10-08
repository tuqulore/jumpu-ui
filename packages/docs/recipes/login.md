# ログイン

登録済みの利用者に、本人であることを確認させる場面です。

## 設計の指針

入力欄は**メールアドレスとパスワードの 2 つ**に絞ります。
項目が増えるほど離脱します。

誤りは、どの欄が問題なのかがわかるように示します。
`border-danger` で欄そのものを示し、加えて文章でも伝えてください。
色だけで示すと、色の区別がつきにくい利用者に伝わりません。

「メールアドレスかパスワードが違います」のように、**どちらが違うのかを明かさない**書き方にします。
どちらが正しいかを教えると、登録済みのメールアドレスを探る手がかりになります。

主要な操作はログインの 1 つです。
「パスワードを忘れた場合」は [TextButton](/components/text-button) など、控えめな見た目にします。

## 例

### 通常

:::raw

<div class="jumpu-card w-96 mx-auto">
  <div class="p-8">
    <form action="#">
      <div class="text-xl my-4 text-center">ログイン</div>
      <label class="mb-4 block">
        <span class="text-sm mb-2 block">アカウント</span>
        <input
          type="text"
          class="jumpu-input w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="mb-4 block">
        <span class="text-sm mb-2 block">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="mb-4">
        <label class="flex items-center">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">次回から自動でログイン</span>
        </label>
      </div>
      <div class="mb-4">
        <a class="text-primary-700 text-sm" href="#"
          >ログインにお困りの方はこちら</a
        >
      </div>
      <input type="submit" class="jumpu-button w-full" value="ログイン" />
    </form>
  </div>
</div>

:::

```html
<div class="jumpu-card mx-auto w-96">
  <div class="p-8">
    <form action="#">
      <div class="my-4 text-center text-xl">ログイン</div>
      <label class="mb-4 block">
        <span class="mb-2 block text-sm">アカウント</span>
        <input
          type="text"
          class="jumpu-input w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="mb-4 block">
        <span class="mb-2 block text-sm">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="mb-4">
        <label class="flex items-center">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">次回から自動でログイン</span>
        </label>
      </div>
      <div class="mb-4">
        <a class="text-primary-700 text-sm" href="#"
          >ログインにお困りの方はこちら</a
        >
      </div>
      <input type="submit" class="jumpu-button w-full" value="ログイン" />
    </form>
  </div>
</div>
```

### 未入力

:::raw

<div class="jumpu-card w-96 mx-auto">
  <div class="p-8">
    <form action="#">
      <div class="text-xl my-4 text-center">ログイン</div>
      <label class="mb-4 block">
        <span class="text-sm mb-2 block">アカウント</span>
        <input
          type="text"
          class="jumpu-input w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="mb-4 block">
        <span class="text-sm mb-2 block">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="mb-4">
        <label class="flex items-center">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">次回から自動でログイン</span>
        </label>
      </div>
      <div class="mb-4">
        <a class="text-primary-700 text-sm" href="#"
          >ログインにお困りの方はこちら</a
        >
      </div>
      <input
        type="submit"
        disabled
        class="jumpu-button w-full"
        value="ログイン"
      />
    </form>
  </div>
</div>

:::

```html
<div class="jumpu-card mx-auto w-96">
  <div class="p-8">
    <form action="#">
      <div class="my-4 text-center text-xl">ログイン</div>
      <label class="mb-4 block">
        <span class="mb-2 block text-sm">アカウント</span>
        <input
          type="text"
          class="jumpu-input w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="mb-4 block">
        <span class="mb-2 block text-sm">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="mb-4">
        <label class="flex items-center">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">次回から自動でログイン</span>
        </label>
      </div>
      <div class="mb-4">
        <a class="text-primary-700 text-sm" href="#"
          >ログインにお困りの方はこちら</a
        >
      </div>
      <input
        type="submit"
        disabled
        class="jumpu-button w-full"
        value="ログイン"
      />
    </form>
  </div>
</div>
```

### 入力に誤りがあるとき

:::raw

<div class="jumpu-card w-96 mx-auto">
  <div class="p-8">
    <form action="#">
      <div class="text-xl my-4 text-center">ログイン</div>
      <div class="rounded-md bg-danger text-xs text-white px-4 py-3 mb-4">
        申し訳ありません...入力したアカウントが存在しないようです
      </div>
      <label class="mb-4 block">
        <span class="text-sm mb-2 block">アカウント</span>
        <input
          type="text"
          class="jumpu-input w-full border-danger bg-danger/5"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="mb-4 block">
        <span class="text-sm mb-2 block">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="mb-4">
        <label class="flex items-center">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">次回から自動でログイン</span>
        </label>
      </div>
      <div class="mb-4">
        <a class="text-primary-700 text-sm" href="#"
          >ログインにお困りの方はこちら</a
        >
      </div>
      <input
        type="submit"
        disabled
        class="jumpu-button w-full"
        value="ログイン"
      />
    </form>
  </div>
</div>

:::

```html
<div class="jumpu-card mx-auto w-96">
  <div class="p-8">
    <form action="#">
      <div class="my-4 text-center text-xl">ログイン</div>
      <div class="bg-danger mb-4 rounded-md px-4 py-3 text-xs text-white">
        申し訳ありません...入力したアカウントが存在しないようです
      </div>
      <label class="mb-4 block">
        <span class="mb-2 block text-sm">アカウント</span>
        <input
          type="text"
          class="jumpu-input border-danger bg-danger/5 w-full"
          placeholder="example@hoge.com"
          aria-required="true"
          required
        />
      </label>
      <label class="mb-4 block">
        <span class="mb-2 block text-sm">パスワード</span>
        <input type="password" class="jumpu-input w-full" required />
      </label>
      <div class="mb-4">
        <label class="flex items-center">
          <input type="checkbox" class="jumpu-input mr-2" />
          <span class="text-sm">次回から自動でログイン</span>
        </label>
      </div>
      <div class="mb-4">
        <a class="text-primary-700 text-sm" href="#"
          >ログインにお困りの方はこちら</a
        >
      </div>
      <input
        type="submit"
        disabled
        class="jumpu-button w-full"
        value="ログイン"
      />
    </form>
  </div>
</div>
```
