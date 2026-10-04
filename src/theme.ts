import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1e3a5f" },
    text: { primary: "#111827", secondary: "#4b5563" },
    divider: "#e5e7eb",
    background: { default: "#ffffff", paper: "#ffffff" },
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 6, padding: "8px 20px" } },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 4, fontWeight: 500, fontSize: "0.8125rem" },
      },
    },
  },
});
