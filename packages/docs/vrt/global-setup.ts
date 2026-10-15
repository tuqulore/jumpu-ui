import type { FullConfig } from "@playwright/test";

// NOTE: baseline は CI を正とし「VRT update」ワークフローでのみ書き込む。ローカルは差分の確認専用
// argv ではなく解決後の値で判定する。-uall や -xu のような短縮形も CLI が受け付けるため
export default function globalSetup(config: FullConfig) {
  if (!process.env.CI && config.updateSnapshots !== "none") {
    throw new Error(
      "baseline はローカルで更新できません。「VRT update」ワークフローを実行してください",
    );
  }
}
