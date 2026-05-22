import type { Project } from "@/types/portfolio";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinkedAction = project.actions.some((action) => Boolean(action.href));
  const linkedApp = project.actions.some((action) => action.label.toLowerCase().includes("open app") && action.href);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-[hsl(var(--line))] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--orange))] hover:shadow-panel",
        project.featured && "lg:col-span-2 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:p-8"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,hsl(var(--navy)),hsl(var(--red)),hsl(var(--orange)),hsl(var(--gold)))] opacity-80" />
      <div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[hsl(var(--muted))]">
            {project.featured ? "Featured Build" : "Project"}
          </p>
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold",
              linkedApp
                ? "border-[hsl(var(--orange))] bg-[hsl(var(--gold-soft))] text-[hsl(var(--navy))]"
                : "border-[hsl(var(--line))] text-[hsl(var(--muted))]"
            )}
          >
            {linkedApp ? "Interactive app" : project.featured ? "Priority case study" : hasLinkedAction ? "Linked project" : "Case study planned"}
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[hsl(var(--muted))]">
          {project.summary}
        </p>

        {project.aiContext ? (
          <div className="mt-6 rounded-[1.35rem] border border-[hsl(var(--gold))]/70 bg-[hsl(var(--gold-soft))] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--red))]">
              AI / Agent Layer
            </p>
            <p className="mt-2 text-sm leading-6 text-[hsl(var(--foreground))]">
              {project.aiContext}
            </p>
          </div>
        ) : null}
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
              className="rounded-full border border-[hsl(var(--line-strong))] bg-white px-3 py-1.5 text-xs font-medium text-[hsl(var(--foreground))]"
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
              variant={
                !action.href
                  ? "secondary"
                  : action.label.toLowerCase().includes("open app")
                    ? "accent"
                    : action.label.toLowerCase().includes("project")
                      ? "project"
                      : "secondary"
              }
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}
