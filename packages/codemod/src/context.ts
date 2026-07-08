export interface RunOptions {
  dryRun: boolean;
  verbose: boolean;
  gitCheck: boolean;
  include?: string[];
  includeCss: boolean;
  extraClass?: string[];
}

export interface TransformCtx {
  file: string;
  options: RunOptions;
  log: (message: string) => void;
}

export interface Transform {
  id: string;
  title: string;
  kind: "rewrite" | "notice";
  sinceVersion: string;
  compatPair?: string;
  defaultAutoApply?: boolean;
  /**
   * true のとき、この transform は --skip で除外できない。
   * 主に adopt-only (構造変換で compat が原理的に提供できないもの) 用途。
   * 省略時は false (skippable)。
   */
  mandatory?: boolean;
  match: (file: string) => boolean;
  run: (
    input: string,
    ctx: TransformCtx,
  ) => Promise<TransformResult> | TransformResult;
}

export interface TransformResult {
  output: string;
  changed: boolean;
  notes: string[];
}
