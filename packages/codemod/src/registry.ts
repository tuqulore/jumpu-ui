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

export const TRANSFORMS: Transform[] = [
  classPrefix,
  spacingRel,
  dropColorsImport,
  cdnUrl,
  explicitTailwindcssImport,
];

export function findById(id: string): Transform | undefined {
  return TRANSFORMS.find((t) => t.id === id);
}

export function autoApplyTransforms(): Transform[] {
  return TRANSFORMS.filter((t) => t.defaultAutoApply !== false);
}
