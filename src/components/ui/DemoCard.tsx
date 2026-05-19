import type { LiveDemo } from "@/types/portfolio";

import { Button } from "@/components/ui/Button";

interface DemoCardProps {
  demo: LiveDemo;
}

export function DemoCard({ demo }: DemoCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-[hsl(var(--line))] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-panel">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
            {demo.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted))]">
            {demo.summary}
          </p>
        </div>
        <span className="rounded-full border border-[hsl(var(--line-strong))] bg-[hsl(var(--surface))] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[hsl(var(--navy))]">
          {demo.status}
        </span>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2">
        {demo.stack.map((item) => (
          <li
            className="rounded-full border border-[hsl(var(--line))] px-3 py-1.5 text-xs text-[hsl(var(--muted))]"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button disabled={!demo.url} href={demo.url} variant="secondary">
          {demo.actionLabel ?? "Live Link"}
        </Button>
      </div>
    </article>
  );
}
