import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://localhost:4173";

export default defineConfig({
  testDir: "./vrt",
  // NOTE: baseline は常に同じ Playwright コンテナで生成するため、プラットフォーム接尾辞を付けない
  snapshotPathTemplate: "{testDir}/__screenshots__/{arg}{ext}",
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI
    ? [["html", { open: "never" }], ["github"]]
    : [["html", { open: "never" }], ["list"]],
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      scale: "css",
    },
  },
  use: {
    baseURL,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
  webServer: {
    command: "pnpm preview --port 4173",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
});
