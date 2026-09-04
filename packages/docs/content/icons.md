# アイコン

使用するアイコンセットに指定はありません。
プロジェクトごとに適したアイコンセットを採用してください。

## 選び方

どのようなアイコンセットを選ぶにしても、さまざまなアイコンセットが利用可能な [Iconify](https://iconify.design/docs/usage/) の使用を推奨します。

アイコンだけで意味を伝えないでください。
文字を添えるか、[IconButton](/components/icon-button) のようにアクセシブルな名前を与えます。

## 現状

一部のコンポーネントは、Font Awesome Free の SVG を CSS に埋め込んでいます。

| コンポーネント | 埋め込んでいるもの |
| :------------- | :----------------- |
| Accordion      | 開閉を示す矢印     |
| Tag、FilledTag | 閉じるボタンの ×   |

Input、Select、Textarea には [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) の SVG が入っています。

いずれも利用側がアイコンセットを選ぶ前に決まってしまう部分です。
特定のアイコンセットに依存しない実装にする予定です。

> [!NOTE]
>
> ライセンスと出典は [NOTICE](https://github.com/tuqulore/jumpu-ui/blob/main/packages/tailwindcss/NOTICE.md) に記載しています。
