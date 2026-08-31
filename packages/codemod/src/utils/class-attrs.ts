import { Lang, parse, type Edit, type SgNode } from "@ast-grep/napi";
import { detectLang } from "./lang.ts";

export interface ClassRewriteResult {
  output: string;
  changed: boolean;
  notes: string[];
}

/** 空白区切りの class トークン 1 個を受け取り、書き換え後のトークンを返す */
export type TokenMapper = (token: string) => string;

/** 可変長のクラス文字列を受ける既定のヘルパー関数 */
const DEFAULT_CLASS_FNS = ["cn", "clsx", "classnames", "twMerge", "twJoin"];

/**
 * HTML 系の class 属性と JSX の className / クラスヘルパー関数の引数を
 * トークン単位で書き換える。動的バインド (Vue の :class、className の式)
 * は書き換えず notes で通知する。extraFns で対象の関数名を追加できる。
 */
export function rewriteClassAttributes(
  input: string,
  file: string,
  mapToken: TokenMapper,
  extraFns: string[] = [],
): ClassRewriteResult {
  const lang = detectLang(file);
  const classFns = [...new Set([...DEFAULT_CLASS_FNS, ...extraFns])];
  if (lang === Lang.Tsx) return rewriteTsx(input, mapToken, classFns);
  if (lang === Lang.Html) return rewriteHtml(input, mapToken);
  return { output: input, changed: false, notes: [] };
}

function rewriteHtml(input: string, mapToken: TokenMapper): ClassRewriteResult {
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
      const after = rewriteClassString(before, mapToken);
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

function rewriteTsx(
  input: string,
  mapToken: TokenMapper,
  classFns: string[],
): ClassRewriteResult {
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
        rewriteStringLiteral(child, mapToken, edits);
      } else if (child.kind() === "jsx_expression") {
        for (const gc of child.children()) {
          const gcKind = gc.kind();
          if (gcKind === "string") {
            rewriteStringLiteral(gc, mapToken, edits);
          } else if (gcKind === "call_expression") {
            // クラスヘルパー関数の call は下の loop で個別に処理される。
            // それ以外の call は自動書き換えできないので notes に残す。
            const callee = gc.child(0);
            const name = callee?.text();
            if (!name || !classFns.includes(name)) {
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

  for (const fn of classFns) {
    for (const call of root.findAll(`${fn}($$$ARGS)`)) {
      const args = call.getMultipleMatches("ARGS");
      for (const arg of args) {
        const kind = arg.kind();
        // $$$ARGS は引数の区切り文字も返す
        if (kind === ",") continue;
        if (kind === "string") {
          rewriteStringLiteral(arg, mapToken, edits);
        } else if (
          kind === "binary_expression" ||
          kind === "ternary_expression"
        ) {
          // cond && "card" / cond ? "card" : "" の分岐先は静的な文字列なので書き換える
          for (const str of arg.findAll({ rule: { kind: "string" } })) {
            rewriteStringLiteral(str, mapToken, edits);
          }
        } else {
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
  mapToken: TokenMapper,
  edits: Edit[],
): void {
  const fragment = node.children().find((c) => c.kind() === "string_fragment");
  if (fragment) {
    const before = fragment.text();
    const after = rewriteClassString(before, mapToken);
    if (after !== before) edits.push(fragment.replace(after));
    return;
  }
  const raw = node.text();
  const quote = raw[0];
  if (quote !== '"' && quote !== "'") return;
  const inner = raw.slice(1, -1);
  const rewritten = rewriteClassString(inner, mapToken);
  if (rewritten === inner) return;
  edits.push(node.replace(`${quote}${rewritten}${quote}`));
}

function rewriteClassString(value: string, mapToken: TokenMapper): string {
  return value
    .split(/(\s+)/)
    .map((tok) => (tok && tok.trim() ? mapToken(tok) : tok))
    .join("");
}
