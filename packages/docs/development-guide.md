# 開発ガイド

> [!NOTE]
>
> この文書は、Jumpu UI の[リポジトリ](https://github.com/tuqulore/jumpu-ui)での開発に参加する開発者を対象に書かれています。
>
> Jumpu UI を利用するにあたっては必ずしも重要ではないので、この文章は読み飛ばしてください。

## 準備

パッケージマネージャーとして [pnpm](https://pnpm.io/) を採用しています。ご自身の開発環境に適切な方法で[インストール](https://pnpm.io/ja/installation)してください。

## クイックスタート

```shell
# パッケージのインストール
pnpm install
# コードの検査
pnpm -r lint
# 開発サーバーの起動
pnpm -r dev
```

## CSS の書き方

`packages/tailwindcss/stylelint.config.mjs` が規約を強制します。
ここでは、その規約が何を守っているのかを書きます。

### ショートハンドを使わない

`padding`、`margin`、`border`、`background`、`transition`、`font`、`flex`、`grid` など 21 のプロパティを禁止しています。

ショートハンドは、書かなかった副プロパティを初期値に戻します。
`background: red` と書くと `background-image` が消え、`transition: 100ms` と書くと `transition-delay` が消えます。
コンポーネントの CSS でこれが起きると、利用側から見て理由のわからない挙動になります。

```css
/* 使わない */
padding: --spacing(2) --spacing(4);

/* こう書く */
padding-block: --spacing(2);
padding-inline: --spacing(4);
```

### 余白と大きさは `--spacing()` か `--spacing-relative` で書く

`padding-*`、`margin-*`、`gap`、`width`、`height` には、`--spacing(n)` の形しか書けません。
任意の数値を書くとエラーになります。

尺度から外れた値が混ざると、[Spacing](/tokens/spacing) に書いてある尺度が実態と合わなくなります。

文字サイズに追従させたい余白には `calc(var(--spacing-relative) * n)` を使います。
どちらを選ぶかの判断は [Spacing](/tokens/spacing) を参照してください。

### プロパティの並び順

[stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) に従います。
表示、位置、寸法、文字、装飾の順に並びます。

並び順が決まっていると、2 つのコンポーネントの CSS を比べたときに、差分が構造ではなく値として見えます。

## クラス名の規約

**クラス名を定義するのはコンポーネントの粒度だけ**です。
`.jumpu-button__icon` のような下位のクラスは作りません。
子要素は要素型セレクターか属性セレクターで指します。

```css
/* 使わない */
.jumpu-tag__close { … }

/* こう書く */
.jumpu-tag {
  [role="button"] { … }
}
```

この規約は lint では強制していません。
新しいコンポーネントを足すときに、意識して守ってください。

理由は [Principles](/principles/) に書いています。

## ドキュメントを書く

ページを書く・推敲するときの手順、分類の判断、文章の規範は、リポジトリの `.claude/skills/write-design-guideline/` にまとめています。

## 未整備のこと

次のものはまだ文書化していません。

- 貢献の受け付け方（Issue と Pull Request の運用）
- レビューの基準
- 破壊的変更とみなす範囲の判断
