import { cn } from "@/lib/cn";

export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-bold tracking-tight text-xl leading-none",
        variant === "light" ? "text-tedfu-white" : "text-tedfu-dark",
        className,
      )}
    >
      TEDFU
      <span className="text-tedfu-orange">.</span>
      <span className="block text-[0.6rem] font-medium tracking-[0.2em] uppercase opacity-70">
        S.R.L.
      </span>
    </span>
  );
}
