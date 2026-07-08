import { Command } from "commander";
import pc from "picocolors";
import type { RunOptions } from "./context.ts";
import { TRANSFORMS } from "./registry.ts";
import { runUpgrade, type UpgradeOptions } from "./upgrade.ts";

const program = new Command();

program
  .name("jumpu-ui-codemod")
  .description("Codemods for @jumpu-ui/tailwindcss.")
  .option("--dry-run", "Print a summary of changes without writing", false)
  .option("-v, --verbose", "Print detailed notes and per-file logs", false)
  .option("--no-git-check", "Skip the git working tree cleanliness check")
  .option("--include <globs>", "Comma-separated glob patterns for target files")
  .option(
    "--include-css",
    "Apply class-prefix to CSS files as well (opt-in, may cause false positives)",
    false,
  )
  .option(
    "--extra-class <names>",
    "Comma-separated bare class names to treat as renamable",
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
  .option(
    "--only <ids>",
    "Comma-separated transform ids to run (skips version range detection)",
  )
  .option("--skip <ids>", "Comma-separated transform ids to skip")
  .option(
    "--adopt <ids>",
    "Comma-separated opt-in adopt transform ids to apply",
  )
  .action(
    async (
      paths: string[],
      cmdOptions: {
        from?: string;
        only?: string;
        skip?: string;
        adopt?: string;
      },
    ) => {
      const options: UpgradeOptions = {
        ...toRunOptions(),
        from: cmdOptions.from,
        only: splitCsv(cmdOptions.only),
        skip: splitCsv(cmdOptions.skip),
        adopt: splitCsv(cmdOptions.adopt),
      };
      await runUpgrade(paths, options);
    },
  );

interface GlobalOpts {
  dryRun: boolean;
  verbose: boolean;
  gitCheck: boolean;
  include?: string;
  includeCss: boolean;
  extraClass?: string;
}

function toRunOptions(): RunOptions {
  const g = program.opts<GlobalOpts>();
  return {
    dryRun: g.dryRun,
    verbose: g.verbose,
    gitCheck: g.gitCheck,
    include: splitCsv(g.include),
    includeCss: g.includeCss,
    extraClass: splitCsv(g.extraClass),
  };
}

function splitCsv(value: string | undefined): string[] | undefined {
  if (!value) return undefined;
  const items = value
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  return items.length > 0 ? items : undefined;
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
