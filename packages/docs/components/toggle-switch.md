# ToggleSwitch

設定の入 / 切を、その場で切り替えます。

## いつ使うか

**切り替えた瞬間に反映される設定**に使います。
通知の受け取り、公開 / 非公開の切り替えが該当します。

送信ボタンを押して初めて反映されるものには使いません。
その場合はチェックボックス（[Input](/components/input#チェックボックス)）を使います。

## 例

### 基本

大きさは持っていません。
ルートに `w-16 h-8`、つまみに `w-8 h-8` のように、**つまみがルートの半分の幅**になるよう指定してください。

:::raw

<div class="jumpu-toggle-switch w-16 h-8">
  <input id="default" type="checkbox" aria-label="通知を受け取る" />
  <label for="default">
    <span class="w-8 h-8"></span>
  </label>
</div>

:::

```html
<div class="jumpu-toggle-switch h-8 w-16">
  <input id="default" type="checkbox" aria-label="通知を受け取る" />
  <label for="default">
    <span class="h-8 w-8"></span>
  </label>
</div>
```

### 小さくする

:::raw

<div class="jumpu-toggle-switch w-8 h-4">
  <input id="small" type="checkbox" aria-label="通知を受け取る" />
  <label for="small">
    <span class="w-4 h-4"></span>
  </label>
</div>

:::

```html
<div class="jumpu-toggle-switch h-4 w-8">
  <input id="small" type="checkbox" aria-label="通知を受け取る" />
  <label for="small">
    <span class="h-4 w-4"></span>
  </label>
</div>
```

## ユーティリティによる調整

| 調整したいこと | 書き方                                  | 備考                             |
| :------------- | :-------------------------------------- | :------------------------------- |
| 大きさ         | ルートに `w-16 h-8`、つまみに `w-8 h-8` | 比率を崩すとつまみがはみ出します |

> [!IMPORTANT]
>
> つまみは `translateX(100%)` で右端に移動します。
> ルートの幅がつまみの幅の 2 倍でないと、入のときに位置がずれます。

## マークアップ規約

| 位置         | 要素 / 属性                     | 要否 | 効果                     |
| :----------- | :------------------------------ | :--- | :----------------------- |
| ルート       | 任意の要素 + `w-* h-*`          | 必須 | 寸法は利用側が与えます   |
| ルート       | `class="jumpu-toggle-switch"`   | 必須 |                          |
| ルート直下   | `input[type="checkbox"]` + `id` | 必須 | 透明にして全面に重ねます |
| ルート直下   | `label` + `for`                 | 必須 | 背景（レール）になります |
| `label` 直下 | `span` + `w-* h-*`              | 必須 | つまみになります         |

## 状態

| 状態 | 見た目                                   | 発火条件        |
| :--- | :--------------------------------------- | :-------------- |
| 切   | レールが `gray-300`                      | 既定            |
| 入   | レールが `primary-700`、つまみが右へ移動 | `input:checked` |

いずれも 100ms で遷移します。

フォーカスの見た目は持ちません。
`input` を透明にして重ねているため、ブラウザの既定のフォーカスリングも見えません。

## アクセシビリティ

APG には [Switch パターン](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)がありますが、Jumpu UI では `role="switch"` を使わず `input[type="checkbox"]` を採用しています。
ネイティブ要素のほうが、ブラウザと支援技術の対応が安定しているためです。

> [!IMPORTANT]
>
> `label` の中身はつまみの `span` だけで、テキストがありません。
> このままではアクセシブルな名前が付かないため、`input` に `aria-label` を与えるか、`label` に文字を入れてください。

判断の全体は[アクセシビリティ方針](/principles/accessibility)を参照してください。
