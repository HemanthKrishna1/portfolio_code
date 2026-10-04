import { Box, Container, Typography } from "@mui/material";
import { profile } from "../../data/profile";

const Footer: React.FC = () => (
  <Box component="footer" sx={{ py: 4, borderTop: 1, borderColor: "divider" }}>
    <Container maxWidth="lg">
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
