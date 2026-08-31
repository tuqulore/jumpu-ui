import { defineConfig } from "vitepress";
import * as pkg from "../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ja-JP",
  title: "Jumpu UI",
  description: "Jumpu UI Design System Docs",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logomark.svg",
        type: "image/svg+xml",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
        integrity:
          "sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm",
        crossorigin: "anonymous",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,

    logo: {
      src: "/logo.svg",
      width: "auto",
      alt: "Jumpu UI",
    },

    nav: [
      {
        text: `v${pkg.version}`,
        items: [
          { text: "Latest (stable)", link: "https://jumpu-ui.pages.dev/" },
          { text: "Alpha (next)", link: "https://jumpu-ui-alpha.pages.dev/" },
          { text: "v2", link: "https://jumpu-ui-v2.pages.dev/" },
          { text: "v1", link: "https://jumpu-ui-v1.pages.dev/" },
        ],
      },
    ],

    sidebar: [
      { text: "はじめに", link: "/introduction" },
      { text: "現状の制約", link: "/constraints" },
      { text: "プレイグラウンド", link: "/playground" },
      { text: "開発ガイド", link: "/development-guide" },
      {
        text: "Principles",
        base: "/principles",
        link: "/",
        items: [
          {
            text: "主要な CSS 設計手法との比較",
            link: "/comparison-with-css-architectures",
          },
          { text: "アクセシビリティ方針", link: "/accessibility" },
        ],
      },
      {
        text: "Tokens",
        base: "/tokens",
        link: "/",
        items: [
          { text: "Colors", link: "/colors" },
          { text: "Typography", link: "/typography" },
          { text: "Spacing", link: "/spacing" },
          { text: "Radius", link: "/radius" },
          { text: "Interaction", link: "/interaction" },
        ],
      },
      {
        text: "Content",
        base: "/content",
        items: [{ text: "アイコン", link: "/icons" }],
      },
      {
        text: "Components",
        base: "/components",
        items: [
          { text: "Accordion", link: "/accordion" },
          { text: "Avatar", link: "/avatar" },
          { text: "Badge", link: "/badge" },
          { text: "Balloon", link: "/balloon" },
          {
            text: "Button",
            link: "/button",
            items: [
              { text: "OutlinedButton", link: "/outlined-button" },
              { text: "TextButton", link: "/text-button" },
            ],
          },
          { text: "Card", link: "/card" },
          { text: "IconButton", link: "/icon-button" },
          { text: "Input", link: "/input" },
          { text: "Select", link: "/select" },
          { text: "Spinner", link: "/spinner" },
          {
            text: "Tabs",
            link: "/tabs",
            items: [{ text: "BoxedTabs", link: "/boxed-tabs" }],
          },
          {
            text: "Tag",
            link: "/tag",
            items: [{ text: "FilledTag", link: "/filled-tag" }],
          },
          { text: "Textarea", link: "/textarea" },
          { text: "ToggleSwitch", link: "/toggle-switch" },
        ],
      },
      {
        text: "Recipes",
        base: "/recipes",
        items: [
          { text: "ログイン", link: "/login" },
          { text: "サインアップ", link: "/sign-up" },
          { text: "プロフィールの表示", link: "/profile" },
          { text: "チャット", link: "/chat" },
          { text: "読み込み中", link: "/loading" },
        ],
      },
      {
        text: "Migration",
        base: "/migration",
        link: "/",
        items: [
          { text: "codemod CLI（実験的）", link: "/codemod" },
          { text: "v2 → v3", link: "/v2-to-v3" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "figma",
        link: "https://www.figma.com/community/file/1042706969451783914",
      },
      { icon: "github", link: "https://github.com/tuqulore/jumpu-ui" },
    ],
  },
});
