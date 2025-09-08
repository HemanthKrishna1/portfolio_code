import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Fade,
} from "@mui/material";
import { GitHub, Close } from "@mui/icons-material";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
  color: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Inventory Management System",
      shortDescription:
        "A full-stack web application for tracking inventory and user requests",
      fullDescription:
        "Built a comprehensive inventory management system with role-based access control, real-time notifications, and detailed analytics dashboard. The system allows for tracking inventory levels, managing user requests, and generating custom reports based on various parameters.",
      image:
        "https://via.placeholder.com/600x340/3f51b5/ffffff?text=Inventory+Management",
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
      color: "#3f51b5",
    },
    {
      id: 2,
      title: "Rental Book Tracking",
      shortDescription:
        "Developed a rental book tracking system with React and Redux Toolkit",
      fullDescription:
        "Designed and implemented a rental book tracking system that helps libraries and bookstores manage their rental inventory. The application includes features for tracking overdue rentals, calculating fees, and managing customer information. The frontend was built with React and Redux Toolkit for state management.",
      image:
        "https://via.placeholder.com/600x340/00897b/ffffff?text=Rental+Book+Tracking",
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
      color: "#00897b",
    },
    {
      id: 3,
      title: "gRPC in Rust Implementation",
      shortDescription:
        "A simple gRPC service implementation in Rust using Tonic framework",
      fullDescription:
        "Built a high-performance gRPC service in Rust using the Tonic framework. The service demonstrates modern microservices architecture with Protocol Buffers for efficient serialization, async runtime with Tokio, and environment-based configuration. Includes comprehensive testing setup with grpcurl and Postman integration for service validation.",
      image:
        "https://via.placeholder.com/600x340/ff9800/ffffff?text=gRPC+Service",
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
      color: "#ff9800",
    },

    {
      id: 5,
      title: "E-commerce API",
      shortDescription: "Robust backend API powering an e-commerce platform",
      fullDescription:
        "Designed and built a scalable RESTful API for an e-commerce platform that handles product management, user authentication, order processing, and payment integration. The API includes comprehensive error handling, request validation, and detailed documentation using Swagger.",
      image:
        "https://via.placeholder.com/600x340/2196f3/ffffff?text=E-commerce+API",
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
      color: "#2196f3",
    },
    {
      id: 6,
      title: "Portfolio Website",
      shortDescription:
        "Modern portfolio website built with React and Material-UI",
      fullDescription:
        "Designed and developed a responsive portfolio website to showcase projects and skills. The site features smooth animations, responsive design, and optimized performance. Built with React and Material-UI for a consistent, modern user interface.",
      image:
        "https://via.placeholder.com/600x340/673ab7/ffffff?text=Portfolio+Website",
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
      color: "#673ab7",
    },
  ];

  const filteredProjects = projects;

  const getProjectImage = (project: Project) => {
    return {
      backgroundImage: `linear-gradient(135deg, ${project.color}80 0%, ${project.color}50 100%)`,
    };
  };

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.4,
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(33, 150, 243, 0.1) 0%, transparent 20%), radial-gradient(circle at 10% 90%, rgba(63, 81, 181, 0.05) 0%, transparent 30%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h6"
            color="primary"
            fontWeight={500}
            sx={{ mb: 2, letterSpacing: "0.05em", opacity: 0.9 }}
          >
            MY WORK
          </Typography>

          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              mb: 2,
              backgroundImage:
                "linear-gradient(45deg, #1a237e, #0d47a1, #2196f3)",
              backgroundSize: "100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              MozBackgroundClip: "text",
              MozTextFillColor: "transparent",
            }}
          >
            Featured Projects
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            Explore some of my recent work across various technologies and
            domains.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Fade in={true} timeout={500}>
                <Card
                  onClick={() => handleOpenProject(project)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                    },
                    "&:hover .project-overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        height: "100%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        ...getProjectImage(project),
                      }}
                    >
                      <Box
                        className="project-overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: "rgba(0,0,0,0.7)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            borderRadius: 30,
                            px: 3,
                            py: 1,
                            fontWeight: 600,
                            textTransform: "none",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenProject(project);
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </CardMedia>
                  </Box>

                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.6 }}
                    >
                      {project.shortDescription}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.8,
                        mt: "auto",
                      }}
                    >
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(33, 150, 243, 0.1)",
                            color: "primary.main",
                            fontWeight: 500,
                            fontSize: "0.7rem",
                            height: 24,
                          }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip
                          label={`+${project.technologies.length - 3}`}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(33, 150, 243, 0.05)",
                            fontWeight: 500,
                            fontSize: "0.7rem",
                            height: 24,
                          }}
                        />
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length === 0 && (
          <Box
            sx={{
              py: 8,
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: 4,
              mt: 4,
            }}
          >
            <Typography variant="h6" color="text.secondary">
              No projects found in this category.
            </Typography>
          </Box>
        )}

        <Dialog
          open={!!selectedProject}
          onClose={handleCloseProject}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              overflow: "hidden",
            },
          }}
        >
          {selectedProject && (
            <>
              <Box
                sx={{
                  height: { xs: 200, md: 300 },
                  ...getProjectImage(selectedProject),
                }}
              />
              <DialogTitle sx={{ pb: 1, pt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography variant="h4" fontWeight={700}>
                    {selectedProject.title}
                  </Typography>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleCloseProject}
                    aria-label="close"
                  >
                    <Close />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent dividers>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {selectedProject.fullDescription}
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  fontWeight={600}
                  sx={{ mt: 3 }}
                >
                  Key Features
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    mb: 3,
                  }}
                >
                  {selectedProject.features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          backgroundColor: "rgba(33, 150, 243, 0.1)",
                          color: "primary.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          flexShrink: 0,
                          mt: 0.5,
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        borderRadius: "12px",
                        backgroundColor: "rgba(33, 150, 243, 0.1)",
                        color: "primary.main",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </DialogContent>
              <DialogActions sx={{ px: 3, py: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<GitHub />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  sx={{
                    borderRadius: 30,
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    textTransform: "none",
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2 },
                  }}
                >
                  View on GitHub
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
