import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { collectFiles } from "../src/io/collect.ts";

async function makeTmp(): Promise<string> {
  return mkdtemp(join(tmpdir(), "collect-spec-"));
}

describe("collectFiles", () => {
  it("returns matching files under a directory root", async () => {
    const dir = await makeTmp();
    await writeFile(join(dir, "a.html"), "<div />");
    await mkdir(join(dir, "sub"));
    await writeFile(join(dir, "sub", "b.css"), "");
    await writeFile(join(dir, "unrelated.md"), "");
    const files = await collectFiles([dir]);
    expect(files).toContain(join(dir, "a.html"));
    expect(files).toContain(join(dir, "sub", "b.css"));
    expect(files).not.toContain(join(dir, "unrelated.md"));
  });

  it("returns the file itself when a file path is passed as a root", async () => {
    const dir = await makeTmp();
    const file = join(dir, "only.html");
    await writeFile(file, "<div />");
    const files = await collectFiles([file]);
    expect(files).toEqual([file]);
  });

  it("mixes file and directory roots without duplicates", async () => {
    const dir = await makeTmp();
    const dirA = join(dir, "a");
    await mkdir(dirA);
    const nested = join(dirA, "nested.html");
    await writeFile(nested, "");
    const singleFile = join(dir, "b.html");
    await writeFile(singleFile, "");
    const files = await collectFiles([dirA, singleFile, singleFile]);
    expect(files).toContain(nested);
    expect(files).toContain(singleFile);
    expect(files.filter((f) => f === singleFile).length).toBe(1);
  });
});
