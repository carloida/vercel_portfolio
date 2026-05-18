import type { ContactLink } from "@/types/portfolio";

import { ContactBlock } from "@/components/ui/ContactBlock";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ContactSectionProps {
  items: ContactLink[];
}

export function ContactSection({ items }: ContactSectionProps) {
  return (
    <Section id="contact" tone="subtle">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            description="Direct contact points, a downloadable resume, and clear ways to review the background behind the portfolio."
            eyebrow="Contact"
            title="Professional contact points and current resume"
          />
          <div className="mt-8 rounded-[1.9rem] border border-[hsl(var(--line))] bg-white p-6 shadow-soft">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
              Best Fit
            </p>
            <ul className="mt-5 grid gap-3">
              <li className="rounded-2xl border border-[hsl(var(--line))] bg-[hsl(var(--surface))] px-4 py-3 text-sm text-[hsl(var(--foreground))]">
                SQL, data modeling, and structured datasets for decision support
              </li>
              <li className="rounded-2xl border border-[hsl(var(--line))] bg-[hsl(var(--surface))] px-4 py-3 text-sm text-[hsl(var(--foreground))]">
                Business analytics, dashboards, and reporting workflows tied to real operations
              </li>
              <li className="rounded-2xl border border-[hsl(var(--line))] bg-[hsl(var(--surface))] px-4 py-3 text-sm text-[hsl(var(--foreground))]">
                Applied machine learning and AI solutions framed around usable business outcomes
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <ContactBlock item={item} key={item.label} />
          ))}
        </div>
      </div>
    </Section>
  );
}
