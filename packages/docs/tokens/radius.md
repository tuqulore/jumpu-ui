# Radius

角丸の尺度を定めます。

Jumpu UI は独自の尺度を定義していません。
Tailwind CSS の `--radius-*` をそのまま使います。

## 使い分け

| 尺度                   | 使う場面                   | コンポーネント                                                                                |
| :--------------------- | :------------------------- | :-------------------------------------------------------------------------------------------- |
| `--radius-md`          | 既定。ほとんどの矩形に使う | Button、OutlinedButton、TextButton、Card、IconButton、Input、Select、Textarea、Tag、FilledTag |
| `--radius-sm`          | 小さく浮かぶもの           | IconButton のツールチップ                                                                     |
| `--radius-2xl`         | 吹き出し                   | Balloon                                                                                       |
| `calc(infinity * 1px)` | 円、または完全な丸         | Avatar、Badge、ToggleSwitch、ラジオボタン                                                     |

矩形に迷ったら `--radius-md` を使います。

## 変えたいとき

`rounded-*` ユーティリティを付けます。

```html
<button type="button" class="jumpu-button rounded-full">丸いボタン</button>
```

角丸はコンポーネントのバリアントではなくユーティリティで表現します。
この方針については [Principles](/principles/) を参照してください。
