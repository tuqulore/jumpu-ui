import type { Transform } from "../../context.ts";
import {
  insertTokenAfter,
  rewriteClassValues,
  tokensOf,
} from "../../utils/class-attrs.ts";

export const BUTTONS = [
  "jumpu-button",
  "jumpu-outlined-button",
  "jumpu-text-button",
];
/** button 系は以前 inline-block だった */
export const BUTTON_COMPAT = "inline-block";

// NOTE: flex でなくなれば column-gap と align-items / justify-content も効かないため、
// 以前の見た目に戻すのは display だけでよい
const DISPLAY_UTILITY = new RegExp(
  String.raw`^!?(?:block|inline|inline-block|flow-root|flex|inline-flex|grid|inline-grid|contents|list-item|hidden|table|inline-table|table-(?:caption|cell|column|column-group|footer-group|header-group|row-group|row))!?$`,
);

export const buttonInlineFlexCompat: Transform = {
  id: "button-inline-flex-compat",
  title: "Keep the previous inline-block layout of the button components",
  kind: "rewrite",
  sinceVersion: "3.2.0",
  match: (file) => /\.(?:html?|astro|vue|jsx|tsx)$/i.test(file),
  run(input, ctx) {
    return rewriteClassValues(
      input,
      ctx.file,
      (value) => {
        const tokens = tokensOf(value);
        const button = BUTTONS.find((name) => tokens.includes(name));
        if (!button) return value;
        // 利用側が display を指定していれば、その指定が以前から効いている
        if (tokens.some((token) => DISPLAY_UTILITY.test(token))) return value;
        return insertTokenAfter(value, button, BUTTON_COMPAT);
      },
      ctx.options.classFn,
    );
  },
};
