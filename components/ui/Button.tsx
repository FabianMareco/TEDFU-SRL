import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-tedfu-orange text-tedfu-dark hover:bg-tedfu-orange-dark focus-visible:outline-tedfu-orange",
  secondary:
    "bg-tedfu-white text-tedfu-dark hover:bg-tedfu-gray focus-visible:outline-tedfu-white",
  outline:
    "border-2 border-tedfu-white text-tedfu-white hover:bg-tedfu-white hover:text-tedfu-dark focus-visible:outline-tedfu-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

type ButtonStyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsLink = ButtonStyleProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = ButtonStyleProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return <Link href={href} className={classes} {...anchorProps} />;
  }

  return <button className={classes} {...(rest as ButtonAsButton)} />;
}
