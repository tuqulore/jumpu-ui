# Textarea

複数行の文章を入力させます。

## いつ使うか

**改行を含む入力**に使います。
問い合わせ内容、自己紹介、コメントが該当します。

1 行で収まる入力には [Input](/components/input) を使います。

## 例

### 基本

:::raw

<textarea class="jumpu-textarea" placeholder="お問い合わせ内容..."></textarea>

:::

```html
<textarea class="jumpu-textarea" placeholder="お問い合わせ内容..."></textarea>
```

### 横幅いっぱいにする

:::raw

<textarea class="jumpu-textarea w-full" placeholder="お問い合わせ内容..."></textarea>

:::

```html
<textarea
  class="jumpu-textarea w-full"
  placeholder="お問い合わせ内容..."
></textarea>
```

### 高さを固定する

`resize-none` を併せて指定すると、利用者による伸縮も止まります。

:::raw

<textarea class="jumpu-textarea h-64 resize-none w-full" placeholder="お問い合わせ内容..."></textarea>

:::

```html
<textarea
  class="jumpu-textarea h-64 w-full resize-none"
  placeholder="お問い合わせ内容..."
></textarea>
```

## ユーティリティによる調整

| 調整したいこと | 書き方        | 備考                       |
| :------------- | :------------ | :------------------------- |
| 横幅           | `w-full`      |                            |
| 高さ           | `h-64`        |                            |
| 伸縮を止める   | `resize-none` | 高さの固定と併せて使います |
| 小さく         | `text-sm`     | 余白も一緒に変わります     |

余白は `--spacing-relative` で組まれているため、文字サイズに追従します。

## マークアップ規約

| 位置   | 要素 / 属性              | 要否 | 効果 |
| :----- | :----------------------- | :--- | :--- |
| ルート | `textarea`               | 必須 |      |
| ルート | `class="jumpu-textarea"` | 必須 |      |

## 状態

| 状態       | 見た目                        | 発火条件        |
| :--------- | :---------------------------- | :-------------- |
| フォーカス | 境界が `primary-700` になる   | `:focus`        |
| 未入力     | プレースホルダーが `gray-300` | `::placeholder` |

無効時の見た目は持ちません。
`disabled` を指定した場合、ブラウザの既定の表示になります。

## アクセシビリティ

対応する APG のパターンはありません。

プレースホルダーをラベルの代わりに使わないでください。
入力を始めると消えるため、何を入力する欄なのかがわからなくなります。
`label` 要素を `for` で関連づけてください。
