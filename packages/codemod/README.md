# @jumpu-ui/codemod

> **⚠️ 実験的なパッケージです**
>
> `@jumpu-ui/codemod` は実験的なツールです。CLI のオプションや transform の挙動は予告なく変更される可能性があります。
> ソースファイルを直接書き換えるため、必ずバージョン管理下のクリーンな状態で、`--dry-run` で差分を確認してから実行してください。
> 変換結果の正しさは保証されません。利用によって生じたいかなる損害についても責任を負いません（MIT License の無保証条項に準拠）。

`@jumpu-ui/tailwindcss` のマイグレーションを機械化するコマンドライン codemod です。破壊的変更はメジャーだけでなくコンポーネントクラスの構造変更を伴う minor / patch でも発生し得るため、CLI は「起点バージョンから最新までを常に走らせる」設計になっています。

## インストールと実行

`npx` から直接実行できます。プロジェクトのルートで:

```sh
npx @jumpu-ui/codemod upgrade
```

`node_modules/@jumpu-ui/tailwindcss/package.json` から起点を自動検出します。書き込む前に差分を確認したい場合は `--dry-run`:

```sh
npx @jumpu-ui/codemod upgrade --dry-run --verbose
```

## サブコマンド

CLI が提供するサブコマンドは 2 種類だけです。個別 transform の実行は `upgrade --only <id>` で行います。

| コマンド             | 概要                                                    |
| -------------------- | ------------------------------------------------------- |
| `upgrade [paths...]` | 起点を検出し、適用対象の transform を順に実行           |
| `list`               | 利用可能な transform を一覧（kind / sinceVersion 表示） |

## `upgrade` のオプション

| オプション         | 説明                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------- |
| `--from <version>` | 起点バージョンを明示（install 検出のフォールバック）                                    |
| `--only <ids>`     | 指定した transform だけを実行（バージョン範囲判定をスキップ）。カンマ区切りで複数指定可 |
| `--skip <ids>`     | 特定の transform を除外（意味論的等価な変換や compat のみ）。カンマ区切り               |
| `--adopt <ids>`    | opt-in の adopt transform を追加適用。カンマ区切り                                      |

### `upgrade` で扱える transform 一覧

すべて `--only` / `--skip` / `--adopt` の対象になります。手元での確認は `npx @jumpu-ui/codemod list` を実行してください。

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
| `-v, --verbose`         | 詳細ログ。`notes`（手動対応が必要な箇所）を全表示                    |
| `--no-git-check`        | 作業ツリーが dirty でも実行を許可                                    |
| `--include <globs>`     | 対象ファイルの glob を明示指定（カンマ区切りで複数指定可）           |
| `--include-css`         | `class-prefix` を CSS ファイルにも適用（誤爆リスクあり、既定は off） |
| `--extra-class <names>` | クラス名マップに追加する bare クラス名（カンマ区切り）               |

パスを省略すると cwd を対象にします。デフォルトの glob は `**/*.{html,htm,vue,jsx,tsx,astro,css}` で、`.gitignore` を尊重します。

## 破壊的変更の分類

各 transform は 2 種類の `kind` のいずれかを持ちます。

- **rewrite** — 出力を書き換える
- **notice** — 出力は変えず、影響箇所を `notes` として通知するのみ（機械化が原理的に難しい変更用）

さらに、破壊的変更の性質に応じて transform は 3 パターンのいずれかで提供されます。

- **単一 transform** — 意味論的等価な変換。副作用ゼロ。default 適用、`--skip <id>` で外せる
- **compat + adopt ペア** — スタイル・デフォルト値の変更。`-compat`（default 適用、旧見た目を utility で維持）と `-adopt`（opt-in、`-compat` を剥がして新規範に乗る）の 2 個ペアで提供
- **adopt のみ** — 構造変換で compat が原理的に提供できないもの。default で必ず走り、`--skip` 不可

## 推奨する実行フロー

1. すべての変更をコミット、または stash する
2. `npx @jumpu-ui/codemod upgrade --dry-run --verbose` で差分と `notes` を確認
3. 問題なければ `--dry-run` を外して実行
4. `git diff` で見直し、テストやビルドを走らせて確認
5. サマリに「Opt-in transforms available」が出ていたら、必要に応じて `--adopt <id>` で再実行

## 対応する破壊的変更

詳細は docs の [Migration ガイド](https://jumpu-ui.pages.dev/migration/) を参照してください。

## 既知の未対応

- Vue の `:class="{ input: cond }"` オブジェクト構文（初回リリース非対応、`--verbose` で個別に warning を表示）
- JSX の template literal (`` `input ${x}` ``)、変数、spread。string リテラル引数のみ書き換え対象
- ユーザーが独自に定義した `.input` などの CSS セレクタ（誤爆回避のため CSS はデフォルト対象外、`--include-css` で opt-in）

## 開発時の動作確認

publish 前のローカルビルドを別プロジェクトから `jumpu-ui-codemod` として呼び出す手順です。

### 前提

- `pnpm setup` 済みで、グローバル bin ディレクトリ (通常 `~/.local/share/pnpm/bin`) が PATH に通っていること
- 事前にビルドしていること (`pnpm -F @jumpu-ui/codemod build`)

### インストール

```sh
cd packages/codemod
pnpm add -g .
```

以降どのディレクトリからも `jumpu-ui-codemod` を呼び出せます。

### 変更の反映

コードを編集したあとは `pnpm -F @jumpu-ui/codemod build` で `dist/cli.js` を作り直せば、次回起動時に反映されます。

### 動作確認例

`@jumpu-ui/tailwindcss` を install している任意のプロジェクトのルートで:

```sh
jumpu-ui-codemod upgrade --dry-run --verbose
```

install 済みのバージョンが起点として自動検出されます。書き換えを試したい場合は `--from 2.0.0` などで起点を明示すると、対象範囲の transform を強制的に流せます。

### 解除

```sh
pnpm remove -g @jumpu-ui/codemod
```

## ライセンス

MIT
