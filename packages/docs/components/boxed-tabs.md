# BoxedTabs

同じ場所に複数の内容を重ね、箱の形をした見出しで切り替えます。

## いつ使うか

[Tabs](/components/tabs) と同じ用途で、**面が切り替わることを強く示したい**ときに使います。
選択中のタブが白い箱として浮き上がり、下の内容とつながって見えます。

使い分けの基準は [Tabs](/components/tabs#boxedtabs-との使い分け) を参照してください。

## 例

### 基本

:::raw

<div class="jumpu-boxed-tabs">
  <div role="tablist" aria-label="ダッシュボード">
    <button role="tab" aria-selected="true" aria-controls="boxed-panel-1" id="boxed-tab-1" tabindex="0">ホーム</button>
    <button role="tab" aria-selected="false" aria-controls="boxed-panel-2" id="boxed-tab-2" tabindex="-1">タスク</button>
    <button role="tab" aria-selected="false" aria-controls="boxed-panel-3" id="boxed-tab-3" tabindex="-1">実績</button>
  </div>
</div>
<div role="tabpanel" id="boxed-panel-1" aria-labelledby="boxed-tab-1" class="p-4">ホームの内容</div>
<div role="tabpanel" id="boxed-panel-2" aria-labelledby="boxed-tab-2" hidden></div>
<div role="tabpanel" id="boxed-panel-3" aria-labelledby="boxed-tab-3" hidden></div>

:::

```html
<div class="jumpu-boxed-tabs">
  <div role="tablist" aria-label="ダッシュボード">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="boxed-panel-1"
      id="boxed-tab-1"
      tabindex="0"
    >
      ホーム
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="boxed-panel-2"
      id="boxed-tab-2"
      tabindex="-1"
    >
      タスク
    </button>
  </div>
</div>
<div role="tabpanel" id="boxed-panel-1" aria-labelledby="boxed-tab-1">…</div>
```

### リンクとして使う

:::raw

<div class="jumpu-boxed-tabs">
  <div role="tablist" aria-label="ダッシュボード（リンク）">
    <a role="tab" href="#" aria-selected="true">ホーム</a>
    <a role="tab" href="#" aria-selected="false">タスク</a>
    <a role="tab" href="#" aria-selected="false">実績</a>
  </div>
</div>

:::

```html
<div class="jumpu-boxed-tabs">
  <div role="tablist" aria-label="ダッシュボード">
    <a role="tab" href="#" aria-selected="true">ホーム</a>
    <a role="tab" href="#" aria-selected="false">タスク</a>
  </div>
</div>
```

> [!NOTE]
>
> ホバーの見た目を持ちません。
> リンクやボタンとして使う場合、押せることが視覚的に伝わらないため、`hover:` のユーティリティで補ってください。

## ユーティリティによる調整

| 調整したいこと | 書き方                                  | 備考                         |
| :------------- | :-------------------------------------- | :--------------------------- |
| 小さく         | `text-sm`                               | タブの余白も一緒に変わります |
| タブの間隔     | `[role=tablist]` に `gap-*`             | 既定は `--spacing(2)`        |
| 押下感         | `[role=tab]` に `hover:bg-gray-50` など | 標準では変化しません         |

選択中のタブは、上側の余白だけが広がります。
下の面とつながって見せるための調整です。

## マークアップ規約

| 位置                    | 要素 / 属性                | 要否 | 効果                      |
| :---------------------- | :------------------------- | :--- | :------------------------ |
| ルート                  | 任意の要素                 | 必須 | 横スクロールします        |
| ルート                  | `class="jumpu-boxed-tabs"` | 必須 |                           |
| 子孫                    | `[role="tablist"]`         | 必須 | 下に境界線が引かれます    |
| `[role="tablist"]` 直下 | `[role="tab"]`             | 必須 | 上の角が丸くなります      |
| `[role="tab"]`          | `aria-selected`            | 必須 | `true` で白い箱になります |
| `[role="tab"]`          | `aria-controls`            | 必須 | パネルの `id` を指します  |

## 状態

| 状態   | 見た目                                              | 発火条件                 |
| :----- | :-------------------------------------------------- | :----------------------- |
| 選択中 | 背景が白、境界が `gray-300`、下の境界だけ透明になる | `[aria-selected="true"]` |
| 選択中 | 上側の余白が広がる                                  | `[aria-selected="true"]` |

ホバー、アクティブ、フォーカスの見た目は持ちません。

## アクセシビリティ

APG の [Tabs パターン](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)に準拠します。

利用側で実装することは [Tabs](/components/tabs#アクセシビリティ) と同じです。

選択中であることを、白い背景という**色の差だけ**で示しています。
`aria-selected` を必ず併せて指定してください。
