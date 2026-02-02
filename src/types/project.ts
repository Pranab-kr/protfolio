export interface Technology {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies: Technology[];
  isWorking?: boolean;
  slug: string;
}

export interface ProjectCaseStudyFrontmatter {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  timeline: string;
  role: string;
  team?: string;
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  challenges?: string[];
  learnings?: string[];
  isPublished: boolean;
}

export interface ProjectCaseStudy {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export interface ProjectCaseStudyPreview {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
}
