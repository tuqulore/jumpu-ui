import type { Transform } from "./context.ts";
import {
  classPrefix,
  dropColorsImport,
  spacingRel,
} from "./transforms/v2.0.0/index.ts";
import {
  cdnUrl,
  explicitTailwindcssImport,
} from "./transforms/v3.0.0/index.ts";

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
