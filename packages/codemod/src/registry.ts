import type { Transform } from "./context.ts";
import {
  classPrefix,
  dropColorsImport,
  spacingRel,
} from "./transforms/v1-to-v2/index.ts";
import {
  cdnUrl,
  explicitTailwindcssImport,
} from "./transforms/v2-to-v3/index.ts";

export const registry: Record<string, Transform[]> = {
  "v1-to-v2": [classPrefix, spacingRel, dropColorsImport],
  "v2-to-v3": [cdnUrl, explicitTailwindcssImport],
  "class-prefix": [classPrefix],
  "spacing-rel": [spacingRel],
  "drop-colors-import": [dropColorsImport],
  "cdn-url": [cdnUrl],
  "explicit-tailwindcss-import": [explicitTailwindcssImport],
};

export function transformIds(): string[] {
  const ids = new Set<string>();
  for (const transforms of Object.values(registry)) {
    for (const t of transforms) ids.add(t.id);
  }
  return [...ids].sort();
}
