# TextButton

塗りも輪郭も持たない、最も控えめな操作を表します。

## いつ使うか

**目立たせたくない操作**に使います。
「キャンセル」「あとで」「スキップ」のように、選ばれなくてよい操作が該当します。

本文中のリンクには使いません。
リンクは通常のテキストリンクとして書きます。

## 例

### 基本

:::raw

<button type="button" class="jumpu-text-button">テキストボタン</button>

:::

```html
<button type="button" class="jumpu-text-button">テキストボタン</button>
```

### リンクとして使う

:::raw

<a href="#" class="jumpu-text-button">テキストボタン</a>

:::

```html
<a href="#" class="jumpu-text-button">テキストボタン</a>
```

### 無効にする

:::raw

<button type="button" disabled class="jumpu-text-button">
  テキストボタン
</button>

:::

```html
<button type="button" disabled class="jumpu-text-button">テキストボタン</button>
```

## ユーティリティによる調整

| 調整したいこと  | 書き方                | 備考                   |
| :-------------- | :-------------------- | :--------------------- |
| 小さく / 大きく | `text-xs` / `text-lg` | 余白も一緒に変わります |
| 角を丸く        | `rounded-full`        |                        |

## マークアップ規約

| 位置   | 要素 / 属性                                   | 要否 | 効果                   |
| :----- | :-------------------------------------------- | :--- | :--------------------- |
| ルート | `button` / `a` / `[role="button"]` のいずれか | 必須 |                        |
| ルート | `class="jumpu-text-button"`                   | 必須 |                        |
| ルート | `[disabled]`                                  | 任意 | 無効の見た目になります |

## 状態

| 状態       | 見た目                      | 発火条件     |
| :--------- | :-------------------------- | :----------- |
| ホバー     | 背景が `primary-100` になる | `:hover`     |
| アクティブ | 明度が 90% に下がる         | `:active`    |
| 無効       | `gray-300` の塗りになる     | `[disabled]` |
| フォーカス | ブラウザの既定              | `:focus`     |

> [!NOTE]
>
> 無効にすると背景のない状態から `gray-300` の塗りに変わります。
> 控えめだったものが、無効になった途端に目立つことになります。

## アクセシビリティ

APG の [Button パターン](https://www.w3.org/WAI/ARIA/apg/patterns/button/)に準拠します。
