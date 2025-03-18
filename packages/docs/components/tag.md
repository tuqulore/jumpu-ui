# Tag

## Default

:::raw

<div class="flex flex-wrap gap-1">
  <div class="jumpu-tag ">デフォルト</div>
  <div class="jumpu-tag bg-green-100">検討中</div>
  <div class="jumpu-tag bg-red-100">着手</div>
  <div class="jumpu-tag bg-yellow-100">作業済</div>
  <div class="jumpu-tag bg-pink-100">確認中</div>
  <div class="jumpu-tag bg-gray-100">ペンディング</div>
  <div class="jumpu-tag bg-blue-100">TypeScript</div>
  <div class="jumpu-tag bg-indigo-100">Git</div>
  <div class="jumpu-tag bg-purple-100">Design</div>
</div>

:::

```html
<div class="flex flex-wrap gap-1">
  <div class="jumpu-tag">デフォルト</div>
  <div class="jumpu-tag bg-green-100">検討中</div>
  <div class="jumpu-tag bg-red-100">着手</div>
  <div class="jumpu-tag bg-yellow-100">作業済</div>
  <div class="jumpu-tag bg-pink-100">確認中</div>
  <div class="jumpu-tag bg-gray-100">ペンディング</div>
  <div class="jumpu-tag bg-blue-100">TypeScript</div>
  <div class="jumpu-tag bg-indigo-100">Git</div>
  <div class="jumpu-tag bg-purple-100">Design</div>
</div>
```

## Rounded

:::raw

<div class="flex flex-wrap gap-1">
  <div class="jumpu-tag rounded-full ">デフォルト</div>
  <div class="jumpu-tag rounded-full bg-green-100">検討中</div>
  <div class="jumpu-tag rounded-full bg-red-100">着手</div>
  <div class="jumpu-tag rounded-full bg-yellow-100">作業済</div>
  <div class="jumpu-tag rounded-full bg-pink-100">確認中</div>
  <div class="jumpu-tag rounded-full bg-gray-100">ペンディング</div>
  <div class="jumpu-tag rounded-full bg-blue-100">TypeScript</div>
  <div class="jumpu-tag rounded-full bg-indigo-100">Git</div>
  <div class="jumpu-tag rounded-full bg-purple-100">Design</div>
</div>
:::

```html
<div class="flex flex-wrap gap-1">
  <div class="jumpu-tag rounded-full">デフォルト</div>
  <div class="jumpu-tag rounded-full bg-green-100">検討中</div>
  <div class="jumpu-tag rounded-full bg-red-100">着手</div>
  <div class="jumpu-tag rounded-full bg-yellow-100">作業済</div>
  <div class="jumpu-tag rounded-full bg-pink-100">確認中</div>
  <div class="jumpu-tag rounded-full bg-gray-100">ペンディング</div>
  <div class="jumpu-tag rounded-full bg-blue-100">TypeScript</div>
  <div class="jumpu-tag rounded-full bg-indigo-100">Git</div>
  <div class="jumpu-tag rounded-full bg-purple-100">Design</div>
</div>
```

## Anchor

:::raw

<a href="#" class="jumpu-tag">デフォルト</a>

:::

```html
<a href="#" class="jumpu-tag">デフォルト</a>
```

## Button

:::raw

<button class="jumpu-tag">デフォルト</button>

:::

```html
<button class="jumpu-tag">デフォルト</button>
```

## Other Clickable Element

:::raw

<div class="jumpu-tag" tabindex="0" role="button">デフォルト</div>

:::

```html
<div class="jumpu-tag" tabindex="0" role="button">デフォルト</div>
```

## Closable

閉じるボタンをつけるときは、必ずタグをクリックできない要素にしてください。

:::raw

<div class="jumpu-tag">
  デフォルト
  <div role="button" aria-label="閉じる"></div>
</div>

:::

```html
<div class="jumpu-tag">
  デフォルト
  <div role="button" aria-label="閉じる"></div>
</div>
```

> [!DANGER]
>
> タグのようにコンパクトな見た目に複数のクリック領域があることは、ユーザーを混乱させます。したがって、クリックできる要素のタグに閉じるボタンを用意することは推奨されません。

:::raw

<a href="#" class="jumpu-tag">
  a 要素と閉じるアクションの競合
  <div role="button" aria-label="閉じる"></div>
</a>

:::

```html
<a href="#" class="jumpu-tag">
  a 要素と閉じるアクションの競合
  <div role="button" aria-label="閉じる"></div>
</a>
```

:::raw

<button class="jumpu-tag">
  ボタン同士の競合
  <div role="button" aria-label="閉じる"></div>
</button>

:::

```html
<button class="jumpu-tag">
  ボタン同士の競合
  <div role="button" aria-label="閉じる"></div>
</button>
```
