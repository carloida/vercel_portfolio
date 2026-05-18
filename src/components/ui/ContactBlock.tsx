import type { ContactLink } from "@/types/portfolio";

import { Button } from "@/components/ui/Button";

interface ContactBlockProps {
  item: ContactLink;
}

export function ContactBlock({ item }: ContactBlockProps) {
  const linkedValue = item.href ? (
    <a
      className="transition-colors hover:text-[hsl(var(--navy))]"
      download={item.download}
      href={item.href}
      rel={item.external ? "noreferrer" : undefined}
      target={item.external ? "_blank" : undefined}
    >
      {item.value}
    </a>
  ) : (
    item.value
  );

  return (
    <article className="rounded-[1.6rem] border border-[hsl(var(--line))] bg-white p-6 shadow-soft">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
        {item.label}
      </p>
      <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
        {linkedValue}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted))]">
        {item.description}
      </p>
      <div className="mt-5">
        <Button
          disabled={!item.href}
          download={item.download}
          external={item.external}
          href={item.href}
          variant={item.href ? "primary" : "secondary"}
        >
          {item.href ? item.actionLabel ?? "Open Link" : "Link Placeholder"}
        </Button>
      </div>
    </article>
  );
}
