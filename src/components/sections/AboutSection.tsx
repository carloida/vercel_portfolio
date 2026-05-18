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
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            description="A concise view of the background, working style, and practical focus behind the portfolio."
            eyebrow="About"
            title={about.title}
          />
          <div className="mt-8 space-y-6 text-base leading-8 text-[hsl(var(--muted))]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <article className="rounded-[1.9rem] border border-[hsl(var(--line))] bg-[hsl(var(--surface))] p-6 shadow-soft">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
              Strengths
            </p>
            <div className="mt-5 grid gap-4">
              {about.strengths.map((item) => (
                <div
                  className="rounded-[1.4rem] border border-[hsl(var(--line))] bg-white p-4"
                  key={item.title}
                >
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted))]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.9rem] border border-[hsl(var(--line))] bg-white p-6 shadow-soft">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
              {about.secondaryPanelTitle}
            </p>
            <div className="mt-5 grid gap-4">
              {about.secondaryHighlights.map((item) => (
                <div
                  className="rounded-[1.4rem] border border-[hsl(var(--line))] bg-[hsl(var(--surface))] p-4"
                  key={item.title}
                >
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted))]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}
