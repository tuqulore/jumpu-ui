import { execFile } from "node:child_process";
import { resolve } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export async function isGitTreeClean(cwd: string): Promise<boolean> {
  try {
    const { stdout } = await execFileAsync("git", ["status", "--porcelain"], {
      cwd: resolve(cwd),
    });
    return stdout.trim().length === 0;
  } catch {
    // NOTE: git がない / 権限がない / git 管理外などの理由で判定できない場合は
    // 「クリーンでない」側に倒して bail する。ユーザーは --no-git-check で
    // 明示的に回避できる。
    return false;
  }
}
