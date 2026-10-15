import { twJoin, twMerge } from "tailwind-merge";

export function Item({ active }: { active: boolean }) {
  const base = twJoin("card", active && "input");
  return <div className={twMerge(base, "badge")} />;
}
