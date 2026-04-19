import { Helmet } from "react-helmet-async";
import { AboutSection } from "./components/About";
import { ContactSection } from "./components/Contact";
import { EducationSection } from "./components/Education";
import { ExperienceSection } from "./components/Experience";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { ProjectsSection } from "./components/Projects";
import { SkillsSection } from "./components/Skills";
import { navItems } from "./data/portfolio";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";
import { useMemo } from "react";

function App() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Chiluveru Girish</title>
        <meta
          name="description"
          content="Portfolio of Chiluveru Girish, a full-stack software developer focused on backend systems, AI-enabled platforms, cloud deployment, and scalable API architecture."
        />
        <meta
          name="keywords"
          content="Chiluveru Girish, Full-Stack Developer, Python, Java, Node.js, React, Flask, AWS, Terraform, AI, LangChain, System Design"
        />
        <meta property="og:title" content="Chiluveru Girish" />
        <meta
          property="og:description"
          content="Explore projects, experience, skills, and education from a developer working at the intersection of backend engineering, cloud systems, and AI."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div style={{ background: "var(--bg-base)", color: "var(--text-primary)", minHeight: "100vh" }}>
        <Navigation items={navItems} activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
