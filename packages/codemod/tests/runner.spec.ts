import { readdir, readFile } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import type { RunOptions, Transform, TransformCtx } from "../src/context.ts";
import { classPrefix } from "../src/transforms/v1-to-v2/class-prefix.ts";
import { dropColorsImport } from "../src/transforms/v1-to-v2/drop-colors-import.ts";
import { spacingRel } from "../src/transforms/v1-to-v2/spacing-rel.ts";
import { cdnUrl } from "../src/transforms/v2-to-v3/cdn-url.ts";
import { explicitTailwindcssImport } from "../src/transforms/v2-to-v3/explicit-tailwindcss-import.ts";

const HERE = dirname(fileURLToPath(import.meta.url));
const FIXTURES = join(HERE, "fixtures");

const TRANSFORMS: Record<string, Transform> = {
  "cdn-url": cdnUrl,
  "explicit-tailwindcss-import": explicitTailwindcssImport,
  "drop-colors-import": dropColorsImport,
  "spacing-rel": spacingRel,
  "class-prefix": classPrefix,
};

interface Case {
  name: string;
  file: string;
  input: string;
  expected: string;
}

async function findCases(root: string): Promise<Case[]> {
  const entries = await readdir(root, { withFileTypes: true });
  const cases: Case[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const dir = join(root, entry.name);
    const files = await readdir(dir);
    const inputFile = files.find((f) => f.startsWith("input."));
    const expectedFile = files.find((f) => f.startsWith("expected."));
    if (!inputFile || !expectedFile) continue;
    cases.push({
      name: entry.name,
      file: `test${extname(inputFile)}`,
      input: await readFile(join(dir, inputFile), "utf8"),
      expected: await readFile(join(dir, expectedFile), "utf8"),
    });
  }
  return cases;
}

function makeOptions(): RunOptions {
  return {
    dryRun: true,
    verbose: false,
    gitCheck: false,
    includeCss: false,
  };
}

for (const [transformName, transform] of Object.entries(TRANSFORMS)) {
  const cases = await findCases(join(FIXTURES, transformName));
  describe(`fixtures / ${transformName}`, () => {
    if (cases.length === 0) {
      it.skip("no fixtures", () => {});
      return;
    }
    for (const c of cases) {
      it(c.name, async () => {
        const ctx: TransformCtx = {
          file: c.file,
          options: makeOptions(),
          log: () => {},
        };
        const result = await transform.run(c.input, ctx);
        expect(result.output).toBe(c.expected);
      });
    }
  });
}
