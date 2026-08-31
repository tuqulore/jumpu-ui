import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import pc from "picocolors";
import type { RunOptions, Transform } from "./context.ts";
import { collectFiles } from "./io/collect.ts";
import { TRANSFORMS } from "./registry.ts";
import { runTransforms } from "./runner.ts";

const require = createRequire(import.meta.url);

export interface UpgradeOptions extends RunOptions {
  from?: string;
  only?: string[];
  skip?: string[];
  adopt?: string[];
}

export async function runUpgrade(
  paths: string[],
  options: UpgradeOptions,
): Promise<void> {
  if (options.only && options.only.length > 0) {
    await runOnly(paths, options.only, options);
    return;
  }

  const cwd = paths[0] ?? ".";
  const from =
    options.from ??
    (await detectInstalledVersion(cwd)) ??
    (await detectFromCdnUrls(paths, options.include));
  if (!from) {
    console.error(
      pc.red(
        "Could not detect the installed @jumpu-ui/tailwindcss version.\n" +
          "  - Install it in the target project (npm i @jumpu-ui/tailwindcss), or\n" +
          "  - Pass --from <version> to specify the starting version explicitly.",
      ),
    );
    process.exit(1);
  }

  const to = await getTargetVersion();
  console.log(pc.dim(`Detected @jumpu-ui/tailwindcss ${from} → ${to}`));

  if (compareVersion(from, to) >= 0) {
    console.log(pc.dim("Already at latest. Nothing to upgrade."));
    return;
  }

  const skipSet = new Set(options.skip ?? []);
  const adoptSet = new Set(options.adopt ?? []);

  const applicable = TRANSFORMS.filter((t) => {
    if (compareVersion(t.sinceVersion, from) <= 0) return false;
    if (compareVersion(t.sinceVersion, to) > 0) return false;
    const optIn = t.defaultAutoApply === false;
    if (skipSet.has(t.id)) {
      if (t.mandatory) {
        console.warn(
          pc.yellow(
            `Warning: cannot skip "${t.id}" — it is mandatory. Ignoring --skip for this transform.`,
          ),
        );
      } else {
        return false;
      }
    }
    if (optIn && !adoptSet.has(t.id)) return false;
    return true;
  });

  if (applicable.length === 0) {
    console.log(pc.dim("No transforms match the detected version range."));
    return;
  }

  await runTransforms(applicable, paths, options);
  reportOptIn(from, to);
}

async function runOnly(
  paths: string[],
  ids: string[],
  options: RunOptions,
): Promise<void> {
  const targets: Transform[] = [];
  const unknown: string[] = [];
  for (const id of ids) {
    const t = TRANSFORMS.find((x) => x.id === id);
    if (t) targets.push(t);
    else unknown.push(id);
  }
  if (unknown.length > 0) {
    console.error(
      pc.red(
        `Unknown transform id: ${unknown.join(", ")}\n` +
          `  Run "jumpu-ui-codemod list" to see available transforms.`,
      ),
    );
    process.exit(1);
  }
  await runTransforms(targets, paths, options);
}

async function detectInstalledVersion(cwd: string): Promise<string | null> {
  try {
    const pkgPath = require.resolve("@jumpu-ui/tailwindcss/package.json", {
      paths: [resolve(cwd)],
    });
    const pkg = JSON.parse(await readFile(pkgPath, "utf8")) as {
      version?: string;
    };
    return pkg.version ?? null;
  } catch {
    return null;
  }
}

async function detectFromCdnUrls(
  paths: string[],
  include?: string[],
): Promise<string | null> {
  const files = await collectFiles(paths, include);
  const pattern = /esm\.sh\/@jumpu-ui\/tailwindcss@([\d.]+(?:-[\w.]+)?)/;
  for (const f of files) {
    try {
      const content = await readFile(f, "utf8");
      const match = pattern.exec(content);
      if (match) return match[1] ?? null;
    } catch {
      /* skip unreadable file */
    }
  }
  return null;
}

async function getTargetVersion(): Promise<string> {
  const pkgUrl = new URL("../package.json", import.meta.url);
  const pkg = JSON.parse(await readFile(pkgUrl, "utf8")) as { version: string };
  return pkg.version;
}

function reportOptIn(from: string, to: string): void {
  const optIns = TRANSFORMS.filter(
    (t) =>
      t.defaultAutoApply === false &&
      compareVersion(t.sinceVersion, from) > 0 &&
      compareVersion(t.sinceVersion, to) <= 0,
  );
  if (optIns.length === 0) return;
  console.log(pc.dim(`\nOpt-in transforms available (use --adopt <id>):`));
  for (const t of optIns) {
    console.log(
      `  ${pc.cyan(t.id.padEnd(32))} ${pc.dim(`since ${t.sinceVersion}`)} ${t.title}`,
    );
  }
}

export function compareVersion(a: string, b: string): number {
  const parse = (v: string): [number, number, number] => {
    const clean = v.split("-")[0] ?? v;
    const parts = clean.split(".").map((n) => Number(n) || 0);
    return [parts[0] ?? 0, parts[1] ?? 0, parts[2] ?? 0];
  };
  const [a1, a2, a3] = parse(a);
  const [b1, b2, b3] = parse(b);
  if (a1 !== b1) return a1 - b1;
  if (a2 !== b2) return a2 - b2;
  return a3 - b3;
}

export function applicableTransforms(
  from: string,
  to: string,
  options: { only?: string[]; skip?: string[]; adopt?: string[] } = {},
): Transform[] {
  if (options.only && options.only.length > 0) {
    const onlySet = new Set(options.only);
    return TRANSFORMS.filter((t) => onlySet.has(t.id));
  }
  const skipSet = new Set(options.skip ?? []);
  const adoptSet = new Set(options.adopt ?? []);
  return TRANSFORMS.filter((t) => {
    if (compareVersion(t.sinceVersion, from) <= 0) return false;
    if (compareVersion(t.sinceVersion, to) > 0) return false;
    const optIn = t.defaultAutoApply === false;
    if (optIn && !adoptSet.has(t.id)) return false;
    if (!optIn && skipSet.has(t.id) && !t.mandatory) return false;
    return true;
  });
}
