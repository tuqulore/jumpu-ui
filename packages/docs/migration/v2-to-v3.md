# v2 → v3 マイグレーション

`@jumpu-ui/tailwindcss` を v2 系から v3 系にアップグレードするための移行ガイドです。

## 破壊的変更サマリ

| 変更 | codemod で自動化 | ドキュメント |
| --- | --- | --- |
| CDN 経由の読み込み URL に `/dist/style.css` が必要 | ○ `cdn-url` | [CDN URL 変更](#cdn-url-変更) |
| プロジェクトの CSS で `@import "tailwindcss";` の明示が必要 | ○ `explicit-tailwindcss-import` | [tailwindcss import の明示化](#tailwindcss-import-の明示化) |

## codemod で自動化する

以下 1 コマンドで両方適用できます。

```sh
npx @jumpu-ui/codemod v2-to-v3 .
```

差分だけ確認したい場合は `--dry-run` を付けてください。

```sh
npx @jumpu-ui/codemod v2-to-v3 . --dry-run --verbose
```

## CDN URL 変更

v2 系まで esm.sh から次のように読み込んでいた場合:

```html
<link rel="stylesheet" href="https://esm.sh/@jumpu-ui/tailwindcss" />
```

v3 系では `/dist/style.css` を明示する必要があります。

```html
<link rel="stylesheet" href="https://esm.sh/@jumpu-ui/tailwindcss/dist/style.css" />
```

バージョンをピンしている場合 (`@jumpu-ui/tailwindcss@2.0.1` など) も、`cdn-url` transform はピンを保持したまま `/dist/style.css` を付与します。

## tailwindcss import の明示化

v2 系では `@jumpu-ui/tailwindcss` を import すると Tailwind CSS 本体を暗黙で持ち込んでいましたが、v3 系ではプロジェクト側で `tailwindcss` を明示的に import する必要があります。

Before:

```css
@import "@jumpu-ui/tailwindcss";
```

After:

```css
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss";
```

`explicit-tailwindcss-import` transform は、`@import "tailwindcss";` が未挿入の場合のみ挿入し、既に書かれている場合はスキップします。

## 手動対応が必要な項目

- 独自に組んでいた Tailwind の設定（`tailwind.config.ts` の `theme.extend` 等）が v3 の設計変更に触れていないかを目視で確認してください。
- Tag / IconButton など、v2 系で振る舞い変更のあったコンポーネントの見た目を再チェックしてください。

## トラブルシュート

- **`Working tree has uncommitted changes.`** — 実行前に `git commit` するか、`--no-git-check` を渡してください。
- **書き換わらない `<link>` がある** — URL に不要なクエリや複数行に跨ぐ属性が入っていないか確認してください。上記に該当しない場合は `--include` で対象ファイルを狭めて再実行し、必要なら手動で修正してください。
- **`@import "tailwindcss";` が二重に入った** — 事前に手動で挿入していた場合、`explicit-tailwindcss-import` はその CSS を no-op として扱います。二重挿入は起きません。
