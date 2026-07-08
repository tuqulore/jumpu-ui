# Transform テスト設計

fixture ベースのスナップショット比較で transform を検証する。

## Fixture ディレクトリの構造

```
packages/codemod/tests/fixtures/<transform-id>/<case-name>/{input,expected}.<ext>
```

`<case-name>` はディレクトリ名がそのままテスト名になる (kebab-case)。命名は「何を検証するか」を短く。

**最低限用意すべきケース**:

- transform が触る各言語について 1 ケース (HTML / TSX / CSS)
- **no-op ケース** (既に適用済みの入力に対して何もしないこと)
- **対象外ケース** (transform が触るべきでない入力に対して何もしないこと)

## 具体例: class-prefix 相当の transform

```
tests/fixtures/your-transform/
├── html/
│   ├── input.html            # <button class="button">Save</button>
│   └── expected.html         # <button class="jumpu-button">Save</button>
├── tsx/
│   ├── input.tsx             # className="button"
│   └── expected.tsx          # className="jumpu-button"
├── cn-call/
│   ├── input.tsx             # cn("button", cond && "foo")
│   └── expected.tsx          # cn("jumpu-button", cond && "foo")
├── already-prefixed/         # no-op: 既に jumpu- が付いている
│   ├── input.html
│   └── expected.html         # input と同一
└── unrelated/                # 対象外: マッチしないクラス名しか無い
    ├── input.html
    └── expected.html         # input と同一
```

## `runner.spec.ts` への登録

`packages/codemod/tests/runner.spec.ts` の TRANSFORMS マップに追加:

```ts
import { yourTransformId } from "../src/transforms/<name>.ts";

const TRANSFORMS: Record<string, Transform> = {
  // 既存…
  "your-transform-id": yourTransformId,
};
```

`runner.spec.ts` は fixture ディレクトリを自動走査し、`<transform-id>` サブディレクトリ配下の全ケースをテスト対象にする。fixture を追加すれば自動でテストされる (spec ファイル本体は触らない)。

## Options を渡したいケース

`class-prefix` の `--include-css` のように、特定 fixture で options を切り替えたい場合、`runner.spec.ts` の `makeOptions()` を触る必要がある。デフォルトは以下:

```ts
function makeOptions(): RunOptions {
  return {
    dryRun: true,
    verbose: false,
    gitCheck: false,
    includeCss: false,
  };
}
```

transform が options に依存するなら、その transform 用に fixture ディレクトリを分けるか、spec 内で options を切り替える (現状は共通)。

## べき等性テスト

**必須**: transform を 2 回連続で適用しても結果が変わらないこと。

fixture の `expected.<ext>` を 2 度目の入力にして transform を通し、結果が同じであることを確認するテストを追加する:

```ts
it("is idempotent (running twice yields the same output)", async () => {
  const cases = await findCases(join(FIXTURES, "your-transform-id"));
  for (const c of cases) {
    const ctx: TransformCtx = {
      file: c.file,
      options: makeOptions(),
      log: () => {},
    };
    const once = await yourTransformId.run(c.input, ctx);
    const twice = await yourTransformId.run(once.output, ctx);
    expect(twice.output, `${c.name} idempotent`).toBe(once.output);
    expect(twice.changed).toBe(false);
  }
});
```

`compat` + `adopt` ペアの場合、これに加えて「`compat` → `adopt` を適用したら utility が付いていない状態に戻る」ことを検証。

## 手動 verify のスクリプト

CI とローカルのテストで緑になっても、実際の利用シーンで期待どおりかを見る:

```sh
mkdir -p /tmp/verify-<name> && cd /tmp/verify-<name>
git init -q
git -c user.email=t@t -c user.name=t commit --allow-empty -q -m init

# transform 対象のサンプルを配置
cat > sample.<ext> <<'EOF'
…
EOF
git add . && git -c user.email=t@t -c user.name=t commit -q -m add

# dry-run で差分確認
node <REPO>/packages/codemod/dist/cli.js \
  --dry-run --verbose upgrade --only your-transform-id .

# 問題なければ実実行
node <REPO>/packages/codemod/dist/cli.js \
  upgrade --only your-transform-id .

git diff
```

## 落とし穴

- `runner.spec.ts` の TRANSFORMS マップに追加し忘れると、fixture を追加してもテストが走らない (spec 側でスキップされる)
- `input.<ext>` と `expected.<ext>` の拡張子が違うと fixture 検出でスキップされる
- fixture の末尾改行の有無で `expected` と `output` が食い違うことがある。エディタの設定で末尾改行を入れるかどうかを揃える
- Options を触る fixture (`--include-css` 相当) は spec 側にも対応が要る
