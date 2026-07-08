import { Command } from "commander";
import pc from "picocolors";
import type { RunOptions } from "./context.ts";
import { TRANSFORMS } from "./registry.ts";
import { runTransforms } from "./runner.ts";
import { runUpgrade, type UpgradeOptions } from "./upgrade.ts";

const program = new Command();

program
  .name("jumpu-ui-codemod")
  .description("Codemods for @jumpu-ui/tailwindcss.")
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
    "Additional bare class names to treat as renamable",
  );

program
  .command("upgrade [paths...]")
  .description(
    "Detect the installed @jumpu-ui/tailwindcss version and apply every applicable transform up to latest.",
  )
  .option(
    "--from <version>",
    "Starting version (fallback when install detection fails)",
  )
  .option("--skip <id...>", "Skip specific transforms by id")
  .option(
    "--adopt <id...>",
    "Additionally apply opt-in adopt transforms by id",
  )
  .action(
    async (
      paths: string[],
      cmdOptions: {
        from?: string;
        skip?: string[];
        adopt?: string[];
      },
    ) => {
      const options: UpgradeOptions = {
        ...program.opts<RunOptions>(),
        from: cmdOptions.from,
        skip: cmdOptions.skip,
        adopt: cmdOptions.adopt,
      };
      await runUpgrade(paths, options);
    },
  );

for (const t of TRANSFORMS) {
  program
    .command(`${t.id} [paths...]`)
    .description(t.title)
    .action(async (paths: string[]) => {
      const options = program.opts<RunOptions>();
      await runTransforms([t], paths, options);
    });
}

program
  .command("list")
  .description("List available transforms")
  .action(() => {
    console.log(pc.bold("Available transforms:"));
    for (const t of TRANSFORMS) {
      const flags = t.defaultAutoApply === false ? pc.yellow(" (opt-in)") : "";
      console.log(
        `  ${pc.cyan(t.id.padEnd(32))} ${pc.dim(`since ${t.sinceVersion.padEnd(8)}`)} ${pc.dim(t.kind.padEnd(8))} ${t.title}${flags}`,
      );
    }
  });

program.parseAsync(process.argv).catch((err: unknown) => {
  console.error(pc.red(err instanceof Error ? err.message : String(err)));
  process.exit(1);
});
