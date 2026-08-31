import type { Transform } from "../../context.ts";
import { rewriteClassAttributes } from "../../utils/class-attrs.ts";
import { getClassMap, type ClassMap } from "../../utils/class-map.ts";

const HTML_LIKE = /\.(?:html?|astro|vue)$/i;
const JSX_LIKE = /\.(?:jsx|tsx)$/i;
const CSS_LIKE = /\.css$/i;

export const classPrefix: Transform = {
  id: "class-prefix",
  title: 'Prefix bare component class names with "jumpu-"',
  kind: "rewrite",
  sinceVersion: "2.0.0",
  match: (file) =>
    HTML_LIKE.test(file) || JSX_LIKE.test(file) || CSS_LIKE.test(file),
  async run(input, ctx) {
    const map = await getClassMap({ extra: ctx.options.extraClass });
    if (CSS_LIKE.test(ctx.file)) {
      if (!ctx.options.includeCss) {
        return {
          output: input,
          changed: false,
          notes: [
            "skipped: pass --include-css to rewrite CSS selectors (may have false positives)",
          ],
        };
      }
      return rewriteCss(input, map);
    }
    return rewriteClassAttributes(input, ctx.file, (token) => {
      // variant 付き (hover: など) は bare クラス名ではないので触らない
      if (token.includes(":")) return token;
      return map.bare.has(token) ? map.toPrefixed(token) : token;
    });
  },
};

function rewriteCss(input: string, map: ClassMap) {
  let changed = false;
  const output = input.replace(/\.([a-z][a-z0-9-]*)/g, (match, name) => {
    if (!map.bare.has(name)) return match;
    changed = true;
    return `.${map.toPrefixed(name)}`;
  });
  return { output, changed, notes: [] };
}
