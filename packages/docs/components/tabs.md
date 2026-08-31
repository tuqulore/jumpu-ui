# Tabs

同じ場所に複数の内容を重ね、見出しで切り替えます。

## いつ使うか

**並列で、同時には見なくてよい内容**を切り替えるときに使います。
1 つの対象についての別々の側面（概要、履歴、設定）が該当します。

手順のように順番があるものには使いません。
比較したい内容にも向きません。切り替えると前が見えなくなります。

## BoxedTabs との使い分け

| 使うもの                            | 見た目                     | 向いている場面                   |
| :---------------------------------- | :------------------------- | :------------------------------- |
| Tabs                                | 選択中の下に線             | 内容の上に置く。控えめ           |
| [BoxedTabs](/components/boxed-tabs) | 選択中が箱として浮き上がる | 面の切り替えであることを強く示す |

## 例

### 基本

:::raw

<div class="jumpu-tabs">
  <div role="tablist" aria-label="ダッシュボード">
    <button role="tab" aria-selected="true" aria-controls="tabs-panel-1" id="tabs-tab-1" tabindex="0">ホーム</button>
    <button role="tab" aria-selected="false" aria-controls="tabs-panel-2" id="tabs-tab-2" tabindex="-1">タスク</button>
    <button role="tab" aria-selected="false" aria-controls="tabs-panel-3" id="tabs-tab-3" tabindex="-1">実績</button>
  </div>
</div>
<div role="tabpanel" id="tabs-panel-1" aria-labelledby="tabs-tab-1" class="p-4">ホームの内容</div>
<div role="tabpanel" id="tabs-panel-2" aria-labelledby="tabs-tab-2" hidden></div>
<div role="tabpanel" id="tabs-panel-3" aria-labelledby="tabs-tab-3" hidden></div>

:::

```html
<div class="jumpu-tabs">
  <div role="tablist" aria-label="ダッシュボード">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="tabs-panel-1"
      id="tabs-tab-1"
      tabindex="0"
    >
      ホーム
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="tabs-panel-2"
      id="tabs-tab-2"
      tabindex="-1"
    >
      タスク
    </button>
  </div>
</div>
<div role="tabpanel" id="tabs-panel-1" aria-labelledby="tabs-tab-1">…</div>
<div
  role="tabpanel"
  id="tabs-panel-2"
  aria-labelledby="tabs-tab-2"
  hidden
></div>
```

`aria-controls` の値と、パネルの `id` を一致させてください。

### リンクとして使う

タブを `a` 要素にすると、ページ遷移で切り替える形になります。

:::raw

<div class="jumpu-tabs">
  <div role="tablist" aria-label="ダッシュボード（リンク）">
    <a role="tab" href="#" aria-selected="true">ホーム</a>
    <a role="tab" href="#" aria-selected="false">タスク</a>
    <a role="tab" href="#" aria-selected="false">実績</a>
  </div>
</div>

:::

```html
<div class="jumpu-tabs">
  <div role="tablist" aria-label="ダッシュボード">
    <a role="tab" href="#" aria-selected="true">ホーム</a>
    <a role="tab" href="#" aria-selected="false">タスク</a>
  </div>
</div>
```

## ユーティリティによる調整

| 調整したいこと | 書き方                      | 備考                         |
| :------------- | :-------------------------- | :--------------------------- |
| 小さく         | `text-sm`                   | タブの余白も一緒に変わります |
| タブの間隔     | `[role=tablist]` に `gap-*` | 既定は `--spacing(2)`        |

タブの余白は `--spacing-relative`、タブどうしの間隔は `--spacing(2)` です。
文字サイズを変えると余白だけが追従し、間隔は変わりません。

横に収まらない場合は自動で横スクロールします。

## マークアップ規約

| 位置                    | 要素 / 属性          | 要否 | 効果                              |
| :---------------------- | :------------------- | :--- | :-------------------------------- |
| ルート                  | 任意の要素           | 必須 | 横スクロールします                |
| ルート                  | `class="jumpu-tabs"` | 必須 |                                   |
| 子孫                    | `[role="tablist"]`   | 必須 | 下に境界線が引かれます            |
| `[role="tablist"]` 直下 | `[role="tab"]`       | 必須 |                                   |
| `[role="tab"]`          | `aria-selected`      | 必須 | `true` で選択中の見た目になります |
| `[role="tab"]`          | `aria-controls`      | 必須 | パネルの `id` を指します          |

パネルはルートの外に置きます。
コンポーネントはパネルの見た目を持ちません。

## 状態

| 状態           | 見た目                            | 発火条件                       |
| :------------- | :-------------------------------- | :----------------------------- |
| 選択中         | 文字と下線が `primary-700` になる | `[aria-selected="true"]`       |
| ホバー         | 下線が `gray-400` になる          | `:hover`                       |
| 選択中のホバー | 下線が `primary-800` になる       | `[aria-selected="true"]:hover` |
| アクティブ     | 背景が `gray-50` になる           | `:active`                      |

## アクセシビリティ

APG の [Tabs パターン](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)に準拠します。

次の 3 つは利用側で実装してください。

- `aria-selected` の切り替えと、対応するパネルの表示 / 非表示
- **ローミング tabindex**：選択中のタブを `tabindex="0"`、それ以外を `tabindex="-1"` にします
- 左右の矢印キーによるタブの移動

`aria-label` には、そのタブが何の切り替えなのかを書いてください。
