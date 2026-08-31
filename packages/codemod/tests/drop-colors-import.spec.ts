import { describe, expect, it } from "vitest";
import type { TransformCtx } from "../src/context.ts";
import { dropColorsImport } from "../src/transforms/v2.0.0/drop-colors-import.ts";

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

describe("dropColorsImport", () => {
  it("removes the import with LF line endings", async () => {
    const input =
      `@import "@jumpu-ui/tailwindcss";\n` +
      `@import "@jumpu-ui/tailwindcss/colors";\n` +
      `.card { color: red; }\n`;
    const result = await dropColorsImport.run(input, ctx);
    expect(result.changed).toBe(true);
    expect(result.output).toBe(
      `@import "@jumpu-ui/tailwindcss";\n.card { color: red; }\n`,
    );
  });

  it("removes the import with CRLF line endings without leaving a stray \\r", async () => {
    const input =
      `@import "@jumpu-ui/tailwindcss";\r\n` +
      `@import "@jumpu-ui/tailwindcss/colors";\r\n` +
      `.card { color: red; }\r\n`;
    const result = await dropColorsImport.run(input, ctx);
    expect(result.changed).toBe(true);
    expect(result.output).toBe(
      `@import "@jumpu-ui/tailwindcss";\r\n.card { color: red; }\r\n`,
    );
  });

  it("is a no-op when the target import is absent", async () => {
    const input = `@import "@jumpu-ui/tailwindcss";\n.card { color: red; }\n`;
    const result = await dropColorsImport.run(input, ctx);
    expect(result.changed).toBe(false);
    expect(result.output).toBe(input);
  });
});
