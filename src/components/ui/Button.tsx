import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "accent" | "project" | "ghost" | "inverse";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  download?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[hsl(var(--navy))] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[hsl(var(--navy-soft))]",
  secondary:
    "border border-[hsl(var(--line-strong))] bg-white text-[hsl(var(--foreground))] hover:-translate-y-0.5 hover:border-[hsl(var(--navy))]",
  accent:
    "bg-[hsl(var(--orange))] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[hsl(var(--red))]",
  project:
    "border border-[hsl(var(--red))] bg-white text-[hsl(var(--red))] shadow-soft hover:-translate-y-0.5 hover:bg-[hsl(var(--red))] hover:text-white",
  ghost:
    "border border-transparent bg-transparent text-[hsl(var(--foreground))] hover:-translate-y-0.5 hover:bg-slate-100",
  inverse:
    "border border-white/[0.15] bg-white/10 text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.14]"
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm"
};

const disabledStyles =
  "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400 shadow-none hover:translate-y-0 hover:border-slate-200 hover:bg-slate-100";

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
  disabled = false,
  onClick,
  download = false
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium tracking-[0.01em] transition-all duration-200",
    sizeStyles[size],
    disabled ? disabledStyles : variantStyles[variant],
    className
  );

  if (!href || disabled) {
    return (
      <span aria-disabled="true" className={classes}>
        {children}
      </span>
    );
  }

  if (download || external || href.startsWith("http") || href.startsWith("mailto:")) {
    const shouldOpenNewTab = (external || href.startsWith("http")) && !download;

    return (
      <a
        className={classes}
        download={download}
        href={href}
        onClick={onClick}
        rel={shouldOpenNewTab ? "noreferrer" : undefined}
        target={shouldOpenNewTab ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
