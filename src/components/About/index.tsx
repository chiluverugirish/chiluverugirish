import { highlightCards, stats } from "../../data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function AboutSection() {
  return (
    <section id="about" style={{ padding: "6rem 1.5rem" }}>
      <div className="mx-auto max-w-7xl space-y-14 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering systems that stay fast, reliable, and useful."
            description="I enjoy building software where strong architecture and real-world usability meet. My recent work spans backend services, cloud deployment automation, and AI-assisted product experiences, with a consistent focus on performance and maintainability."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Highlight cards */}
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-3">
              {highlightCards.map(({ title, body, icon: Icon }) => (
                <article
                  key={title}
                  style={{
                    borderRadius: "1.5rem",
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    padding: "1.5rem",
                    transition: "border-color 0.2s, transform 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-accent)";
                    el.style.transform = "translateY(-3px)";
                    el.style.background = "var(--bg-card-hover)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateY(0)";
                    el.style.background = "var(--bg-card)";
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "0.65rem",
                      borderRadius: "0.875rem",
                      background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(251,191,36,0.15))",
                      border: "1px solid var(--border-accent)",
                      color: "var(--accent-violet)",
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    className="font-display"
                    style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.6rem" }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>

          {/* Stats snapshot */}
          <Reveal>
            <div
              style={{
                borderRadius: "1.5rem",
                border: "1px solid var(--border-accent)",
                background: "var(--bg-card)",
                padding: "2rem",
              }}
            >
              <p
                className="eyebrow"
                style={{ marginBottom: "1.5rem" }}
              >
                Snapshot
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: "1.25rem",
                      borderRadius: "1rem",
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <p
                      className="font-display gradient-text"
                      style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="font-mono"
                      style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.4rem", letterSpacing: "0.05em" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
