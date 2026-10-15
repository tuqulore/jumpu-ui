import { Lang } from "@ast-grep/napi";
import { extname } from "node:path";

export function detectLang(file: string): Lang | null {
  const ext = extname(file).toLowerCase();
  switch (ext) {
    case ".html":
    case ".htm":
    case ".vue":
    case ".astro":
      return Lang.Html;
    case ".jsx":
    case ".tsx":
      return Lang.Tsx;
    case ".css":
      return Lang.Css;
    default:
      return null;
  }
}

export const DEFAULT_GLOB = "**/*.{html,htm,vue,jsx,tsx,astro,css}";
