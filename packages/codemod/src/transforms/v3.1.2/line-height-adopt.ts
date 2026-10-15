import type { Transform } from "../../context.ts";
import {
  removeToken,
  rewriteClassValues,
  tokensOf,
} from "../../utils/class-attrs.ts";
import {
  BADGE,
  BADGE_COMPAT,
  ICON_BUTTON,
  TOOLTIP_COMPAT,
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
        if (tokens.includes(BADGE)) output = removeToken(output, BADGE_COMPAT);
        if (tokens.includes(ICON_BUTTON))
          output = removeToken(output, TOOLTIP_COMPAT);
        return output;
      },
      ctx.options.classFn,
    );
  },
};
