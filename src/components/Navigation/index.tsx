import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "../../types";
import type { Theme } from "../../hooks/useTheme";

type NavigationProps = {
  items: NavItem[];
  activeSection: string;
  theme: Theme;
  toggleTheme: () => void;
};

export function Navigation({ items, activeSection, theme, toggleTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (id: string) =>
    `cursor-pointer text-sm font-display font-medium transition-colors duration-200 relative pb-1 ${
      activeSection === id
        ? "text-[var(--accent-violet)] nav-link-active"
        : "text-[var(--text-secondary)] hover:text-[var(--accent-violet)]"
    }`;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--border)",
        background: "rgba(var(--bg-surface), 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary"
      >
        {/* Logo */}
        <a
          href="#home"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <img src="/portfolio.me.svg" alt="Logo" style={{ height: "2.5rem" }} />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-90}
              className={linkClass(item.id)}
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-secondary)",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-accent)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-amber)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            style={{
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              cursor: "pointer",
            }}
            className="inline-flex items-center justify-center md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-5">
              {items.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className={linkClass(item.id)}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
