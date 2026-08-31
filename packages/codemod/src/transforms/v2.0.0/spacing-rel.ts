import type { Transform } from "../../context.ts";
import { rewriteClassAttributes } from "../../utils/class-attrs.ts";

const CSS_LIKE = /\.css$/i;
// <style> ブロックを持つ SFC。CSS と同じく @apply を書ける
const STYLE_BLOCK_LIKE = /\.(?:vue|astro)$/i;
const MARKUP_LIKE = /\.(?:html?|vue|astro|jsx|tsx)$/i;

/**
 * v1 系の spacing スケール `rel<key>` を含む utility トークン。
 * 例: `p-rel2` / `hover:px-rel1.5` / `-mt-relpx` / `gap-x-rel3!`
 */
const REL_TOKEN =
  /^((?:[^\s:]+:)*)(!?)(-?)([a-z][a-z-]*)-rel(px|\d+(?:\.\d+)?)(!?)$/;

const APPLY_RULE = /^([ \t]*)@apply\b([^;{}]*);/gm;

/** @apply を宣言に展開できる utility とその CSS プロパティ */
const PROPERTIES: Record<string, string[]> = {
  p: ["padding"],
  px: ["padding-inline"],
  py: ["padding-block"],
  pt: ["padding-top"],
  pr: ["padding-right"],
  pb: ["padding-bottom"],
  pl: ["padding-left"],
  ps: ["padding-inline-start"],
  pe: ["padding-inline-end"],
  m: ["margin"],
  mx: ["margin-inline"],
  my: ["margin-block"],
  mt: ["margin-top"],
  mr: ["margin-right"],
  mb: ["margin-bottom"],
  ml: ["margin-left"],
  ms: ["margin-inline-start"],
  me: ["margin-inline-end"],
  gap: ["gap"],
  "gap-x": ["column-gap"],
  "gap-y": ["row-gap"],
  w: ["width"],
  h: ["height"],
  size: ["width", "height"],
  inset: ["inset"],
  "inset-x": ["inset-inline"],
  "inset-y": ["inset-block"],
  top: ["top"],
  right: ["right"],
  bottom: ["bottom"],
  left: ["left"],
  start: ["inset-inline-start"],
  end: ["inset-inline-end"],
  indent: ["text-indent"],
};

interface RelToken {
  variants: string;
  leadingImportant: string;
  negative: boolean;
  utility: string;
  step: string;
  trailingImportant: string;
}

export const spacingRel: Transform = {
  id: "spacing-rel",
  title: "Migrate rel<N> spacing utilities to --spacing-relative",
  kind: "rewrite",
  sinceVersion: "2.0.0",
  match: (file) => CSS_LIKE.test(file) || MARKUP_LIKE.test(file),
  run(input, ctx) {
    const notes: string[] = [];
    let output = input;
    if (CSS_LIKE.test(ctx.file) || STYLE_BLOCK_LIKE.test(ctx.file)) {
      const expanded = expandApply(output);
      output = expanded.output;
      notes.push(...expanded.notes);
    }
    if (MARKUP_LIKE.test(ctx.file)) {
      const rewritten = rewriteClassAttributes(output, ctx.file, toArbitrary);
      output = rewritten.output;
      notes.push(...rewritten.notes);
    }
    return { output, changed: output !== input, notes };
  },
};

function parseRelToken(token: string): RelToken | null {
  const match = REL_TOKEN.exec(token);
  if (!match) return null;
  const [, variants, leadingImportant, sign, utility, step, trailingImportant] =
    match;
  return {
    variants: variants ?? "",
    leadingImportant: leadingImportant ?? "",
    negative: sign === "-",
    utility: utility ?? "",
    step: step ?? "",
    trailingImportant: trailingImportant ?? "",
  };
}

/**
 * `@apply p-rel2` を宣言に展開する。variant 付きや宣言に落とせない utility は
 * arbitrary value 形式に書き換えて @apply に残し、notes で通知する。
 */
function expandApply(input: string): { output: string; notes: string[] } {
  const notes: string[] = [];
  const eol = /\r\n/.test(input) ? "\r\n" : "\n";
  const output = input.replace(
    APPLY_RULE,
    (match: string, indent: string, body: string, offset: number) => {
      const kept: string[] = [];
      const declarations: string[] = [];
      let touched = false;
      for (const token of body.split(/\s+/).filter(Boolean)) {
        const rel = parseRelToken(token);
        if (!rel) {
          kept.push(token);
          continue;
        }
        touched = true;
        const properties =
          rel.variants === "" ? PROPERTIES[rel.utility] : undefined;
        if (!properties) {
          const rewritten = toArbitrary(token);
          notes.push(
            `line ${lineOf(input, offset)}: kept "${token}" as "${rewritten}" in @apply — variants and unmapped utilities cannot become a declaration`,
          );
          kept.push(rewritten);
          continue;
        }
        const important =
          rel.leadingImportant || rel.trailingImportant ? " !important" : "";
        for (const property of properties) {
          declarations.push(
            `${indent}${property}: ${declarationValue(rel)}${important};`,
          );
        }
      }
      if (!touched) return match;
      const lines =
        kept.length > 0
          ? [`${indent}@apply ${kept.join(" ")};`, ...declarations]
          : declarations;
      return lines.join(eol);
    },
  );
  return { output, notes };
}

/** `p-rel2` → `p-[calc(var(--spacing-relative)*2)]` */
function toArbitrary(token: string): string {
  const rel = parseRelToken(token);
  if (!rel) return token;
  const value =
    rel.step === "px"
      ? "px"
      : Number(rel.step) === 0
        ? "0"
        : `[calc(var(--spacing-relative)*${rel.step})]`;
  const sign = rel.negative ? "-" : "";
  return `${rel.variants}${rel.leadingImportant}${sign}${rel.utility}-${value}${rel.trailingImportant}`;
}

/** `rel2` → `calc(var(--spacing-relative) * 2)` */
function declarationValue(rel: RelToken): string {
  const sign = rel.negative ? "-" : "";
  if (rel.step === "px") return `${sign}1px`;
  if (Number(rel.step) === 0) return "0px";
  return `calc(var(--spacing-relative) * ${sign}${rel.step})`;
}

function lineOf(input: string, offset: number): number {
  return input.slice(0, offset).split(/\r?\n/).length;
}
