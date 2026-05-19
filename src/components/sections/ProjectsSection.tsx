import type { Project } from "@/types/portfolio";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" tone="subtle">
      <SectionHeading
        description="A mix of NUS MsBA work, innovation challenge work, and earlier operating-context builds that show how data work connects to actual decision support."
        eyebrow="Featured Projects"
        title="Selected project work across analytics, AI, and data modeling"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
