import type { Transform } from "../../context.ts";

// 行頭 (任意のインデント許容) アンカー付き。コメント (/* ... */) 内の
// @import 記述に反応して誤検知しないようにする。
const TAILWIND_IMPORT = /^\s*@import\s+["']tailwindcss["']\s*;?/m;
const JUMPU_IMPORT = /^\s*@import\s+["']@jumpu-ui\/tailwindcss["']\s*;?/m;

export const explicitTailwindcssImport: Transform = {
  id: "explicit-tailwindcss-import",
  title: 'Insert @import "tailwindcss"; before @jumpu-ui/tailwindcss import',
  kind: "rewrite",
  sinceVersion: "3.0.0",
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
    // 入力の改行スタイルに合わせて挿入行末を選ぶ (drop-colors-import と対称)
    const eol = /\r\n/.test(input) ? "\r\n" : "\n";
    return {
      output: `${before}@import "tailwindcss";${eol}${after}`,
      changed: true,
      notes: [],
    };
  },
};
