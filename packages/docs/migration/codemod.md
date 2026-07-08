# codemod CLI

`@jumpu-ui/codemod` は Jumpu UI のメジャーバージョン間で発生する破壊的変更のうち、機械的に置換可能なものを自動で書き換えるコマンドラインツールです。

## インストールと実行

`npx` から直接実行できます。プロジェクトのルートで:

```sh
# v2 系から v3 系へ
npx @jumpu-ui/codemod v2-to-v3 .

# v1 系から v2 系へ
npx @jumpu-ui/codemod v1-to-v2 .
```

書き込み前の差分だけを見たい場合は `--dry-run` をつけてください。

```sh
npx @jumpu-ui/codemod v2-to-v3 . --dry-run --verbose
```

## サブコマンド

| コマンド | 概要 |
| --- | --- |
| `v1-to-v2` | v1 → v2 の 3 transform を順に適用 |
| `v2-to-v3` | v2 → v3 の 2 transform を順に適用 |
| `class-prefix` | 単発: bare クラス名を `jumpu-*` にリネーム |
| `spacing-rel` | 単発: CSS の `rel<N>` を `calc(var(--spacing-relative) * N)` に置換 |
| `drop-colors-import` | 単発: `@import "@jumpu-ui/tailwindcss/colors";` を削除 |
| `cdn-url` | 単発: esm.sh の CDN URL に `/dist/style.css` を付与 |
| `explicit-tailwindcss-import` | 単発: `@import "tailwindcss";` の明示挿入 |
| `list` | 利用可能な transform を一覧 |

## グローバルオプション

| オプション | 説明 |
| --- | --- |
| `--dry-run` | 変更を書き込まず、差分サマリのみ表示 |
| `-v, --verbose` | 詳細ログ。`notes`（手動対応が必要な箇所）を全表示 |
| `--no-git-check` | 作業ツリーが dirty でも実行を許可 |
| `--include <glob>` | 対象ファイルの glob を明示指定 |
| `--include-css` | `class-prefix` を CSS ファイルにも適用（誤爆リスクあり、既定は off） |
| `--extra-class <name...>` | クラス名マップに追加する bare クラス名 |

パスを省略すると cwd を対象にします。デフォルトの glob は `**/*.{html,htm,vue,jsx,tsx,astro,css}` で、`.gitignore` を尊重します。

## 推奨する実行フロー

1. すべての変更をコミット、または stash しておく（`--no-git-check` を使わない場合、作業ツリーが dirty だと codemod は中断します）
2. `npx @jumpu-ui/codemod <cmd> . --dry-run --verbose` で差分と `notes` を確認
3. 問題なければ `--dry-run` を外して実行
4. `git diff` で見直し、テストやビルドを走らせて確認

## 既知の未対応

- Vue の `:class="{ input: cond }"` オブジェクト構文（初回リリース非対応、`--verbose` で警告表示）
- JSX の template literal (`` `input ${x}` ``)、変数、spread 引数。string リテラル引数のみ書き換え対象
- ユーザーが独自に定義した `.input` などの CSS セレクタ（誤爆回避のため CSS はデフォルト対象外、`--include-css` で opt-in）

## 対応する破壊的変更

- v2 → v3: [v2 → v3 マイグレーション](/migration/v2-to-v3)
- v1 → v2: v2 系のドキュメントサイトを参照してください（[https://jumpu-ui-v2.pages.dev/](https://jumpu-ui-v2.pages.dev/)）
