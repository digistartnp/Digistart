import {
  Code2,
  Database,
  Layers,
  PenTool,
  Rocket,
  Shield,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  stack: string[];
  value: string;
  icon: typeof Code2;
};

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    shortDescription:
      "Pixel-perfect interfaces engineered for speed, accessibility, and conversion.",
    description:
      "We build high-performance frontends that feel effortless. From design systems to complex dashboards, every interaction is tuned for clarity and engagement.",
    benefits: [
      "Lightning-fast load times with modern rendering strategies",
      "Consistent UI across devices with scalable design systems",
      "Accessibility-first components for global audiences",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    value:
      "Reduce bounce rates, improve usability, and create experiences that turn visitors into customers.",
    icon: Code2,
  },
  {
    id: "backend",
    title: "Backend Development",
    shortDescription:
      "Robust API and data layers that scale with your business.",
    description:
      "We design secure backend systems that integrate seamlessly with your tools. Our APIs are structured for speed, reliability, and future growth.",
    benefits: [
      "Reliable architecture with clean API contracts",
      "Secure authentication and authorization patterns",
      "Scalable infrastructure built for traffic spikes",
    ],
    stack: ["Node.js", "PostgreSQL", "REST/GraphQL", "Docker"],
    value:
      "Keep operations stable while unlocking new product features and integrations faster.",
    icon: Database,
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    shortDescription:
      "End-to-end product execution with a single accountable team.",
    description:
      "We handle the complete stack so your product stays cohesive. From user flows to infrastructure, our engineers connect the entire journey.",
    benefits: [
      "Faster delivery with unified engineering workflows",
      "Reduced coordination overhead across teams",
      "Seamless handoff from product vision to production",
    ],
    stack: ["Next.js", "Node.js", "Prisma", "Vercel"],
    value:
      "Launch faster with fewer blockers and a clear line of ownership for outcomes.",
    icon: Layers,
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    shortDescription:
      "User-first experiences built on research and product strategy.",
    description:
      "We translate product goals into elegant interfaces. Every flow is designed to build trust and move users toward action.",
    benefits: [
      "Conversion-focused user journeys",
      "Design systems that scale with your team",
      "Rapid prototyping to validate ideas quickly",
    ],
    stack: ["Figma", "Design Systems", "Prototyping"],
    value:
      "Increase adoption and retention with intuitive experiences aligned to business goals.",
    icon: PenTool,
  },
  {
    id: "web",
    title: "Website Development & Deployment",
    shortDescription:
      "Modern marketing sites that feel premium and rank well.",
    description:
      "We craft high-end websites that tell your story, load instantly, and scale with your team. Every build is optimized for SEO and performance.",
    benefits: [
      "Optimized Core Web Vitals and SEO best practices",
      "Flexible CMS-ready architecture",
      "Production-grade deployment and monitoring",
    ],
    stack: ["Next.js", "Headless CMS", "Vercel", "Analytics"],
    value:
      "Improve visibility, increase inbound leads, and elevate brand credibility.",
    icon: Rocket,
  },
  {
    id: "maintenance",
    title: "Maintenance & Optimization",
    shortDescription:
      "Continuous improvements for stability, speed, and growth.",
    description:
      "We keep your platform fast and secure. From performance tuning to feature iterations, your product stays ahead of the curve.",
    benefits: [
      "Proactive monitoring and performance audits",
      "Incremental enhancements without downtime",
      "Security patching and dependency management",
    ],
    stack: ["Lighthouse", "Sentry", "CI/CD", "Observability"],
    value:
      "Reduce technical risk while improving user experience and revenue performance.",
    icon: Shield,
  },
];
