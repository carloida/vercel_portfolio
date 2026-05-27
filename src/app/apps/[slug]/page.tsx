import Link from "next/link";
import { notFound } from "next/navigation";

import { appLaunchers, getAppLauncher } from "@/data/appLaunchers";

type AppPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return appLaunchers.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getAppLauncher(slug);

  return {
    title: app ? `${app.title} | Carlo Emilio Ida` : "Project App | Carlo Emilio Ida",
    description: app?.summary
  };
}

export default async function ProjectAppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getAppLauncher(slug);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[hsl(var(--surface))]">
      <section className="border-b border-[hsl(var(--line))] bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 md:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Link
                className="text-sm font-semibold text-[hsl(var(--red))] hover:text-[hsl(var(--navy))]"
                href="/#projects"
              >
                Back to portfolio
              </Link>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--muted))]">
                {app.eyebrow}
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-normal text-[hsl(var(--foreground))] md:text-5xl">
                {app.title}
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-[hsl(var(--muted))]">
                {app.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[hsl(var(--orange))] px-5 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--red))]"
                href={app.directUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open full app
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[hsl(var(--line-strong))] bg-white px-5 text-sm font-medium text-[hsl(var(--foreground))] transition-all duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--navy))]"
                href={app.repoUrl}
                rel="noreferrer"
                target="_blank"
              >
                GitHub repo
              </a>
            </div>
          </div>

          <div className="grid gap-3 rounded-2xl border border-[hsl(var(--line))] bg-[hsl(var(--surface))] p-4 text-sm leading-6 text-[hsl(var(--muted))] md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="font-semibold text-[hsl(var(--foreground))]">Local app URL:</span>{" "}
              <code className="rounded-md border border-[hsl(var(--line))] bg-white px-2 py-1 text-xs text-[hsl(var(--foreground))]">
                {app.directUrl}
              </code>
            </div>
            <div>
              Run{" "}
              <code className="rounded-md border border-[hsl(var(--line))] bg-white px-2 py-1 text-xs text-[hsl(var(--foreground))]">
                {app.localCommand}
              </code>{" "}
              from the portfolio root to start the companion apps.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-6 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-[hsl(var(--line))] bg-white shadow-panel">
          <iframe
            className="h-[78vh] min-h-[680px] w-full bg-white"
            src={app.directUrl}
            title={app.title}
          />
        </div>
        <ul className="grid gap-3 md:grid-cols-3">
          {app.notes.map((note) => (
            <li
              className="rounded-2xl border border-[hsl(var(--line))] bg-white p-4 text-sm leading-6 text-[hsl(var(--muted))]"
              key={note}
            >
              {note}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
