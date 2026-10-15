import { cn } from "@/lib";

export function Actions({ busy }: { busy: boolean }) {
  return (
    <>
      <button className="jumpu-button inline-block">Save</button>
      <button className={cn("jumpu-text-button inline-block", busy && "opacity-50")}>
        Cancel
      </button>
    </>
  );
}
