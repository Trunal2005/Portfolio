import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  python,
  sql,
  flask,
  pandas,
  numpy,
  matplotlib,
  carrent,
  jobit,
  tripguide,
  nitrix,
} from "../assets";

import airesume from "../assets/projects/ai-resume-analyzer.png";
import netflix from "../assets/projects/netflix-clone.png";
import portfolio from "../assets/projects/portfolio.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI / ML Enthusiast",
    icon: backend,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
  {
    title: "Co-Founder | Nitrix Talent Media",
    icon: nitrix,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Co-Founder",
    company_name: "Nitrix Talent Media",
    icon: nitrix,
    iconBg: "#383E56",
    date: "Mar 2025 – Present",
    points: [
      "Co-founded Nitrix Talent Media focusing on digital campaigns and analytics.",
      "Worked on data-driven campaign strategies and audience insights.",
      "Analyzed engagement metrics to improve content reach and growth.",
      "Managed technical aspects of digital platforms and campaign tracking.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "AI Resume Analyzer",
    description:
      "An AI-powered web application that analyzes resumes against job descriptions and generates compatibility scores and improvement suggestions using Gemini AI.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
      {
        name: "gemini",
        color: "blue-text-gradient",
      },
    ],
    image: airesume,
    source_code_link: "https://github.com/Trunal2005/ai-resume-analyzer",
  },
  {
    name: "Netflix UI Clone",
    description:
      "A responsive frontend clone of the Netflix landing page built using HTML and CSS. The project replicates the visual layout and design of Netflix while focusing on responsive UI and layout accuracy.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/Trunal2005/Netflix-clone-project",
  },
  {
    name: "Portfolio",
    description:
      "A modern interactive developer portfolio built using React, Tailwind CSS, and Three.js to showcase projects, skills, and experience with animated UI components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "portfolio",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Trunal2005/portfolio_3d",
  },
];

export { services, technologies, experiences, testimonials, projects };
