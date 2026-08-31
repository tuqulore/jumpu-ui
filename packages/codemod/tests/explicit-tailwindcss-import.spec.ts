import { describe, expect, it } from "vitest";
import type { TransformCtx } from "../src/context.ts";
import { explicitTailwindcssImport } from "../src/transforms/v3.0.0/explicit-tailwindcss-import.ts";

const ctx: TransformCtx = {
  file: "test.css",
  options: {
    dryRun: true,
    verbose: false,
    gitCheck: false,
    includeCss: false,
  },
  log: () => {},
};

describe("explicitTailwindcssImport", () => {
  it("inserts with LF when input uses LF line endings", async () => {
    const input = `@import "@jumpu-ui/tailwindcss";\n.app {}\n`;
    const result = await explicitTailwindcssImport.run(input, ctx);
    expect(result.changed).toBe(true);
    expect(result.output).toBe(
      `@import "tailwindcss";\n@import "@jumpu-ui/tailwindcss";\n.app {}\n`,
    );
  });

  it("inserts with CRLF when input uses CRLF line endings", async () => {
    const input = `@import "@jumpu-ui/tailwindcss";\r\n.app {}\r\n`;
    const result = await explicitTailwindcssImport.run(input, ctx);
    expect(result.changed).toBe(true);
    expect(result.output).toBe(
      `@import "tailwindcss";\r\n@import "@jumpu-ui/tailwindcss";\r\n.app {}\r\n`,
    );
    // 混在防止: LF 単独が混じっていないこと
    expect(result.output.replace(/\r\n/g, "")).not.toMatch(/\n/);
  });

  it("is a no-op when @jumpu-ui/tailwindcss import is absent", async () => {
    const input = `.app { color: red; }\n`;
    const result = await explicitTailwindcssImport.run(input, ctx);
    expect(result.changed).toBe(false);
    expect(result.output).toBe(input);
  });
});
