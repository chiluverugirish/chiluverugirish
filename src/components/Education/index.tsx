import { certifications, education } from "../../data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="education"
      style={{ padding: "6rem 1.5rem", background: "var(--bg-surface)" }}
    >
      <div className="mx-auto max-w-7xl space-y-14 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation with continuous skill-building alongside it."
            description="My education reflects an active overlap between formal data science study and hands-on software engineering, with additional learning in web development and competitive programming."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Degree card */}
          <Reveal>
            <div
              style={{
                borderRadius: "1.5rem",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                padding: "2rem",
                height: "100%",
              }}
            >
              {education.map((item) => (
                <article key={item.institution}>
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "0.6rem",
                      borderRadius: "0.875rem",
                      background: "rgba(167,139,250,0.12)",
                      border: "1px solid var(--border-accent)",
                      color: "var(--accent-violet)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <GraduationCap size={22} />
                  </div>

                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--accent-amber)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.institution}
                  </p>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.degree}
                  </h3>

                  <p
                    className="font-mono"
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}
                  >
                    {item.dates}
                  </p>

                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {item.highlights.map((h) => (
                      <li key={h} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <div className="timeline-dot" style={{ marginTop: "0.35rem" }} />
                        <span style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal>
            <div
              style={{
                borderRadius: "1.5rem",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                padding: "2rem",
                height: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                <Award size={18} style={{ color: "var(--accent-amber)" }} />
                <h3
                  className="font-display"
                  style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}
                >
                  Certifications & Awards
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {certifications.map((item) => (
                  <article
                    key={item.title}
                    style={{
                      borderRadius: "1rem",
                      border: "1px solid var(--border)",
                      background: "var(--bg-elevated)",
                      padding: "1.1rem 1.25rem",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                    }
                  >
                    <p className="font-display" style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.3rem" }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{item.issuer}</p>
                    <p
                      className="font-mono"
                      style={{ fontSize: "0.68rem", letterSpacing: "0.15em", color: "var(--accent-amber)", marginTop: "0.4rem", textTransform: "uppercase" }}
                    >
                      {item.year}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
