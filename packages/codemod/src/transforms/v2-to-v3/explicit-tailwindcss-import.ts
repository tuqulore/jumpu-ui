import type { Transform } from "../../context.ts";

const TAILWIND_IMPORT = /@import\s+["']tailwindcss["']\s*;?/;
const JUMPU_IMPORT = /@import\s+["']@jumpu-ui\/tailwindcss["']\s*;?/;

export const explicitTailwindcssImport: Transform = {
  id: "v2-to-v3/explicit-tailwindcss-import",
  title: 'Insert @import "tailwindcss"; before @jumpu-ui/tailwindcss import',
  match: (file) => /\.css$/i.test(file),
  run(input) {
    if (TAILWIND_IMPORT.test(input)) {
      return { output: input, changed: false, notes: [] };
    }
    const match = JUMPU_IMPORT.exec(input);
    if (!match) {
      return { output: input, changed: false, notes: [] };
    }
    const before = input.slice(0, match.index);
    const after = input.slice(match.index);
    return {
      output: `${before}@import "tailwindcss";\n${after}`,
      changed: true,
      notes: [],
    };
  },
};
