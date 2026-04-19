import { experience } from "../../data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { MapPin, CalendarDays, Building2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-surface)",
      }}
    >
      <div className="mx-auto max-w-7xl space-y-14 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Recent work grounded in applied AI and production systems."
            description="Each role reflects a backend-first mindset: measurable performance gains, reliable automation, and pragmatic tooling choices that reduce cost without sacrificing capability."
          />
        </Reveal>

        <div className="space-y-8">
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`}>
              <article
                style={{
                  borderRadius: "1.5rem",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  padding: "2rem",
                  display: "grid",
                  gap: "2rem",
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
                className="lg:grid-cols-[0.8fr_1.2fr]"
              >
                {/* Left accent bar */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    background: "linear-gradient(180deg, var(--accent-violet), var(--accent-amber))",
                    borderRadius: "1.5rem 0 0 1.5rem",
                  }}
                />

                {/* Company info */}
                <div style={{ paddingLeft: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <Building2 size={14} style={{ color: "var(--accent-amber)" }} />
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--accent-amber)",
                      }}
                    >
                      {item.company}
                    </span>
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.role}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                      <CalendarDays size={13} style={{ color: "var(--text-muted)" }} />
                      <span className="font-mono" style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                        {item.dates}
                      </span>
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                      <MapPin size={13} style={{ color: "var(--text-muted)" }} />
                      <span className="font-mono" style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                        {item.location}
                      </span>
                    </span>
                  </div>


                </div>

                {/* Achievements */}
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {item.achievements.map((ach, i) => (
                    <li
                      key={i}
                      style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                    >
                      <div className="timeline-dot" style={{ marginTop: "0.3rem" }} />
                      <span style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
                        {ach}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
