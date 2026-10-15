import { describe, expect, it } from "vitest";
import type { TransformCtx } from "../src/context.ts";
import { buttonInlineFlexAdopt } from "../src/transforms/v3.2.0/button-inline-flex-adopt.ts";
import { buttonInlineFlexCompat } from "../src/transforms/v3.2.0/button-inline-flex-compat.ts";

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
  `<button class="jumpu-button">Save</button>\n` +
  `<a href="#" class="w-full jumpu-outlined-button">Draft</a>\n`;

describe("buttonInlineFlexCompat", () => {
  it("is idempotent", async () => {
    const once = await buttonInlineFlexCompat.run(input, html);
    const twice = await buttonInlineFlexCompat.run(once.output, html);
    expect(twice.changed).toBe(false);
    expect(twice.output).toBe(once.output);
  });

  it("leaves CSS files to the user", async () => {
    const css = `.x {\n  @apply jumpu-button;\n}\n`;
    const result = await buttonInlineFlexCompat.run(css, ctxFor("test.css"));
    expect(result.changed).toBe(false);
  });
});

describe("buttonInlineFlexAdopt", () => {
  it("restores the input after button-inline-flex-compat", async () => {
    const compat = await buttonInlineFlexCompat.run(input, html);
    const adopt = await buttonInlineFlexAdopt.run(compat.output, html);
    expect(adopt.output).toBe(input);
  });

  it("is idempotent", async () => {
    const compat = await buttonInlineFlexCompat.run(input, html);
    const once = await buttonInlineFlexAdopt.run(compat.output, html);
    const twice = await buttonInlineFlexAdopt.run(once.output, html);
    expect(twice.changed).toBe(false);
    expect(twice.output).toBe(once.output);
  });
});
