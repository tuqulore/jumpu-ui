# Migration

Jumpu UI ではメジャーバージョン間の破壊的変更のうち機械的に置換可能なものを [@jumpu-ui/codemod](https://www.npmjs.com/package/@jumpu-ui/codemod) として提供しています。プロジェクトのルートで実行してください。

```sh
npx @jumpu-ui/codemod <target> [paths...]
```

## いつ何を使うか

| 現在のバージョン | 対象コマンド | ドキュメント |
| --- | --- | --- |
| v2 系 → v3 系 | `v2-to-v3` | [v2 → v3 マイグレーション](/migration/v2-to-v3) |
| v1 系 → v2 系 | `v1-to-v2` | [v1 → v2 のドキュメント](https://jumpu-ui-v2.pages.dev/migration/v1-to-v2)（v2 サイト） |

## CLI の使い方

コマンド一覧・オプション・実行時のフローは [codemod CLI リファレンス](/migration/codemod) にまとめています。
