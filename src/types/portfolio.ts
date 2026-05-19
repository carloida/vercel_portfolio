export interface NavItem {
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href?: string;
  external?: boolean;
}

export interface HighlightItem {
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  businessLens: string;
  tools: string[];
  featured?: boolean;
  actions: ActionLink[];
}

export interface ExperienceEntry {
  phase: string;
  title: string;
  organization?: string;
  period?: string;
  location?: string;
  summary: string;
  points: string[];
}

export interface LiveDemo {
  title: string;
  summary: string;
  status: string;
  stack: string[];
  url?: string;
  actionLabel?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  description: string;
  href?: string;
  external?: boolean;
  download?: boolean;
  actionLabel?: string;
}
