# 🚀 Jean Rufino | Portfolio & Automations

Welcome to the repository of my professional portfolio! This is a modern, responsive, and bilingual web application built to showcase my projects and skills as a Junior Data Engineer & AI Solutions Analyst. 

## 🌟 Features

- **⚡ Next.js 14 (App Router)**: Fast, server-rendered React application for optimal SEO and performance.
- **🎨 Tailwind CSS**: Modern and responsive styling.
- **✨ Framer Motion**: Smooth and professional animations across all sections.
- **🌍 Bilingual Support (PT/EN)**: Native support for both Portuguese and English, toggled instantly.
- **📧 Contact Form via Web3Forms**: Working contact form sending emails directly from the client without complex backend setup.
- **🐳 Dockerized**: Fully configured with `docker-compose` and a `Dockerfile` for instantaneous local development and deployment.
- **🛠 Static Data Ready**: Projects and content load instantly, avoiding hydration mismatches and local API calls during SSR.

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/jeanruf1/portfolio-jean.git
cd portfolio-jean
```

### 2. Configure Environment Variables
Copy the `.env.example` file to create your local `.env.local` configuration.
```bash
cp .env.example .env.local
```
Add your free Web3Forms access key to `.env.local` to enable contact form submissions.

### 3. Run with Docker (Recommended)
This project is configured to run flawlessly with Docker and Docker Compose.
```bash
docker compose up
```
Open `http://localhost:3000` to view it in the browser.

### 4. Or run locally with Node.js
If you prefer running directly on your host machine:
```bash
npm install
npm run dev
```

## 🛠 Tech Stack

* **Framework:** React + Next.js
* **Styling:** Tailwind CSS + Lucide Icons
* **Animations:** Framer Motion
* **Deployment/Dev:** Docker + Docker Compose
* **API Integration:** Web3Forms

## 📝 License

© 2026 Jean Rufino. All rights reserved.
