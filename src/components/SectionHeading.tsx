type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-5">
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className="font-display gradient-text"
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginTop: "0.5rem",
        }}
      >
        {title}
      </h2>
      <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75 }}>
        {description}
      </p>
    </div>
  );
}
