# Accordion

見出しを押して、内容の表示と非表示を切り替えます。

## いつ使うか

**全員が読む必要はないが、読みたい人がいる**内容に使います。
補足、詳細な条件、よくある質問が該当します。

最初から読ませたい内容を隠さないでください。
折りたたまれた内容は読まれません。

## 例

### 開いた状態

:::raw

<div class="jumpu-accordion">
  <button type="button" aria-expanded="true" aria-controls="default">
    人間失格
  </button>
  <div id="default" aria-hidden="false">
    <p class="mt-4">
      恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。
    </p>
  </div>
</div>

:::

```html
<div class="jumpu-accordion">
  <button type="button" aria-expanded="true" aria-controls="default">
    人間失格
  </button>
  <div id="default" aria-hidden="false">
    <p class="mt-4">恥の多い生涯を送って来ました。…</p>
  </div>
</div>
```

### 閉じた状態

`aria-expanded` と `aria-hidden` の両方を切り替えます。

:::raw

<div class="jumpu-accordion">
  <button type="button" aria-expanded="false" aria-controls="collapse">
    人間失格
  </button>
  <div id="collapse" aria-hidden="true">
    <p class="mt-4">
      恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。
    </p>
  </div>
</div>

:::

```html
<div class="jumpu-accordion">
  <button type="button" aria-expanded="false" aria-controls="collapse">
    人間失格
  </button>
  <div id="collapse" aria-hidden="true">
    <p class="mt-4">恥の多い生涯を送って来ました。…</p>
  </div>
</div>
```

開閉そのものはコンポーネントでは行いません。
`aria-expanded` と `aria-hidden` の値を、利用側のスクリプトで切り替えてください。

## ユーティリティによる調整

| 調整したいこと | 書き方              | 備考                             |
| :------------- | :------------------ | :------------------------------- |
| 小さく         | `text-sm`           | 余白と矢印の大きさは変わりません |
| 境界を消す     | 見出しに `border-0` |                                  |

余白は `--spacing(n)` で組まれているため、文字サイズには追従しません。

## マークアップ規約

| 位置           | 要素 / 属性               | 要否 | 効果                             |
| :------------- | :------------------------ | :--- | :------------------------------- |
| ルート         | 任意の要素                | 必須 |                                  |
| ルート         | `class="jumpu-accordion"` | 必須 |                                  |
| ルート**直下** | `[aria-expanded]`         | 必須 | 見出しになります。矢印が付きます |
| 見出し         | `aria-controls`           | 必須 | パネルの `id` を指します         |
| ルート**直下** | `[aria-hidden]` + `id`    | 必須 | パネルになります                 |

見出しとパネルは**ルートの直下**に置いてください。
セレクターが直下の子だけを対象にしているため、入れ子にすると当たりません。

矢印はコンポーネントが背景画像として持っています。
差し替えることはできません。

## 状態

| 状態       | 見た目                           | 発火条件                  |
| :--------- | :------------------------------- | :------------------------ |
| ホバー     | 見出しの背景が `gray-50` になる  | `:hover`                  |
| アクティブ | 見出しの背景が `gray-100` になる | `:active`                 |
| 閉じている | 矢印が 180 度回る（500ms）       | `[aria-expanded="false"]` |
| 閉じている | パネルが `display: none` になる  | `[aria-hidden="true"]`    |

## アクセシビリティ

APG の [Accordion パターン](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)を対象としていますが、2 点が逸脱しています。

**見出し要素で包んでいません。**
APG は開閉ボタンを `h2` などの見出しで包むことを示しています。
これは利用側で対応できます。

```html
<div class="jumpu-accordion">
  <h3>
    <button type="button" aria-expanded="true" aria-controls="panel">…</button>
  </h3>
  …
</div>
```

> [!IMPORTANT]
>
> 見出しで包む場合、`button` はルートの直下でなくなるため、スタイルが当たりません。
> 現在の実装では、見出しで包むことと見た目を保つことを両立できません。

**パネルを `hidden` 属性ではなく `aria-hidden` で隠しています。**
CSS が `[aria-hidden]` をセレクターに使っているためです。
変更にはコンポーネントの構造の変更を伴います。

判断の全体は[アクセシビリティ方針](/principles/accessibility)を参照してください。
