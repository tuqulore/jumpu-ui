import type { Transform } from "../../context.ts";
import { rewriteClassValues } from "../../utils/class-attrs.ts";
import {
  BADGE,
  BADGE_COMPAT,
  ICON_BUTTON,
  TOOLTIP_COMPAT,
  tokensOf,
} from "./line-height-compat.ts";

export const lineHeightAdopt: Transform = {
  id: "line-height-adopt",
  title: "Remove the utilities added by line-height-compat",
  kind: "rewrite",
  sinceVersion: "3.1.2",
  compatPair: "line-height-compat",
  defaultAutoApply: false,
  match: (file) => /\.(?:html?|astro|vue|jsx|tsx)$/i.test(file),
  run(input, ctx) {
    return rewriteClassValues(
      input,
      ctx.file,
      (value) => {
        const tokens = tokensOf(value);
        let output = value;
        if (tokens.includes(BADGE)) output = remove(output, BADGE_COMPAT);
        if (tokens.includes(ICON_BUTTON))
          output = remove(output, TOOLTIP_COMPAT);
        return output;
      },
      ctx.options.classFn,
    );
  },
};

function remove(value: string, token: string): string {
  const parts = value.split(/(\s+)/);
  const index = parts.indexOf(token);
  if (index === -1) return value;
  // 前の空白ごと消す。先頭のトークンなら後ろの空白を消す
  if (index > 0) parts.splice(index - 1, 2);
  else parts.splice(index, 2);
  return parts.join("");
}
