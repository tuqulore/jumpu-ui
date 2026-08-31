---
name: write-design-guideline
description: Write or revise design guideline pages in Jumpu UI docs (packages/docs). Use when (1) adding or rewriting a Principles / Tokens / Content / Components / Recipes page, (2) documenting a design decision that exists in packages/tailwindcss/src but is not written down anywhere, (3) updating docs after an implementation change, (4) adding a page for a new component. Guides the classification rules (scale to Tokens, usage guidance to the page of its subject, situation to Recipes, value to Principles), verifying every value against the implementation, per-page-type templates, Japanese prose norms, and the pre-publish checklist.
---

# Jumpu UI のデザインガイドラインを書く

`packages/docs` のページを新規に書く、または推敲するためのガイド。

## 前提となる分類

デザインシステムの構成要素は次の 3 層で捉える。

```
デザインプリンシプル                    なぜそう作るか
  ├─ デザイントークン        ┐
  ├─ コンポーネント          │ 何があるか ── デザインガイドライン
  ├─ デザインパターン        │                （どう使うか）
  └─ コンテンツデザイン      ┘
デザインプラクティス                    どう回すか
```

ガイドラインは対象を持たず、「何があるか」の 4 要素に付随する。**独立したセクションを作らない**。指針は対象のページの中に節として置く。

docs 上の対応は次のとおり。

| 要素                 | docs の場所            |
| :------------------- | :--------------------- |
| デザインプリンシプル | `principles/`          |
| デザイントークン     | `tokens/`              |
| コンポーネント       | `components/`          |
| デザインパターン     | `recipes/`             |
| コンテンツデザイン   | `content/`             |
| デザインプラクティス | `development-guide.md` |

## ステップ 1: 何を書こうとしているか判定する

```
書きたいこと
│
├─ 色・効果・サイズの尺度、または役割に名前を与えるもの?
│  └─ YES → tokens/ のページ
│
├─ 特定のトークン / コンポーネント / コンテンツの使い方の指針?
│  └─ YES → その対象のページの中に節として置く（新しいページを作らない）
│
├─ 場面（入力を求める、エラーを伝える、空を見せる）に対する組み合わせ方?
│  └─ YES → recipes/ のページ
│
├─ 設計・実装の価値観、判断が割れたときの決着点?
│  └─ YES → principles/ のページ
│
└─ 誰がどう変更を加え、合意し、公開するか?
   └─ YES → development-guide.md
```

判定に迷ったら「これは何についての記述か」を先に決める。対象が決まればページが決まる。

## ステップ 2: 実装と突き合わせる

**確認していない値を書かない**。値を書く前に必ず実装を読む。

```sh
# トークンの定義
cat packages/tailwindcss/src/theme.css packages/tailwindcss/src/colors.css

# あるコンポーネントが実際に使っている値
cat packages/tailwindcss/src/components/button.css

# ある値がどこで使われているか
grep -rn "brightness" packages/tailwindcss/src/components/
grep -rn "spacing-relative" packages/tailwindcss/src/components/
```

書いた値と実装が一致していることを、ページを閉じる前にもう一度確認する。

## ステップ 3: 尺度と配布状況を区別する

トークンのページでは、**尺度としてのトークン**と、**いま参照できる CSS 変数**を区別して書く。区別しないと、読者が存在しない変数を書いて動かない。

| 分類                               | 対象                                                    | 読者の参照方法                         |
| :--------------------------------- | :------------------------------------------------------ | :------------------------------------- |
| jumpu-ui が定義・配布              | primary パレット、ステータス 3 色、`--spacing-relative` | `var(--color-primary-700)` など        |
| Tailwind CSS 経由で配布            | 角丸、型サイズ、グレー                                  | `var(--radius-md)` / `rounded-md` など |
| 未配布（component CSS に直接記述） | 遷移時間、イージング、hover / active の明度差           | なし                                   |

未配布のものを書くこと自体は構わない。尺度の明文化が先で、CSS 変数としての配布は後でよい。ただし**配布していないことを明記する**。

## ステップ 4: ページ型のテンプレートに従う

ページ型ごとのテンプレートは [references/page-templates.md](references/page-templates.md) にある。Principles / Tokens / Components / Recipes の 4 種。

コンポーネントのページでは、**バリアントを列挙する見出しを作らない**。`## Small` や `## Rounded` という見出しは、読者に「Small という変種がある」と読ませるが、実体は `text-xs` を付けただけであり、原則「コンポーネントにバリアントを持たせない」と矛盾する。ユーティリティによる調整は見出しを立てず表にまとめる。

## ステップ 5: 文章規範に従って書く

執筆・推敲の前に [references/japanese-prose.md](references/japanese-prose.md) を読む。一文一行、パラグラフライティング、論証の厳密さ、冗長の排除、LLM っぽい空句の禁止を定めている。

特に踏みやすいもの。

- 「重要なのは〜である」「正面から扱う」「多角的」のような、中身のない型
- 確認していないことを、確認したかのように書く
- 同じ主張を言い換えて繰り返す
- 見出しを節の結論の言い切りにする

## ステップ 6: 導線を張る

新しいページを追加したら、次の両方を行う。

- `packages/docs/.vitepress/config.mts` の `sidebar` に追加する
- **本文中から内部リンクを張る**。サイドバーからしか辿れないページは読まれない

既存ページからの参照が 1 件もない状態で終わらせない。

## ステップ 7: verify

```sh
pnpm -F @jumpu-ui/docs build   # リンク切れはここで落ちる
pnpm format                    # prettier
pnpm -F @jumpu-ui/docs dev     # :::raw のレンダリングとサイドバーを目視
```

## 出稿前チェックリスト

[references/checklist.md](references/checklist.md) を参照。特に次の 3 つは毎回確認する。

- [ ] 書いた値が `packages/tailwindcss/src` の実装と一致する
- [ ] 同じ内容を README と docs の両方に書いていない（単一の情報源）
- [ ] 新しいページに本文からの内部リンクがある

## 落とし穴

**README との二重管理**。`packages/tailwindcss/README.md` の Configuration 節と `tokens/` は同じことを書きうる。docs を正本とし、README からはリンクする。

**Guidelines セクションを作りたくなる**。指針が溜まってくると独立セクションに切り出したくなるが、中身は「Button の使い方」「Spacing の使い方」と並ぶので、結局セクション構造の複製になる。対象のページに置く。

**Patterns という語**。ARIA Authoring Practices Guide の Patterns は Accordion / Tabs / Button のような単一ウィジェットを指し、docs では Components に相当する。場面ごとの組み合わせを Patterns と呼ぶと、APG 準拠を掲げるページと語が衝突する。`recipes/` の呼称は Recipes のまま使う。

**実装の不整合を見つけたとき**。ドキュメントを書いていると実装の不揃いが見つかる（hover の表現が揃っていない、クリック可能なのに hover がない、など）。その場で実装を直さない。**現状を正確に書き、Issue に起票する**。ドキュメントの変更と実装の変更を同じ変更に混ぜない。
