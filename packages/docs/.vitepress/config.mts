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
        items: [{ text: "v1", link: "https://jumpu-ui-v1.pages.dev/" }],
      },
    ],

    sidebar: [
      { text: "はじめに", link: "/introduction" },
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
        ],
      },
      {
        text: "Tokens",
        base: "/tokens",
        items: [
          { text: "Colors", link: "/colors" },
          { text: "Icons", link: "/icons" },
        ],
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
          { text: "Chat", link: "/chat" },
          { text: "LoadingCard", link: "/loading-card" },
          { text: "LoginCard", link: "/login-card" },
          { text: "ProfileCard", link: "/profile-card" },
          { text: "SignUpCard", link: "/sign-up-card" },
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
