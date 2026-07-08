# v2 → v3 マイグレーション

`@jumpu-ui/tailwindcss` を v2 系から v3 系にアップグレードするための移行ガイドです。基本は `upgrade` サブコマンド 1 つで済みます。

## codemod で自動化する

プロジェクトのルートで:

```sh
npx @jumpu-ui/codemod upgrade
```

`node_modules/@jumpu-ui/tailwindcss/package.json` から起点バージョンが自動検出され、v3 系までの適用対象 transform が順に実行されます。CDN 経由で使っている場合は HTML 内の `esm.sh` URL からバージョンが検出されます。

差分だけ確認したい場合は `--dry-run` を付けてください。

```sh
npx @jumpu-ui/codemod upgrade --dry-run --verbose
```

## 破壊的変更サマリ

| 変更                                                        | transform                     | kind            |
| ----------------------------------------------------------- | ----------------------------- | --------------- |
| CDN 経由の読み込み URL に `/dist/style.css` が必要          | `cdn-url`                     | rewrite（単一） |
| プロジェクトの CSS で `@import "tailwindcss";` の明示が必要 | `explicit-tailwindcss-import` | rewrite（単一） |

## CDN URL 変更

v2 系まで esm.sh から次のように読み込んでいた場合:

```html
<link rel="stylesheet" href="https://esm.sh/@jumpu-ui/tailwindcss" />
```

v3 系では `/dist/style.css` を明示する必要があります。

```html
<link
  rel="stylesheet"
  href="https://esm.sh/@jumpu-ui/tailwindcss/dist/style.css"
/>
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

- **`Could not detect the installed @jumpu-ui/tailwindcss version.`** — install 検出も CDN 検出も失敗した場合。`--from 2.0.1` のように起点バージョンを明示してください
- **`Working tree has uncommitted changes.`** — 実行前に `git commit` するか、`--no-git-check` を渡してください
- **書き換わらない `<link>` がある** — URL に不要なクエリや複数行に跨ぐ属性が入っていないか確認してください。上記に該当しない場合は `--include` で対象ファイルを狭めて再実行し、必要なら手動で修正してください
- **既に `@import "tailwindcss";` を手動で挿入している場合** — `explicit-tailwindcss-import` はその CSS を no-op として扱うため、二重挿入は起きません
