import { cn } from "@/lib";

export function Item({ active }: { active: boolean }) {
  return (
    <>
      <span className="jumpu-badge">New</span>
      <button className={cn("jumpu-icon-button", active && "text-primary-700")}>
        <span role="tooltip">Edit</span>
      </button>
    </>
  );
}
