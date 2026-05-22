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
        description="Interactive applications, AI-agent concepts, and analytics pipelines that show how data work turns into usable decision support."
        eyebrow="Featured Projects"
        title="Project work with deployed interfaces, AI layers, and business decision logic"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
