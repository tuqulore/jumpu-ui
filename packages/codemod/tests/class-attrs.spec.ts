import { describe, expect, it } from "vitest";
import { rewriteClassAttributes } from "../src/utils/class-attrs.ts";

const prefix = (token: string) => (token === "card" ? "jumpu-card" : token);

describe("rewriteClassAttributes / class helper functions", () => {
  it("rewrites tailwind-merge helpers without extra configuration", () => {
    const input = `const x = twMerge("card", twJoin("card"));\n`;
    const result = rewriteClassAttributes(input, "test.tsx", prefix);
    expect(result.output).toBe(
      `const x = twMerge("jumpu-card", twJoin("jumpu-card"));\n`,
    );
  });

  it("leaves an unknown helper alone but notes it when used in className", () => {
    const input = `const el = <div className={cx("card")} />;\n`;
    const result = rewriteClassAttributes(input, "test.tsx", prefix);
    expect(result.changed).toBe(false);
    expect(result.notes).toHaveLength(1);
    expect(result.notes[0]).toContain("cx(...)");
  });

  it("notes only the dynamic argument, not the argument separators", () => {
    const input = `const x = cn("card", other, "card");\n`;
    const result = rewriteClassAttributes(input, "test.tsx", prefix);
    expect(result.output).toBe(
      `const x = cn("jumpu-card", other, "jumpu-card");\n`,
    );
    expect(result.notes).toHaveLength(1);
    expect(result.notes[0]).toContain("identifier");
  });

  it("rewrites a helper passed through extraFns", () => {
    const input = `const x = cx("card");\n`;
    const result = rewriteClassAttributes(input, "test.tsx", prefix, ["cx"]);
    expect(result.output).toBe(`const x = cx("jumpu-card");\n`);
    expect(result.notes).toHaveLength(0);
  });
});
