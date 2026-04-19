import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactDetails } from "../../data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(20, "Tell me a little more about your project or idea."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "0.875rem",
  border: "1px solid var(--border)",
  background: "var(--bg-elevated)",
  padding: "0.8rem 1rem",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.18s",
};

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      /*
        PRODUCTION READY FORM SUBMISSION 
        --------------------------------
        Currently, this simulates a network request. 
        To receive real emails when users submit, use a free service like Web3Forms or Formspree:
        */
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, access_key: "d70874ac-1dd1-4838-8b96-4008122d3201" })
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      
        // Hide the success message after 4 seconds
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        console.error("Submission rejected by Web3Forms.");
      }
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  return (
    <section id="contact" style={{ padding: "6rem 1.5rem" }}>
      <div className="mx-auto max-w-7xl space-y-14 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something thoughtful, useful, and technically sharp."
            description="If you're hiring, collaborating, or exploring a project that needs strong backend thinking with product awareness, I'd love to connect."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact detail cards */}
          <Reveal>
            <div
              style={{
                borderRadius: "1.5rem",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    borderRadius: "1rem",
                    border: "1px solid var(--border)",
                    background: "var(--bg-elevated)",
                    padding: "0.9rem 1.1rem",
                    transition: "border-color 0.18s, transform 0.18s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-accent)";
                    el.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "0.55rem",
                      borderRadius: "0.65rem",
                      background: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(251,191,36,0.1))",
                      color: "var(--accent-violet)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p
                      className="font-mono"
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {label}
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-primary)" }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal>
            <form
              style={{
                borderRadius: "1.5rem",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                padding: "2rem",
              }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                    Name
                  </span>
                  <input
                    {...register("name")}
                    style={inputStyle}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--accent-violet)")}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")}
                  />
                  {errors.name && (
                    <span style={{ fontSize: "0.75rem", color: "var(--accent-rose)" }}>
                      {errors.name.message}
                    </span>
                  )}
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                    Email
                  </span>
                  <input
                    {...register("email")}
                    style={inputStyle}
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--accent-violet)")}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")}
                  />
                  {errors.email && (
                    <span style={{ fontSize: "0.75rem", color: "var(--accent-rose)" }}>
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "1.25rem" }}>
                <span className="font-mono" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  Message
                </span>
                <textarea
                  {...register("message")}
                  rows={6}
                  style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="Tell me about the opportunity, product, or problem you're solving."
                  aria-invalid={Boolean(errors.message)}
                  onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--accent-violet)")}
                  onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--border)")}
                />
                {errors.message && (
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-rose)" }}>
                    {errors.message.message}
                  </span>
                )}
              </label>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.8rem",
                    borderRadius: "100px",
                    border: "none",
                    background: "linear-gradient(135deg, var(--accent-violet), var(--accent-amber))",
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  <Send size={15} />
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>

                {submitted && (
                  <p
                    className="font-mono"
                    style={{ fontSize: "0.82rem", color: "var(--accent-emerald)" }}
                  >
                    ✓ Thanks! I'll get back to you soon.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
