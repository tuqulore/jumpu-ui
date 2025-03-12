import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ja-JP",
  title: "Jumpu UI",
  description: "Jumpu UI Design System Docs",
  head: [
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

    sidebar: [
      { text: "Introduction", link: "/introduction" },
      { text: "Principles", link: "/principles" },
      { text: "Tokens", items: [{ text: "Colors", link: "/tokens/colors" }] },
      {
        text: "Components",
        items: [
          { text: "Accordion", link: "/components/accordion" },
          { text: "Avatar", link: "/components/avatar" },
          { text: "Badge", link: "/components/badge" },
          { text: "Balloon", link: "/components/balloon" },
          { text: "BoxedTabs", link: "/components/boxed-tabs" },
          { text: "Button", link: "/components/button" },
          { text: "Card", link: "/components/card" },
          { text: "FilledTag", link: "/components/filled-tag" },
          { text: "IconButton", link: "/components/icon-button" },
          { text: "Input", link: "/components/input" },
          { text: "OutlinedButton", link: "/components/outlined-button" },
          { text: "Select", link: "/components/select" },
          { text: "Spinner", link: "/components/spinner" },
          { text: "Tabs", link: "/components/tabs" },
          { text: "Tag", link: "/components/tag" },
          { text: "TextButton", link: "/components/text-button" },
          { text: "Textarea", link: "/components/textarea" },
          { text: "ToggleSwitch", link: "/components/toggle-switch" },
        ],
      },
      {
        text: "Recipes",
        items: [
          { text: "Chat", link: "/recipes/chat" },
          { text: "LoadingCard", link: "/recipes/loading-card" },
          { text: "LoginCard", link: "/recipes/login-card" },
          { text: "ProfileCard", link: "/recipes/profile-card" },
          { text: "SignUpCard", link: "/recipes/sign-up-card" },
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
