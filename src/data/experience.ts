import nxpLogo from "../assets/logos/NXP_Logo.png";
import amagiLogo from "../assets/logos/Amagi.png";
import blueYonderLogo from "../assets/logos/BY.png";

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    title: "Software Engineer I",
    company: "Blue Yonder",
    location: "Dallas, TX",
    duration: "August 2025 - Present",
    period: "Ongoing",
    description:
      "Blue Yonder is a leading provider of supply chain management solutions, leveraging AI and machine learning to optimize retail, logistics, and manufacturing operations.",
    achievements: [
      "Upgraded React Query from v3 to v5 across enterprise application, reducing bundle size by 15% and improving memory efficiency through modernized infinite query caching with maxPages optimization.",
      "Increased component test coverage from 75% to 90% by implementing integration testing strategy and MSW (Mock Service Worker) for realistic API mocking, while optimizing test architecture.",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "React Query",
      "Material UI",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Java",
      "Spring Boot",
      "Go",
      "gRPC",
      "Protobufs",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Maven",
      "Jest",
      "MSW",
      "Git",
      "GitHub",
    ],
    logo: blueYonderLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "NXP Semiconductors",
    location: "San Jose, CA",
    duration: "August 2024 - May 2025",
    period: "10 months",
    description:
      "NXP Semiconductors is a global leader in secure connectivity solutions for embedded applications, driving innovation in automotive, industrial, IoT, and mobile industries.",
    achievements: [
      "Architected and deployed real-time inventory management system using FastAPI and React, delivering LDAP secured access; streamlining operations for cross-functional teams; enabled efficient inventory control with user roles and automated email notifications, thus reducing inventory request processing time by 30%.",
      "Developed a comprehensive JIRA Integration System using Django that automatically tracks code integration across repositories and branches, handling an average of 25+ daily commits and supporting 5+ repositories.",
      "Redesigned Test Execution module using Angular v19 with NgRx state management and a multi-step hierarchical interface, reducing database API calls, decreasing setup time, and improving selection speed by 2 second to 3 millisecond by storing test case selections client-side rather than requiring constant MongoDB interactions.",
      "Built a full-stack web application using React and Django, that enables product managers and sales teams across 3 teams to compare semiconductor chip features, track changes, and analyze data efficiently, to take decisions.",
    ],
    skills: [
      "React",
      "Angular",
      "Svelte",
      "TypeScript",
      "Redux Toolkit",
      "NgRx",
      "Python",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "LDAP",
      "Bitbucket",
      "Bitbucket Webhooks",
      "JIRA",
      "Git",
    ],
    logo: nxpLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "Blue Yonder",
    location: "Dallas, TX",
    duration: "May 2024 - August 2024",
    period: "4 months",
    description:
      "Blue Yonder is a leading provider of supply chain management solutions, leveraging AI and machine learning to optimize retail, logistics, and manufacturing operations.",
    achievements: [
      "Developed an advanced dialog interface with filtering and interactive drag-drop features, driving 20% of cognitive assortment planning initiative progress.",
      "Drove the Backend for Frontend architecture, minimizing backend changes, accelerating frontend development, and enabling seamless UI customization; improved scalability and adopted by two cross-functional teams.",
      "Led the implementation of unit testing protocols, alleviated software reliability, and cut critical production issues, resulting in a flawless, zero-percent error in deployments.",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Material-UI",
      "HTML",
      "CSS",
      "BFF Architecture",
      "REST APIs",
      "Jest",
      "Git",
      "GitHub",
    ],
    logo: blueYonderLogo,
  },
  {
    title: "Software Engineer",
    company: "Amagi",
    location: "Bangalore, India",
    duration: "July 2022 - July 2023",
    period: "1 year",
    description:
      "Amagi is a cloud-based SaaS provider that enables content owners, broadcasters, and streaming platforms to manage, distribute, and monetize video content efficiently.",
    achievements: [
      "Enhanced user readability and accessibility by up to 90% by collaborating with UI/UX designers to implement an optimal text-to-background contrast ratio, aligning with NBCUniversal's requirements.",
      "Uniquely identified notification messages from a group of notifications and made a single API call that reduced the load on the backend server by the user interface by 60% - 70%.",
      "Launched a feature flag mechanism enabling proactive cancellation of API requests, optimizing user experience by preventing delays caused by server latency which supported over 45 customers like DAZN and Samsung.",
      "Identified and resolved 15+ user-reported application bugs through JIRA, streamlining workflows, boosting performance metrics, and enhancing overall customer experience.",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "HTML",
      "CSS",
      "Python",
      "AWS",
      "Cloud Services",
      "Cypress",
      "JIRA",
      "Git",
      "GitHub",
    ],
    logo: amagiLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "Amagi",
    location: "Bangalore, India",
    duration: "January 2022 - July 2022",
    period: "6 months",
    description:
      "Amagi is a cloud-based SaaS provider that enables content owners, broadcasters, and streaming platforms to manage, distribute, and monetize video content efficiently.",
    achievements: [
      "Engineered a robust feature flag mechanism enabling proactive cancellation of API requests, optimizing user experience by preventing delays caused by server latency.",
      "Developed test cases to validate Macros AD-TAG Replacement in Wrapper tags using Python Script for automation that reduced the time for execution of test cases by 20%.",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "HTML",
      "CSS",
      "Python",
      "AWS",
      "Playwright",
      "Test Automation",
      "Git",
      "GitHub",
    ],
    logo: amagiLogo,
  },
];
