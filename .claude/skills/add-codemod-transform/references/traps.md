# 落とし穴集

Transform 実装中に踏むと分かりにくい罠。初回で必ず目を通すこと。

## ast-grep の pattern 記法の制約

`class="$V"` を pattern として渡しても **HTML では 0 hit** になる。attribute 単独のフラグメントを pattern としてパースできない挙動がある (実装中に確認済み)。

**回避**: attribute の kind ベースで走査する。

```ts
// NG: 0 hit
root.findAll('class="$V"');

// OK: attribute node を全て取り、name で絞る
for (const attr of root.findAll({ rule: { kind: "attribute" } })) {
  const name = attr.children().find((c) => c.kind() === "attribute_name");
  if (name?.text() !== "class") continue;
  // …
}
```

`cn/clsx/classnames` の call は pattern マッチが効く:

```ts
root.findAll(`cn($$$ARGS)`); // 動く
```

pattern が効く場合と効かない場合の切り分けは、`ast-grep playground` で試すか、既存の class-prefix.ts の実装を参照。

## HTML と JSX / TSX の attribute 子ノードが違う

| コンテナ                 | HTML                                              | TSX                               |
| ------------------------ | ------------------------------------------------- | --------------------------------- |
| 属性そのもの             | `attribute`                                       | `jsx_attribute`                   |
| 属性名                   | `attribute_name` (leaf)                           | `property_identifier`             |
| 引用符付き値             | `quoted_attribute_value`                          | `string`                          |
| 書き換え対象の生テキスト | `quoted_attribute_value` の子の `attribute_value` | `string` の子の `string_fragment` |

**罠**: HTML の attribute_value を replace すると quote は残る (`attribute_value` は quote 内側だけを指すノード)。TSX の string_fragment も同様。**quote 込みで書き換えるとダブり `""foo""` になる**。

**確認方法**:

```sh
node --input-type=module -e '
import { Lang, parse } from "@ast-grep/napi";
const root = parse(Lang.Html, "<div class=\"foo\"></div>").root();
for (const n of root.findAll({rule: {kind: "attribute"}})) {
  for (const c of n.children()) console.log(c.kind(), JSON.stringify(c.text()));
}
'
```

## Tailwind variant の `:` 境界

`class="focus:input"` のようなトークンで、bare token 判定に `input` だけを引っかけると誤爆する (`focus:input` の `input` は Tailwind variant の対象クラスであって jumpu-ui のクラスではない)。

**回避**: split 後のトークンに `:` が含まれていれば触らない。

```ts
value
  .split(/(\s+)/)
  .map((tok) => {
    if (!tok.trim()) return tok;
    if (tok.includes(":")) return tok; // variant は絶対に触らない
    return classMap.bare.has(tok) ? classMap.toPrefixed(tok) : tok;
  })
  .join("");
```

## commander の variadic option (`<id...>`) が positional 引数を吸う

```
upgrade --only class-prefix .
```

`--only` を `<id...>` (variadic) で宣言すると、後続の `.` (paths) まで `--only` の値として吸い込む。

**回避**: `--only <ids>` (single) にしてカンマ区切りで受ける。cli.ts で split する:

```ts
.option("--only <ids>", "Comma-separated transform ids to run")
// …
only: cmdOptions.only?.split(",").map((s) => s.trim()).filter(Boolean),
```

`--skip` / `--adopt` も同様に扱う。

## Vitest の import.meta.resolve は使えない

Vite SSR モードでは `import.meta.resolve` は `TypeError: is not a function` で落ちる。

**回避**: `createRequire(import.meta.url).resolve(...)` を使う。既存の `utils/class-map.ts` を参照。

```ts
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkgPath = require.resolve("@jumpu-ui/tailwindcss/package.json");
```

## tsconfig の include に fixture が入って型エラーになる

`tests/fixtures/**/*.tsx` は「そのままのソースコード」として保管するもので、TypeScript の型チェック対象ではない。

**現在の tsconfig.json では exclude 済み**:

```json
"include": ["src", "tests"],
"exclude": ["tests/fixtures"]
```

新しい fixture を追加するときはこの設定を触らなくて OK。特殊な例外を作らないこと。

## `pnpm -r lint --fix` は --fix を全パッケージに渡す

CI の `pnpm -r lint --fix` は、lint script を持つすべての workspace パッケージに `--fix` を渡す。tsc や `--fix` を認識しないツールを lint に置くと落ちる。

**回避**: `@jumpu-ui/codemod` は `lint` script を持たず、`tsc --noEmit` は `test` script の先頭で走らせる。

```json
"scripts": {
  "test": "tsc --noEmit && vitest run"
}
```

新しい transform を追加するときはこの構成を触らなくて OK。

## 冪等性

**必須要件**: 2 度実行しても結果が変わらないこと。

- 挿入系 (`explicit-tailwindcss-import` など) は「既に挿入済み」を検出して no-op
- 削除系 (`drop-colors-import` など) は 2 度目で対象が無いので自然に no-op
- 書き換え系 (`class-prefix` など) は「既に書き換え済み」の入力に対して no-op になる正規表現 / logic を書く
- compat 系: 既に compat utility が付いているなら重ねて付けない

fixture の `already-*` ケースで no-op を必ずテストする ([testing.md](testing.md) 参照)。

## Node 24 プレビルド有無 (@ast-grep/napi)

`@ast-grep/napi` はネイティブモジュールで、プレビルドが無い OS / arch では install 時に失敗する。README の対応プラットフォーム記載を保守する。

新しい transform 実装では意識しなくて OK (パッケージレベルの問題)。

## Windows パスの `\` エスケープ

`file` パスは `resolve()` で絶対化された OS ネイティブ形式で来る。glob や regex で扱う時はエスケープに注意。既存 transform の `match: (file) => /\.css$/i.test(file)` は path separator に依存しないので OK。

## CI と手動テストで node_modules の状態が違う

CI では `pnpm install` 直後の状態、手動 verify では作業中の状態。`class-map.ts` は `packages/tailwindcss` を workspace 依存として引くので、workspace が正しく linked されていることが前提。CI で落ちるが手元で通る場合、まず workspace link を疑う。

```sh
pnpm install --frozen-lockfile   # CI 相当を再現
```
