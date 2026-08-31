import { readdir, readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);

const PREFIX = "jumpu-";

export interface ClassMap {
  bare: Set<string>;
  prefixed: Set<string>;
  toPrefixed: (name: string) => string;
}

export interface ClassMapOptions {
  from?: string;
  extra?: string[];
}

export async function getClassMap(
  options: ClassMapOptions = {},
): Promise<ClassMap> {
  const componentsDir = options.from ?? resolveComponentsDir();
  const entries = await readdir(componentsDir);
  const bare = new Set<string>();
  const prefixed = new Set<string>();
  for (const entry of entries) {
    if (!entry.endsWith(".css")) continue;
    const content = await readFile(join(componentsDir, entry), "utf8");
    for (const match of content.matchAll(/\.jumpu-([a-z][a-z0-9-]*)/g)) {
      const bareName = match[1]!;
      bare.add(bareName);
      prefixed.add(`${PREFIX}${bareName}`);
    }
  }
  for (const name of options.extra ?? []) {
    bare.add(name);
    prefixed.add(`${PREFIX}${name}`);
  }
  return {
    bare,
    prefixed,
    toPrefixed(name: string): string {
      if (prefixed.has(name)) return name;
      return bare.has(name) ? `${PREFIX}${name}` : name;
    },
  };
}

function resolveComponentsDir(): string {
  const pkgPath = require.resolve("@jumpu-ui/tailwindcss/package.json");
  return join(dirname(pkgPath), "src", "components");
}
