# @jumpu-ui/tailwindcss

@jumpu-ui/tailwindcss パッケージは Jumpu UI の TailwindCSS プラグインです。

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

`rel1` であれば `0.25rem` となるような相対サイズのスケールを追加しています。

### [colors](https://tailwindcss.com/docs/customizing-colors)

- `primary`: UI コンポーネントで用いられるプライマリカラー。デフォルトは `require("tailwindcss/colors").colors.blue`
- `white`: 白色。デフォルトは `require("tailwindcss/colors").white`
- `black`: 黒色。デフォルトは `require("tailwindcss/colors").black`
- `success`: 成功のステータス色。デフォルトは `#00A93E`
- `emphasis`: 強調のステータス色。デフォルトは `#FF002E`
- `warning`: 警告のステータス色。デフォルトは `#FACC15`
- `danger`: 危険のステータス色。デフォルトは `#B80000`

### 開発

[DEVELOPMENT.md](https://github.com/tuqulore/jumpu-ui/blob/develop/packages/tailwindcss/DEVELOPMENT.md)を参照してください。
