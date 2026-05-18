import type { ExperienceEntry } from "@/types/portfolio";

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <article className="relative pl-10">
      <span className="absolute left-[0.35rem] top-3 h-3 w-3 rounded-full border border-white/30 bg-white" />
      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-300">
              {entry.phase}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
              {entry.title}
            </h3>
            {entry.organization ? (
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
                {entry.organization}
              </p>
            ) : null}
          </div>
          {(entry.period || entry.location) ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-300">
              {entry.period ? <p>{entry.period}</p> : null}
              {entry.location ? <p className="mt-1">{entry.location}</p> : null}
            </div>
          ) : null}
        </div>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          {entry.summary}
        </p>
        <ul className="mt-5 grid gap-3">
          {entry.points.map((point) => (
            <li
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-slate-200"
              key={point}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
