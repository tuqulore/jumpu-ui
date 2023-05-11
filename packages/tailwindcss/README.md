# @jumpu-ui/tailwindcss

@jumpu-ui/tailwindcss パッケージは Jumpu UI の TailwindCSS プラグインです。

## Storybook

https://tuqulore.github.io/jumpu-ui/

## Figma

デザインツール Figma でも Jumpu UI が公開されています。

[Jumpu UI （Figma 版）](https://www.figma.com/community/file/1042706969451783914)

## ステータス

現在不安定リリースのみ提供しています。安定リリースまで破壊的な変更が含まれる可能性があります。

## 使い方

パッケージをプロジェクトにインストールします。

```shell
npm i -D @jumpu-ui/tailwindcss
```

`tailwind.config.js` に TailwindCSS プラグインとして使用するように設定します。このとき、変数 `jumpu` は各コンポーネントごとの TailwindCSS プラグインを含んだ配列です。すべて使用したい場合は、スプレッド構文などによって展開してください。

```js
const jumpu = require("@jumpu-ui/tailwindcss");

module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [...jumpu],
};
```

一部が使用したい場合は、個別に使用したいプラグインを設定してください。

```js
const button = require("@jumpu-ui/tailwindcss/button");
const outlinedButton = require("@jumpu-ui/tailwindcss/outlinedButton");
const textButton = require("@jumpu-ui/tailwindcss/textButton");

module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [button, outlinedButton, textButton],
};
```

`primary` 以外の Jumpu UI が定義している色は、 `tailwindcss/color` モジュールと同様に別途導入する必要があります。

```js
const jumpuColors = require("@jumpu-ui/tailwindcss/colors");
const jumpu = require("@jumpu-ui/tailwindcss");

module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
      colors: jumpuColors,
    },
  },
  plugins: [...jumpu],
};
```

## 設定

Jumpu UI は theme を拡張しています。拡張した値に対してカスタマイズすることができます。

### `jumpu.prefix`

`jumpu.prefix` は Jumpu UI コンポーネントクラスの接頭辞を設定します。デフォルトは `"jumpu-"` です。

接頭辞を取り除きたい場合は、空文字列を設定してください。

```js
theme: {
  extend: {
    jumpu: {
      prefix: "";
    }
  }
}
```

### [spacing](https://tailwindcss.com/docs/customizing-spacing)

`rel1` であれば `0.25em` となるような相対サイズのスケールを追加しています。

### [colors](https://tailwindcss.com/docs/customizing-colors)

- `primary`: UI コンポーネントで用いられるプライマリカラー。デフォルトは `require("tailwindcss/colors").blue`

### [borderColors](https://tailwindcss.com/docs/border-color)

- `DEFAULT`: 境界線で用いられる色。デフォルトは `require("tailwindcss/colors").gray[300]`

### 開発

[DEVELOPMENT.md](https://github.com/tuqulore/jumpu-ui/blob/develop/packages/tailwindcss/DEVELOPMENT.md)を参照してください。
