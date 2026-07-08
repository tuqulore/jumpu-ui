# codemod CLI

`@jumpu-ui/codemod` は Jumpu UI の破壊的変更を機械的に書き換えるコマンドラインツールです。破壊的変更はメジャーだけでなく、コンポーネントクラスの構造変更を伴う minor / patch でも発生し得るため、CLI は「起点バージョンから最新までを常に走らせる」設計になっています。

## インストールと実行

```sh
npx @jumpu-ui/codemod upgrade
```

`node_modules/@jumpu-ui/tailwindcss/package.json` から起点を自動検出します。書き込む前に差分を確認したい場合は `--dry-run` を付けてください。

```sh
npx @jumpu-ui/codemod upgrade --dry-run --verbose
```

## サブコマンド

CLI が提供するサブコマンドは動詞ベースの 2 種類だけです。個別 transform の実行は `upgrade --only <id>` で行います。

| コマンド             | 概要                                                        |
| -------------------- | ----------------------------------------------------------- |
| `upgrade [paths...]` | 起点を検出し、適用対象の transform を順に実行               |
| `list`               | 利用可能な transform を一覧（`kind` / `sinceVersion` 表示） |

`list` の出力例:

```
class-prefix                     since 2.0.0    rewrite  Prefix bare component class names with "jumpu-"
spacing-rel                      since 2.0.0    rewrite  Replace rel<N> with calc(var(--spacing-relative) * <N>)
...
```

## `upgrade` のオプション

| オプション         | 説明                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------- |
| `--from <version>` | 起点バージョンを明示（install 検出のフォールバック）                                    |
| `--only <ids>`     | 指定した transform だけを実行（バージョン範囲判定をスキップ）。カンマ区切りで複数指定可 |
| `--skip <ids>`     | 特定の transform を除外（意味論的等価な変換や compat のみ）。カンマ区切り               |
| `--adopt <ids>`    | opt-in の adopt transform を追加適用。カンマ区切り                                      |

### `upgrade` で扱える transform 一覧

すべて `--only` / `--skip` / `--adopt` の対象になります。`npx @jumpu-ui/codemod list` で手元でも確認できます。

| id                            | since | kind    | 概要                                                          |
| ----------------------------- | ----- | ------- | ------------------------------------------------------------- |
| `class-prefix`                | 2.0.0 | rewrite | bare クラス名を `jumpu-*` にリネーム                          |
| `spacing-rel`                 | 2.0.0 | rewrite | CSS の `rel<N>` を `calc(var(--spacing-relative) * N)` に置換 |
| `drop-colors-import`          | 2.0.0 | rewrite | `@import "@jumpu-ui/tailwindcss/colors";` を削除              |
| `cdn-url`                     | 3.0.0 | rewrite | esm.sh の CDN URL に `/dist/style.css` を付与                 |
| `explicit-tailwindcss-import` | 3.0.0 | rewrite | `@import "tailwindcss";` を明示挿入                           |

## グローバルオプション

| オプション              | 説明                                                                 |
| ----------------------- | -------------------------------------------------------------------- |
| `--dry-run`             | 変更を書き込まず、差分サマリのみ表示                                 |
| `-v, --verbose`         | 詳細ログ。手動対応が必要な箇所（notes）を全表示                      |
| `--no-git-check`        | 作業ツリーが dirty でも実行を許可                                    |
| `--include <globs>`     | 対象ファイルの glob を明示指定（カンマ区切りで複数指定可）           |
| `--include-css`         | `class-prefix` を CSS ファイルにも適用（誤爆リスクあり、既定は off） |
| `--extra-class <names>` | クラス名マップに追加する bare クラス名（カンマ区切り）               |

パスを省略すると cwd を対象にします。デフォルトの glob は `**/*.{html,htm,vue,jsx,tsx,astro,css}` で、`.gitignore` を尊重します。

## 破壊的変更の分類

各 transform は 2 種類のいずれかに分類されます。

- **rewrite** — 出力を書き換える。ほとんどの transform はこちら
- **notice** — 出力は変えず、影響箇所を `notes` として通知するのみ。機械的な書き換えが原理的に難しい変更で使用

さらに、破壊的変更の性質に応じて transform は以下 3 パターンのいずれかで提供されます。

### 単一 transform

意味論的等価な変換（クラス名リネーム、URL 変更、`@import` 挿入など）。副作用ゼロで書き換えられるもの。default で自動適用され、`--skip <id>` で個別に外せます。

例: `class-prefix`, `cdn-url`, `explicit-tailwindcss-import`

### compat + adopt ペア

コンポーネントのスタイル・デフォルト値の変更で、旧の見た目を tailwind utility で保つ道が提供できるもの。以下の 2 個ペアで提供します。

- `<name>-compat`（default 適用）: 旧の見た目を保つ utility を付与
- `<name>-adopt`（opt-in）: `-compat` が付けた utility を剥がし、新規範に乗る

保守的な移行は `-compat` に任せ、後日新規範に乗り換えるタイミングで `--adopt <id>` を実行、あるいは `upgrade --only <name>-adopt` を実行します。

### adopt のみ（mandatory）

構造変換など、compat の提供が原理的に不可能な変更（例: HTML 要素そのものを置換）。default で必ず走り、`--skip` は許可されません。

## 推奨する実行フロー

1. すべての変更をコミット、または stash しておく（`--no-git-check` を使わない場合、作業ツリーが dirty だと codemod は中断します）
2. `npx @jumpu-ui/codemod upgrade --dry-run --verbose` で差分と `notes` を確認
3. 問題なければ `--dry-run` を外して実行
4. `git diff` で見直し、テストやビルドを走らせて確認
5. サマリに「Opt-in transforms available」が出ていたら、必要に応じて `--adopt <id>` で再実行、あるいは docs の Guideline を参照して手動で新規範に乗る

## 既知の未対応

- Vue の `:class="{ input: cond }"` オブジェクト構文（初回リリース非対応、`--verbose` で警告表示）
- JSX の template literal (`` `input ${x}` ``)、変数、spread 引数。string リテラル引数のみ書き換え対象
- ユーザーが独自に定義した `.input` などの CSS セレクタ（誤爆回避のため CSS はデフォルト対象外、`--include-css` で opt-in）
