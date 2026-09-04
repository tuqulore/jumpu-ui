# FilledTag

分類や属性を、塗りつぶして強く示します。

## いつ使うか

[Tag](/components/tag) と同じ用途で、**より強く目立たせたい**ときに使います。
一覧の中で 1 つだけ状態を際立たせたい場合が該当します。

同じ画面で Tag と混ぜると、どちらが重要なのかが伝わりません。
使い分ける基準を決めてから使ってください。

## 例

### 基本

背景は `primary-700`、文字は白です。

:::raw

<div class="inline-flex flex-wrap gap-1">
  <div class="jumpu-filled-tag">デフォルト</div>
  <div class="jumpu-filled-tag bg-green-700">検討中</div>
  <div class="jumpu-filled-tag bg-red-700">着手</div>
  <div class="jumpu-filled-tag bg-gray-600">ペンディング</div>
</div>

:::

```html
<div class="jumpu-filled-tag">デフォルト</div>
<div class="jumpu-filled-tag bg-green-700">検討中</div>
<div class="jumpu-filled-tag bg-red-700">着手</div>
```

白い文字を載せるため、背景は**暗い色**を選んでください。

### 押せるようにする

`a` / `button` / `[role="button"]` のいずれかにすると、ホバーで明度が下がります。

:::raw

<div class="inline-flex flex-wrap gap-1">
  <a href="#" class="jumpu-filled-tag">リンク</a>
  <a href="#" class="jumpu-filled-tag bg-green-700">検討中</a>
</div>

:::

```html
<a href="#" class="jumpu-filled-tag">リンク</a>
<a href="#" class="jumpu-filled-tag bg-green-700">検討中</a>
```

### 閉じられるようにする

> [!IMPORTANT]
>
> 閉じるボタンをつけるときは、必ずタグ自体をクリックできない要素にしてください。

:::raw

<div class="jumpu-filled-tag">
  デフォルト
  <div role="button" aria-label="閉じる" tabindex="0"></div>
</div>

:::

```html
<div class="jumpu-filled-tag">
  デフォルト
  <div role="button" aria-label="閉じる" tabindex="0"></div>
</div>
```

## ユーティリティによる調整

| 調整したいこと | 書き方         | 備考                       |
| :------------- | :------------- | :------------------------- |
| 背景の色       | `bg-*`         | 白文字が読める暗さにします |
| 角を丸く       | `rounded-full` |                            |

文字サイズは `--text-xs` で固定されています。

## マークアップ規約

| 位置       | 要素 / 属性                | 要否 | 効果                                                          |
| :--------- | :------------------------- | :--- | :------------------------------------------------------------ |
| ルート     | 任意の要素                 | 必須 | `a` / `button` / `[role="button"]` のときだけホバーが効きます |
| ルート     | `class="jumpu-filled-tag"` | 必須 | 境界は持ちません                                              |
| ルート直下 | `[role="button"]`          | 任意 | 閉じるボタンになります。`aria-label` が必須です               |

## 状態

| 状態   | 見た目              | 発火条件                                       |
| :----- | :------------------ | :--------------------------------------------- |
| ホバー | 明度が 90% に下がる | `a` / `button` / `[role="button"]` の `:hover` |

## アクセシビリティ

閉じるボタンは APG の [Button パターン](https://www.w3.org/WAI/ARIA/apg/patterns/button/)に準拠します。

閉じる印は白で描かれています。
背景を明るい色に変えると、印が見えなくなります。

`aria-label` の与え方と `role="button"` の注意は [Tag](/components/tag#アクセシビリティ) と同じです。
