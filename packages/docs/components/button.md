# Button

## Default

:::raw
<button type="button" class="jumpu-button">ボタン</button>
:::

```html
<button type="button" class="jumpu-button">ボタン</button>
```

## Anchor

:::raw
<a href="#" class="jumpu-button">リンクボタン</a>
:::

```html
<a href="#" class="jumpu-button">リンクボタン</a>
```

## Other Element

button / a 要素以外でボタンをマークアップする場合は WAI-ARIA button ロールを使用してください。

> [!IMPORTANT]
>
> button / a 要素と同等の機能を別途実装する必要があることに注意してください。具体的には、フォーカス可能であること、Enter / Space キーで操作可能であることなどです。詳細は [MDN](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/button_role) を参照してください。

:::raw

<div class="jumpu-button" tabindex="0" role="button">
  ARIA: button ロール
</div>

:::

```html
<div class="jumpu-button" tabindex="0" role="button">ARIA: button ロール</div>
```

## Long Text

:::raw
<button type="button" class="jumpu-button">利用規約に同意して登録</button>
:::

```html
<button type="button" class="jumpu-button">利用規約に同意して登録</button>
```

## Size

:::raw

<p class="mb-4">
  <button type="button" class="jumpu-button text-xs">極小のボタン</button>
</p>
<p class="mb-4">
  <button type="button" class="jumpu-button text-sm">小さなボタン</button>
</p>
<p class="mb-4">
  <button type="button" class="jumpu-button text-lg">大きなボタン</button>
</p>
<p>
  <button type="button" class="jumpu-button text-xl">
    もっと大きなボタン
  </button>
</p>

:::

```html
<p class="mb-4">
  <button type="button" class="jumpu-button text-xs">極小のボタン</button>
</p>
<p class="mb-4">
  <button type="button" class="jumpu-button text-sm">小さなボタン</button>
</p>
<p class="mb-4">
  <button type="button" class="jumpu-button text-lg">大きなボタン</button>
</p>
<p>
  <button type="button" class="jumpu-button text-xl">もっと大きなボタン</button>
</p>
```

## Full Width

:::raw
<button type="button" class="jumpu-button w-full">
横幅がいっぱいのボタン
</button>
:::

```html
<button type="button" class="jumpu-button w-full">
  横幅がいっぱいのボタン
</button>
```

## Rounded

> [!TIP]
>
> 水平方向の余白が足りないと感じたら、`px-*` クラスで調整してみてください

:::raw

<p>
  <button type="button" class="jumpu-button rounded-full px-6">
    角丸のボタン
  </button>
</p>

:::

```html
<p>
  <button type="button" class="jumpu-button rounded-full px-6">
    角丸のボタン
  </button>
</p>
```
