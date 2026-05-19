import type { ExperienceEntry } from "@/types/portfolio";

import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ExperienceSectionProps {
  items: ExperienceEntry[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <Section id="experience" tone="dark">
      <div className="absolute inset-0 bg-grid-dark opacity-35" aria-hidden="true" />
      <div className="relative">
        <SectionHeading
          description="A concise view of the roles, delivery context, and analytical work that shape the profile."
          eyebrow="Professional Background"
          title="From operations leadership to data and analytics delivery"
          tone="dark"
        />
        <div className="relative mt-12 grid gap-6 before:absolute before:bottom-0 before:left-[0.66rem] before:top-0 before:w-px before:bg-white/[0.15]">
          {items.map((entry) => (
            <ExperienceItem entry={entry} key={entry.title} />
          ))}
        </div>
      </div>
    </Section>
  );
}
