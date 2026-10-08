import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.ts"],
  format: ["esm"],
  target: "node22",
  platform: "node",
  outDir: "dist",
  clean: true,
  splitting: false,
  sourcemap: false,
  banner: { js: "#!/usr/bin/env node" },
});
