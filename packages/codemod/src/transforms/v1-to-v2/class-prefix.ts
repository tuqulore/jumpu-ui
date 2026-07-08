import { Lang, parse, type Edit, type SgNode } from "@ast-grep/napi";
import type { Transform } from "../../context.ts";
import { getClassMap, type ClassMap } from "../../utils/class-map.ts";
import { detectLang } from "../../utils/lang.ts";

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
    const lang = detectLang(ctx.file);
    if (!lang) return { output: input, changed: false, notes: [] };
    return lang === Lang.Tsx ? rewriteTsx(input, map) : rewriteHtml(input, map);
  },
};

function rewriteHtml(input: string, map: ClassMap) {
  const root = parse(Lang.Html, input).root();
  const edits: Edit[] = [];
  const notes: string[] = [];
  for (const attr of root.findAll({ rule: { kind: "attribute" } })) {
    const nameNode = attr.children().find((c) => c.kind() === "attribute_name");
    const attrName = nameNode?.text();
    if (attrName === "class") {
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
      continue;
    }
    // Vue の :class / v-bind:class は動的バインドで書き換え対象外
    // (オブジェクト構文や式評価が絡むため機械化困難)
    if (attrName === ":class" || attrName === "v-bind:class") {
      const line = attr.range().start.line + 1;
      notes.push(`dynamic ${attrName} at line ${line} needs manual review`);
    }
  }
  const output = root.commitEdits(edits);
  return { output, changed: output !== input, notes };
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
          const gcKind = gc.kind();
          if (gcKind === "string") {
            rewriteStringLiteral(gc, map, edits);
          } else if (gcKind === "call_expression") {
            // cn / clsx / classnames の call は下の loop で個別に処理される。
            // それ以外の call は自動書き換えできないので notes に残す。
            const callee = gc.child(0);
            const name = callee?.text();
            if (name !== "cn" && name !== "clsx" && name !== "classnames") {
              notes.push(
                `dynamic className call ${name ?? "<expr>"}(...) at line ${gc.range().start.line + 1} needs manual review`,
              );
            }
          } else if (gcKind !== "{" && gcKind !== "}") {
            notes.push(
              `dynamic className expression (${gcKind}) at line ${gc.range().start.line + 1} needs manual review`,
            );
          }
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
  const fragment = node.children().find((c) => c.kind() === "string_fragment");
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
