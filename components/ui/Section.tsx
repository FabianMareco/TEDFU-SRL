import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionBackground = "white" | "gray" | "dark";

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-tedfu-white text-tedfu-dark",
  gray: "bg-tedfu-gray text-tedfu-dark",
  dark: "bg-tedfu-dark text-tedfu-white",
};

export function Section({
  id,
  background = "white",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  background?: SectionBackground;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", backgroundStyles[background], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
