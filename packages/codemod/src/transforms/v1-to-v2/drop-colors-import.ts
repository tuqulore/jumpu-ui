import type { Transform } from "../../context.ts";

const COLORS_IMPORT = /@import\s+["']@jumpu-ui\/tailwindcss\/colors["']\s*;?\n?/g;

export const dropColorsImport: Transform = {
  id: "v1-to-v2/drop-colors-import",
  title: 'Drop @import "@jumpu-ui/tailwindcss/colors"; (bundled in v2+)',
  match: (file) => /\.css$/i.test(file),
  run(input) {
    let changed = false;
    const output = input.replace(COLORS_IMPORT, () => {
      changed = true;
      return "";
    });
    return { output, changed, notes: [] };
  },
};
