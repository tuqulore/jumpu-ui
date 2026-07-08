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
