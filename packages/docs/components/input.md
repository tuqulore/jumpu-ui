# Input

1 行の入力欄と、選択のための小さな部品をまとめて扱います。

## いつ使うか

**利用者に値を入れさせる**ときに使います。
`type` によって見た目が変わります。

複数行を入力させるなら [Textarea](/components/textarea)、選択肢から選ばせるなら [Select](/components/select) を使います。

## 例

### テキスト系

`type` を指定しない場合と、`text` / `email` / `url` / `password` / `number` / `date` / `datetime-local` / `month` / `search` / `tel` / `time` / `week` が同じ見た目になります。

:::raw

<div class="flex flex-wrap gap-2">
  <input class="jumpu-input" placeholder="名前" />
  <input type="email" class="jumpu-input" placeholder="email@example.com" />
  <input type="number" class="jumpu-input" placeholder="0" />
  <input type="date" class="jumpu-input" />
</div>

:::

```html
<input class="jumpu-input" placeholder="名前" />
<input type="email" class="jumpu-input" placeholder="email@example.com" />
<input type="number" class="jumpu-input" placeholder="0" />
<input type="date" class="jumpu-input" />
```

上に挙げた以外の `type` には、テキスト系のスタイルが当たりません。

### ラジオボタン

:::raw

<input type="radio" class="jumpu-input mr-1" name="radio-sample" value="radio-1" checked />
<input type="radio" class="jumpu-input" name="radio-sample" value="radio-2" />

:::

```html
<input
  type="radio"
  class="jumpu-input mr-1"
  name="radio-sample"
  value="radio-1"
  checked
/>
<input type="radio" class="jumpu-input" name="radio-sample" value="radio-2" />
```

### チェックボックス

3 つめは `indeterminate`（どちらでもない状態）です。

<script setup>
import { useTemplateRef, onMounted } from "vue";
const checkbox = useTemplateRef("checkbox");
onMounted(() => {
  checkbox.value.indeterminate = true;
});
</script>

:::raw

<div id="checkbox">
  <input
    type="checkbox"
    class="jumpu-input mr-1"
    value="checkbox-1"
    checked
  />
  <input
    type="checkbox"
    class="jumpu-input mr-1"
    value="checkbox-2"
  />
  <input type="checkbox" class="jumpu-input" value="checkbox-3" ref="checkbox" />
</div>

:::

```html
<input type="checkbox" class="jumpu-input mr-1" value="checkbox-1" checked />
<input type="checkbox" class="jumpu-input mr-1" value="checkbox-2" />
<input type="checkbox" class="jumpu-input" value="checkbox-3" />
```

`indeterminate` は属性ではなく、スクリプトから設定します。

### ファイル

:::raw

<input type="file" class="jumpu-input" />

:::

```html
<input type="file" class="jumpu-input" />
```

ファイル選択ボタンはブラウザの既定に戻しています。
見た目はブラウザごとに異なります。

## ユーティリティによる調整

| 調整したいこと                      | 書き方                      | 備考                                              |
| :---------------------------------- | :-------------------------- | :------------------------------------------------ |
| 横幅                                | `w-full`                    |                                                   |
| 小さく                              | `text-sm`                   | テキスト系のみ。余白も一緒に変わります            |
| 大きさ（チェックボックス / ラジオ） | `w-5 h-5`                   | 既定は `w-4 h-4` 相当。文字サイズには追従しません |
| 誤りを示す                          | `border-danger bg-danger/5` | [Recipes](/recipes/login) に例があります          |

## マークアップ規約

| 位置   | 要素 / 属性           | 要否 | 効果                                 |
| :----- | :-------------------- | :--- | :----------------------------------- |
| ルート | `input`               | 必須 |                                      |
| ルート | `class="jumpu-input"` | 必須 |                                      |
| ルート | `type`                | 任意 | 値によって当たるスタイルが変わります |

## 状態

| 状態                                    | 見た目                                          | 発火条件         |
| :-------------------------------------- | :---------------------------------------------- | :--------------- |
| フォーカス（テキスト系）                | 境界が `primary-700` になる                     | `:focus`         |
| フォーカス（チェックボックス / ラジオ） | `primary-700` のリングが 2px のオフセットで出る | `:focus`         |
| フォーカス（ファイル）                  | ブラウザの既定のアウトライン                    | `:focus`         |
| 選択済み                                | `primary-700` で塗られ、白い印が出る            | `:checked`       |
| どちらでもない                          | 横線が出る                                      | `:indeterminate` |
| 未入力                                  | プレースホルダーが `gray-300`                   | `::placeholder`  |

無効時の見た目は持ちません。

## アクセシビリティ

対応する APG のパターンはありません。
ネイティブの `input` に委ねています。

`label` 要素を `for` で関連づけてください。
プレースホルダーはラベルの代わりになりません。

ラジオボタンのグループには `fieldset` と `legend`、または `role="radiogroup"` と `aria-labelledby` で、グループ全体の名前を与えてください。

誤りを色だけで示さないでください。
`aria-invalid` と、誤りの内容を説明するテキストを併せて示します。
