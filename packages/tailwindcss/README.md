# @jumpu-ui/tailwindcss

@jumpu/tailwindcss package is a Tailwind CSS plugin of Jumpu UI implementation.

## Documentation

https://jumpu-ui.pages.dev/

## Usage

Install the package to your project.

```shell
npm i -D @jumpu-ui/tailwindcss
```

> [!NOTE]
>
> Currently, we've only support [@tailwindcss/vite installation](https://tailwindcss.com/docs/installation/using-vite).

Import the package to CSS file which installed Tailwind CSS.

```css
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss";
```

If you want use partial styles, please import several CSS files from the package as follows:

```css
@import "tailwindcss";
@import "@jumpu-ui/tailwindcss/theme.css" layer(theme);
@import "@jumpu-ui/tailwindcss/components/button.css" layer(components);
```

## Configuration

Jumpu UI does extend [Tailwind CSS Theme](https://tailwindcss.com/docs/theme). You can customize several CSS values.

### [colors](https://tailwindcss.com/docs/customizing-colors)

- `var(--color-primary-*)`: Primary color palette. Default is `var(--color-blue-*)`

### spacing

- `var(--spacing-relative)`: Unit of relative spacing. Default is `0.25em`

## How to contribute

Please refer https://jumpu-ui.pages.dev/development-guide.html
