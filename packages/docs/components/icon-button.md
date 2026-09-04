# IconButton

アイコンだけで操作を表します。

## いつ使うか

**アイコンだけで意味が通り、場所が狭い**ときに使います。
ツールバー、カードの右上、一覧の各行が該当します。

意味が一目で伝わらないアイコンには使わないでください。
文字を添えた [Button](/components/button) のほうが速く理解されます。

## 例

### 基本

アイコン自体には意味が伝わる名前がありません。
`aria-label` を必ず与えてください。

:::raw

<button type="button" class="jumpu-icon-button" aria-label="Twitter">
  <i class="fab fa-twitter"></i>
</button>
<button type="button" class="jumpu-icon-button" aria-label="メール">
  <i class="fas fa-envelope"></i>
</button>
<button type="button" class="jumpu-icon-button" aria-label="ホーム">
  <i class="fas fa-home"></i>
</button>

:::

```html
<button type="button" class="jumpu-icon-button" aria-label="Twitter">
  <i class="fab fa-twitter"></i>
</button>
```

### ツールチップをつける

`role="tooltip"` を持つ要素を入れ、`aria-describedby` で参照します。

:::raw

<button type="button" class="jumpu-icon-button" aria-describedby="tooltip-Twitter">
  <i class="fab fa-twitter"></i>
  <span id="tooltip-Twitter" role="tooltip">Twitter</span>
</button>
<button type="button" class="jumpu-icon-button" aria-describedby="tooltip-envelope">
  <i class="fas fa-envelope"></i>
  <span id="tooltip-envelope" role="tooltip">メール</span>
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
```

`aria-describedby` の値と `id` は必ず一致させてください。

### リンクとして使う

:::raw

<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-anchor-Twitter">
  <i class="fab fa-twitter"></i>
  <span id="tooltip-anchor-Twitter" role="tooltip">Twitter</span>
</a>
<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-anchor-home">
  <i class="fas fa-home"></i>
  <span id="tooltip-anchor-home" role="tooltip">ホーム</span>
</a>

:::

```html
<a href="#" class="jumpu-icon-button" aria-describedby="tooltip-anchor-Twitter">
  <i class="fab fa-twitter"></i>
  <span id="tooltip-anchor-Twitter" role="tooltip">Twitter</span>
</a>
```

### ツールチップの位置を変える

位置は `transform` で決まっています。
変えるには [Arbitrary Values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) で `transform` を上書きし、`group-hover:` で表示時の値も指定します。

:::raw

<button type="button" class="jumpu-icon-button group" aria-describedby="tooltip-position-envelope">
  <i class="fas fa-envelope"></i>
  <span id="tooltip-position-envelope" role="tooltip" class="![transform:translateX(50%)_scale(0)] group-hover:![transform:translateX(50%)_scale(1)]">右に出す</span>
</button>
<button type="button" class="jumpu-icon-button group z-1" aria-describedby="tooltip-position-home">
  <i class="fas fa-home"></i>
  <span id="tooltip-position-home" role="tooltip" class="![transform:translate(-50%,_150%)_scale(0)] group-hover:![transform:translate(-50%,_150%)_scale(1)]">下に出す</span>
</button>

:::

```html
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
  >
    右に出す
  </span>
</button>
```

ユーティリティ 1 つでは済みません。
この点は [Principles](/principles/#ユーティリティとコンポーネントの責務分担) に記載しています。

## ユーティリティによる調整

| 調整したいこと     | 書き方                                           | 備考                                              |
| :----------------- | :----------------------------------------------- | :------------------------------------------------ |
| 大きさ             | `w-12 h-12`                                      | 既定は `w-8 h-8` 相当。文字サイズには追従しません |
| アイコンの大きさ   | `text-lg` など                                   | ボタンの大きさは変わりません                      |
| ツールチップの位置 | `![transform:…]` と `group-hover:![transform:…]` | 上の例を参照                                      |

## マークアップ規約

| 位置   | 要素 / 属性                                   | 要否 | 効果                     |
| :----- | :-------------------------------------------- | :--- | :----------------------- |
| ルート | `button` / `a` / `[role="button"]` のいずれか | 必須 |                          |
| ルート | `class="jumpu-icon-button"`                   | 必須 | 正方形になります         |
| ルート | `aria-label` または `aria-describedby`        | 必須 | どちらかで名前を与えます |
| 子孫   | アイコンの要素                                | 必須 |                          |
| 子孫   | `[role="tooltip"]` + `id`                     | 任意 | ツールチップになります   |

## 状態

| 状態       | 見た目                                     | 発火条件  |
| :--------- | :----------------------------------------- | :-------- |
| ホバー     | 文字が `gray-800`、背景が `gray-50` になる | `:hover`  |
| ホバー     | ツールチップが 100ms で現れる              | `:hover`  |
| アクティブ | 背景が `gray-200` になる                   | `:active` |
| フォーカス | ブラウザの既定                             | `:focus`  |

## アクセシビリティ

ツールチップは APG の [Tooltip パターン](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)を対象としていますが、逸脱があります。

> [!IMPORTANT]
>
> ツールチップは `:hover` でのみ表示されます。
> キーボードでフォーカスしても表示されません。
> `aria-describedby` で参照しているため支援技術には伝わりますが、目で見て操作する利用者には届きません。

ツールチップだけに頼らず、`aria-label` でも名前を与えてください。

判断の全体は[アクセシビリティ方針](/principles/accessibility)を参照してください。
