# Select

用意された選択肢から選ばせます。

## いつ使うか

**選択肢が多く、一覧で並べると場所を取る**ときに使います。
都道府県、業種、年月が該当します。

選択肢が 2 つか 3 つなら、ラジオボタン（[Input](/components/input#ラジオボタン)）のほうが速く選べます。

## 例

### 基本

:::raw

<select class="jumpu-select">
  <option value="畜産食料品製造業">畜産食料品製造業</option>
  <option value="水産食料品製造業">水産食料品製造業</option>
  <option value="調味料製造業">調味料製造業</option>
  <option value="糖類製造業">糖類製造業</option>
  <option value="精穀・製粉業">精穀・製粉業</option>
  <option value="パン・菓子製造業">パン・菓子製造業</option>
</select>

:::

```html
<select class="jumpu-select">
  <option value="畜産食料品製造業">畜産食料品製造業</option>
  <option value="水産食料品製造業">水産食料品製造業</option>
  <option value="調味料製造業">調味料製造業</option>
</select>
```

右端の矢印は背景画像で描いています。

### 複数選択

`multiple` を付けると矢印が消え、右側の余白も詰まります。

:::raw

<select class="jumpu-select" multiple>
  <option value="畜産食料品製造業">畜産食料品製造業</option>
  <option value="水産食料品製造業">水産食料品製造業</option>
  <option value="調味料製造業">調味料製造業</option>
  <option value="糖類製造業">糖類製造業</option>
  <option value="精穀・製粉業">精穀・製粉業</option>
  <option value="パン・菓子製造業">パン・菓子製造業</option>
</select>

:::

```html
<select class="jumpu-select" multiple>
  <option value="畜産食料品製造業">畜産食料品製造業</option>
  <option value="水産食料品製造業">水産食料品製造業</option>
  <option value="調味料製造業">調味料製造業</option>
</select>
```

複数選択は操作が難しく、選べることに気づかれないことがあります。
チェックボックスの一覧で代えられないか検討してください。

## ユーティリティによる調整

| 調整したいこと | 書き方    | 備考                                                     |
| :------------- | :-------- | :------------------------------------------------------- |
| 横幅           | `w-full`  |                                                          |
| 小さく         | `text-sm` | 左右と上下の余白は追従しますが、矢印の位置は変わりません |

余白は 2 系統が混ざっています。
上下と左の余白は `--spacing-relative`、矢印のための右側の余白は `--spacing(10)` です。
詳細は [Spacing](/tokens/spacing) を参照してください。

## マークアップ規約

| 位置       | 要素 / 属性            | 要否 | 効果                             |
| :--------- | :--------------------- | :--- | :------------------------------- |
| ルート     | `select`               | 必須 |                                  |
| ルート     | `class="jumpu-select"` | 必須 |                                  |
| ルート     | `[multiple]`           | 任意 | 矢印を消し、右側の余白を詰めます |
| ルート直下 | `option`               | 必須 |                                  |

## 状態

| 状態       | 見た目                      | 発火条件 |
| :--------- | :-------------------------- | :------- |
| フォーカス | 境界が `primary-700` になる | `:focus` |

無効時の見た目は持ちません。

## アクセシビリティ

対応する APG のパターンはありません。
ネイティブの `select` に委ねています。

`label` 要素を `for` で関連づけてください。

最初の `option` を「選択してください」にする場合は、`value=""` にして未選択であることを表します。
