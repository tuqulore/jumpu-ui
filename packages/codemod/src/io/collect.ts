import { globby } from "globby";
import { stat } from "node:fs/promises";
import { resolve } from "node:path";
import { DEFAULT_GLOB } from "../utils/lang.ts";

export async function collectFiles(
  paths: string[],
  include?: string[],
): Promise<string[]> {
  const roots = paths.length > 0 ? paths : ["."];
  const patterns = include && include.length > 0 ? include : [DEFAULT_GLOB];
  const results = new Set<string>();
  for (const root of roots) {
    const resolved = resolve(root);
    const info = await stat(resolved).catch(() => null);
    if (info?.isFile()) {
      results.add(resolved);
      continue;
    }
    const files = await globby(patterns, {
      cwd: resolved,
      gitignore: true,
      absolute: true,
      dot: false,
    });
    for (const f of files) results.add(f);
  }
  return [...results];
}
