import { Box, Chip, Typography } from "@mui/material";
import Section from "../components/layout/Section";
import { workExperiences } from "../data/experience";

const Experience: React.FC = () => (
  <Section id="work" title="Work Experience">
    {workExperiences.map((job, i) => (
      <Box
        key={`${job.company}-${job.duration}`}
        sx={{ pb: 5, mb: 5, borderBottom: i === workExperiences.length - 1 ? 0 : 1, borderColor: "divider" }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
          <Box
            component="img"
            src={job.logo}
            alt={job.company}
            sx={{ width: 48, height: 48, objectFit: "contain", p: 0.75, border: 1, borderColor: "divider", borderRadius: 1 }}
          />
          <Box>
            <Typography variant="h6" component="h3">
              {job.title} · {job.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.duration} ({job.period}) · {job.location}
            </Typography>
          </Box>
        </Box>

        <Typography sx={{ color: "text.secondary", lineHeight: 1.7, mb: 2 }}>{job.description}</Typography>

        <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 3 }}>
          {job.achievements.map((a) => (
            <Typography key={a} component="li" variant="body2" sx={{ lineHeight: 1.75, mb: 1, color: "text.primary" }}>
              {a}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {job.skills.map((s) => (
            <Chip key={s} label={s} size="small" sx={{ bgcolor: "#f3f4f6" }} />
          ))}
        </Box>
      </Box>
    ))}
  </Section>
);

export default Experience;
