import { Lang, parse, type Edit, type SgNode } from "@ast-grep/napi";
import type { Transform } from "../../context.ts";
import { getClassMap, type ClassMap } from "../../utils/class-map.ts";
import { detectLang } from "../../utils/lang.ts";

const HTML_LIKE = /\.(?:html?|astro|vue)$/i;
const JSX_LIKE = /\.(?:jsx|tsx)$/i;
const CSS_LIKE = /\.css$/i;

export const classPrefix: Transform = {
  id: "v1-to-v2/class-prefix",
  title: 'Prefix bare component class names with "jumpu-"',
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
    const lang = detectLang(ctx.file);
    if (!lang) return { output: input, changed: false, notes: [] };
    return lang === Lang.Tsx ? rewriteTsx(input, map) : rewriteHtml(input, map);
  },
};

function rewriteHtml(input: string, map: ClassMap) {
  const root = parse(Lang.Html, input).root();
  const edits: Edit[] = [];
  for (const attr of root.findAll({ rule: { kind: "attribute" } })) {
    const nameNode = attr.children().find((c) => c.kind() === "attribute_name");
    if (nameNode?.text() !== "class") continue;
    const quoted = attr
      .children()
      .find((c) => c.kind() === "quoted_attribute_value");
    const valueNode = quoted
      ?.children()
      .find((c) => c.kind() === "attribute_value");
    if (!valueNode) continue;
    const before = valueNode.text();
    const after = rewriteClassString(before, map);
    if (after !== before) edits.push(valueNode.replace(after));
  }
  const output = root.commitEdits(edits);
  return { output, changed: output !== input, notes: [] };
}

function rewriteTsx(input: string, map: ClassMap) {
  const root = parse(Lang.Tsx, input).root();
  const edits: Edit[] = [];
  const notes: string[] = [];

  for (const attr of root.findAll({ rule: { kind: "jsx_attribute" } })) {
    const nameNode = attr
      .children()
      .find((c) => c.kind() === "property_identifier");
    if (nameNode?.text() !== "className") continue;
    for (const child of attr.children()) {
      if (child.kind() === "string") {
        rewriteStringLiteral(child, map, edits);
      } else if (child.kind() === "jsx_expression") {
        for (const gc of child.children()) {
          if (gc.kind() === "string") rewriteStringLiteral(gc, map, edits);
        }
      }
    }
  }

  for (const fn of ["cn", "clsx", "classnames"]) {
    for (const call of root.findAll(`${fn}($$$ARGS)`)) {
      const args = call.getMultipleMatches("ARGS");
      for (const arg of args) {
        const kind = arg.kind();
        if (kind === "string") {
          rewriteStringLiteral(arg, map, edits);
        } else if (
          kind === "template_string" ||
          kind === "identifier" ||
          kind === "spread_element" ||
          kind === "object" ||
          kind === "member_expression"
        ) {
          notes.push(
            `dynamic classname argument (${kind}) at line ${arg.range().start.line + 1} needs manual review`,
          );
        }
      }
    }
  }

  const output = root.commitEdits(edits);
  return { output, changed: output !== input, notes };
}

function rewriteStringLiteral(
  node: SgNode,
  map: ClassMap,
  edits: Edit[],
): void {
  const fragment = node
    .children()
    .find((c) => c.kind() === "string_fragment");
  if (fragment) {
    const before = fragment.text();
    const after = rewriteClassString(before, map);
    if (after !== before) edits.push(fragment.replace(after));
    return;
  }
  const raw = node.text();
  const quote = raw[0];
  if (quote !== '"' && quote !== "'") return;
  const inner = raw.slice(1, -1);
  const rewritten = rewriteClassString(inner, map);
  if (rewritten === inner) return;
  edits.push(node.replace(`${quote}${rewritten}${quote}`));
}

function rewriteClassString(value: string, map: ClassMap): string {
  return value
    .split(/(\s+)/)
    .map((tok) => {
      if (!tok || !tok.trim()) return tok;
      if (tok.includes(":")) return tok;
      return map.bare.has(tok) ? map.toPrefixed(tok) : tok;
    })
    .join("");
}

function rewriteCss(input: string, map: ClassMap) {
  let changed = false;
  const output = input.replace(/\.([a-z][a-z0-9-]*)/g, (match, name) => {
    if (!map.bare.has(name)) return match;
    changed = true;
    return `.${map.toPrefixed(name)}`;
  });
  return { output, changed, notes: [] };
}
