# Button

押すとその場で何かが起きる操作を表します。

## いつ使うか

送信する、追加する、確定するなど、**画面上で何かを実行させる**ときに使います。

画面を移動するだけなら `a` 要素で使います。
見た目はボタンのままで、リンクとしての振る舞いが得られます。

## OutlinedButton / TextButton / IconButton との使い分け

同じ画面に複数の操作が並ぶときは、重みで使い分けます。

| 重み                                     | 使うもの                                      | 見た目   |
| :--------------------------------------- | :-------------------------------------------- | :------- |
| その画面で最も勧めたい操作               | Button                                        | 塗り     |
| 併記する操作                             | [OutlinedButton](/components/outlined-button) | 輪郭     |
| 取り消しなど、目立たせたくない操作       | [TextButton](/components/text-button)         | 文字だけ |
| アイコンだけで意味が通り、場所が狭いとき | [IconButton](/components/icon-button)         | 正方形   |

主要な操作は 1 画面に 1 つに絞ります。

## 例

### 基本

:::raw
<button type="button" class="jumpu-button">ボタン</button>
:::

```html
<button type="button" class="jumpu-button">ボタン</button>
```

### リンクとして使う

:::raw
<a href="#" class="jumpu-button">リンクボタン</a>
:::

```html
<a href="#" class="jumpu-button">リンクボタン</a>
```

### button / a 以外の要素で使う

WAI-ARIA の button ロールを使います。

> [!IMPORTANT]
>
> `button` / `a` 要素と同等の機能を別途実装する必要があることに注意してください。具体的には、フォーカス可能であること、Enter / Space キーで操作可能であることなどです。詳細は [MDN](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/button_role) を参照してください。

:::raw

<div class="jumpu-button" tabindex="0" role="button">
  ARIA: button ロール
</div>

:::

```html
<div class="jumpu-button" tabindex="0" role="button">ARIA: button ロール</div>
```

## ユーティリティによる調整

大きさや形はバリアントではなくユーティリティで表します。

| 調整したいこと  | 書き方                | 備考                                           |
| :-------------- | :-------------------- | :--------------------------------------------- |
| 小さく / 大きく | `text-xs` / `text-lg` | 余白も一緒に変わります                         |
| 横幅いっぱいに  | `w-full`              |                                                |
| 角を丸く        | `rounded-full`        | 水平方向の余白が足りなければ `px-*` を足します |

余白は `--spacing-relative` で組まれているため、文字サイズを変えると余白も追従します。
詳細は [Spacing](/tokens/spacing) を参照してください。

:::raw

<p class="mb-4">
  <button type="button" class="jumpu-button text-xs">極小のボタン</button>
</p>
<p class="mb-4">
  <button type="button" class="jumpu-button text-xl">もっと大きなボタン</button>
</p>
<p class="mb-4">
  <button type="button" class="jumpu-button w-full">横幅がいっぱいのボタン</button>
</p>
<p>
  <button type="button" class="jumpu-button rounded-full px-6">角丸のボタン</button>
</p>

:::

```html
<button type="button" class="jumpu-button text-xs">極小のボタン</button>
<button type="button" class="jumpu-button text-xl">もっと大きなボタン</button>
<button type="button" class="jumpu-button w-full">
  横幅がいっぱいのボタン
</button>
<button type="button" class="jumpu-button rounded-full px-6">
  角丸のボタン
</button>
```

## マークアップ規約

| 位置   | 要素 / 属性                                   | 要否 | 効果                           |
| :----- | :-------------------------------------------- | :--- | :----------------------------- |
| ルート | `button` / `a` / `[role="button"]` のいずれか | 必須 |                                |
| ルート | `class="jumpu-button"`                        | 必須 |                                |
| ルート | `[disabled]`                                  | 任意 | 無効の見た目になります         |
| ルート | `[role="button"]`                             | 任意 | カーソルが矢印のままになります |

子要素に規約はありません。
ラベルのテキストをそのまま入れます。

## 状態

| 状態       | 見た目                                        | 発火条件     |
| :--------- | :-------------------------------------------- | :----------- |
| ホバー     | 明度が 90% に下がる                           | `:hover`     |
| アクティブ | 明度が 75% に下がる                           | `:active`    |
| 無効       | `gray-300` の塗りになり、ホバーの変化が止まる | `[disabled]` |
| フォーカス | ブラウザの既定                                | `:focus`     |

> [!IMPORTANT]
>
> `a` 要素には `disabled` 属性がありません。
> `<a class="jumpu-button" disabled>` と書いても、見た目もリンクの挙動も変わりません。
> リンクを無効にしたい場合は、要素を `span` などに差し替えるか、`aria-disabled="true"` とスクリプトで対応してください。

状態の表し方の全体像は [Interaction](/tokens/interaction) を参照してください。

## アクセシビリティ

APG の [Button パターン](https://www.w3.org/WAI/ARIA/apg/patterns/button/)に準拠します。

`button` 要素または `a` 要素を使うかぎり、追加の対応は不要です。
`role="button"` を使う場合は、フォーカス可能にすることと、Enter / Space キーでの実行を利用側で実装してください。

無効であることを色だけで伝えないでください。
`button` 要素なら `disabled` 属性を、それ以外なら `aria-disabled` を併せて指定します。
