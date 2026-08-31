# Tag

分類や属性を短い語で示します。

## いつ使うか

**そのものに付いている属性**を示すときに使います。
記事の分類、案件の状態、技術スタックが該当します。

数を示すなら [Badge](/components/badge) を使います。
強調して見せたいときは [FilledTag](/components/filled-tag) を使います。

## 例

### 基本

背景は `gray-100` です。
分類ごとに色を変える場合はユーティリティで指定します。

:::raw

<div class="flex flex-wrap gap-1">
  <div class="jumpu-tag">デフォルト</div>
  <div class="jumpu-tag bg-green-100">検討中</div>
  <div class="jumpu-tag bg-red-100">着手</div>
  <div class="jumpu-tag bg-yellow-100">作業済</div>
  <div class="jumpu-tag bg-blue-100">TypeScript</div>
</div>

:::

```html
<div class="jumpu-tag">デフォルト</div>
<div class="jumpu-tag bg-green-100">検討中</div>
<div class="jumpu-tag bg-red-100">着手</div>
```

### 押せるようにする

`a` / `button` / `[role="button"]` のいずれかにすると、ホバーで境界が濃くなります。

:::raw

<div class="flex flex-wrap gap-1">
  <a href="#" class="jumpu-tag">リンク</a>
  <button class="jumpu-tag">ボタン</button>
  <div class="jumpu-tag" tabindex="0" role="button">ARIA: button ロール</div>
</div>

:::

```html
<a href="#" class="jumpu-tag">リンク</a>
<button class="jumpu-tag">ボタン</button>
<div class="jumpu-tag" tabindex="0" role="button">ARIA: button ロール</div>
```

### 閉じられるようにする

> [!IMPORTANT]
>
> 閉じるボタンをつけるときは、必ずタグ自体をクリックできない要素にしてください。
> 押せる要素の中に押せる要素を入れると、どちらが押されたのかが判別できません。

:::raw

<div class="jumpu-tag">
  デフォルト
  <div role="button" aria-label="閉じる" tabindex="0"></div>
</div>

:::

```html
<div class="jumpu-tag">
  デフォルト
  <div role="button" aria-label="閉じる" tabindex="0"></div>
</div>
```

閉じる印はコンポーネントが背景画像として持っています。
差し替えることはできません。

## ユーティリティによる調整

| 調整したいこと | 書き方         | 備考                             |
| :------------- | :------------- | :------------------------------- |
| 背景の色       | `bg-*`         | 境界の色は `gray-100` のままです |
| 角を丸く       | `rounded-full` |                                  |

文字サイズは `--text-xs` で固定されています。
余白は `--spacing(n)` なので、文字サイズを変えても追従しません。

## マークアップ規約

| 位置       | 要素 / 属性         | 要否 | 効果                                                          |
| :--------- | :------------------ | :--- | :------------------------------------------------------------ |
| ルート     | 任意の要素          | 必須 | `a` / `button` / `[role="button"]` のときだけホバーが効きます |
| ルート     | `class="jumpu-tag"` | 必須 |                                                               |
| ルート直下 | `[role="button"]`   | 任意 | 閉じるボタンになります。`aria-label` が必須です               |

## 状態

| 状態   | 見た目                   | 発火条件                                       |
| :----- | :----------------------- | :--------------------------------------------- |
| ホバー | 境界が `gray-300` になる | `a` / `button` / `[role="button"]` の `:hover` |

押せない要素で使った場合、状態による変化はありません。

## アクセシビリティ

閉じるボタンは APG の [Button パターン](https://www.w3.org/WAI/ARIA/apg/patterns/button/)に準拠します。

閉じるボタンには中身のテキストがありません。
`aria-label="閉じる"` を必ず与えてください。
何を閉じるのかがわかるよう、`aria-label="TypeScript を外す"` のように具体的に書くほうが親切です。

`role="button"` を使うため、フォーカス可能にすることと Enter / Space キーへの対応は利用側で実装してください。
