import { readFile, writeFile } from "node:fs/promises";
import pc from "picocolors";
import type { RunOptions, Transform } from "./context.ts";
import { collectFiles } from "./io/collect.ts";
import { isGitTreeClean } from "./io/git.ts";

interface Summary {
  changed: number;
  unchanged: number;
  skipped: number;
  transformHits: number;
  notes: string[];
}

export async function runTransforms(
  transforms: Transform[],
  paths: string[],
  options: RunOptions,
): Promise<void> {
  if (options.gitCheck) {
    const cwd = paths[0] ?? ".";
    if (!(await isGitTreeClean(cwd))) {
      console.error(
        pc.red(
          "Working tree has uncommitted changes. Commit or stash them, or pass --no-git-check.",
        ),
      );
      process.exit(1);
    }
  }

  const files = await collectFiles(paths, options.include);
  if (files.length === 0) {
    console.log(pc.dim("No files matched."));
    return;
  }

  const summary: Summary = {
    changed: 0,
    unchanged: 0,
    skipped: 0,
    transformHits: 0,
    notes: [],
  };

  for (const file of files) {
    const applicable = transforms.filter((t) => t.match(file));
    if (applicable.length === 0) {
      summary.skipped += 1;
      continue;
    }
    const before = await readFile(file, "utf8");
    let current = before;
    for (const t of applicable) {
      const ctx = {
        file,
        options,
        log: (m: string) => summary.notes.push(`${file} [${t.id}]: ${m}`),
      };
      const result = await t.run(current, ctx);
      if (result.changed) summary.transformHits += 1;
      for (const n of result.notes) {
        summary.notes.push(`${file} [${t.id}]: ${n}`);
      }
      current = result.output;
    }
    if (current !== before) {
      if (!options.dryRun) await writeFile(file, current);
      summary.changed += 1;
      if (options.verbose) {
        console.log(
          pc.green(`${options.dryRun ? "would change" : "changed"} ${file}`),
        );
      }
    } else {
      summary.unchanged += 1;
    }
  }

  const verb = options.dryRun ? "Would change" : "Changed";
  console.log(
    `${verb} ${summary.changed} files (${summary.transformHits} transforms), unchanged ${summary.unchanged}, skipped ${summary.skipped}.`,
  );
  if (summary.notes.length > 0) {
    if (options.verbose) {
      console.log(pc.dim("\nNotes:"));
      for (const n of summary.notes) console.log(`  ${n}`);
    } else {
      console.log(
        pc.dim(`  ${summary.notes.length} notes (use --verbose to see).`),
      );
    }
  }
}
