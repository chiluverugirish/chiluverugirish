import {
  BrainCircuit,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
} from "lucide-react";
import type {
  EducationItem,
  ExperienceItem,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
  Stat,
} from "../types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const heroRoles = [
  "Full-Stack Software Developer",
  1800,
  "Backend & Systems Engineer",
  1800,
  "AI-Driven Product Builder",
  1800,
] as const;

export const summary =
  "Full-stack Software Developer specializing in backend systems, scalable APIs, and cloud-ready architecture. I build production-grade platforms that connect strong systems design with practical AI workflows.";

export const stats: Stat[] = [
  { label: "Years Building", value: "3+" },
  { label: "LeetCode Solved", value: "300+" },
  { label: "Contest Rating", value: "1650" },
  { label: "Cost Savings Delivered", value: "80-90%" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:girishchiluveru@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chiluveru-girish",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/ChiluveruGirish",
    icon: Github,
  },
];

export const highlightCards = [
  {
    title: "Backend-first engineering",
    body: "Designing resilient APIs, optimizing data flows, and shipping features with production constraints in mind.",
    icon: BriefcaseBusiness,
  },
  {
    title: "AI meets systems",
    body: "Bridging model-driven workflows with cloud infrastructure, GPU acceleration, and developer-friendly tooling.",
    icon: BrainCircuit,
  },
  {
    title: "Competitive problem solving",
    body: "A strong DSA foundation backed by 300+ solved problems and a 1650 contest rating.",
    icon: Trophy,
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "DrugParadigm",
    role: "AI Intern",
    dates: "Feb 2025 - Nov 2025",
    location: "Hyderabad, India",
    achievements: [
      "Worked on open-sourcing tools used in PROTAC-INVENT, an RNN-based drug discovery model for protein targeting.",
      "Built Flask APIs with GPU acceleration for 10x faster molecular analysis and scoring.",
      "Open-sourced the reinvent-scoring Python package with Roshambo, AutoDock Vina, and OpenMM as free alternatives to proprietary tools.",
      "Delivered 80-90% licensing cost reduction with only a 2-3% accuracy trade-off.",
      "Enabled faster molecular optimization workflows through parallel GPU processing and configurable scoring pipelines.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Technical & Programming",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C++",
      "SQL",
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "RESTful APIs",
      "System Design",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "Redis",
      "AWS EC2",
      "AWS Lambda",
      "AWS S3",
      "AWS SNS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "JWT/OAuth",
    ],
  },
  {
    title: "AI, Research & Soft Skills",
    items: [
      "PyTorch",
      "RDKit",
      "Reinforcement Learning",
      "LLMs",
      "LangChain",
      "OpenMM",
      "API Optimization",
      "Problem Solving",
      "Collaboration",
      "Communication",
      "Adaptability",
      "Ownership",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "EmotiLearn",
    description:
      "An AI learning platform for dyslexic children using emotion-aware interactions, adaptive recommendations, and full-stack progress tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB", "CLIP", "MediaPipe", "AWS", "Terraform"],
    category: "AI + Full Stack",
    github: "https://github.com/ChiluveruGirish",
  },
  {
    title: "FixMyHyd",
    description:
      "A multilingual civic issue reporting assistant that classifies problems, analyzes images and voice input, and automates report creation.",
    stack: ["Flask", "SQLite", "LangChain", "Gemini API", "Telegram Bot", "REST API"],
    category: "Agentic AI",
    github: "https://github.com/ChiluveruGirish",
  },
  {
    title: "Reinvent-Scoring",
    description:
      "GPU-accelerated molecular scoring package extending open-source chemistry tooling with high-throughput, multi-GPU workflows.",
    stack: ["Python", "RDKit", "Roshambo", "OpenMM", "CUDA", "Scientific Computing"],
    category: "Open Source",
    github: "https://github.com/ChiluveruGirish",
  },
  {
    title: "Nivasa",
    description:
      "Hotel booking platform with secure auth, geocoding-powered search, and idempotent booking flows for reliable reservations.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "OAuth", "JWT"],
    category: "Product Engineering",
    github: "https://github.com/ChiluveruGirish",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Keshav Memorial Institute of Technology",
    degree: "B.Tech in Data Science",
    dates: "Aug 2023 - Jul 2027",
    highlights: [
      "CGPA: 8.54 / 10",
      "Based in Hyderabad, India",
      "Focused on data science, software systems, and applied AI.",
    ],
  },
];

export const certifications = [
  {
    title: "Web Development Course (Delta)",
    issuer: "Apna College",
    year: "2024",
  },
  {
    title: "Competitive Programming",
    issuer: "LeetCode",
    year: "300+ problems solved, contest rating 1650",
  },
];

export const contactDetails = [
  { label: "Email", value: "girishchiluveru@gmail.com", href: "mailto:girishchiluveru@gmail.com", icon: Mail },
  { label: "Location", value: "Hyderabad, Telangana, India", href: "#", icon: MapPin },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/chiluveru-girish",
    href: "https://www.linkedin.com/in/chiluveru-girish",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/ChiluveruGirish",
    href: "https://github.com/ChiluveruGirish",
    icon: Github,
  },
  {
    label: "Education",
    value: "Keshav Memorial Institute of Technology",
    href: "#education",
    icon: GraduationCap,
  },
];
