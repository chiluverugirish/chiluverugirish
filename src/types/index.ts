import type { LucideIcon } from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Stat = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  location: string;
  achievements: string[];
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  category: string;
  github?: string;
  demo?: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  dates: string;
  highlights: string[];
};
