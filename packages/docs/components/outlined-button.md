# OutlinedButton

[Button](/components/button) と並べたときに、一段控えめに見える操作を表します。

## いつ使うか

主要な操作の**隣に併記する操作**に使います。
「保存」に対する「下書きとして保存」のような関係です。

塗りのボタンと並べないのであれば、Button を使ってください。
控えめであること自体には意味がありません。

## 例

### 基本

:::raw

<button type="button" class="jumpu-outlined-button">ボタン</button>

:::

```html
<button type="button" class="jumpu-outlined-button">ボタン</button>
```

### リンクとして使う

:::raw

<a href="#" class="jumpu-outlined-button">リンクボタン</a>

:::

```html
<a href="#" class="jumpu-outlined-button">リンクボタン</a>
```

### 無効にする

:::raw

<button type="button" disabled class="jumpu-outlined-button">
  ボタン
</button>

:::

```html
<button type="button" disabled class="jumpu-outlined-button">ボタン</button>
```

## ユーティリティによる調整

| 調整したいこと  | 書き方                | 備考                                           |
| :-------------- | :-------------------- | :--------------------------------------------- |
| 小さく / 大きく | `text-xs` / `text-lg` | 余白も一緒に変わります                         |
| 横幅いっぱいに  | `w-full`              |                                                |
| 角を丸く        | `rounded-full`        | 水平方向の余白が足りなければ `px-*` を足します |

## マークアップ規約

| 位置   | 要素 / 属性                                   | 要否 | 効果                   |
| :----- | :-------------------------------------------- | :--- | :--------------------- |
| ルート | `button` / `a` / `[role="button"]` のいずれか | 必須 |                        |
| ルート | `class="jumpu-outlined-button"`               | 必須 |                        |
| ルート | `[disabled]`                                  | 任意 | 無効の見た目になります |

## 状態

| 状態       | 見た目                      | 発火条件     |
| :--------- | :-------------------------- | :----------- |
| ホバー     | 背景が `primary-100` になる | `:hover`     |
| アクティブ | 明度が 110% に上がる        | `:active`    |
| 無効       | `gray-300` の塗りになる     | `[disabled]` |
| フォーカス | ブラウザの既定              | `:focus`     |

> [!NOTE]
>
> 無効にすると輪郭ではなく塗りになります。
> Button と OutlinedButton の無効時の見た目は同じです。

`a` 要素に `disabled` 属性は効きません。
[Button](/components/button#状態) と同じ注意が当てはまります。

## アクセシビリティ

APG の [Button パターン](https://www.w3.org/WAI/ARIA/apg/patterns/button/)に準拠します。
`button` 要素または `a` 要素を使うかぎり、追加の対応は不要です。
