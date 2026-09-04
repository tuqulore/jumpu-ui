# Typography

文字サイズと行の高さの尺度を定めます。

Jumpu UI は独自の尺度を定義していません。
Tailwind CSS の `--text-*` をそのまま使います。

## コンポーネントが明示するもの

ほとんどのコンポーネントは文字サイズを指定せず、親から継承します。
明示しているのは次の 4 か所だけです。

| コンポーネント            | 文字サイズ  | 行の高さ                 |
| :------------------------ | :---------- | :----------------------- |
| Tag                       | `--text-xs` | `--text-xs--line-height` |
| FilledTag                 | `--text-xs` | `--text-xs--line-height` |
| IconButton のツールチップ | `--text-xs` | `--leading-tight`        |
| Badge                     | `--text-sm` | 指定なし                 |

継承するということは、`text-sm` や `text-lg` のようなユーティリティを付ければ、そのまま反映されるということです。

> [!NOTE]
>
> 行の高さの与え方が揃っていません。
> 同じ `--text-xs` に対して、Tag と FilledTag は対応する `--text-xs--line-height` を、IconButton は `--leading-tight` を使っています。

## 文字サイズを変えたときの余白

文字サイズを変えると余白も変わるコンポーネントと、変わらないコンポーネントがあります。
どちらになるかは [Spacing](/tokens/spacing) の 2 系統のどちらを使っているかで決まります。
