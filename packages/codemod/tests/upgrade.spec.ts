import { describe, expect, it } from "vitest";
import { applicableTransforms, compareVersion } from "../src/upgrade.ts";

describe("compareVersion", () => {
  it("returns negative when a < b", () => {
    expect(compareVersion("1.0.0", "2.0.0")).toBeLessThan(0);
    expect(compareVersion("2.0.0", "2.0.1")).toBeLessThan(0);
    expect(compareVersion("2.1.0", "3.0.0")).toBeLessThan(0);
  });

  it("returns zero when equal", () => {
    expect(compareVersion("3.0.0", "3.0.0")).toBe(0);
  });

  it("returns positive when a > b", () => {
    expect(compareVersion("3.0.0", "2.9.9")).toBeGreaterThan(0);
  });

  it("ignores prerelease identifiers", () => {
    expect(compareVersion("3.0.3-alpha.0", "3.0.3")).toBe(0);
    expect(compareVersion("3.0.0-alpha.0", "3.0.0-alpha.1")).toBe(0);
  });
});

describe("applicableTransforms", () => {
  it("returns all 5 transforms for 1.0.0 → latest", () => {
    const ids = applicableTransforms("1.0.0", "3.0.3-alpha.0").map((t) => t.id);
    expect(ids).toEqual([
      "class-prefix",
      "spacing-rel",
      "drop-colors-import",
      "cdn-url",
      "explicit-tailwindcss-import",
    ]);
  });

  it("returns only v3 transforms when starting at 2.0.1", () => {
    const ids = applicableTransforms("2.0.1", "3.0.3-alpha.0").map((t) => t.id);
    expect(ids).toContain("cdn-url");
    expect(ids).toContain("explicit-tailwindcss-import");
    expect(ids).not.toContain("class-prefix");
  });

  it("returns empty when from equals to", () => {
    const ts = applicableTransforms("3.0.3", "3.0.3");
    expect(ts).toHaveLength(0);
  });

  it("respects --skip", () => {
    const ids = applicableTransforms("1.0.0", "3.0.3", {
      skip: ["class-prefix"],
    }).map((t) => t.id);
    expect(ids).not.toContain("class-prefix");
    expect(ids).toContain("spacing-rel");
  });
});
