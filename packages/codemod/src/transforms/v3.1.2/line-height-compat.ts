import type { Transform } from "../../context.ts";
import { rewriteClassValues } from "../../utils/class-attrs.ts";

export const BADGE = "jumpu-badge";
export const ICON_BUTTON = "jumpu-icon-button";
/** Badge は以前、行の高さを親から継承していた */
export const BADGE_COMPAT = "leading-[inherit]";
/** IconButton のツールチップは以前 --leading-tight だった */
export const TOOLTIP_COMPAT = "[&_[role=tooltip]]:leading-tight";

// NOTE: Tailwind は leading-* を text-* より後に出力する。行の高さを決めるユーティリティを
// 持つ Badge に leading-[inherit] を足すと、その指定を打ち消してしまう
const LINE_HEIGHT_UTILITY =
  /^!?(?:leading-.+|text-(?:xs|sm|base|lg|xl|[2-9]xl)(?:\/.+)?)!?$/;

export const lineHeightCompat: Transform = {
  id: "line-height-compat",
  title: "Keep the previous line-height of Badge and the IconButton tooltip",
  kind: "rewrite",
  sinceVersion: "3.1.2",
  match: (file) => /\.(?:html?|astro|vue|jsx|tsx)$/i.test(file),
  run(input, ctx) {
    return rewriteClassValues(
      input,
      ctx.file,
      (value) => {
        const tokens = tokensOf(value);
        let output = value;
        if (
          tokens.includes(BADGE) &&
          !tokens.some((token) => LINE_HEIGHT_UTILITY.test(token))
        ) {
          output = insertAfter(output, BADGE, BADGE_COMPAT);
        }
        if (tokens.includes(ICON_BUTTON) && !tokens.includes(TOOLTIP_COMPAT)) {
          output = insertAfter(output, ICON_BUTTON, TOOLTIP_COMPAT);
        }
        return output;
      },
      ctx.options.classFn,
    );
  },
};

export function tokensOf(value: string): string[] {
  return value.split(/\s+/).filter(Boolean);
}

function insertAfter(value: string, anchor: string, token: string): string {
  const parts = value.split(/(\s+)/);
  const index = parts.indexOf(anchor);
  parts.splice(index + 1, 0, " ", token);
  return parts.join("");
}
