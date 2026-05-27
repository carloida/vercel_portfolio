import Link from "next/link";

import { operationsPortfolio } from "@/data/operationsPortfolio";

export const metadata = {
  title: "Operations Portfolio | Carlo Emilio Ida",
  description: operationsPortfolio.summary
};

export default function OperationsPortfolioPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--surface))]">
      <section className="border-b border-[hsl(var(--line))] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Link
                className="text-sm font-semibold text-[hsl(var(--red))] hover:text-[hsl(var(--navy))]"
                href="/#projects"
              >
                Back to portfolio
              </Link>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--muted))]">
                {operationsPortfolio.eyebrow}
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-normal text-[hsl(var(--foreground))] md:text-5xl">
                {operationsPortfolio.title}
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-[hsl(var(--muted))]">
                {operationsPortfolio.summary}
              </p>
            </div>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[hsl(var(--orange))] px-5 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--red))]"
              href={operationsPortfolio.pdfUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open PDF portfolio
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operationsPortfolio.impact.map((item) => (
              <article className="rounded-2xl border border-[hsl(var(--line))] bg-[hsl(var(--surface))] p-5" key={item.label}>
                <p className="text-3xl font-semibold text-[hsl(var(--navy))]">{item.metric}</p>
                <h2 className="mt-3 text-base font-semibold text-[hsl(var(--foreground))]">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted))]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-6 md:px-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="grid gap-6">
          <section className="rounded-2xl border border-[hsl(var(--line))] bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted))]">
              Transformation Model
            </p>
            <div className="mt-5 grid gap-4">
              {operationsPortfolio.phases.map((phase) => (
                <article className="rounded-xl border border-[hsl(var(--line))] bg-[hsl(var(--surface))] p-4" key={phase.phase}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--red))]">
                    {phase.phase}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-[hsl(var(--foreground))]">{phase.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted))]">{phase.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[hsl(var(--line))] bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted))]">
              Project Coverage
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {operationsPortfolio.projects.map((project) => (
                <span className="rounded-full border border-[hsl(var(--line-strong))] px-3 py-1.5 text-xs font-medium text-[hsl(var(--foreground))]" key={project}>
                  {project}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {operationsPortfolio.capabilities.map((capability) => (
                <span className="rounded-full bg-[hsl(var(--gold-soft))] px-3 py-1.5 text-xs font-semibold text-[hsl(var(--navy))]" key={capability}>
                  {capability}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="overflow-hidden rounded-2xl border border-[hsl(var(--line))] bg-white shadow-panel">
          <div className="border-b border-[hsl(var(--line))] px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted))]">
              PDF Portfolio Viewer
            </p>
          </div>
          <iframe
            className="h-[82vh] min-h-[720px] w-full bg-white"
            src={`${operationsPortfolio.pdfUrl}#toolbar=1&navpanes=0`}
            title="Project Portfolio 2024 PDF"
          />
        </section>
      </section>
    </main>
  );
}
