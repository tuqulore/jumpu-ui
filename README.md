# Jumpu UI

Jumpu UI はユーティリティフレンドリーな UI コンポーネントライブラリーです。

## Storybook

https://tuqulore.github.io/jumpu-ui/

## Figma

デザインツール Figma でも Jumpu UI が公開されています。

[Jumpu UI （Figma 版）](https://www.figma.com/community/file/1042706969451783914)

## コンセプト

Jumpu UI の最大の特徴は、コンポーネントのバリエーションを TailwindCSS ユーティリティーと組み合わせて表現できることです。

たとえば、「ボタン」を小さくしたいとします。一般的には、ボタンへの関心を中心に「小さいボタン」の見た目を用意することになるでしょう。Jumpu UI ではどうするかというと、「ボタン」と「文字が小さい」によって見た目を用意します。「ボタン」は Jumpu UI コンポーネントに、「文字が小さい」は TailwindCSS ユーティリティーにそれぞれ対応づけられます。Jumpu UI では「さまざまなボタン」を「ひとつのボタン」では用意しません。それは TailwindCSS ユーティリティーによって表現されるからです。これがユーティリティフレンドリーな UI コンポーネントというコンセプトです。

ここで、有名な CSS 設計論と比較をしてみましょう。

| CSS 設計論 | Block              | Element                                                      | Modifier                                                                                        |
| :--------- | :----------------- | :----------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| BEM        | `.block`           | `.block__elem`                                               | `.block--mod`                                                                                   |
| RSCSS      | `.rscss-component` | `.rscss-component > .elem`                                   | `.rscss-component.-variant`                                                                     |
| Jumpu UI   | `.jumpu-component` | `.jumpu-component type` / `.jumpu-component [role="button"]` | `.jumpu-component[aria-pressed="true"]` / `.jumpu-component.text-sm` / `.jumpu-other-component` |

重要なのはクラス名を定義しているのはコンポーネントの粒度のみで、それ以外は要素型セレクター、属性セレクター、TailwindCSS ユーティリティーで表現されていることです。これによって、可能な限りクラスの名前空間を TailwindCSS ユーティリティーに割り当てることができます。

## パッケージ

- [@jumpu-ui/tailwindcss](https://github.com/tuqulore/jumpu-ui/blob/develop/packages/tailwindcss/README.md)

## Jumpu UI を使った開発に関する問い合わせ

[株式会社ツクロア](https://tuqulore.com/)では、 Jumpu UI を使った Web アプリケーション設計・開発のご依頼を受け付けています。 [こちらのフォーム](https://forms.gle/saTUxAavWp2iKtei8)にてまずはお問い合わせください。
