import { ChevronUp, Heart } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { navItems, socialLinks } from "../../data/portfolio";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 1.5rem",
        background: "var(--bg-surface)",
      }}
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        {/* Top row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem", marginBottom: "1.5rem" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="/portfolio.me.svg" alt="Logo" style={{ height: "2rem" }} />
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "0.6rem" }}>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  color: "var(--text-secondary)",
                  transition: "border-color 0.18s, color 0.18s, transform 0.18s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border-accent)";
                  el.style.color = "var(--accent-violet)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-secondary)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <ScrollLink
            to="home"
            smooth
            duration={500}
            className="scroll-link-btn"
          >
            Back to top
            <ChevronUp size={13} />
          </ScrollLink>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "1.5rem" }}>
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-90}
              className="footer-nav-link"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            paddingTop: "1rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p
            className="font-mono"
            style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}
          >
            © 2026 Chiluveru Girish.
          </p>
          <p
            className="font-mono"
            style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
          >
            Crafted with <Heart size={11} style={{ color: "var(--accent-rose)" }} /> from India
          </p>
        </div>
      </div>
    </footer>
  );
}
