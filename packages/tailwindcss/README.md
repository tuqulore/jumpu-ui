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

Jumpu UI does extend [Tailwind CSS Theme](https://tailwindcss.com/docs/theme). You can customize several CSS values.

### [colors](https://tailwindcss.com/docs/customizing-colors)

- `var(--color-primary-*)`: Primary color palette. Default is `var(--color-blue-*)`

### spacing

- `var(--spacing-relative)`: Unit of relative spacing. Default is `0.25em`

## Migration

If you are upgrading from an older major version, run [@jumpu-ui/codemod](https://www.npmjs.com/package/@jumpu-ui/codemod) in your project root:

```shell
# v2 -> v3
npx @jumpu-ui/codemod v2-to-v3 .

# v1 -> v2
npx @jumpu-ui/codemod v1-to-v2 .
```

See the [Migration guide](https://jumpu-ui.pages.dev/migration/) for details.

## How to contribute

Please refer https://jumpu-ui.pages.dev/development-guide.html
