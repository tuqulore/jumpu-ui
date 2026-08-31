import { cn } from "@/lib";

export function Card({ active }: { active: boolean }) {
  return (
    <div className="p-[calc(var(--spacing-relative)*2)]">
      <span className={cn("gap-[calc(var(--spacing-relative)*1)]", active && "-mt-[calc(var(--spacing-relative)*2)]")}>New</span>
    </div>
  );
}
