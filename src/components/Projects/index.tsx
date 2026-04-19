import { ExternalLink, Github, Brain, Package, Cpu, Layers } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "../../data/portfolio";
import { projectFilters } from "../../utils/projectFilters";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const categoryIcon: Record<string, React.ElementType> = {
  "AI + Full Stack": Brain,
  "Agentic AI": Cpu,
  "Open Source": Package,
  "Product Engineering": Layers,
};

const categoryColor: Record<string, string> = {
  "AI + Full Stack": "#a78bfa",
  "Agentic AI": "#fbbf24",
  "Open Source": "#34d399",
  "Product Engineering": "#fb7185",
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" style={{ padding: "6rem 1.5rem" }}>
      <div className="mx-auto max-w-7xl space-y-14 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected builds across AI, product engineering, and open source."
            description="A few representative projects that show how I move between product thinking, backend systems, and research-oriented development without losing polish."
          />
        </Reveal>

        {/* Filter bar */}
        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {projectFilters.map((filter) => {
              const active = activeFilter === filter;
              const color = categoryColor[filter] ?? "var(--accent-violet)";
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: "0.4rem 1rem",
                    borderRadius: "100px",
                    border: `1px solid ${active ? color : "var(--border)"}`,
                    background: active
                      ? `${color}22`
                      : "var(--bg-card)",
                    color: active ? color : "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.18s",
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => {
            const CatIcon = categoryIcon[project.category] ?? Layers;
            const color = categoryColor[project.category] ?? "var(--accent-violet)";

            return (
              <Reveal key={project.title}>
                <article
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1.5rem",
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    padding: "1.75rem",
                    transition: "border-color 0.2s, transform 0.2s",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = color;
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Top gradient bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${color}, transparent)`,
                    }}
                  />

                  {/* Category badge with icon */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", marginTop: "0.25rem" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        padding: "0.35rem",
                        borderRadius: "0.5rem",
                        background: `${color}22`,
                        color: color,
                      }}
                    >
                      <CatIcon size={14} />
                    </div>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: color,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      color: "var(--text-secondary)",
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.25rem" }}>
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        style={{
                          padding: "0.25rem 0.65rem",
                          borderRadius: "100px",
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: "1rem", marginTop: "1.25rem" }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          color: "var(--text-secondary)",
                          transition: "color 0.18s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = color)}
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                        }
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          color: "var(--text-secondary)",
                          transition: "color 0.18s",
                        }}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
