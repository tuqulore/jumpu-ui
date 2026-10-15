import { cn } from "@/lib";

export function Actions({ busy }: { busy: boolean }) {
  return (
    <>
      <button className="jumpu-button">Save</button>
      <button className={cn("jumpu-text-button", busy && "opacity-50")}>
        Cancel
      </button>
    </>
  );
}
