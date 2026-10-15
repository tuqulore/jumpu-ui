# @jumpu-ui/tailwindcss

@jumpu/tailwindcss package is a Tailwind CSS plugin of Jumpu UI implementation.

## Documentation

https://jumpu-ui.pages.dev/

## Installation

Install the package to your project.

```shell
npm i -D @jumpu-ui/tailwindcss
```

Import the package to CSS file which installed Tailwind CSS.

```css
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss";
```

### Partially Installation

If you want to use partial styles, please import several CSS files from the package as follows:

```css
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss/theme.css" layer(theme);
@import "@jumpu-ui/tailwindcss/components/button.css" layer(components);
```

### Using CDN

If you want to use in client directly, you can use CDN as follows:

```html
<link
  rel="stylesheet"
  href="https://esm.sh/@jumpu-ui/tailwindcss/dist/style.css"
/>
```

> [!NOTE]
>
> In this case, there are limitations that utility unavailable. Please use `var(--*)` instead.

## Configuration

Jumpu UI extends the [Tailwind CSS Theme](https://tailwindcss.com/docs/theme). Override the tokens with `@theme`:

```css
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss";

@theme {
  --color-primary-700: var(--color-emerald-700);
}
```

See the [Tokens documentation](https://jumpu-ui.pages.dev/tokens/) for the full list, which tokens are distributed as CSS variables, and the constraints that apply when replacing them.

## Migration

Run [@jumpu-ui/codemod](https://www.npmjs.com/package/@jumpu-ui/codemod) in your project root. It detects the installed version and applies every applicable transform up to latest:

```shell
npx @jumpu-ui/codemod upgrade
```

See the [Migration guide](https://jumpu-ui.pages.dev/migration/) for details.

> **Note:** `@jumpu-ui/codemod` is experimental and rewrites your source files in place. Run it on a clean VCS working tree, review the diff, and use it at your own risk.

## How to contribute

Please refer https://jumpu-ui.pages.dev/development-guide.html
