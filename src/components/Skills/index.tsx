import { Code2 } from "lucide-react";
import { skillCategories } from "../../data/portfolio";
import { skillIcons } from "../../utils/skillIcons";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const categoryColors: Record<string, string> = {
  "Technical & Programming": "#a78bfa",
  "Tools & Platforms": "#fbbf24",
  "AI, Research & Soft Skills": "#34d399",
};

function SkillPill({ skill }: { skill: string }) {
  const icon = skillIcons[skill];

  return (
    <span className="skill-pill">
      {icon ? (
        <span
          dangerouslySetInnerHTML={{ __html: icon.svg }}
          style={{ width: 15, height: 15, display: "inline-flex", color: icon.color }}
        />
      ) : (
        <Code2 size={13} style={{ color: "var(--text-muted)" }} />
      )}
      {skill}
    </span>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-surface)",
      }}
    >
      <div className="mx-auto max-w-7xl space-y-14 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A toolkit shaped by systems thinking and fast iteration."
            description="From cloud-native APIs to AI-assisted workflows, these are the technologies and habits I lean on most when building products that scale."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const accentColor = categoryColors[category.title] ?? "var(--accent-violet)";
            return (
              <Reveal key={category.title}>
                <article
                  style={{
                    height: "100%",
                    borderRadius: "1.5rem",
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    padding: "1.75rem",
                    transition: "border-color 0.2s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                  }
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: accentColor,
                      borderRadius: "1.5rem 1.5rem 0 0",
                    }}
                  />

                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: accentColor,
                      marginBottom: "1.25rem",
                      marginTop: "0.5rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {category.title}
                  </h3>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {category.items.map((skill) => (
                      <SkillPill key={skill} skill={skill} />
                    ))}
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
