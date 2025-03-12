# Card

## Default

:::raw

<div class="jumpu-card px-4 py-3 mb-4">カード</div>

:::

```html
<div class="jumpu-card px-4 py-3 mb-4">カード</div>
```

## Anchor

`jumpu-card` クラスは `display` プロパティを指定していません。つまり、どの HTML 要素を使用するかによって見た目が変化します。a 要素のカードを div 要素のカードと同じように表示したい場合は、`block` クラスを付与するなど、明示的に display プロパティを指定する必要があります。

:::raw
<a href="#" class="jumpu-card px-4 py-3 mb-4 block">リンクカード</a>
:::

```html
<a href="#" class="jumpu-card px-4 py-3 mb-4 block">リンクカード</a>
```

## Shadowed

:::raw

<div class="jumpu-card px-4 py-3 border-0 shadow-lg">影付きカード</div>

:::

```html
<div class="jumpu-card px-4 py-3 border-0 shadow-lg">影付きカード</div>
```
