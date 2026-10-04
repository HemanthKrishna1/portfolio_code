import { Box, Chip, Link, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Section from "../components/layout/Section";
import { projects } from "../data/projects";

const Projects: React.FC = () => (
  <Section id="projects" title="Projects">
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
      {projects.map((p) => (
        <Box
          key={p.id}
          sx={{ border: 1, borderColor: "divider", borderRadius: 1, p: 3, display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2, mb: 1 }}>
            <Typography variant="h6" component="h3">{p.title}</Typography>
            <Link
              href={p.githubUrl}
              target="_blank"
              rel="noopener"
              aria-label={`${p.title} on GitHub`}
              color="text.secondary"
              sx={{ display: "inline-flex", "&:hover": { color: "text.primary" } }}
            >
              <GitHub fontSize="small" />
            </Link>
          </Box>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1.5 }}>{p.shortDescription}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 2 }}>
            {p.fullDescription}
          </Typography>
          <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 2.5 }}>
            {p.features.map((f) => (
              <Typography key={f} component="li" variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                {f}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: "auto" }}>
            {p.technologies.map((t) => (
              <Chip key={t} label={t} size="small" sx={{ bgcolor: "#f3f4f6" }} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  </Section>
);

export default Projects;
