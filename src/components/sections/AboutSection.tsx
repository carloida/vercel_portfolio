import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AboutSectionProps {
  about: {
    title: string;
    paragraphs: string[];
    strengths: Array<{ title: string; description: string }>;
    secondaryPanelTitle: string;
    secondaryHighlights: Array<{ title: string; description: string }>;
  };
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <Section id="about" tone="light">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <SectionHeading
          description="A concise view of the background, working style, and practical focus behind the portfolio."
          eyebrow="About"
          title={about.title}
        />

        <div className="grid gap-6 text-base leading-8 text-[hsl(var(--muted))] md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
              Strengths
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">
              Working style and execution edge
            </h3>
          </div>
          <span className="hidden h-px flex-1 bg-[hsl(var(--line))] sm:block" />
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {about.strengths.map((item) => (
            <article
              className="rounded-[1.5rem] border border-[hsl(var(--line))] bg-[hsl(var(--surface))] p-5 shadow-soft"
              key={item.title}
            >
              <h4 className="text-base font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted))]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-[2rem] border border-[hsl(var(--line-strong))] bg-[hsl(var(--surface))] p-6 shadow-soft">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
              {about.secondaryPanelTitle}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">
              Academic analytics work translated into portfolio evidence
            </h3>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {about.secondaryHighlights.map((item) => (
            <article
              className="rounded-[1.35rem] border border-[hsl(var(--line))] bg-white p-5"
              key={item.title}
            >
              <h4 className="text-base font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted))]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
