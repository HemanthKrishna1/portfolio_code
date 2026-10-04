# Hemanth Krishna - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience. Built with React, TypeScript, and Material-UI, featuring a fully functional contact form.

🌐 **Live Demo**: [hemanthkrishna1.github.io/portfolio_code](https://hemanthkrishna1.github.io/portfolio_code/)

## ✨ Features

- **Responsive Design** - Works seamlessly on all devices
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Working Contact Form** - Integrated with EmailJS for direct messaging
- **Project Showcase** - Interactive portfolio of my work
- **Skills & Experience** - Comprehensive overview of my technical expertise

## 🛠️ Built With

- **React** - UI Library
- **TypeScript** - Type Safety
- **Material-UI** - Component Library
- **Vite** - Build Tool & Development Server
- **EmailJS** - Contact Form Integration
- **Framer Motion** - Smooth Animations
- **GitHub Pages** - Hosting & Deployment

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/HemanthKrishna1/portfolio_code.git
cd portfolio_code

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Create an [EmailJS](https://www.emailjs.com/) account
2. Set up an email service and template
3. Add your credentials as GitHub repository secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## 📂 Project Structure

```
src/
├── components/
│   ├── Contact.tsx     # Contact form with EmailJS
│   ├── Home.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation
│   ├── Projects.tsx    # Project showcase
│   ├── Skills.tsx      # Technical skills
│   └── Work.tsx        # Work experience
├── config/
│   └── email.ts        # EmailJS configuration
└── assets/             # Images and static files
```

## 🚀 Deployment

This project automatically deploys to GitHub Pages via GitHub Actions. Simply push to the `main` branch and your changes will be live!

---

**Connect with me:**

- 📧 Email: k.hemanth1999@gmail.com
- 💼 LinkedIn: [linkedin.com/in/hemanth-krishna-](https://www.linkedin.com/in/hemanth-krishna-/)
- 🐱 GitHub: [github.com/HemanthKrishna1](https://github.com/HemanthKrishna1)
