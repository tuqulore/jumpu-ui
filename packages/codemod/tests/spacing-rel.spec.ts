import { describe, expect, it } from "vitest";
import type { TransformCtx } from "../src/context.ts";
import { spacingRel } from "../src/transforms/v2.0.0/spacing-rel.ts";

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

const css = ctxFor("test.css");

describe("spacingRel / @apply", () => {
  it("expands rel utilities into declarations and keeps the rest in @apply", async () => {
    const input = `.card {\n  @apply flex p-rel2;\n}\n`;
    const result = await spacingRel.run(input, css);
    expect(result.changed).toBe(true);
    expect(result.output).toBe(
      `.card {\n  @apply flex;\n  padding: calc(var(--spacing-relative) * 2);\n}\n`,
    );
  });

  it("drops the @apply line when every token was expanded", async () => {
    const input = `.card {\n  @apply p-rel2;\n}\n`;
    const result = await spacingRel.run(input, css);
    expect(result.output).toBe(
      `.card {\n  padding: calc(var(--spacing-relative) * 2);\n}\n`,
    );
  });

  it("uses CRLF for inserted declarations when the input is CRLF", async () => {
    const input = `.card {\r\n  @apply p-rel2 gap-rel1;\r\n}\r\n`;
    const result = await spacingRel.run(input, css);
    expect(result.output).toBe(
      `.card {\r\n  padding: calc(var(--spacing-relative) * 2);\r\n  gap: calc(var(--spacing-relative) * 1);\r\n}\r\n`,
    );
  });

  it("keeps variant tokens in @apply as arbitrary values and notes them", async () => {
    const input = `.card {\n  @apply hover:p-rel2;\n}\n`;
    const result = await spacingRel.run(input, css);
    expect(result.output).toBe(
      `.card {\n  @apply hover:p-[calc(var(--spacing-relative)*2)];\n}\n`,
    );
    expect(result.notes).toHaveLength(1);
    expect(result.notes[0]).toContain("line 2");
    expect(result.notes[0]).toContain("hover:p-rel2");
  });

  it("keeps utilities without a declaration mapping in @apply and notes them", async () => {
    const input = `.card {\n  @apply space-y-rel2;\n}\n`;
    const result = await spacingRel.run(input, css);
    expect(result.output).toBe(
      `.card {\n  @apply space-y-[calc(var(--spacing-relative)*2)];\n}\n`,
    );
    expect(result.notes).toHaveLength(1);
  });

  it("keeps the px and 0 steps on their literal values", async () => {
    const input = `.card {\n  @apply p-relpx -mt-rel0;\n}\n`;
    const result = await spacingRel.run(input, css);
    expect(result.output).toBe(
      `.card {\n  padding: 1px;\n  margin-top: 0px;\n}\n`,
    );
  });

  it("does not touch class names that merely start with rel", async () => {
    const input = `.card {\n  @apply relative flex;\n}\n`;
    const result = await spacingRel.run(input, css);
    expect(result.changed).toBe(false);
    expect(result.output).toBe(input);
  });

  it("is idempotent", async () => {
    const input = `.card {\n  @apply flex p-rel2 hover:gap-rel1;\n}\n`;
    const once = await spacingRel.run(input, css);
    const twice = await spacingRel.run(once.output, css);
    expect(twice.changed).toBe(false);
    expect(twice.output).toBe(once.output);
  });
});

describe("spacingRel / markup", () => {
  it("rewrites class attributes to arbitrary values", async () => {
    const input = `<div class="p-rel2 hover:-mt-rel1.5">x</div>\n`;
    const result = await spacingRel.run(input, ctxFor("test.html"));
    expect(result.changed).toBe(true);
    expect(result.output).toBe(
      `<div class="p-[calc(var(--spacing-relative)*2)] hover:-mt-[calc(var(--spacing-relative)*1.5)]">x</div>\n`,
    );
  });

  it("rewrites both the style block and the class attribute of a Vue SFC", async () => {
    const input =
      `<template>\n  <div class="gap-rel1" />\n</template>\n\n` +
      `<style>\n.card {\n  @apply p-rel2;\n}\n</style>\n`;
    const result = await spacingRel.run(input, ctxFor("Card.vue"));
    expect(result.output).toContain(
      `<div class="gap-[calc(var(--spacing-relative)*1)]" />`,
    );
    expect(result.output).toContain(
      `padding: calc(var(--spacing-relative) * 2);`,
    );
  });

  it("is idempotent", async () => {
    const input = `<div class="p-rel2 relative">x</div>\n`;
    const once = await spacingRel.run(input, ctxFor("test.html"));
    const twice = await spacingRel.run(once.output, ctxFor("test.html"));
    expect(twice.changed).toBe(false);
    expect(twice.output).toBe(once.output);
  });
});
