export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    description:
      "I work across Java, Python, JavaScript/TypeScript, Go, C/C++ and SQL, choosing the right language for each problem, from backend services to systems-level code and data queries.",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "Go",
      "C/C++",
      "SQL",
    ],
  },
  {
    name: "Frontend",
    description:
      "I've built responsive web applications using React, Redux, React Query and TypeScript, with additional experience in Angular/NgRx and Svelte, focusing on performance and reusable component architecture with MUI.",
    skills: [
      "React",
      "Redux",
      "React Query",
      "Angular",
      "NgRx",
      "Svelte",
      "MUI",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Backend",
    description:
      "My backend work centers on Java Spring Boot and Python (Django and FastAPI), building RESTful, GraphQL and gRPC APIs and microservices, including authentication, database integration, and business logic. I also use Node.js and Express where they fit.",
    skills: [
      "Java Spring Boot",
      "Python Django",
      "Python FastAPI",
      "Node.js",
      "Express",
      "REST",
      "GraphQL",
      "gRPC",
      "Microservices",
    ],
  },
  {
    name: "Data & Cloud",
    description:
      "I design and operate data stores like PostgreSQL, MongoDB and Redis, stream events with Kafka, and deploy containerized workloads with Docker and Kubernetes on AWS and Azure.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Kafka",
    ],
  },
  {
    name: "DevOps & Tools",
    description:
      "I automate delivery with CI/CD (GitHub Actions, Jenkins) and Terraform, and rely on Git, Bitbucket, Jira, Unix/Linux and JUnit for a reliable, well-tested development workflow.",
    skills: [
      "CI/CD (GitHub Actions, Jenkins)",
      "Terraform",
      "Git",
      "Bitbucket",
      "Jira",
      "Unix/Linux",
      "JUnit",
    ],
  },
  {
    name: "Core CS",
    description:
      "A strong foundation in data structures, algorithms, operating systems, databases and system design helps me write efficient, scalable code and solve complex technical challenges.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Databases",
      "System Design",
    ],
  },
  {
    name: "AI Tools",
    description:
      "I build with LLMs, RAG and AI agents, and use tools like Claude Code and GitHub Copilot with deliberate prompt engineering to accelerate development.",
    skills: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Claude Code",
      "GitHub Copilot",
      "Prompt Engineering",
    ],
  },
];
