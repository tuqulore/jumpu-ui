import { cn } from "@/lib";

export function Item({ active }: { active: boolean }) {
  return (
    <div
      className={cn("jumpu-card", active && "underline", `template-${active}`)}
    />
  );
}
