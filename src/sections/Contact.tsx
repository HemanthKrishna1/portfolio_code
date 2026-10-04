import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import Section from "../components/layout/Section";
import { emailConfig } from "../config/email";
import { profile } from "../data/profile";

const details = [
  { title: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { title: "Phone", value: profile.phone, href: profile.phoneHref },
  { title: "Location", value: profile.location, href: profile.locationHref },
  { title: "LinkedIn", value: "hemanth-krishna-", href: profile.linkedin },
  { title: "GitHub", value: "HemanthKrishna1", href: profile.github },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    emailjs.init(emailConfig.publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
        throw new Error("EmailJS not configured. Please check your environment variables.");
      }
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          subject: `New Contact Form Message from ${formData.name}`,
          from_name: formData.name,
          reply_to: formData.email,
        },
        emailConfig.publicKey
      );
      setSnackbar({
        open: true,
        message: "Thank you! Your message has been sent successfully.",
        severity: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSnackbar({
        open: true,
        message:
          "Sorry, there was an error sending your message. Please try again or contact me directly.",
        severity: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="contact" title="Get in Touch">
      <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
        Let's Connect!
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 5, maxWidth: 560, lineHeight: 1.8 }}>
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" }, gap: { xs: 5, md: 8 } }}>
        <Box>
          {details.map((d) => (
            <Box key={d.title} sx={{ mb: 2.5 }}>
              <Typography variant="caption" sx={{ color: "text.secondary", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {d.title}
              </Typography>
              <Link
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                underline="hover"
                color="text.primary"
                sx={{ display: "block", fontWeight: 500 }}
              >
                {d.value}
              </Link>
            </Box>
          ))}
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <Typography fontWeight={600}>Send Me a Message</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }}>
            <TextField label="Your Name" name="name" value={formData.name} onChange={handleChange} required />
            <TextField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </Box>
          <TextField label="Your Message" name="message" value={formData.message} onChange={handleChange} required multiline rows={5} />
          <Box>
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={16} color="inherit" /> : undefined}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Section>
  );
};

export default Contact;
