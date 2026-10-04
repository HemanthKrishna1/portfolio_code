import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { profile, sections } from "../../data/profile";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(8px)",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 64 }}>
          <Typography
            component="button"
            onClick={() => go("home")}
            sx={{
              flexGrow: 1,
              textAlign: "left",
              border: 0,
              background: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "1rem",
              fontWeight: 600,
              color: "text.primary",
              p: 0,
            }}
          >
            {profile.name}
          </Typography>

          <Box
            component="nav"
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3.5 }}
          >
            {sections.map(({ id, label }) => (
              <MuiLink
                key={id}
                component="button"
                underline="none"
                onClick={() => go(id)}
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: active === id ? "text.primary" : "text.secondary",
                  borderBottom: 2,
                  borderColor: active === id ? "primary.main" : "transparent",
                  py: 0.5,
                  "&:hover": { color: "text.primary" },
                }}
              >
                {label}
              </MuiLink>
            ))}
            <Button
              variant="outlined"
              size="small"
              href={profile.resume}
              target="_blank"
              rel="noopener"
            >
              Resume
            </Button>
          </Box>

          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton aria-label="Close menu" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {sections.map(({ id, label }) => (
              <ListItemButton key={id} selected={active === id} onClick={() => go(id)}>
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </List>
          <Button
            fullWidth
            variant="outlined"
            href={profile.resume}
            target="_blank"
            rel="noopener"
            sx={{ mt: 2 }}
          >
            Resume
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
