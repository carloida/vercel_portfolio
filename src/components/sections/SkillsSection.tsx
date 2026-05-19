import type { SkillCategory } from "@/types/portfolio";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroup } from "@/components/ui/SkillGroup";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section
      className="bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]"
      id="skills"
      tone="dark"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
      <div className="relative">
        <SectionHeading
          description="A structured view of the analytical, operational, and delivery capabilities behind the work."
          eyebrow="Skills and Expertise"
          title="Systematic, business-aware technical capability"
          tone="dark"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skills.map((category) => (
            <SkillGroup category={category} key={category.title} />
          ))}
        </div>
      </div>
    </Section>
  );
}
