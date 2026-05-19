import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  centered = false
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      <p
        className={cn(
          "text-xs font-medium uppercase tracking-[0.28em]",
          tone === "dark" ? "text-slate-300" : "text-[hsl(var(--muted))]"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl lg:text-[2.9rem]",
          tone === "dark" ? "text-white" : "text-[hsl(var(--foreground))]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7",
            tone === "dark" ? "text-slate-300" : "text-[hsl(var(--muted))]",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
