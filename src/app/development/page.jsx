import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    type: "system",
    title: "Inhouse Patient Management System",
    subtitle: "For Private Hospitals",
    description:
      "Designed and developed a comprehensive Patient Management System using React with Tailwind CSS, Flask, and MySQL. Features include full patient lifecycle tracking, history and treatment modules, digital signature approval, real-time chat between doctor and nurse, and role-based access control with a responsive UI.",
    tags: ["React", "Flask", "MySQL", "Tailwind CSS"],
    frontendGithubUrl:
      "https://github.com/shamenrathnasiri/Inhouse-patient-management-system-for-private-hospitals",
    backendGithubUrl: "",
  },
  {
    type: "system",
    title: "Booking Website for hotel",
    subtitle: "Cabana Haven",
    description:
      "Cabana Haven is a full-stack hotel booking platform with a modern React + TypeScript frontend and a secure Laravel 12 REST API backend (PHP 8.2). The system enables users to browse rooms and manage reservations through a fast, responsive UI while the backend handles authentication with Laravel Sanctum, booking CRUD operations, validation, and database management using MySQL for reliable, scalable operations.",
    tags: ["React","Laravel", "MySQL"],
    frontendGithubUrl:
      "https://github.com/shamenrathnasiri/cabana-haven-design",
    backendGithubUrl: "https://github.com/shamenrathnasiri/cabana-haven-backend",
  },
  {
    type: "system",
    title: "Farm Management System",
    subtitle: "Agro Pulse",
    description:
      "Built a Farm Management System using React, Flask, MySQL, and Tailwind CSS to handle crops, expenses, income, and stock. Implemented CRUD operations, REST APIs, responsive frontend, and modular design for easy scalability.",
    tags: ["React", "Flask", "MySQL", "Tailwind CSS"],
    frontendGithubUrl: "https://github.com/shamenrathnasiri/Farm-Management-System",
    backendGithubUrl: "",
  },
  {
    type: "system",
    title: "Inventory & Order Management System",
    subtitle: "Inventory Master",
    description:
      "Developed a full-featured inventory and order management platform with Angular, ExpressJS, and MongoDB. Features include product categorization, live stock tracking, order handling, user authentication, and secure API integration.",
    tags: ["Angular", "ExpressJS", "MongoDB"],
    frontendGithubUrl:
      "https://github.com/shamenrathnasiri/Inventory-Order-Management-System",
    backendGithubUrl: "",
  },
  {
    type: "system",
    title: "Web Page for Graphic Design Freelancer",
    subtitle: "ABC Graphics",
    description:
      "ABC Beyond Creative is a modern creative agency and portfolio website built with Vite, React, and TypeScript to showcase design and digital services in a fast, elegant single-page experience. It features smooth client-side routing, dynamic portfolio galleries powered by Vite’s import.meta.glob, editable service and project descriptions stored in localStorage, and a polished UI using utility-first styling and reusable components. Optimized for static deployment, the platform provides a scalable, professional foundation for creatives and agencies to present their work with clarity and performance.",
    tags: ["React"],
    frontendGithubUrl: "https://github.com/shamenrathnasiri/Note-Master",
    backendGithubUrl: "",
    websiteUrl: "https://www.abcgraphics.lk",
  },
  {
    type: "system",
    title: "API for Expense Tracker",
    subtitle: "Expense Tracker",
    description:
      "API-expense-tracker — a RESTful API for tracking expenses and incomes with a clean, extensible design. Implemented CRUD endpoints, validation, authentication, and persistence so it’s easy to integrate with web or mobile frontends.",
    tags: ["Node.JS", "Prisma", "MySQL"],
    frontendGithubUrl: "",
    backendGithubUrl:
      "https://github.com/shamenrathnasiri/API-expense-tracker",
  },

  {
    type: "web",
    title: "Hotel Website",
    subtitle: "Hotel Butterfly",
    description:
      "Designed and developed a responsive hotel website using React and Tailwind CSS. Includes room showcase, booking inquiry form, photo gallery, and location integration.",
    tags: ["React", "Tailwind CSS"],
    frontendGithubUrl: "https://github.com/shamenrathnasiri/hotel-website",
    backendGithubUrl: "",
  },
  {
    type: "web",
    title: "Pizza Shop Website",
    subtitle: "Pizza Delight",
    description:
      "Built an engaging pizza shop website with React and Tailwind CSS, featuring a product catalog, responsive layout, and interactive animations for an appealing user experience.",
    tags: ["React", "Tailwind CSS"],
    frontendGithubUrl: "https://github.com/shamenrathnasiri/Pizza-shop-website",
    backendGithubUrl: "",
  },
  {
    type: "web",
    title: "Cafe Shop Website",
    subtitle: "Cozy Bean Cafe",
    description:
      "Created a modern, minimal coffee shop landing page using Figma. Included interactive menus, contact section, and branding-focused visuals.",
    tags: ["React", "Tailwind CSS", "MySQL", "Flask"],
    frontendGithubUrl: "https://github.com/shamenrathnasiri/Cafe-shop-website",
    backendGithubUrl: "",
  },
  {
    type: "web",
    title: "Portfolio Website",
    subtitle: "My Portfolio",
    description:
      "Developed my personal portfolio using NextJS and Tailwind CSS to showcase projects, skills, and contact form. Deployed with Vercel.",
    tags: ["NextJs", "Tailwind CSS"],
    frontendGithubUrl: "https://github.com/shamenrathnasiri/protfolio",
    backendGithubUrl: "",
  },
  // Beginner Projects
  {
    type: "beginner",
    title: "Simple Calculator",
    subtitle: "Basic Arithmetic Operations",
    description:
      "A beginner-friendly calculator application built with Java that performs basic arithmetic operations like addition, subtraction, multiplication, and division with a clean interface.",
    tags: ["Java"],
    frontendGithubUrl: "https://github.com/shamenrathnasiri/simple-calculator",
    backendGithubUrl: "",
  },
  {
    type: "beginner",
    title: "Sign In Page",
    subtitle: "User Authentication Form",
    description:
      "A responsive sign-in page with form validation, built using Java. Includes username and password fields with basic validation and a remember me checkbox.",
    tags: ["Java"],
    frontendGithubUrl: "https://github.com/shamenrathnasiri/sign-in-sign-up-page",
    backendGithubUrl: "",
  },
  {
    type: "beginner",
    title: "To-Do App ",
    subtitle: "only API",
    description:
      "Create a TO-DO app api using Flask and test with Postman.",
    tags: ["Flask","Postman"],
    frontendGithubUrl: "",
    backendGithubUrl: "https://github.com/shamenrathnasiri/To_Do-App",
  },
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-8 sm:p-8 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-10">
          <Link
            href="/#project"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white transition-colors bg-gray-800/60 border border-gray-700 hover:border-red-500 rounded-full px-4 py-2"
          >
            <FaArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
        {/* Centered Main Title with Red Accent */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white relative inline-block">
            <span className="relative z-10">Development Projects</span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-red-600 z-0 transform skew-x-12 animate-pulse"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my development projects from beginner to advanced levels
          </p>
        </div>

        {/* System Development Projects */}
        <div className="mb-12 sm:mb-20 animate-fade-in">
          <div className="flex items-center mb-6 sm:mb-8 animate-slideInLeft">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mr-3 sm:mr-4">
              System Development
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {projects
              .filter((p) => p.type === "system")
              .map((project, i) => (
                <ProjectCard key={i} project={project} index={i} />
              ))}
          </div>
        </div>

        {/* Web Development Projects */}
        <div className="mb-12 sm:mb-20 animate-fade-in">
          <div className="flex items-center mb-6 sm:mb-8 animate-slideInRight">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mr-3 sm:mr-4">
              Web Development
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects
              .filter((p) => p.type === "web")
              .map((project, i) => (
                <ProjectCard key={i} project={project} index={i + projects.filter(p => p.type === "system").length} />
              ))}
          </div>
        </div>

        {/* Beginner Development Projects */}
        <div className="animate-fade-in">
          <div className="flex items-center mb-6 sm:mb-8 animate-slideInLeft">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mr-3 sm:mr-4">
              Beginner Projects
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects
              .filter((p) => p.type === "beginner")
              .map((project, i) => (
                <ProjectCard key={i} project={project} index={i + projects.filter(p => p.type === "system" || p.type === "web").length} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const frontendUrl = project.frontendGithubUrl?.trim();
  const backendUrl = project.backendGithubUrl?.trim();
  const websiteUrl = project.websiteUrl?.trim();
  const hasFrontend = Boolean(frontendUrl);
  const hasBackend = Boolean(backendUrl);
  const hasWebsite = Boolean(websiteUrl);

  return (
    <div 
      className="bg-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border border-gray-700 hover:border-red-500/60 flex flex-col h-full animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="mb-3 sm:mb-4">
          <span className={`inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold mb-1 sm:mb-2 transition-colors duration-300 ${
            project.type === "system" 
              ? "bg-red-900 text-red-100 hover:bg-red-700" 
              : project.type === "web" 
                ? "bg-blue-900 text-blue-100 hover:bg-blue-700" 
                : "bg-green-900 text-green-100 hover:bg-green-700"
          }`}>
            {project.type === "system" ? "System" : project.type === "web" ? "Web" : "Beginner"}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white hover:text-red-300 transition-colors duration-300">{project.title}</h2>
          <h3 className="text-sm sm:text-lg text-red-400">{project.subtitle}</h3>
        </div>
        <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-gray-700 text-gray-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 px-4 py-3 sm:px-6 sm:py-4 border-t border-gray-700 flex justify-between items-center hover:bg-red-900/20 transition-colors duration-300">
        <div className="flex items-center gap-2">
          {hasWebsite && (
            <Link
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-white hover:text-red-400 transition-all duration-300 group hover:bg-red-600 hover:px-3 hover:py-1 hover:rounded-md"
            >
              <FaExternalLinkAlt className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:underline text-xs sm:text-sm">Live</span>
            </Link>
          )}
          {hasFrontend && (
            <Link
              href={frontendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-white hover:text-red-400 transition-all duration-300 group hover:bg-red-600 hover:px-3 hover:py-1 hover:rounded-md"
            >
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:underline text-xs sm:text-sm">
                {hasBackend ? "Frontend" : "View Code"}
              </span>
            </Link>
          )}
          {hasBackend && (
            <Link
              href={backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-white hover:text-red-400 transition-all duration-300 group hover:bg-red-600 hover:px-3 hover:py-1 hover:rounded-md"
            >
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:underline text-xs sm:text-sm">
                {hasFrontend ? "Backend" : "View Code"}
              </span>
            </Link>
          )}
        </div>
        <span className="text-xs text-red-400 font-medium">
          {project.type === "system" ? "Full-stack" : project.type === "web" ? "Frontend" : "Beginner"}
        </span>
      </div>
    </div>
  );
}