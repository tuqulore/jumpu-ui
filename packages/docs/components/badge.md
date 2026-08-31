# Badge

数や短い状態を、丸く囲んで示します。

## いつ使うか

**件数や状態を一目で伝える**ときに使います。
未読の件数、項目の分類、状態のラベルが該当します。

押せるものには使いません。
押せるものは [Tag](/components/tag) か [Button](/components/button) を使います。

## 例

### 基本

色は持っていません。
背景色と文字色をユーティリティで与えてください。

:::raw

<div class="flex flex-wrap gap-1">
  <div class="jumpu-badge bg-gray-100">100</div>
  <div class="jumpu-badge bg-green-100 text-green-800">16</div>
  <div class="jumpu-badge bg-red-100 text-red-800">2</div>
  <div class="jumpu-badge bg-yellow-100 text-yellow-800">312</div>
  <div class="jumpu-badge bg-blue-100 text-blue-800">89</div>
</div>

:::

```html
<div class="jumpu-badge bg-gray-100">100</div>
<div class="jumpu-badge bg-green-100 text-green-800">16</div>
<div class="jumpu-badge bg-red-100 text-red-800">2</div>
<div class="jumpu-badge bg-yellow-100 text-yellow-800">312</div>
<div class="jumpu-badge bg-blue-100 text-blue-800">89</div>
```

状態を色で示す場合は、[ステータスの色](/tokens/colors#ステータス)を使うこともできます。
ただし色だけで意味を伝えないでください。

## ユーティリティによる調整

| 調整したいこと | 書き方        | 備考                   |
| :------------- | :------------ | :--------------------- |
| 背景と文字の色 | `bg-* text-*` | 既定では色を持ちません |
| 小さく         | `text-xs`     | 余白は変わりません     |

余白は `--spacing(n)` で組まれているため、文字サイズを変えても追従しません。

:::raw

<div class="flex flex-wrap gap-1 items-center">
  <div class="jumpu-badge bg-gray-100 text-xs">100</div>
  <div class="jumpu-badge bg-gray-100">100</div>
</div>

:::

## マークアップ規約

| 位置   | 要素 / 属性           | 要否 | 効果                 |
| :----- | :-------------------- | :--- | :------------------- |
| ルート | 任意の要素            | 必須 |                      |
| ルート | `class="jumpu-badge"` | 必須 | 文字は太字になります |

## 状態

状態に応じた見た目を持ちません。

## アクセシビリティ

対応する APG のパターンはありません。

数字だけを置くと、何の数かが読み上げでわかりません。
`aria-label="未読 3 件"` のように、単位と意味を添えてください。

数が変化するものは、変化を伝えるために `aria-live` の指定が必要になることがあります。
