---
name: add-codemod-transform
description: Add a new transform to @jumpu-ui/codemod when a breaking change is introduced in @jumpu-ui/tailwindcss. Use when (1) a component class name is added / renamed / removed, (2) a component CSS structure changes (display, spacing, layout defaults), (3) HTML element usage is required to change (e.g., div-based accordion → details), (4) a CSS variable or config default value changes, (5) an import path / CDN URL is updated. Guides classification (single / compat+adopt / adopt-only), sinceVersion assignment, ast-grep and regex implementation patterns, fixture-based tests, registry ordering, and docs updates.
---

# Add a new transform to @jumpu-ui/codemod

新しい破壊的変更 (メジャー / minor / patch を問わず) が `@jumpu-ui/tailwindcss` に入るとき、対応する transform を `packages/codemod/` に追加するためのガイド。

## 前提知識

- 破壊的変更は **メジャー以外の minor / patch でも起こり得る** 前提でパッケージ設計されている
- CLI 表面は動詞のみ (`upgrade` / `list`)。単発実行は `upgrade --only <id>` 経由
- Transform 型は `packages/codemod/src/context.ts` で定義
- Registry は順序付き `TRANSFORMS: Transform[]` (`packages/codemod/src/registry.ts`) の 1 本
- 対応言語は HTML / JSX / TSX / Vue / Astro / CSS。`.jsx` / `.tsx` は ast-grep の `Lang.Tsx`、それ以外の HTML 系は `Lang.Html`、CSS は正規表現主体

## ステップ 1: 破壊的変更を分類

以下 3 パターンのいずれかを選ぶ。

### 単一 transform (最も多いパターン)

意味論的等価な変換 (副作用ゼロで書き換えられるもの):

- クラス名リネーム (`.input` → `.jumpu-input`)
- import path 変更 (`@import "@jumpu-ui/tailwindcss/colors"` の削除)
- CDN URL 変更 (`esm.sh/@jumpu-ui/tailwindcss` に `/dist/style.css` を付与)
- CSS 値の同義な書き換え (`rel2` → `calc(var(--spacing-relative) * 2)`)

**指標**: 「新旧が同じ意味を持ち、副作用がない」なら単一。default 適用、`--skip <id>` で外せる。

### compat + adopt ペア

コンポーネントの CSS デフォルト値・スタイル変更で、旧の見た目を tailwind utility で保つ道が提供できるもの:

- `.jumpu-button` の `display: inline-block` → `inline-flex` (`inline-block gap-0 items-start` を付与すれば旧見た目を維持)
- text-align / gap のデフォルト変更 (utility で単一プロパティ上書き可能)

**指標**: 「旧の見た目を tailwind の**単一 utility** で上書きできる」なら compat + adopt。

必ず 2 個ペアで用意する:
- `<name>-compat` (default 適用): 旧見た目を保つ utility を付与
- `<name>-adopt` (opt-in, `defaultAutoApply: false`): compat が付けた utility を剥がす

`-adopt` は必ず `-compat` の裏返しになるよう実装 (compat 適用状態を厳密に検出して剥がす)。`compatPair` フィールドで `-adopt` が対応する `-compat` の id を明示する。

### adopt のみ

構造変換など、compat の提供が原理的に不可能なもの:

- HTML 要素の置換 (`<div class="jumpu-accordion">…aria-expanded…</div>` → `<details>…<summary>…`)
- 独自 aria 実装からネイティブ要素への移行

**指標**: 「旧仕様に戻る道が utility では作れない (要素そのものが違う、JS 制御が消える等)」なら adopt のみ。default 適用 (`defaultAutoApply` 省略)、`--skip` は無視 (`compatPair` を持たない場合 warning を出す既存ロジックが動く)。

3 パターンの詳細な判断ツリーは [references/patterns.md](references/patterns.md) の「分類の判断ツリー」を参照。

