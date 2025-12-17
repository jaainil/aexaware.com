# Aexaware Website

<div align="center">
  <img src="/public/og-image.png" alt="Aexaware Banner" width="100%" />

  # Aexaware

  **Professional website for Aexaware, built with high-performance modern web technologies.**

  [![Astro](https://img.shields.io/badge/Astro-5.16-orange.svg?style=flat&logo=astro)](https://astro.build)
  [![React](https://img.shields.io/badge/React-18.3-blue.svg?style=flat&logo=react)](https://reactjs.org)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

  [**Live Demo**](https://aexaware.com) · [**Report Bug**](https://github.com/yourusername/aexaware.com/issues) · [**Request Feature**](https://github.com/yourusername/aexaware.com/issues)
</div>

## 📚 Table of Contents

-   [Overview](#-overview)
-   [Features](#-features)
-   [Quickstart](#-quickstart)
-   [Project Structure](#-project-structure)
-   [Project Index](#-project-index)
-   [Roadmap](#-roadmap)
-   [Contribution](#-contribution)
-   [Acknowledgements](#-acknowledgements)
-   [License](#-license)

## 🚀 Overview

The Aexaware website is a high-performance static site designed to provide a premium user experience. Built with **Astro**, it leverages the "Islands Architecture" to deliver zero-JavaScript by default, hydrating interactive components only when necessary using **React**. The styling is handled by **Tailwind CSS**, ensuring a responsive and modern design system.

This project includes a fully featured blog with MDX support, SEO optimizations, and privacy-focused analytics via Umami.

## ✨ Features

-   **⚡ High Performance**: Static Site Generation (SSG) for lightning-fast load times and optimal Core Web Vitals.
-   **🎨 Modern Design**: Custom design system built with Tailwind CSS, utilizing `class-variance-authority` for component variants.
-   **📱 Fully Responsive**: Optimized for generic mobile, tablet, and desktop viewports.
-   **📝 Blog Engine**: MDX-based blog system with frontmatter support, distinct layouts, and RSS feed generation.
-   **🔎 SEO Optimized**:
    -   Automatic Sitemap generation.
    -   `robots.txt` configuration.
    -   Canonical URLs and Open Graph tags.
-   **🧩 Interactive Components**:
    -   UI components powered by **Radix UI** primitives for accessibility.
    -   Charts/Diagrams via **Mermaid**.
    -   Dynamic toasts via **Sonner**.
-   **📊 Analytics**: Integrated privacy-friendly analytics with Umami.
-   **🖼️ Image Optimization**: Automatic image optimization using `sharp` service.

## ⚡ Quickstart

Follow these steps to get a local copy up and running.

### Prerequisites

-   **Node.js**: v18.14.1 or higher.
-   **Package Manager**: `npm`, `yarn`, or `bun`.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/aexaware.com.git
    cd aexaware.com
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Start Development Server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321` to see the site.

### Build for Production

To create a production-ready build:

```bash
npm run build
```

To preview the build locally:

```bash
npm run preview
```

## 📂 Project Structure

```text
/
├── public/                # Static assets (fonts, icons, robots.txt)
├── src/
│   ├── assets/            # Processed assets (images, logos)
│   ├── components/        # React & Astro components
│   │   ├── ui/            # Reusable UI primitives (Buttons, Cards)
│   │   └── ...            # Feature-specific components
│   ├── layouts/           # Page layouts (Layout.astro)
│   ├── pages/             # File-based routing & API endpoints
│   ├── styles/            # Global CSS & Tailwind layers
│   └── content/           # Content Collections (Blog posts)
├── astro.config.mjs       # Astro configuration
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Project dependencies & scripts
```

## 🗂️ Project Index

A quick reference to key files and directories:

-   **`src/pages/index.astro`**: The main landing page.
-   **`src/layouts/Layout.astro`**: The base layout wrapper (contains `<head>`, metadata, etc.).
-   **`src/components/Navbar.astro`**: The main navigation bar.
-   **`src/components/Footer.astro`**: The site footer.
-   **`src/content/config.ts`**: Configuration for Astro Content Collections (e.g., Blog schema).
-   **`astro.config.mjs`**: Configures integrations like React, Tailwind, Sitemap, and Umami.
-   **`tailwind.config.ts`**: Defines the design system (colors, fonts, animations).

## 🗺️ Roadmap

-   [x] Initial Release with Home, About, Services, Portfolio, Blog & Contact pages.
-   [x] MDX Blog Integration.
-   [x] SEO Setup (Sitemap, Metadata).
-   [ ] **Unit Testing**: Add Jest or Vitest for component testing.
-   [ ] **E2E Testing**: Implement Playwright for critical flows.
-   [ ] **Dark Mode**: Add a theme toggle.
-   [ ] **Search**: Implement site-wide search for blog posts and services.

## 🤝 Contribution

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 💎 Acknowledgements

-   [Astro](https://astro.build) - The web framework used.
-   [React](https://reactjs.org) - For interactive UI components.
-   [Tailwind CSS](https://tailwindcss.com) - For styling.
-   [Lucide Icons](https://lucide.dev) - Beautiful & consistent icons.
-   [Radix UI](https://www.radix-ui.com) - Unstyled, accessible UI primitives.
-   [Shadcn UI](https://ui.shadcn.com) - Inspiration for component patterns.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
