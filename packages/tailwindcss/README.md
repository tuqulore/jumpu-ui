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
/* If you installed Tailwind CSS with @tailwindcss/vite: */
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss";
```

```css
/* If you installed Tailwind CSS with @tailwindcss/postcss: */
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss/src/style.css";
```

### Partially Installation

If you want to use partial styles, please import several CSS files from the package as follows:

```css
/* If you installed Tailwind CSS with @tailwindcss/vite: */
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss/theme.css" layer(theme);
@import "@jumpu-ui/tailwindcss/components/button.css" layer(components);
```

```css
/* If you installed Tailwind CSS with @tailwindcss/postcss: */
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss/src/theme.css" layer(theme);
@import "@jumpu-ui/tailwindcss/src/components/button.css" layer(components);
```

### Using CDN

If you want to use in client directly, you can use CDN as follows:

```html
<link rel="stylesheet" href="https://esm.sh/@jumpu-ui/tailwindcss" />
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

## How to contribute

Please refer https://jumpu-ui.pages.dev/development-guide.html
