# IconButton

## Default

:::raw

<button type="button" class="jumpu-icon-button" aria-label="Twitter">
  <i class="fab fa-twitter"></i>
</button>
<button type="button" class="jumpu-icon-button" aria-label="Email">
  <i class="fas fa-envelope"></i>
</button>
<button type="button" class="jumpu-icon-button" aria-label="ホーム">
  <i class="fas fa-home"></i>
</button>
<button type="button" class="jumpu-icon-button" aria-label="その他">
  <i class="fas fa-ellipsis-h"></i>
</button>

:::

```html
<button type="button" class="jumpu-icon-button" aria-label="Twitter">
  <i class="fab fa-twitter"></i>
</button>
<button type="button" class="jumpu-icon-button" aria-label="Email">
  <i class="fas fa-envelope"></i>
</button>
<button type="button" class="jumpu-icon-button" aria-label="ホーム">
  <i class="fas fa-home"></i>
</button>
<button type="button" class="jumpu-icon-button" aria-label="その他">
  <i class="fas fa-ellipsis-h"></i>
</button>
```

## Tooltip

:::raw

<button type="button" class="jumpu-icon-button" aria-describedby="tooltip-Twitter">
  <i class="fab fa-twitter"></i>
  <span id="tooltip-Twitter" role="tooltip">Twitter</span>
</button>
<button type="button" class="jumpu-icon-button" aria-describedby="tooltip-envelope">
  <i class="fas fa-envelope"></i>
  <span id="tooltip-envelope" role="tooltip">メール</span>
</button>
<button type="button" class="jumpu-icon-button" aria-describedby="tooltip-home">
  <i class="fas fa-home"></i>
  <span id="tooltip-home" role="tooltip">ホーム</span>
</button>
<button type="button" class="jumpu-icon-button" aria-describedby="tooltip-etc">
  <i class="fas fa-ellipsis-h"></i>
  <span id="tooltip-etc" role="tooltip">その他</span>
</button>

:::

```html
<button
  type="button"
  class="jumpu-icon-button"
  aria-describedby="tooltip-Twitter"
>
  <i class="fab fa-twitter"></i>
  <span id="tooltip-Twitter" role="tooltip">Twitter</span>
</button>
<button
  type="button"
  class="jumpu-icon-button"
  aria-describedby="tooltip-envelope"
>
  <i class="fas fa-envelope"></i>
  <span id="tooltip-envelope" role="tooltip">メール</span>
</button>
<button type="button" class="jumpu-icon-button" aria-describedby="tooltip-home">
  <i class="fas fa-home"></i>
  <span id="tooltip-home" role="tooltip">ホーム</span>
</button>
<button type="button" class="jumpu-icon-button" aria-describedby="tooltip-etc">
  <i class="fas fa-ellipsis-h"></i>
  <span id="tooltip-etc" role="tooltip">その他</span>
</button>
```

## Anchor

:::raw

<a href="#" class="jumpu-icon-button" aria-label="Twitter">
  <i class="fab fa-twitter"></i>
</a>
<a href="#" class="jumpu-icon-button" aria-label="Email">
  <i class="fas fa-envelope"></i>
</a>
<a href="#" class="jumpu-icon-button" aria-label="ホーム">
  <i class="fas fa-home"></i>
</a>
<a href="#" class="jumpu-icon-button" aria-label="その他">
  <i class="fas fa-ellipsis-h"></i>
</a>

:::

```html
<a href="#" class="jumpu-icon-button" aria-label="Twitter">
  <i class="fab fa-twitter"></i>
</a>
<a href="#" class="jumpu-icon-button" aria-label="Email">
  <i class="fas fa-envelope"></i>
</a>
<a href="#" class="jumpu-icon-button" aria-label="ホーム">
  <i class="fas fa-home"></i>
</a>
<a href="#" class="jumpu-icon-button" aria-label="その他">
  <i class="fas fa-ellipsis-h"></i>
</a>
```

## Anchor With Tooltip

:::raw

<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-anchor-Twitter">
  <i class="fab fa-twitter"></i>
  <span id="tooltip-anchor-Twitter" role="tooltip">Twitter</span>
</a>
<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-envelope">
  <i class="fas fa-envelope"></i>
  <span id="tooltip-anchor-envelope" role="tooltip">メール</span>
</a>
<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-home">
  <i class="fas fa-home"></i>
  <span id="tooltip-anchor-home" role="tooltip">ホーム</span>
</a>
<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-etc">
  <i class="fas fa-ellipsis-h"></i>
  <span id="tooltip-anchor-etc" role="tooltip">その他</span>
</a>
:::

```html
<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-anchor-Twitter">
  <i class="fab fa-twitter"></i>
  <span id="tooltip-anchor-Twitter" role="tooltip">Twitter</span>
</a>
<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-envelope">
  <i class="fas fa-envelope"></i>
  <span id="tooltip-anchor-envelope" role="tooltip">メール</span>
</a>
<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-home">
  <i class="fas fa-home"></i>
  <span id="tooltip-anchor-home" role="tooltip">ホーム</span>
</a>
<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-etc">
  <i class="fas fa-ellipsis-h"></i>
  <span id="tooltip-anchor-etc" role="tooltip">その他</span>
</a>
```

## Custom Tooltip Position

ツールチップの位置を変更するには、transform プロパティの上書きが必要です。

TailwindCSS では、[Arbitrary Values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) を使うことで上書きすることができます。

:::raw

