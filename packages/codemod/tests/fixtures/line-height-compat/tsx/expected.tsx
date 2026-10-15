import { cn } from "@/lib";

export function Item({ active }: { active: boolean }) {
  return (
    <>
      <span className="jumpu-badge leading-[inherit]">New</span>
      <button className={cn("jumpu-icon-button [&_[role=tooltip]]:leading-tight", active && "text-primary-700")}>
        <span role="tooltip">Edit</span>
      </button>
    </>
  );
}
