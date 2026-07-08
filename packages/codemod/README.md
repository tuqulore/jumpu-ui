# @jumpu-ui/codemod

`@jumpu-ui/tailwindcss` のメジャーバージョン間マイグレーションを機械化するコマンドライン codemod です。

## インストールと実行

`npx` から直接実行できます。プロジェクトのルートで:

```sh
# v2 系から v3 系へ
npx @jumpu-ui/codemod v2-to-v3 .

# v1 系から v2 系へ
npx @jumpu-ui/codemod v1-to-v2 .
```

書き込み前の差分だけを見たい場合は `--dry-run`:

```sh
npx @jumpu-ui/codemod v2-to-v3 . --dry-run
```

## サブコマンド

| コマンド | 概要 |
| --- | --- |
| `v1-to-v2` | v1 → v2 の 3 transform を順に適用 |
| `v2-to-v3` | v2 → v3 の 2 transform を順に適用 |
| `class-prefix` | 単発: bare クラス名を `jumpu-*` にリネーム |
| `spacing-rel` | 単発: CSS の `rel<N>` を `calc(var(--spacing-relative) * N)` に置換 |
| `drop-colors-import` | 単発: `@import "@jumpu-ui/tailwindcss/colors";` を削除 |
| `cdn-url` | 単発: esm.sh の CDN URL を v3 用の `/dist/style.css` 付きに書き換え |
| `explicit-tailwindcss-import` | 単発: CSS に `@import "tailwindcss";` の明示挿入 |
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

パスを省略すると cwd を対象にします。デフォルトの glob は `**/*.{html,vue,jsx,tsx,astro,css,mdx}` で、`.gitignore` を尊重します。

## 対応する破壊的変更

### v1 → v2

- **`class-prefix`** — `jumpu.prefix` オプション廃止に伴い、`class="input"` などの bare クラス名を `class="jumpu-input"` へ。
- **`spacing-rel`** — CSS の `rel<N>` を `calc(var(--spacing-relative) * N)` へ。
- **`drop-colors-import`** — `@import "@jumpu-ui/tailwindcss/colors";` を削除。v2 以降は本体に同梱。

### v2 → v3

- **`cdn-url`** — `<link href="https://esm.sh/@jumpu-ui/tailwindcss">` を `<link href="https://esm.sh/@jumpu-ui/tailwindcss/dist/style.css">` へ。
- **`explicit-tailwindcss-import`** — CSS で `@import "@jumpu-ui/tailwindcss";` の直前に `@import "tailwindcss";` を挿入。

詳しくは docs の [Migration ガイド](https://jumpu-ui.pages.dev/migration/) を参照してください。

## 既知の未対応

- Vue の `:class="{ input: cond }"` オブジェクト構文（初回リリース非対応、`--verbose` で個別に warning を表示）。
- JSX の template literal 内 (`` `input ${x}` ``)、変数、spread。string リテラル引数のみ書き換え対象。
- ユーザーが独自に定義した `.input` などの CSS セレクタ（誤爆回避のため CSS はデフォルト対象外、`--include-css` で opt-in）。

## 実行時の推奨フロー

1. すべての変更をコミット、または stash する。
2. `npx @jumpu-ui/codemod <cmd> . --dry-run --verbose` で差分と `notes` を確認する。
3. 問題なければ `--dry-run` を外して実行する。
4. `git diff` で見直し、テストを走らせて確認する。

## ライセンス

MIT
