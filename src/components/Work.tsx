import { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import {
  Work as WorkIcon,
  LocationOn,
  CalendarToday,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  logo: string;
  color: string;
}

const Work: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const workExperiences: WorkExperience[] = [
    {
      title: "Software Engineer Intern",
      company: "NXP Semiconductors",
      location: "San Jose, CA",
      duration: "August 2024 - Present",
      period: "Ongoing",
      description:
        "NXP Semiconductors is a global leader in secure connectivity solutions for embedded applications, driving innovation in automotive, industrial, IoT, and mobile industries.",
      achievements: [
        "Streamlined operations for 5 cross-functional teams by implementing dynamic user roles and automated email notifications, reducing inventory request processing time by 30%.",
        "Developed a Django-powered tool to systematically recognize regression issues in JIRA, enhancing issue management processes across 3 projects.",
        "Integrated a Python backend API to parse AXF files, generate & analyze an Excel report in UI using Django & Svelte, with server-side pagination for semiconductor chips data.",
        "Built a full-stack web application using React and Django, enabling product managers, sales teams, and engineers across 3 teams to compare features and track historical changes.",
      ],
      skills: [
        "Python",
        "TypeScript",
        "FastAPI",
        "React",
        "Redux toolkit",
        "Django",
        "LDAP",
        "JIRA",
        "Svelte",
        "PostgreSQL",
        "Git",
        "Bitbucket",
        "Bitbucket webhooks",
      ],
      color: "#0856A2",
      logo: "path/to/logo.png",
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
        "Led implementation of unit testing protocols, elevating software reliability across three high-impact projects, resulting in a zero-percent error in deployments.",
        "Drove Backend-for-Frontend (BFF) implementation, reducing backend modifications and enabling effortless frontend customization, improving scalability.",
        "Developed an advanced dialog interface with filtering and drag-and-drop features, driving 20% of progress in the cognitive assortment planning initiative, earning positive feedback from product owner for enhanced usability.",
      ],
      skills: [
        "React",
        "Redux Toolkit",
        "Material-UI",
        "TypeScript",
        "Jest",
        "BFF Architecture",
        "Git",
        "GitHub",
      ],
      color: "#231F20",
      logo: "path/to/logo.png",
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
        "Enhanced user readability and accessibility by 90% by collaborating with UI/UX designers to meet NBCU and DAZN standards.",
        "Optimized backend API calls by uniquely identifying notification messages, reducing backend load by 60-70%.",
        "Launched a feature flagging solution to immediately cancel non-responsive API requests, supporting over 45 clients including NBCU, Samsung, and DraftKings.",
        "Resolved 15+ user application bugs reported through JIRA, leading to a streamlined workflow and improved application performance.",
      ],
      skills: [
        "Python",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "AWS",
        "Cypress",
        "Git",
        "GitHub",
      ],
      color: "#FF6B00",
      logo: "path/to/logo.png",
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
        "Python",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "AWS",
        "Cypress",
        "Git",
        "GitHub",
      ],
      color: "#FF6B00",
      logo: "path/to/logo.png",
    },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setActiveJobIndex((prev) =>
      prev === workExperiences.length - 1 ? 0 : prev + 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setActiveJobIndex((prev) =>
      prev === 0 ? workExperiences.length - 1 : prev - 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleJobSelect = (index: number) => {
    if (isAnimating || index === activeJobIndex) return;
    setIsAnimating(true);
    setActiveJobIndex(index);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [activeJobIndex]);

  return (
    <Box
      id="work"
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
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
            "radial-gradient(circle at 90% 10%, rgba(63, 81, 181, 0.1) 0%, transparent 30%), radial-gradient(circle at 10% 90%, rgba(33, 150, 243, 0.05) 0%, transparent 40%)",
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
            MY JOURNEY
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
            Work Experience
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            My professional journey as a Software Engineer across different
            companies and roles.
          </Typography>
        </Box>

        {isMobile ? (
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                {activeJobIndex + 1}/{workExperiences.length}:{" "}
                {workExperiences[activeJobIndex].company}
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    "&:hover": { backgroundColor: "white" },
                  }}
                >
                  <KeyboardArrowLeft />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    "&:hover": { backgroundColor: "white" },
                  }}
                >
                  <KeyboardArrowRight />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                opacity: isAnimating ? 0 : 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <WorkExperienceCard
                experience={workExperiences[activeJobIndex]}
              />
            </Box>
          </Box>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  position: "sticky",
                  top: 80,
                  maxHeight: "70vh",
                  overflowY: "auto",
                  pr: 2,
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "rgba(0,0,0,0.05)",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                  },
                }}
              >
                {workExperiences.map((job, index) => (
                  <Box
                    key={index}
                    onClick={() => handleJobSelect(index)}
                    sx={{
                      mb: 2,
                      cursor: "pointer",
                      position: "relative",
                      borderRadius: 3,
                      p: 2,
                      transition: "all 0.3s ease",
                      backgroundColor:
                        activeJobIndex === index
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.5)",
                      boxShadow:
                        activeJobIndex === index
                          ? "0 8px 20px rgba(0,0,0,0.1)"
                          : "none",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.9)",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                      },
                      borderLeft:
                        activeJobIndex === index
                          ? `4px solid ${job.color}`
                          : "4px solid transparent",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        component="img"
                        src={job.logo}
                        alt={job.company}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: "contain",
                          p: 1,
                          borderRadius: 2,
                          backgroundColor: "white",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {job.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <CalendarToday sx={{ fontSize: 12 }} />
                          {job.period}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}

                <Button
                  variant="outlined"
                  fullWidth
                  component="a"
                  href="/resume.pdf"
                  target="_blank"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    borderWidth: "2px",
                    "&:hover": {
                      borderWidth: "2px",
                    },
                  }}
                >
                  View Full Resume
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box
                ref={containerRef}
                sx={{
                  opacity: isAnimating ? 0 : 1,
                  transition: "opacity 0.3s ease-in-out",
                  height: "100%",
                }}
              >
                <WorkExperienceCard
                  experience={workExperiences[activeJobIndex]}
                  showFullDetails={true}
                />
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

interface WorkExperienceCardProps {
  experience: WorkExperience;
  showFullDetails?: boolean;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  experience,
  showFullDetails = false,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        p: 1,
        borderRadius: 4,
        height: "100%",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 2 }}>
          <Box
            component="img"
            src={experience.logo}
            alt={experience.company}
            sx={{
              width: 70,
              height: 70,
              objectFit: "contain",
              p: 1,
              borderRadius: 2,
              backgroundColor: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          />
          <Box>
            <Typography variant="h5" fontWeight={700}>
              {experience.company}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: experience.color,
                fontWeight: 600,
                mt: 0.5,
              }}
            >
              {experience.title}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 3, mb: 3, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CalendarToday fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {experience.duration}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {experience.location}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: "1.1rem",
            fontWeight: 500,
            lineHeight: 1.6,
            color: "text.primary",
          }}
        >
          {experience.description}
        </Typography>

        {showFullDetails && (
          <>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              <WorkIcon fontSize="small" color="primary" />
              Key Achievements
            </Typography>

            <Box sx={{ mb: 4 }}>
              {experience.achievements.map((achievement, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    mb: 2,
                    alignItems: "flex-start",
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
                      mr: 2,
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {achievement}
                  </Typography>
                </Box>
              ))}
            </Box>
          </>
        )}

        <Divider sx={{ mb: 3 }} />

        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          Technologies Used:
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {experience.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="medium"
              sx={{
                borderRadius: "12px",
                backgroundColor: "rgba(33, 150, 243, 0.1)",
                color: "primary.main",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(33, 150, 243, 0.2)",
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Work;
