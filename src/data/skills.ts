import { SkillCategory } from '../types';

export const skillsCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "Core algorithmic foundations & language proficiencies",
    accent: "blue",
    skills: [
      {
        name: "Java",
        description: "Object-oriented architecture, data structures, and algorithmic implementation.",
        tag: "Core"
      },
      {
        name: "Python",
        description: "Rapid prototyping, computer vision pipelines, automation, and backend scripts.",
        tag: "Primary"
      },
      {
        name: "C",
        description: "Low-level memory management, pointers, and systems programming basics.",
        tag: "Foundational"
      },
      {
        name: "JavaScript",
        description: "Modern ES6+, asynchronous promises, event loops, and interactive UI logic.",
        tag: "Web"
      }
    ]
  },
  {
    title: "Frontend Development",
    subtitle: "Modern client-side engineering & interface design",
    accent: "lavender",
    skills: [
      {
        name: "React",
        description: "Component architecture, hooks, context API, and modular UI engineering.",
        tag: "Framework"
      },
      {
        name: "Next.js",
        description: "Server/client components, page routing, and performant web applications.",
        tag: "Full-Stack"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first design systems, responsive layouts, and refined micro-interactions.",
        tag: "Styling"
      },
      {
        name: "HTML5 & Modern CSS",
        description: "Semantic web standards, accessibility principles, CSS Grid, and Flexbox.",
        tag: "Standards"
      }
    ]
  },
  {
    title: "Backend Engineering",
    subtitle: "API architecture, microservices & application servers",
    accent: "coral",
    skills: [
      {
        name: "Node.js",
        description: "Event-driven runtime environment for high-concurrency network applications.",
        tag: "Runtime"
      },
      {
        name: "Express.js",
        description: "RESTful API routes, JWT authentication middleware, and error handling.",
        tag: "Web API"
      },
      {
        name: "FastAPI",
        description: "High-performance Python asynchronous APIs with Pydantic type safety.",
        tag: "Microservices"
      },
      {
        name: "Flask",
        description: "Lightweight Python web micro-framework for computer vision endpoints.",
        tag: "Lightweight"
      }
    ]
  },
  {
    title: "AI & Computer Vision",
    subtitle: "Machine learning workflows & intelligent integrations",
    accent: "blue",
    skills: [
      {
        name: "Machine Learning Fundamentals",
        description: "Supervised & unsupervised principles, feature extraction, and model evaluation.",
        tag: "Concepts"
      },
      {
        name: "OpenCV",
        description: "Image preprocessing, filtering, morphological transforms, and edge detection.",
        tag: "Vision"
      },
      {
        name: "Google Gemini API Integration",
        description: "Multimodal LLM prompt orchestration, structured output, and assistant integration.",
        tag: "Generative AI"
      }
    ]
  },
  {
    title: "Tools & Platforms",
    subtitle: "Developer workflows, version control & utility toolchains",
    accent: "lavender",
    skills: [
      {
        name: "Git & GitHub",
        description: "Branching strategies, collaborative pull requests, code reviews, and versioning.",
        tag: "DevOps"
      },
      {
        name: "Vite",
        description: "Modern build tooling, lightning-fast HMR, and optimized production bundling.",
        tag: "Tooling"
      },
      {
        name: "REST APIs",
        description: "Resource endpoints, JSON payloads, HTTP status semantics, and client querying.",
        tag: "Architecture"
      },
      {
        name: "Leaflet",
        description: "Interactive open-source mobile-friendly mapping layers and custom overlays.",
        tag: "Geospatial"
      },
      {
        name: "Make.com",
        description: "Visual automation scenarios, webhook listeners, and multi-service workflows.",
        tag: "Automation"
      }
    ]
  }
];

