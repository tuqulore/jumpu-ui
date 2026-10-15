import type { Transform } from "../../context.ts";
import {
  removeToken,
  rewriteClassValues,
  tokensOf,
} from "../../utils/class-attrs.ts";
import { BUTTON_COMPAT, BUTTONS } from "./button-inline-flex-compat.ts";

export const buttonInlineFlexAdopt: Transform = {
  id: "button-inline-flex-adopt",
  title: "Remove the utility added by button-inline-flex-compat",
  kind: "rewrite",
  sinceVersion: "3.2.0",
  compatPair: "button-inline-flex-compat",
  defaultAutoApply: false,
  match: (file) => /\.(?:html?|astro|vue|jsx|tsx)$/i.test(file),
  run(input, ctx) {
    return rewriteClassValues(
      input,
      ctx.file,
      (value) => {
        const tokens = tokensOf(value);
        if (!BUTTONS.some((name) => tokens.includes(name))) return value;
        return removeToken(value, BUTTON_COMPAT);
      },
      ctx.options.classFn,
    );
  },
};
