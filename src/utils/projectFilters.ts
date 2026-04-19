import { projects } from "../data/portfolio";

export const projectFilters = ["All", ...new Set(projects.map((project) => project.category))];
