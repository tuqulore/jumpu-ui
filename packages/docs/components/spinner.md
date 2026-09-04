# Spinner

処理が進行中であることを示します。

## いつ使うか

**待たせている最中**に使います。
読み込み、送信、検索の実行中が該当します。

何がどれくらい進んだかを伝えたい場合には向きません。
進捗の割合がわかるなら、その数値を示してください。

## 例

### 基本

`svg` と `circle` は利用側が書きます。
アニメーションはコンポーネントが与えます。

:::raw

<div class="jumpu-spinner">
  <svg viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20"></circle>
  </svg>
</div>

:::

```html
<div class="jumpu-spinner" role="status" aria-label="読み込み中">
  <svg viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20"></circle>
  </svg>
</div>
```

読み込み中のカードとして組み立てた例は [Recipes](/recipes/loading) にあります。

## ユーティリティによる調整

| 調整したいこと | 書き方                  | 備考                           |
| :------------- | :---------------------- | :----------------------------- |
| 大きさ         | `w-4 h-4` など          | 既定は `w-12 h-12` 相当        |
| 色             | `text-primary-500` など | 線は `currentcolor` を使います |

:::raw

<div class="flex items-center gap-3">
  <div class="jumpu-spinner w-4 h-4">
    <svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20"></circle></svg>
  </div>
  <div class="jumpu-spinner w-8 h-8 text-primary-500">
    <svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20"></circle></svg>
  </div>
  <div class="jumpu-spinner w-12 h-12 text-red-400">
    <svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20"></circle></svg>
  </div>
</div>

:::

```html
<div class="jumpu-spinner h-4 w-4">…</div>
<div class="jumpu-spinner text-primary-500 h-8 w-8">…</div>
<div class="jumpu-spinner h-12 w-12 text-red-400">…</div>
```

## マークアップ規約

| 位置       | 要素 / 属性                         | 要否 | 効果                             |
| :--------- | :---------------------------------- | :--- | :------------------------------- |
| ルート     | 任意の要素                          | 必須 |                                  |
| ルート     | `class="jumpu-spinner"`             | 必須 |                                  |
| ルート直下 | `svg` + `viewBox="25 25 50 50"`     | 必須 | 2 秒で 1 回転します              |
| `svg` 直下 | `circle` + `cx="50" cy="50" r="20"` | 必須 | 1.5 秒周期で線の長さが変わります |

`viewBox` と `circle` の値は、アニメーションの `stroke-dasharray` と対応しています。
別の値にすると線の長さが合わなくなります。

## 状態

常に回転しています。
止める指定はありません。

> [!NOTE]
>
> `prefers-reduced-motion` に対応していません。
> 動きを減らす設定にしている利用者にも回転が再生されます。
> 詳細は[現状の制約](/constraints)を参照してください。

## アクセシビリティ

対応する APG のパターンはありません。

そのままでは支援技術に何も伝わりません。
`role="status"` と `aria-label` を与えて、待たせていることを伝えてください。

回転そのものは装飾です。
処理が終わったら、結果を伝える要素に置き換えてください。
