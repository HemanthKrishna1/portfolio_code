export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Inventory Management System",
    shortDescription:
      "A full-stack web application for tracking inventory and user requests",
    fullDescription:
      "Built a comprehensive inventory management system with role-based access control, real-time notifications, and detailed analytics dashboard. The system allows for tracking inventory levels, managing user requests, and generating custom reports based on various parameters.",
    githubUrl: "https://github.com/yourgithub/inventory-management",
    technologies: [
      "React",
      "Redux",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Material-UI",
    ],
    features: [
      "Role-based access control system",
      "Real-time inventory tracking",
      "Automated low stock alerts",
      "Advanced search and filtering",
      "Customizable reporting dashboard",
      "Activity logs and audit trails",
    ],
  },
  {
    id: 2,
    title: "Rental Book Tracking",
    shortDescription:
      "Developed a rental book tracking system with React and Redux Toolkit",
    fullDescription:
      "Designed and implemented a rental book tracking system that helps libraries and bookstores manage their rental inventory. The application includes features for tracking overdue rentals, calculating fees, and managing customer information. The frontend was built with React and Redux Toolkit for state management.",
    githubUrl: "https://github.com/yourgithub/rental-books",
    technologies: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    features: [
      "Book catalog with search and filter functionality",
      "Customer management system",
      "Rental period tracking",
      "Automated fee calculation",
      "Reservation system",
      "Responsive design for all devices",
    ],
  },
  {
    id: 3,
    title: "gRPC in Rust Implementation",
    shortDescription:
      "A simple gRPC service implementation in Rust using Tonic framework",
    fullDescription:
      "Built a high-performance gRPC service in Rust using the Tonic framework. The service demonstrates modern microservices architecture with Protocol Buffers for efficient serialization, async runtime with Tokio, and environment-based configuration. Includes comprehensive testing setup with grpcurl and Postman integration for service validation.",
    githubUrl: "https://github.com/yourgithub/grpc-hello-world",
    technologies: [
      "Rust",
      "Tonic",
      "Protocol Buffers",
      "Tokio",
      "gRPC",
      "Prost",
      "Dotenv",
    ],
    features: [
      "High-performance gRPC service implementation",
      "Protocol Buffers for efficient data serialization",
      "Async runtime with Tokio for concurrent handling",
      "Environment-based configuration management",
      "Comprehensive testing with grpcurl and Postman",
      "Clean project structure with proto definitions",
    ],
  },

  {
    id: 5,
    title: "E-commerce API",
    shortDescription: "Robust backend API powering an e-commerce platform",
    fullDescription:
      "Designed and built a scalable RESTful API for an e-commerce platform that handles product management, user authentication, order processing, and payment integration. The API includes comprehensive error handling, request validation, and detailed documentation using Swagger.",
    githubUrl: "https://github.com/yourgithub/ecommerce-api",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Redis",
      "Docker",
      "AWS",
    ],
    features: [
      "Secure user authentication and authorization",
      "Product catalog with advanced search capabilities",
      "Order processing and inventory management",
      "Payment gateway integration",
      "Rate limiting and request throttling",
      "Caching strategies for improved performance",
    ],
  },
  {
    id: 6,
    title: "Portfolio Website",
    shortDescription:
      "Modern portfolio website built with React and Material-UI",
    fullDescription:
      "Designed and developed a responsive portfolio website to showcase projects and skills. The site features smooth animations, responsive design, and optimized performance. Built with React and Material-UI for a consistent, modern user interface.",
    githubUrl: "https://github.com/yourgithub/portfolio",
    technologies: [
      "React",
      "TypeScript",
      "Material-UI",
      "Framer Motion",
      "Netlify",
    ],
    features: [
      "Responsive design for all screen sizes",
      "Dark/light mode toggle",
      "Animated transitions and effects",
      "Contact form with validation",
      "SEO optimization",
      "Performance optimizations",
    ],
  },
];
