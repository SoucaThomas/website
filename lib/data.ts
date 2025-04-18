import experienceData from "@/data/experience";
import projectsData from "@/data/projects";
import type { Project } from "./github";

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export function getExperience(): Experience[] {
  return experienceData;
}

export function getProjects(): Project[] {
  return projectsData;
}
