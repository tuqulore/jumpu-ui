# Tokens

色、余白、角丸、文字サイズ、相互作用の尺度を定めます。

Jumpu UI が自ら定義する尺度は 15 個です。
それ以外は Tailwind CSS の尺度をそのまま使います。
どちらであっても、コンポーネントの見た目はこれらの尺度の上に組み立てられています。

## 配布状況

尺度を定めることと、CSS 変数として配布することは別です。
このセクションに書かれている尺度のうち、`var(--*)` で参照できるものは次のとおりです。

| 分類                | 対象                                                                                                           | 参照方法                              |
| :------------------ | :------------------------------------------------------------------------------------------------------------- | :------------------------------------ |
| Jumpu UI が定義     | [primary パレット](/tokens/colors)、[ステータス 3 色](/tokens/colors)、[`--spacing-relative`](/tokens/spacing) | `var(--color-primary-700)` など       |
| Tailwind CSS が定義 | [角丸](/tokens/radius)、[文字サイズ](/tokens/typography)、[グレー](/tokens/colors)                             | `var(--radius-md)`、`rounded-md` など |
| 未配布              | [遷移時間とイージング](/tokens/interaction)、[ホバーとアクティブの明度差](/tokens/interaction)                 | なし                                  |

未配布のものは、コンポーネントの CSS に直接書かれています。
値としては決まっていますが、変数として上書きすることはできません。

## カスタマイズ

`@theme` で上書きします。

```css
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss";

@theme {
  --color-primary-700: var(--color-emerald-700);
  --spacing-relative: 0.3em;
}
```

上書きした値はコンポーネントの内部まで届きます。
コンポーネント側は直値ではなく `var(--*)` で参照しているためです。

差し替えるときの制約は、それぞれのページに書いています。
