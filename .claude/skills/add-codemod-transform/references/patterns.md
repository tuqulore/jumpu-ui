# Transform 実装パターン集

破壊的変更の性質ごとに、どの実装パターンを選ぶかと、既存 transform を参考にするポイントをまとめる。

## 分類の判断ツリー

```
新しい破壊的変更
│
├─ 旧仕様と新仕様が意味論的に等価?
│  (クラス名リネーム / URL 変更 / import 挿入 / 単純な値置換)
│  └─ YES → 単一 transform (kind: "rewrite")
│
├─ 旧の見た目・振る舞いを tailwind の単一 utility で復元できる?
│  (display, gap, text-align, padding などのデフォルト変更)
│  └─ YES → compat + adopt ペア
│           - <name>-compat (default 適用、utility 付与)
│           - <name>-adopt (opt-in、compat が付けた utility を剥がす)
│
├─ 構造そのものが変わり、旧仕様に戻る道が無い?
│  (HTML 要素の置換、独自 aria → ネイティブ)
│  └─ YES → adopt のみ (mandatory、default 適用、skip 不可)
│
└─ 機械的に書き換えるのは危険 or 影響範囲が予測不能?
   (独自 override への副作用、意図判定が要る)
   └─ YES → notice (kind: "notice"、書き換えず notes だけ返す)
```

## 対応言語別の実装パターン

### 単純な文字列 / URL 書き換え (HTML / JSX / TSX / Vue / Astro / CSS)

正規表現 1 発で十分。ast-grep は使わない。

**参考**: `packages/codemod/src/transforms/v3.0.0/cdn-url.ts`

```ts
const PATTERN = /https:\/\/esm\.sh\/@jumpu-ui\/tailwindcss(?:@[\w.\-+]+)?(?![\w./@\-+])/g;

run(input) {
  let changed = false;
  const output = input.replace(PATTERN, (match) => {
    changed = true;
    return `${match}/dist/style.css`;
  });
  return { output, changed, notes: [] };
}
```

**ポイント**:

- 既に適用済みの入力を検出して no-op する (negative lookahead で `/dist/style.css` を検出しないパターンだけマッチさせる)
- バージョンピン `@X.Y.Z` を保持する (`match` を先頭にそのまま置いて suffix だけ足す)

### CSS 内の値置換

正規表現で十分。

**参考**: `packages/codemod/src/transforms/v2.0.0/spacing-rel.ts`

```ts
const REL_TOKEN = /\brel(\d+)\b/g;

run(input) {
  let changed = false;
  const output = input.replace(REL_TOKEN, (_match, n) => {
    changed = true;
    return `calc(var(--spacing-relative) * ${n})`;
  });
  return { output, changed, notes: [] };
}
```

**ポイント**:

- 単語境界 `\b` でトークンを区切る (`relaxation` などの誤検知を防ぐ)
- CSS ファイルのみに `match` を絞る

### CSS の import 削除 / 挿入

**削除の参考**: `packages/codemod/src/transforms/v2.0.0/drop-colors-import.ts`

```ts
const COLORS_IMPORT = /@import\s+["']@jumpu-ui\/tailwindcss\/colors["']\s*;?\n?/g;

run(input) {
  let changed = false;
  const output = input.replace(COLORS_IMPORT, () => {
    changed = true;
    return "";
  });
  return { output, changed, notes: [] };
}
```

**挿入の参考**: `packages/codemod/src/transforms/v3.0.0/explicit-tailwindcss-import.ts`

```ts
const TAILWIND_IMPORT = /@import\s+["']tailwindcss["']\s*;?/;
const JUMPU_IMPORT = /@import\s+["']@jumpu-ui\/tailwindcss["']\s*;?/;

run(input) {
  if (TAILWIND_IMPORT.test(input)) {
    return { output: input, changed: false, notes: [] };  // 冪等性
  }
  const match = JUMPU_IMPORT.exec(input);
  if (!match) return { output: input, changed: false, notes: [] };
  const before = input.slice(0, match.index);
  const after = input.slice(match.index);
  return {
    output: `${before}@import "tailwindcss";\n${after}`,
    changed: true,
    notes: [],
  };
}
```

**ポイント**:

- 挿入は先に「既に挿入済みか」を判定し、あれば no-op
- 挿入位置は「トリガーとなる既存の import の直前」

### HTML / JSX / TSX の class 属性 (ast-grep)

**参考**: `packages/codemod/src/transforms/v2.0.0/class-prefix.ts`

ast-grep の pattern 記法 (`class="$V"`) は attribute 単独では **HTML で 0 hit** になる (実装中に確認済み)。代わりに attribute の kind ベースで走査する:

