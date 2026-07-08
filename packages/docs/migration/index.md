# Migration

Jumpu UI では破壊的変更のうち機械的に置換可能なものを [@jumpu-ui/codemod](https://www.npmjs.com/package/@jumpu-ui/codemod) として提供しています。破壊的変更はメジャーバージョンだけでなく、コンポーネントクラスの構造変更を伴う minor / patch でも発生する可能性があります。

インストール済みのバージョンから最新まで、すべての適用対象を一気に処理するには次のコマンドを実行してください。

```sh
npx @jumpu-ui/codemod upgrade
```

内部で `node_modules/@jumpu-ui/tailwindcss/package.json` を読み、起点バージョンを自動検出します。検出できない場合（CDN 経由の利用など）はプロジェクト内の `esm.sh` の URL からバージョンを抽出するフォールバックが働きます。それでも検出できない場合は `--from <version>` フラグで明示してください。

## いつ何を使うか

| したいこと                                 | コマンド                                              |
| ------------------------------------------ | ----------------------------------------------------- |
| 起点バージョンを検出して最新まで一気に移行 | `npx @jumpu-ui/codemod upgrade`                       |
| 起点を明示して upgrade                     | `npx @jumpu-ui/codemod upgrade --from 2.0.1`          |
| 特定の transform だけ実行                  | `npx @jumpu-ui/codemod upgrade --only <transform-id>` |
| 利用可能な transform を一覧                | `npx @jumpu-ui/codemod list`                          |

## CLI の詳細

コマンド一覧・オプション・破壊的変更の分類などは [codemod CLI リファレンス](/migration/codemod) を参照してください。バージョン別の破壊的変更の詳細は各マイグレーションガイドにあります。

- [v2 → v3 マイグレーション](/migration/v2-to-v3)
- v1 → v2 は [v2 系の docs サイト](https://jumpu-ui-v2.pages.dev/) を参照してください