## ステップ 2: `sinceVersion` を決める

対応する本体リリース版を `sinceVersion` に設定する。

- 破壊的変更を含む本体 PR がマージされ、次にリリースされる版を確認 (通常 `packages/tailwindcss/package.json` と `lerna.json` の version)
- **未リリースの PR に対応する場合**、その PR がリリース予定の版を採用する (例: 現在 3.0.3-alpha.0 なら次の 3.1.0 になる想定なら `3.1.0`)
- prerelease サフィックス (`-alpha.N`) は付けない (`compareVersion` が無視する)

`upgrade` の実行時、`起点 < sinceVersion ≤ 最新` の範囲にある transform だけが対象になる。

## ステップ 3: transform ファイルを作成

ファイル配置は `packages/codemod/src/transforms/<name>.ts` (v1-to-v2 / v2-to-v3 のような version prefix ディレクトリは使わない。既存の 5 個も後方互換のため残っているだけで、新規は flat な配置)。

最小テンプレート:

```ts
import type { Transform } from "../context.ts";

export const yourTransformId: Transform = {
  id: "your-transform-id",           // kebab-case、短く動詞的でなく対象を示す
  title: "Human-readable summary",
  kind: "rewrite",                   // または "notice"
  sinceVersion: "3.1.0",
  // compatPair: "button-inline-flex-compat", // -adopt 系のみ
  // defaultAutoApply: false,        // -adopt 系のみ (opt-in)
  match: (file) => /\.(css|html?)$/i.test(file),
  run(input, ctx) {
    // 書き換えロジック
    const output = input.replace(/…/g, "…");
    return {
      output,
      changed: output !== input,
      notes: [],
    };
  },
};
```

実装パターン (対応言語別の ast-grep / 正規表現の書き方、既存 transform を真似るポイント) は [references/patterns.md](references/patterns.md) を参照。

## ステップ 4: registry に登録

`packages/codemod/src/registry.ts` の `TRANSFORMS` 配列に順序を保って追加。

**順序ルール**:

- 前段の transform が後段の入力を作る前提で並べる (例: `class-prefix` は `spacing-rel` より先に流したい場合、そう並べる)
- 順序に依存が無ければ `sinceVersion` 昇順で並べる
- compat + adopt ペアは、compat → adopt の順に並べる (adopt は compat が既に付けた utility を剥がすので、compat が先に走った状態を前提にできる)

## ステップ 5: fixture を追加してテスト

`packages/codemod/tests/fixtures/<transform-id>/<case-name>/{input,expected}.<ext>` の形式で追加。

対応言語ごとに最低 1 ケース (HTML / TSX / CSS のうち transform が触るもの):

```
tests/fixtures/your-transform-id/
├── html/
│   ├── input.html
│   └── expected.html
├── tsx/
│   ├── input.tsx
│   └── expected.tsx
└── no-op/                    # 対象外の入力で no-op を確認するケースも入れる
    ├── input.html
    └── expected.html         # input と同一
```

さらに `packages/codemod/tests/runner.spec.ts` の `TRANSFORMS` マップに登録:

```ts
const TRANSFORMS: Record<string, Transform> = {
  // 既存…
  "your-transform-id": yourTransformId,
};
```

fixture の設計原則 (べき等性の確保、対象外パターン、cn/clsx 引数、Vue :class の扱い) は [references/testing.md](references/testing.md) を参照。

## ステップ 6: verify

以下を順に実行して緑にする:

```sh
pnpm -F @jumpu-ui/codemod build
pnpm -F @jumpu-ui/codemod test    # tsc --noEmit と vitest が両方走る
```

さらに **手動 verify**:

```sh
mkdir -p /tmp/verify-<name> && cd /tmp/verify-<name>
git init -q
# 対象ファイルの実サンプルを作成 (transform が想定する before の形)
cat > sample.<ext> <<'EOF'
…
EOF
git add . && git -c user.email=t@t -c user.name=t commit -q -m init

node /path/to/packages/codemod/dist/cli.js \
  --dry-run --verbose --no-git-check upgrade --only your-transform-id .

# 期待どおりなら --dry-run を外して実行、git diff で確認
```

