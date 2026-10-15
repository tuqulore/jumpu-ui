import { describe, expect, it } from "vitest";
import { getClassMap } from "../src/utils/class-map.ts";

const EXPECTED = [
  "accordion",
  "avatar",
  "badge",
  "balloon",
  "boxed-tabs",
  "button",
  "card",
  "filled-tag",
  "icon-button",
  "input",
  "outlined-button",
  "select",
  "spinner",
  "tabs",
  "tag",
  "text-button",
  "textarea",
  "toggle-switch",
];

describe("getClassMap", () => {
  it("extracts every component class name declared in @jumpu-ui/tailwindcss", async () => {
    const map = await getClassMap();
    for (const name of EXPECTED) {
      expect(map.bare.has(name), `bare should contain "${name}"`).toBe(true);
      expect(
        map.prefixed.has(`jumpu-${name}`),
        `prefixed should contain "jumpu-${name}"`,
      ).toBe(true);
    }
  });

  it("toPrefixed adds jumpu- to bare names, passes through prefixed, leaves unknowns", async () => {
    const map = await getClassMap();
    expect(map.toPrefixed("input")).toBe("jumpu-input");
    expect(map.toPrefixed("jumpu-input")).toBe("jumpu-input");
    expect(map.toPrefixed("does-not-exist")).toBe("does-not-exist");
  });

  it("accepts extra class names via options.extra", async () => {
    const map = await getClassMap({ extra: ["banner"] });
    expect(map.bare.has("banner")).toBe(true);
    expect(map.prefixed.has("jumpu-banner")).toBe(true);
    expect(map.toPrefixed("banner")).toBe("jumpu-banner");
  });
});
