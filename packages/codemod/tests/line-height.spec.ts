import { describe, expect, it } from "vitest";
import type { TransformCtx } from "../src/context.ts";
import { lineHeightAdopt } from "../src/transforms/v3.1.2/line-height-adopt.ts";
import { lineHeightCompat } from "../src/transforms/v3.1.2/line-height-compat.ts";

function ctxFor(file: string): TransformCtx {
  return {
    file,
    options: {
      dryRun: true,
      verbose: false,
      gitCheck: false,
      includeCss: false,
    },
    log: () => {},
  };
}

const html = ctxFor("test.html");

const input =
  `<div class="jumpu-badge bg-gray-100">100</div>\n` +
  `<button class="jumpu-icon-button"><span role="tooltip">Edit</span></button>\n`;

describe("lineHeightCompat", () => {
  it("is idempotent", async () => {
    const once = await lineHeightCompat.run(input, html);
    const twice = await lineHeightCompat.run(once.output, html);
    expect(twice.changed).toBe(false);
    expect(twice.output).toBe(once.output);
  });

  it("leaves CSS files to the user", async () => {
    const css = `.x {\n  @apply jumpu-badge;\n}\n`;
    const result = await lineHeightCompat.run(css, ctxFor("test.css"));
    expect(result.changed).toBe(false);
  });
});

describe("lineHeightAdopt", () => {
  it("restores the input after line-height-compat", async () => {
    const compat = await lineHeightCompat.run(input, html);
    const adopt = await lineHeightAdopt.run(compat.output, html);
    expect(adopt.output).toBe(input);
  });

  it("is idempotent", async () => {
    const compat = await lineHeightCompat.run(input, html);
    const once = await lineHeightAdopt.run(compat.output, html);
    const twice = await lineHeightAdopt.run(once.output, html);
    expect(twice.changed).toBe(false);
    expect(twice.output).toBe(once.output);
  });
});
