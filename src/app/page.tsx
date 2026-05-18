import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
import { LiveDemosSection } from "@/components/sections/LiveDemosSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import {
  about,
  contactLinks,
  experience,
  hero,
  liveDemos,
  navigation,
  navigationCta,
  profile,
  projects,
  skills
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <Navbar
        brand={profile.name}
        cta={navigationCta}
        initials={profile.initials}
        items={navigation}
      />
      <Hero hero={hero} name={profile.name} title={profile.title} />
      <main id="main-content">
        <AboutSection about={about} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection items={experience} />
        <LiveDemosSection items={liveDemos} />
        <ContactSection items={contactLinks} />
      </main>
      <Footer items={navigation} name={profile.name} />
    </>
  );
}
