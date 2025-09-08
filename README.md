# Hemanth Krishna - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a working contact form with EmailJS integration.

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio_code
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your EmailJS credentials:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Add Repository Secrets**

   - Go to your GitHub repository
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret** and add these three secrets with your actual EmailJS values:
     ```
     VITE_EMAILJS_SERVICE_ID = your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID = your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY = your_public_key_here
     ```

2. **Enable GitHub Pages**

   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Deploy**
   - Push your changes to the `main` branch
   - The GitHub Action will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/portfolio_code/`

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
# Then manually upload the dist/ folder contents to your hosting provider
```

## 📧 EmailJS Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add these to your `.env` file

## 🛠️ Built With

- **React** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Material-UI** - Component Library
- **EmailJS** - Email Service
- **Framer Motion** - Animations

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Contact.tsx     # Contact form with EmailJS
│   ├── Home.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── Work.tsx        # Work experience
├── config/             # Configuration files
│   └── email.ts        # EmailJS configuration
└── assets/             # Static assets
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
