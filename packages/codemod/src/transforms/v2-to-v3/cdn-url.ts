import type { Transform } from "../../context.ts";

const CDN_PATTERN =
  /https:\/\/esm\.sh\/@jumpu-ui\/tailwindcss(?:@[\w.\-+]+)?(?![\w./@\-+])/g;

export const cdnUrl: Transform = {
  id: "v2-to-v3/cdn-url",
  title: 'Append "/dist/style.css" to esm.sh CDN links',
  match: (file) => /\.(?:html?|astro|vue|jsx|tsx|md|mdx)$/i.test(file),
  run(input) {
    let changed = false;
    const output = input.replace(CDN_PATTERN, (match) => {
      changed = true;
      return `${match}/dist/style.css`;
    });
    return { output, changed, notes: [] };
  },
};
