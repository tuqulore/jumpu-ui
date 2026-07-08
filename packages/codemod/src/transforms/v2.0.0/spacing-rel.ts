import type { Transform } from "../../context.ts";

const REL_TOKEN = /\brel(\d+)\b/g;

export const spacingRel: Transform = {
  id: "spacing-rel",
  title: "Replace rel<N> with calc(var(--spacing-relative) * <N>)",
  kind: "rewrite",
  sinceVersion: "2.0.0",
  match: (file) => /\.css$/i.test(file),
  run(input) {
    let changed = false;
    const output = input.replace(REL_TOKEN, (_match, n) => {
      changed = true;
      return `calc(var(--spacing-relative) * ${n})`;
    });
    return { output, changed, notes: [] };
  },
};
