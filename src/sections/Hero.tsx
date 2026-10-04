import { Avatar, Box, Button, Container, Link, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { profile } from "../data/profile";
import profileImage from "../assets/Hemanth-Krishna.png";

const links = [
  { label: "GitHub", href: profile.github, icon: <GitHub fontSize="small" /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <LinkedIn fontSize="small" /> },
  { label: "Email", href: `mailto:${profile.email}`, icon: <Email fontSize="small" /> },
];

const Hero: React.FC = () => (
  <Box component="section" id="home" sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 8, md: 12 } }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 280px" },
          gap: { xs: 5, md: 10 },
          alignItems: "center",
        }}
      >
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Typography
            sx={{ color: "text.secondary", fontWeight: 500, mb: 2, letterSpacing: "0.08em", fontSize: "0.85rem" }}
          >
            {profile.role.toUpperCase()}
          </Typography>
          <Typography variant="h2" component="h1" sx={{ fontSize: { xs: "2.25rem", md: "3.25rem" }, mb: 2 }}>
            {profile.name}
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
            {profile.tagline}
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, maxWidth: 640, mb: 4 }}>
            {profile.summary}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
            <Button variant="contained" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View My Work
            </Button>
            <Button variant="outlined" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener"
                underline="hover"
                color="text.secondary"
                sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, fontSize: "0.9rem", "&:hover": { color: "text.primary" } }}
              >
                {l.icon}
                {l.label}
              </Link>
            ))}
          </Box>
        </Box>

        <Box sx={{ order: { xs: 1, md: 2 }, display: "flex", justifyContent: { xs: "flex-start", md: "center" } }}>
          <Avatar
            alt={profile.name}
            src={profileImage}
            variant="rounded"
            sx={{ width: { xs: 160, md: 260 }, height: { xs: 160, md: 260 }, border: 1, borderColor: "divider" }}
          />
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Hero;
