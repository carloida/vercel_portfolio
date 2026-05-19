import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "light" | "subtle" | "dark";
}

const toneStyles = {
  light: "bg-white text-[hsl(var(--foreground))] border-[hsl(var(--line))]",
  subtle: "bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] border-[hsl(var(--line))]",
  dark: "bg-[hsl(var(--navy))] text-white border-white/10"
};

export function Section({
  id,
  children,
  className,
  innerClassName,
  tone = "light"
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-t",
        toneStyles[tone],
        className
      )}
      id={id}
    >
      <div className={cn("mx-auto max-w-content px-6 py-20 sm:px-8 lg:px-10 lg:py-24", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
