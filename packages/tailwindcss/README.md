# @jumpu-ui/tailwindcss

@jumpu-ui/tailwindcss パッケージは Jumpu UI の TailwindCSS プラグインです。

## ドキュメント

https://jumpu-ui.tuqulore.com/

## 使い方

パッケージをプロジェクトにインストールします。

```shell
npm i -D @jumpu-ui/tailwindcss
```

> [!NOTE]
>
> 現時点では [@tailwindcss/vite での導入](https://tailwindcss.com/docs/installation/using-vite)のみサポートしています。

Tailwind CSS をインポートしている CSS ファイルでパッケージをインポートしてください。

```css
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss";
```

一部が使用したい場合は、次のようにいくつかの CSS ファイルをインポートしてください。

```css
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss/theme.css" layer(theme);
@import "@jumpu-ui/tailwindcss/components/button.css" layer(components);
```

## 設定

Jumpu UI は [theme](https://tailwindcss.com/docs/theme) を拡張しています。拡張した値に対してカスタマイズすることができます。

### [colors](https://tailwindcss.com/docs/customizing-colors)

- `var(--color-primary-*)`: プライマリカラー。デフォルトは `var(--color-blue-*)`

### spacing

- `var(--spacing-relative)`: 相対的な余白のための数値。デフォルトは `0.25em`

### 開発

[DEVELOPMENT.md](./DEVELOPMENT.md)を参照してください。
