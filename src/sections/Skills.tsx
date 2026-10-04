import { Box, Chip, Typography } from "@mui/material";
import Section from "../components/layout/Section";
import { skillCategories } from "../data/skills";

const Skills: React.FC = () => (
  <Section id="skills" title="Skills & Technologies">
    <Typography sx={{ color: "text.secondary", mb: 5, maxWidth: 640, lineHeight: 1.8 }}>
      I've worked with various technologies in the software engineering world,
      from front end to back end and deployment.
    </Typography>
    {skillCategories.map((cat, i) => (
      <Box
        key={cat.name}
        sx={{
          py: 3,
          borderTop: i === 0 ? 0 : 1,
          borderColor: "divider",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
          gap: { xs: 1.5, sm: 3 },
        }}
      >
        <Typography fontWeight={600}>{cat.name}</Typography>
        <Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
            {cat.skills.map((s) => (
              <Chip key={s} label={s} variant="outlined" size="small" />
            ))}
          </Box>
          <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
            {cat.description}
          </Typography>
        </Box>
      </Box>
    ))}
  </Section>
);

export default Skills;
