import { cn } from "@/lib";

export function Card({ active }: { active: boolean }) {
  return (
    <div className="p-rel2">
      <span className={cn("gap-rel1", active && "-mt-rel2")}>New</span>
    </div>
  );
}
