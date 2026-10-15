# @jumpu-ui/codemod

> **⚠️ Experimental package**
>
> `@jumpu-ui/codemod` is experimental. Its CLI options and transform behavior may change without notice.
> It rewrites source files in place, so always run it on a clean VCS working tree and review the diff with `--dry-run` first.
> The correctness of the output is not guaranteed, and no liability is accepted for any damage caused by its use (per the warranty disclaimer of the MIT License).

`@jumpu-ui/codemod` is a command line codemod that automates migrations of `@jumpu-ui/tailwindcss`. Breaking changes are not limited to major releases — minor and patch releases may also change the structure of component classes — so the CLI is designed to always run every applicable transform from the starting version up to latest.

## Documentation

https://jumpu-ui.pages.dev/migration/codemod.html

## Installation

No installation required. Run it with `npx` from your project root:

```shell
npx @jumpu-ui/codemod upgrade
```

The starting version is detected from `node_modules/@jumpu-ui/tailwindcss/package.json`. To review the diff before anything is written, pass `--dry-run`:

```shell
npx @jumpu-ui/codemod upgrade --dry-run --verbose
```

## Commands

The CLI provides only two commands. To run a single transform, use `upgrade --only <id>`.

| Command              | Description                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| `upgrade [paths...]` | Detect the starting version and run every applicable transform in order |
| `list`               | List the available transforms (with their `kind` and `sinceVersion`)    |

## `upgrade` options

| Option             | Description                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `--from <version>` | Set the starting version explicitly (fallback when install detection fails)                     |
| `--only <ids>`     | Run only the given transforms, skipping the version range check. Comma-separated                |
| `--skip <ids>`     | Exclude the given transforms (semantically equivalent ones and `-compat` only). Comma-separated |
| `--adopt <ids>`    | Additionally apply opt-in adopt transforms. Comma-separated                                     |

### Available transforms

All of them can be passed to `--only`, `--skip` and `--adopt`. Run `npx @jumpu-ui/codemod list` to check them locally.

| id                            | since | kind    | Description                                                     |
| ----------------------------- | ----- | ------- | --------------------------------------------------------------- |
| `class-prefix`                | 2.0.0 | rewrite | Prefix bare component class names with `jumpu-`                 |
| `spacing-rel`                 | 2.0.0 | rewrite | Migrate `rel<N>` spacing utilities to `--spacing-relative`      |
| `drop-colors-import`          | 2.0.0 | rewrite | Drop `@import "@jumpu-ui/tailwindcss/colors";` (bundled in v2+) |
| `cdn-url`                     | 3.0.0 | rewrite | Append `/dist/style.css` to esm.sh CDN links                    |
| `explicit-tailwindcss-import` | 3.0.0 | rewrite | Insert `@import "tailwindcss";` before the `@jumpu-ui` import   |

## Global options

| Option                  | Description                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `--dry-run`             | Print a summary of the changes without writing them                                                                  |
| `-v, --verbose`         | Print detailed logs, including every `note` that needs manual follow-up                                              |
| `--no-git-check`        | Allow running against a dirty working tree                                                                           |
| `--include <globs>`     | Glob patterns for the target files. Comma-separated                                                                  |
| `--include-css`         | Apply `class-prefix` to CSS files as well (opt-in, off by default, may cause false positives)                        |
| `--extra-class <names>` | Additional bare class names to add to the class name map. Comma-separated                                            |
| `--class-fn <names>`    | Additional class helper functions (`cn`, `clsx`, `classnames`, `twMerge` and `twJoin` are built in). Comma-separated |

When no path is given, the current working directory is used. The default glob is `**/*.{html,htm,vue,jsx,tsx,astro,css}`, and `.gitignore` is respected.

## How breaking changes are classified

Every transform has one of two `kind` values.

- **rewrite** — rewrites the output
- **notice** — leaves the output as is and only reports the affected places as `notes` (for changes that are inherently hard to automate)

Depending on the nature of the breaking change, a transform is shipped in one of three shapes.

- **Single transform** — a semantically equivalent change with no side effects. Applied by default, and can be excluded with `--skip <id>`
- **compat + adopt pair** — a change of styles or default values, shipped as a pair: `-compat` (applied by default, keeps the old appearance with utilities) and `-adopt` (opt-in, strips what `-compat` added and moves to the new standard)
- **adopt only** — a structural change for which a compat path is impossible. Always applied, and cannot be excluded with `--skip`

## Recommended workflow

1. Commit or stash all of your changes
2. Review the diff and the `notes` with `npx @jumpu-ui/codemod upgrade --dry-run --verbose`
3. If everything looks fine, run the same command without `--dry-run`
4. Review `git diff`, then run your tests and build
5. If the summary reports "Opt-in transforms available", run it again with `--adopt <id>` as needed

## Supported breaking changes

See the [Migration guide](https://jumpu-ui.pages.dev/migration/) for details.

## Known limitations

- Vue object syntax such as `:class="{ input: cond }"` (not supported in the initial release; `--verbose` prints a warning for each occurrence)
- Tokens with variants in `@apply` (for example `hover:p-rel2`) and utilities that cannot be lowered to declarations (such as `space-y-*`) are left in `@apply` as arbitrary values (listed in the `notes` under `--verbose`)
- Template literals (`` `input ${x}` ``), variables and spreads in JSX. Only string literal arguments are rewritten
- Class strings inside object literals such as cva variants (out of scope even if you add the function name with `--class-fn`; reported in the `notes` under `--verbose`)
- CSS selectors you defined yourself, such as `.input` (CSS is out of scope by default to avoid false positives, and can be opted in with `--include-css`)

## Local development

How to run a local build as `jumpu-ui-codemod` from another project before publishing.

### Prerequisites

- `pnpm setup` has been run and the global bin directory (usually `~/.local/share/pnpm/bin`) is on your `PATH`
- The package has been built (`pnpm -F @jumpu-ui/codemod build`)

### Install

```shell
cd packages/codemod
pnpm add -g .
```

`jumpu-ui-codemod` is now available from any directory.

### Applying your changes

After editing the code, run `pnpm -F @jumpu-ui/codemod build` to rebuild `dist/cli.js`. The next run picks it up.

### Trying it out

From the root of any project that has `@jumpu-ui/tailwindcss` installed:

```shell
jumpu-ui-codemod upgrade --dry-run --verbose
```

The installed version is detected as the starting version. To try out rewrites, pass an explicit starting version such as `--from 2.0.0` to force the transforms in that range to run.

### Uninstall

```shell
pnpm remove -g @jumpu-ui/codemod
```

## License

MIT
