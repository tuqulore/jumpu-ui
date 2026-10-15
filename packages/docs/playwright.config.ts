import { readFileSync } from "node:fs";
import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://localhost:4173";
const playwrightVersion = JSON.parse(
  readFileSync(new URL("package.json", import.meta.url), "utf8"),
).devDependencies["@playwright/test"];
const browserServerPort = 4174;

// NOTE: baseline は CI を正とし「VRT update」ワークフローでのみ書き込む。ローカルは差分の確認専用
if (
  !process.env.CI &&
  process.argv.some(
    (arg) => arg === "-u" || /^--update-snapshots(=|$)/.test(arg),
  )
) {
  throw new Error(
    "baseline はローカルで更新できません。「VRT update」ワークフローを実行してください",
  );
}

export default defineConfig({
  testDir: "./vrt",
  // NOTE: baseline は常に同じ Playwright コンテナで生成するため、プラットフォーム接尾辞を付けない
  snapshotPathTemplate: "{testDir}/__screenshots__/{arg}{ext}",
  forbidOnly: !!process.env.CI,
  // NOTE: 既定の "missing" では、ローカル実行でも baseline の無いテストの画像が書き込まれる
  updateSnapshots: process.env.CI ? "missing" : "none",
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
    // NOTE: ローカルでもブラウザとフォントを CI と揃えるため、CI と同じ Playwright コンテナのブラウザに接続する
    connectOptions: process.env.CI
      ? undefined
      : {
          wsEndpoint: `ws://127.0.0.1:${browserServerPort}/`,
          exposeNetwork: "<loopback>",
        },
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
  webServer: [
    {
      command: "pnpm preview --port 4173",
      url: baseURL,
      reuseExistingServer: !process.env.CI,
    },
    ...(process.env.CI
      ? []
      : [
          {
            command: `docker run --rm --init -p ${browserServerPort}:${browserServerPort} --user pwuser --workdir /home/pwuser mcr.microsoft.com/playwright:v${playwrightVersion}-noble npx -y playwright@${playwrightVersion} run-server --port ${browserServerPort} --host 0.0.0.0`,
            url: `http://127.0.0.1:${browserServerPort}/`,
            // NOTE: 既定の SIGKILL では docker CLI だけが死にコンテナが残るため、SIGTERM をコンテナへ中継させる
            gracefulShutdown: { signal: "SIGTERM" as const, timeout: 10_000 },
            timeout: 300_000,
          },
        ]),
  ],
});
