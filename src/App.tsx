import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
