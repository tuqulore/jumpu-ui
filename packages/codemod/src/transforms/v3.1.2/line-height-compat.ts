import type { Transform } from "../../context.ts";
import {
  insertTokenAfter,
  rewriteClassValues,
  tokensOf,
} from "../../utils/class-attrs.ts";

export const BADGE = "jumpu-badge";
export const ICON_BUTTON = "jumpu-icon-button";
/** Badge は以前、行の高さを親から継承していた */
export const BADGE_COMPAT = "leading-[inherit]";
/** IconButton のツールチップは以前 --leading-tight だった */
export const TOOLTIP_COMPAT = "[&_[role=tooltip]]:leading-tight";

// NOTE: Tailwind は leading-* を text-* より後に出力する。行の高さを決めるユーティリティを
// 持つ Badge に leading-[inherit] を足すと、その指定を打ち消してしまう
const THEME_SIZE = String.raw`(?:xs|sm|base|lg|xl|[2-9]xl)`;
// NOTE: 任意値は単位付きの数値、関数、length: 指定のときだけ文字サイズになる。
// それ以外 (text-[#fff]/50、text-(--x)/50 など) は文字色と不透明度として扱われる
const ARBITRARY_SIZE = String.raw`(?:\[(?:length:[^\]]+|[\d.]+[a-z%]+|(?:calc|clamp|min|max)\(.+\))\]|\(length:[^)]+\))`;
const LINE_HEIGHT_UTILITY = new RegExp(
  String.raw`^!?(?:leading-.+|text-${THEME_SIZE}(?:\/.+)?|text-${ARBITRARY_SIZE}\/.+)!?$`,
);

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
          output = insertTokenAfter(output, BADGE, BADGE_COMPAT);
        }
        if (tokens.includes(ICON_BUTTON) && !tokens.includes(TOOLTIP_COMPAT)) {
          output = insertTokenAfter(output, ICON_BUTTON, TOOLTIP_COMPAT);
        }
        return output;
      },
      ctx.options.classFn,
    );
  },
};
