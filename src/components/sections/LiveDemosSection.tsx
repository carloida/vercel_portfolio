import type { LiveDemo } from "@/types/portfolio";

import { DemoCard } from "@/components/ui/DemoCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface LiveDemosSectionProps {
  items: LiveDemo[];
}

export function LiveDemosSection({ items }: LiveDemosSectionProps) {
  return (
    <Section id="live-demos" tone="light">
      <SectionHeading
        description="A dedicated space for future deployed tools, interactive models, and decision-support applications."
        eyebrow="Live Demos"
        title="Interfaces prepared for future applications"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <DemoCard demo={item} key={item.title} />
        ))}
      </div>
    </Section>
  );
}
