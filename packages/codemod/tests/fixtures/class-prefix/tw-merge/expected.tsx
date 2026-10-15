import { twJoin, twMerge } from "tailwind-merge";

export function Item({ active }: { active: boolean }) {
  const base = twJoin("jumpu-card", active && "jumpu-input");
  return <div className={twMerge(base, "jumpu-badge")} />;
}
