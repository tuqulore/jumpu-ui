import { globSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { expect, test } from "@playwright/test";

const docsRoot = fileURLToPath(new URL("..", import.meta.url));

const pages = globSync("**/*.md", {
  cwd: docsRoot,
  exclude: (path) => path === "node_modules" || path === ".vitepress",
})
  .map((path) => path.replace(/\.md$/, ""))
  .sort();

for (const pageName of pages) {
  test(pageName, async ({ page }) => {
    await page.goto(`/${pageName}.html`);
    await page.evaluate(() => document.fonts.ready);

    // NOTE: ページ内の通し番号で命名すると、例を 1 つ挿入しただけで後続の baseline がすべてずれる。
    // 直前の見出し id とその見出し内の連番で命名する。
    const names = await page
      .locator(".vp-doc .vp-raw")
      .evaluateAll((blocks) => {
        const counts = new Map<string, number>();
        return blocks.map((block) => {
          const headings = [
            ...document.querySelectorAll(".vp-doc :is(h2, h3, h4)[id]"),
          ].filter(
            (heading) =>
              heading.compareDocumentPosition(block) &
              Node.DOCUMENT_POSITION_FOLLOWING,
          );
          const id = headings.at(-1)?.id ?? "top";
          const n = (counts.get(id) ?? 0) + 1;
          counts.set(id, n);
          return `${id}-${n}`;
        });
      });

    const blocks = page.locator(".vp-doc .vp-raw");
    for (const [index, name] of names.entries()) {
      await expect
        .soft(blocks.nth(index))
        .toHaveScreenshot([...pageName.split("/"), `${name}.png`]);
    }
  });
}
