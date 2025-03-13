# 主要な CSS 設計手法との比較

Jumpu UI の最大の特徴は、コンポーネントのバリエーションを [Tailwind CSS ユーティリティー](https://tailwindcss.com/docs/styling-with-utility-classes)と組み合わせて表現できることです。

たとえば、「ボタン」を小さくしたいとします。一般的には、ボタンへの関心を中心に「小さいボタン」の見た目を用意することになるでしょう。Jumpu UI ではどうするかというと、「ボタン」と「文字が小さい」によって見た目を用意します。「ボタン」は Jumpu UI コンポーネントに、「文字が小さい」は Tailwind CSS ユーティリティーにそれぞれ対応づけられます。Jumpu UI では「さまざまなボタン」を「ひとつのボタン」では用意しません。それは Tailwind CSS ユーティリティーによって表現されるからです。これがユーティリティフレンドリーというコンセプトです。

ここで、有名な CSS 設計手法と比較をしてみましょう。

| CSS 設計論 | Block              | Element                                                      | Modifier                                                                                        |
| :--------- | :----------------- | :----------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| BEM        | `.block`           | `.block__elem`                                               | `.block--mod`                                                                                   |
| RSCSS      | `.rscss-component` | `.rscss-component > .elem`                                   | `.rscss-component.-variant`                                                                     |
| Jumpu UI   | `.jumpu-component` | `.jumpu-component type` / `.jumpu-component [role="button"]` | `.jumpu-component[aria-pressed="true"]` / `.jumpu-component.text-sm` / `.jumpu-other-component` |

> [!NOTE]
>
> この文書に取り上げている他にも、主要な CSS 設計手法として次にあるものが挙げられます。これらとの比較については加筆が必要です。
>
> - Atomic CSS
> - ITCSS
> - OOCSS
> - [SMACSS](https://smacss.com/ja/)

重要な点は、クラス名を定義しているのはコンポーネントの粒度のみで、それ以外は要素型セレクター、属性セレクター、Tailwind CSS ユーティリティーで表現されていることです。これによって、Jumpu UI コンポーネントのスタイルを定義しながらも、Jumpu UI は独自のマークアップ構造やバリアントの提供を避けています。
