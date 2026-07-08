import { Command } from "commander";
import pc from "picocolors";
import { registry, transformIds } from "./registry.ts";
import { runTransforms } from "./runner.ts";
import type { RunOptions } from "./context.ts";

const program = new Command();

program
  .name("jumpu-ui-codemod")
  .description(
    "Codemods for migrating between @jumpu-ui/tailwindcss major versions.",
  )
  .option("--dry-run", "Print a summary of changes without writing", false)
  .option("-v, --verbose", "Print detailed notes and per-file logs", false)
  .option("--no-git-check", "Skip the git working tree cleanliness check")
  .option(
    "--include <glob...>",
    "Explicit glob patterns for target files (repeatable)",
  )
  .option(
    "--include-css",
    "Apply class-prefix to CSS files as well (opt-in, may cause false positives)",
    false,
  )
  .option(
    "--extra-class <name...>",
    "Additional bare class names to treat as renamable (space-separated or repeatable)",
  );

for (const key of Object.keys(registry)) {
  program
    .command(`${key} [paths...]`)
    .description(describeCommand(key))
    .action(async (paths: string[]) => {
      const options = program.opts<RunOptions>();
      await runTransforms(registry[key]!, paths, options);
    });
}

program
  .command("list")
  .description("List available transforms")
  .action(() => {
    console.log(pc.bold("Available transforms:"));
    for (const id of transformIds()) {
      console.log(`  ${id}`);
    }
  });

program.parseAsync(process.argv).catch((err: unknown) => {
  console.error(pc.red(err instanceof Error ? err.message : String(err)));
  process.exit(1);
});

function describeCommand(key: string): string {
  const transforms = registry[key] ?? [];
  if (transforms.length === 1) return transforms[0]!.title;
  const titles = transforms.map((t) => t.title).join(" → ");
  return `Run ${transforms.length} transforms: ${titles}`;
}
