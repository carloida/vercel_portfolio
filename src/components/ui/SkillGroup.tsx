import type { SkillCategory } from "@/types/portfolio";

interface SkillGroupProps {
  category: SkillCategory;
}

export function SkillGroup({ category }: SkillGroupProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_40px_rgba(2,6,23,0.18)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
            {category.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
            {category.description}
          </p>
        </div>
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {category.items.map((item) => (
          <li
            className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-slate-100"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