<button type="button" class="jumpu-icon-button" aria-describedby="tooltip-position-Twitter">
  <i class="fab fa-twitter"></i>
  <span id="tooltip-position-Twitter" role="tooltip">Twitter</span>
</button>
<button type="button" class="jumpu-icon-button group" aria-describedby="tooltip-position-envelope">
  <i class="fas fa-envelope"></i>
  <span id="tooltip-position-envelope" role="tooltip" class="![transform:translateX(50%)_scale(0)] group-hover:![transform:translateX(50%)_scale(1)]">メール</span>
</button>
<button type="button" class="jumpu-icon-button group z-1" aria-describedby="tooltip-position-home">
  <i class="fas fa-home"></i>
  <span id="tooltip-position-home" role="tooltip" class="![transform:translate(-50%,_150%)_scale(0)] group-hover:![transform:translate(-50%,_150%)_scale(1)]">ホーム</span>
</button>
<button type="button" class="jumpu-icon-button group" aria-describedby="tooltip-position-etc">
  <i class="fas fa-ellipsis-h"></i>
  <span id="tooltip-position-etc" role="tooltip" class="![transform:translateX(-150%)_scale(0)] group-hover:![transform:translateX(-150%)_scale(1)]">その他</span>
</button>

:::

```html
<button
  type="button"
  class="jumpu-icon-button"
  aria-describedby="tooltip-position-Twitter"
>
  <i class="fab fa-twitter"></i>
  <span id="tooltip-position-Twitter" role="tooltip">Twitter</span>
</button>
<button
  type="button"
  class="jumpu-icon-button group"
  aria-describedby="tooltip-position-envelope"
>
  <i class="fas fa-envelope"></i>
  <span
    id="tooltip-position-envelope"
    role="tooltip"
    class="![transform:translateX(50%)_scale(0)] group-hover:![transform:translateX(50%)_scale(1)]"
    >メール</span
  >
</button>
<button
  type="button"
  class="jumpu-icon-button z-1 group"
  aria-describedby="tooltip-position-home"
>
  <i class="fas fa-home"></i>
  <span
    id="tooltip-position-home"
    role="tooltip"
    class="![transform:translate(-50%,_150%)_scale(0)] group-hover:![transform:translate(-50%,_150%)_scale(1)]"
    >ホーム</span
  >
</button>
<button
  type="button"
  class="jumpu-icon-button group"
  aria-describedby="tooltip-position-etc"
>
  <i class="fas fa-ellipsis-h"></i>
  <span
    id="tooltip-position-etc"
    role="tooltip"
    class="![transform:translateX(-150%)_scale(0)] group-hover:![transform:translateX(-150%)_scale(1)]"
    >その他</span
  >
</button>
```

## Large

:::raw

<button type="button" class="jumpu-icon-button text-lg w-12 h-12" aria-label="Twitter">
  <i class="fab fa-twitter"></i>
</button>
<button type="button" class="jumpu-icon-button text-lg w-12 h-12" aria-label="Email">
  <i class="fas fa-envelope"></i>
</button>
<button type="button" class="jumpu-icon-button text-lg w-12 h-12" aria-label="ホーム">
  <i class="fas fa-home"></i>
</button>
<button type="button" class="jumpu-icon-button text-lg w-12 h-12" aria-label="その他">
  <i class="fas fa-ellipsis-h"></i>
</button>
:::

```html
<button
  type="button"
  class="jumpu-icon-button h-12 w-12 text-lg"
  aria-label="Twitter"
>
  <i class="fab fa-twitter"></i>
</button>
<button
  type="button"
  class="jumpu-icon-button h-12 w-12 text-lg"
  aria-label="Email"
>
  <i class="fas fa-envelope"></i>
</button>
<button
  type="button"
  class="jumpu-icon-button h-12 w-12 text-lg"
  aria-label="ホーム"
>
  <i class="fas fa-home"></i>
</button>
<button
  type="button"
  class="jumpu-icon-button h-12 w-12 text-lg"
  aria-label="その他"
>
  <i class="fas fa-ellipsis-h"></i>
</button>
```

## Small

:::raw

<button type="button" class="jumpu-icon-button text-xs w-6 h-6" aria-label="Twitter">
  <i class="fab fa-twitter"></i>
</button>
<button type="button" class="jumpu-icon-button text-xs w-6 h-6" aria-label="Email">
  <i class="fas fa-envelope"></i>
</button>
<button type="button" class="jumpu-icon-button text-xs w-6 h-6" aria-label="ホーム">
  <i class="fas fa-home"></i>
</button>
<button type="button" class="jumpu-icon-button text-xs w-6 h-6" aria-label="その他">
  <i class="fas fa-ellipsis-h"></i>
</button>

:::

```html
<button
  type="button"
  class="jumpu-icon-button h-6 w-6 text-xs"
  aria-label="Twitter"
>
  <i class="fab fa-twitter"></i>
</button>
<button
  type="button"
  class="jumpu-icon-button h-6 w-6 text-xs"
  aria-label="Email"
>
  <i class="fas fa-envelope"></i>
</button>
<button
  type="button"
  class="jumpu-icon-button h-6 w-6 text-xs"
  aria-label="ホーム"
>
  <i class="fas fa-home"></i>
</button>
<button
  type="button"
  class="jumpu-icon-button h-6 w-6 text-xs"
  aria-label="その他"
>
  <i class="fas fa-ellipsis-h"></i>
</button>
```