## ステップ 7: docs を更新

以下 2 箇所の transform 一覧テーブルに 1 行追加:

- `packages/codemod/README.md` の「`upgrade` で扱える transform 一覧」
- `packages/docs/migration/codemod.md` の同テーブル

新しいメジャーリリースに関連する transform なら、対応するマイグレーションガイド (`packages/docs/migration/vX-to-vY.md`) を追加または更新する。ページ追加時は `packages/docs/.vitepress/config.mts` の sidebar Migration グループにも追加。

## コミット前チェックリスト

- [ ] Transform 型の全必須フィールド (`id`, `title`, `kind`, `sinceVersion`, `match`, `run`) を持つ
- [ ] compat + adopt ペアは `compatPair` で相互参照、`-adopt` 側は `defaultAutoApply: false`
- [ ] registry に順序を保って登録済み
- [ ] fixture が対応言語ごとに最低 1 ケース + no-op ケース
- [ ] `runner.spec.ts` の TRANSFORMS マップに追加
- [ ] `pnpm -F @jumpu-ui/codemod test` (tsc + vitest) が緑
- [ ] `pnpm -F @jumpu-ui/codemod build` が緑
- [ ] 手動 verify で `--dry-run` の diff と実実行の `git diff` が期待どおり
- [ ] `packages/codemod/README.md` と `packages/docs/migration/codemod.md` の一覧に追加
- [ ] 冪等性 (2 度実行しても同じ結果) を確認

## 参考実装 (何を真似るか)

- **単純な文字列書き換え**: `packages/codemod/src/transforms/v2-to-v3/cdn-url.ts` (URL に suffix を追加、既に付いていれば no-op)
- **CSS 内の値置換**: `packages/codemod/src/transforms/v1-to-v2/spacing-rel.ts` (正規表現 1 発)
- **前後関係を見た挿入**: `packages/codemod/src/transforms/v2-to-v3/explicit-tailwindcss-import.ts` (前置きが未挿入の場合のみ入れる)
- **HTML / JSX / CSS を跨ぐ ast-grep**: `packages/codemod/src/transforms/v1-to-v2/class-prefix.ts` (attribute の kind ベース走査、`cn/clsx` 引数の判別、CSS opt-in)

新しい transform を書く時は、まず一番近いパターンの既存 transform を熟読して構造を写経してから、差分だけ書く。

## 落とし穴

実装中に踏みやすい問題は [references/traps.md](references/traps.md) にまとめてある。特に以下は初回で必ず読むこと:

- **ast-grep の pattern 記法の制約** (`class="$V"` は HTML 単独では 0 hit、attribute の kind ベース走査が確実)
- **HTML と JSX の attribute 子ノードの差** (`attribute_value` vs `string` / `string_fragment`)
- **Tailwind variant `:` の境界** (bare token 判定で `:` を含むトークンを絶対に触らない)
- **commander の variadic option 罠** (positional 引数を吸われるので、CLI 変更するときは `<ids>` + カンマ split)
- **冪等性** (2 度実行して壊れないか、既に適用済みを検出する must)

## Notice kind の使い所

`kind: "notice"` は「機械的に書き換えるのは危険 or 不可能だが、ユーザーに影響箇所を知らせたい」場合に使う。`output` は input と同じにして、`notes` に file:line を含めた影響情報を積む。実行サマリで件数が表示され、`--verbose` で全部見られる。使うのは以下のようなケース:

- CSS の内部 override が破壊的変更で無効になるが、置換ルールが機械的に書けない
- レイアウトの意味的変更 (ネスト構造が変わる) で、ユーザーの利用パターンが多様すぎて自動修正できない
