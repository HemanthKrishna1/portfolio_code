import { Box, Container, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <Box
    component="section"
    id={id}
    sx={{ py: { xs: 8, md: 12 }, borderTop: 1, borderColor: "divider" }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "220px 1fr" },
          gap: { xs: 4, md: 8 },
        }}
      >
        <Typography
          variant="overline"
          component="h2"
          sx={{
            color: "text.secondary",
            letterSpacing: "0.12em",
            fontWeight: 600,
            fontSize: "0.8rem",
            lineHeight: 1.6,
            position: { md: "sticky" },
            top: { md: 96 },
            alignSelf: "start",
          }}
        >
          {title}
        </Typography>
        <Box>{children}</Box>
      </Box>
    </Container>
  </Box>
);

export default Section;
