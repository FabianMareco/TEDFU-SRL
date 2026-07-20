import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.3em] text-tedfu-orange">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl",
          light ? "text-tedfu-white" : "text-tedfu-dark",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-tedfu-white/75" : "text-tedfu-dark/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
