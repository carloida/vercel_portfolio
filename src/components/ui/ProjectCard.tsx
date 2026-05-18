import type { Project } from "@/types/portfolio";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group rounded-[2rem] border border-[hsl(var(--line))] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--navy))] hover:shadow-panel",
        project.featured && "lg:col-span-2 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:p-8"
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[hsl(var(--muted))]">
            {project.featured ? "Featured Build" : "Project"}
          </p>
          <span className="rounded-full border border-[hsl(var(--line))] px-3 py-1 text-xs text-[hsl(var(--muted))]">
            {project.featured ? "Priority case study slot" : "Portfolio placeholder"}
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[hsl(var(--muted))]">
          {project.summary}
        </p>
      </div>

      <div className={cn("mt-8", project.featured && "lg:mt-0 lg:border-l lg:border-[hsl(var(--line))] lg:pl-8")}>
        <div className="rounded-[1.5rem] border border-[hsl(var(--line))] bg-[hsl(var(--surface))] p-5">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[hsl(var(--muted))]">
            Business Lens
          </p>
          <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted))]">
            {project.businessLens}
          </p>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              className="rounded-full border border-[hsl(var(--line-strong))] px-3 py-1.5 text-xs font-medium text-[hsl(var(--foreground))]"
              key={tool}
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.actions.map((action) => (
            <Button
              className="min-w-[7.5rem]"
              disabled={!action.href}
              external={action.external}
              href={action.href}
              key={action.label}
              variant={action.href ? "primary" : "secondary"}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}