```ts
// HTML
const root = parse(Lang.Html, input).root();
for (const attr of root.findAll({ rule: { kind: "attribute" } })) {
  const nameNode = attr.children().find((c) => c.kind() === "attribute_name");
  if (nameNode?.text() !== "class") continue;
  const quoted = attr
    .children()
    .find((c) => c.kind() === "quoted_attribute_value");
  const valueNode = quoted
    ?.children()
    .find((c) => c.kind() === "attribute_value");
  if (!valueNode) continue;
  // valueNode.text() を書き換えて edits に push
  edits.push(valueNode.replace(rewriteValue(valueNode.text())));
}
```

```ts
// JSX / TSX
const root = parse(Lang.Tsx, input).root();
for (const attr of root.findAll({ rule: { kind: "jsx_attribute" } })) {
  const nameNode = attr
    .children()
    .find((c) => c.kind() === "property_identifier");
  if (nameNode?.text() !== "className") continue;
  for (const child of attr.children()) {
    if (child.kind() === "string") {
      // 静的 string リテラル: string_fragment を書き換え
      const fragment = child
        .children()
        .find((c) => c.kind() === "string_fragment");
      if (fragment) edits.push(fragment.replace(rewriteValue(fragment.text())));
    } else if (child.kind() === "jsx_expression") {
      // {"foo"} 形式: 内側の string を再帰的に扱う
      for (const gc of child.children()) {
        if (gc.kind() === "string") /* 同上 */ ;
      }
    }
  }
}
```

**HTML と TSX の子ノード kind の差** (最重要):

| コンテナ                 | HTML                                              | TSX                               |
| ------------------------ | ------------------------------------------------- | --------------------------------- |
| 属性そのもの             | `attribute`                                       | `jsx_attribute`                   |
| 属性名                   | `attribute_name`                                  | `property_identifier`             |
| 引用符付き値             | `quoted_attribute_value` (子に `attribute_value`) | `string` (子に `string_fragment`) |
| 書き換え対象の生テキスト | `attribute_value`                                 | `string_fragment`                 |

### JSX の cn / clsx / classnames 引数

第 1 引数以降の **静的 string リテラルのみ** 書き換え、template literal / 変数 / spread は notes に記録する:

```ts
for (const fn of ["cn", "clsx", "classnames"]) {
  for (const call of root.findAll(`${fn}($$$ARGS)`)) {
    const args = call.getMultipleMatches("ARGS");
    for (const arg of args) {
      if (arg.kind() === "string") {
        // string_fragment を rewriteValue で書き換え
      } else if (
        arg.kind() === "template_string" ||
        arg.kind() === "identifier" ||
        arg.kind() === "spread_element" ||
        arg.kind() === "object" ||
        arg.kind() === "member_expression"
      ) {
        notes.push(
          `dynamic classname argument (${arg.kind()}) at line ${arg.range().start.line + 1} needs manual review`,
        );
      }
    }
  }
}
```

## compat + adopt ペアの実装原則

`-compat` は「tailwind の単一クラスを付与する」ことに徹する:

- 付与する utility は **単一 CSS プロパティに対応するもの** (`inline-block` = display のみ、`gap-0` = gap のみ)
- 既に付与済みなら重ねて付けない (トークン split で存在チェック)
- 対象クラスを持たない要素には触らない (誤爆ゼロ)

`-adopt` は `-compat` の裏返し:

- `-compat` が付けた exact な utility セットを検出して剥がす
- 部分一致 (`inline-block` だけあって `gap-0` が無い等) の場合はスキップして notes に記録

**例** (仮): `button-inline-flex-compat` は `.jumpu-button` を持つ要素に `inline-block gap-0 items-start` を追加。`button-inline-flex-adopt` は同じ 3 つが揃って付与されている `.jumpu-button` からそれらを削除。

## Notice kind の実装

`output` を触らず notes だけ積む:

```ts
export const legacyOverrideNotice: Transform = {
  id: "legacy-override-notice",
  title: "Warn about component CSS overrides that may break",
  kind: "notice",
  sinceVersion: "3.2.0",
  match: (file) => /\.(?:html?|jsx|tsx|vue|astro|css)$/i.test(file),
  run(input, ctx) {
    const lines = input.split("\n");
    const notes: string[] = [];
    lines.forEach((line, i) => {
      if (/\.jumpu-[a-z-]+\s*\{[^}]*color:/.test(line)) {
        notes.push(
          `${ctx.file}:${i + 1} overrides jumpu-* color; verify against new default`,
        );
      }
    });
    return { output: input, changed: false, notes };
  },
};
```

## 参考: 既存 5 transform への相互参照

新しい transform を書き始めるときは、まず「一番近いパターンを持つ既存 transform」を熟読して、その構造をベースにする:

| 破壊的変更の性質                        | 参考にする既存 transform      |
| --------------------------------------- | ----------------------------- |
| クラス名リネーム、HTML / JSX / CSS 対応 | `class-prefix`                |
| CSS 内の値置換 (単一正規表現)           | `spacing-rel`                 |
| CSS の import 削除                      | `drop-colors-import`          |
| CSS の import 挿入                      | `explicit-tailwindcss-import` |
| HTML の attribute value 書き換え        | `cdn-url`                     |
