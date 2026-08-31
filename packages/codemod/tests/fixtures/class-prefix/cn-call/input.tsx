import { cn } from "@/lib";

export function Item({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        "card",
        active && "input",
        active ? "badge" : "",
        `template-${active}`,
      )}
    />
  );
}
