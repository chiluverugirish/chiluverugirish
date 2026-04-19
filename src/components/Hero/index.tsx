import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { heroRoles, socialLinks, summary } from "../../data/portfolio";

/* ── Brand icon SVGs for the hero card ── */
const HeroCardItems = [
  {
    label: "Backend APIs",
    description: "REST & event-driven systems",
    color: "#a78bfa",
  },
  {
    label: "GPU · Cloud",
    description: "AWS + Terraform + CUDA pipelines",
    color: "#fbbf24",
  },
  {
    label: "AI Workflows",
    description: "LangChain · LLMs · Molecular AI",
    color: "#34d399",
  },
  {
    label: "DSA · 300+ LeetCode",
    description: "Contest rating 1650",
    color: "#fb7185",
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="aurora-bg relative overflow-hidden px-6 pb-28 pt-16 lg:px-8 lg:pt-24"
      style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
    >
      {/* Noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ── Left column: text ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 1rem",
              borderRadius: "100px",
              border: "1px solid var(--border-accent)",
              background: "var(--bg-card)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-secondary)",
              letterSpacing: "0.08em",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent-emerald)",
                boxShadow: "0 0 8px var(--accent-emerald)",
                flexShrink: 0,
              }}
            />
            Hyderabad, India · Open to opportunities
          </motion.div>

          {/* Tag */}
          <p
            className="font-mono"
            style={{
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--accent-amber)",
            }}
          >
            Portfolio 2026
          </p>

          {/* Name */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--text-primary)",
            }}
          >
            Chiluveru
            <br />
            <span className="gradient-text">Girish</span>
          </h1>

          {/* Type animation */}
          <div
            style={{
              minHeight: "2.4rem",
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              color: "var(--text-secondary)",
              fontWeight: 400,
            }}
          >
            <span style={{ color: "var(--accent-violet)", marginRight: "0.4rem" }}>&gt;</span>
            <TypeAnimation sequence={[...heroRoles]} speed={42} repeat={Infinity} />
          </div>

          {/* Summary */}
          <p
            style={{
              maxWidth: "38rem",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
            }}
          >
            {summary}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-90}
              className="hero-btn-primary"
            >
              View Projects
              <ArrowRight size={15} />
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-90}
              className="hero-btn-secondary"
            >
              Contact Me
              <Mail size={15} />
            </ScrollLink>

            <a
              href="/resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.7rem 1.6rem",
                borderRadius: "100px",
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-display)",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              Resume
              <Download size={15} />
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.4rem 0.9rem",
                  borderRadius: "100px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  transition: "border-color 0.18s, color 0.18s, transform 0.18s",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent-violet)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Right column: profile image + card ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.18 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}
        >
          {/* Profile image square */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* Glow blob */}
            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "280px",
                borderRadius: "1.5rem",
                background:
                  "radial-gradient(circle, rgba(167,139,250,0.35) 0%, rgba(251,191,36,0.18) 50%, transparent 75%)",
                filter: "blur(32px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            />
            {/* Avatar frame */}
            <div
              className="card"
              style={{ width: 250, height: 250, position: "relative", zIndex: 1, padding: "6px", borderRadius: "1.5rem" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "1.1rem",
                  background: "var(--bg-elevated)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/portfolio.me.webp"
                  alt="Chiluveru Girish"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const fallback = el.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Fallback initials */}
                <div
                  style={{
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    borderRadius: "1.1rem",
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, var(--accent-violet), var(--accent-amber))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  CG
                </div>
              </div>
            </div>
          </div>

          {/* Strength card */}
          <div
            className="card"
            style={{
              width: "100%",
              maxWidth: "380px",
              padding: "1.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.85rem",
            }}
          >
            {HeroCardItems.map(({ label, description, color }) => (
              <div
                key={label}
                style={{
                  padding: "0.9rem",
                  borderRadius: "1rem",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: color,
                    boxShadow: `0 0 8px ${color}`,
                    marginBottom: "0.55rem",
                  }}
                />
                <p
                  className="font-display"
                  style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-primary)" }}
                >
                  {label}
                </p>
                <p
                  className="font-mono"
                  style={{ fontSize: "0.67rem", color: "var(--text-muted)", marginTop: "0.3rem", lineHeight: 1.5 }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
