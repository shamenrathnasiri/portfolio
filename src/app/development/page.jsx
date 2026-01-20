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
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-gray-950 text-white px-4 py-8 sm:p-8 animate-fade-in relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-700/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-6 sm:mb-10">
          <Link
            href="/#project"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-red-100 hover:text-white transition-all duration-300 bg-gradient-to-r from-red-900/80 to-red-800/60 hover:from-red-800 hover:to-red-700 border-2 border-red-600/50 hover:border-red-500 rounded-full px-6 py-2.5 shadow-lg shadow-red-900/50 hover:shadow-xl hover:shadow-red-800/60 hover:scale-105 transform"
          >
            <FaArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-semibold">Back to Projects</span>
          </Link>
        </div>
        {/* Centered Main Title with Red Accent */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 relative z-10 drop-shadow-2xl">
              Development Projects
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 blur-2xl opacity-30 animate-pulse"></div>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full animate-pulse"></span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A collection of my <span className="text-red-400 font-semibold">innovative</span> development projects from beginner to <span className="text-red-400 font-semibold">advanced</span> levels
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>

        {/* System Development Projects */}
        <div className="mb-12 sm:mb-20 animate-fade-in">
          <div className="flex items-center mb-6 sm:mb-8 animate-slideInLeft group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-900/50">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                System Development
              </h2>
            </div>
            <div className="flex-grow h-1 bg-gradient-to-r from-red-600 via-red-500/50 to-transparent ml-4 rounded-full"></div>
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
          <div className="flex items-center mb-6 sm:mb-8 animate-slideInRight group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-900/50">
                <span className="text-2xl">💻</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Web Development
              </h2>
            </div>
            <div className="flex-grow h-1 bg-gradient-to-r from-red-600 via-red-500/50 to-transparent ml-4 rounded-full"></div>
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
          <div className="flex items-center mb-6 sm:mb-8 animate-slideInLeft group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-900/50">
                <span className="text-2xl">⭐</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Beginner Projects
              </h2>
            </div>
            <div className="flex-grow h-1 bg-gradient-to-r from-red-600 via-red-500/50 to-transparent ml-4 rounded-full"></div>
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
      className="group bg-gradient-to-br from-gray-900 via-gray-900/95 to-black rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out hover:scale-[1.03] border-2 border-red-900/30 hover:border-red-500/80 flex flex-col h-full animate-slide-up relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-600/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/0 via-red-500/50 to-red-600/0 blur-xl"></div>
      </div>
      
      <div className="p-4 sm:p-6 flex flex-col flex-grow relative z-10">
        <div className="mb-3 sm:mb-4">
          <span className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold mb-2 sm:mb-3 transition-all duration-300 shadow-lg ${
            project.type === "system" 
              ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-red-900/50" 
              : project.type === "web" 
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 shadow-red-800/50" 
                : "bg-gradient-to-r from-red-700 to-red-800 text-white hover:from-red-600 hover:to-red-700 shadow-red-900/50"
          }`}>
            {project.type === "system" ? "🎯 System" : project.type === "web" ? "🌐 Web" : "✨ Beginner"}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300 mb-1">
            {project.title}
          </h2>
          <h3 className="text-sm sm:text-base text-red-400 font-semibold">{project.subtitle}</h3>
        </div>
        
        {/* Divider Line */}
        <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full mb-4 group-hover:w-full transition-all duration-500"></div>
        
        <p className="text-gray-300 group-hover:text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-grow transition-colors duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold border border-red-900/30 hover:border-red-500/50 hover:from-red-900/50 hover:to-red-800/50 hover:text-white transition-all duration-300 hover:scale-105 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-950 via-red-950/20 to-gray-950 px-4 py-4 sm:px-6 sm:py-5 border-t-2 border-red-900/40 group-hover:border-red-500/60 flex justify-between items-center transition-all duration-300 relative z-10">
        <div className="flex items-center gap-3 sm:gap-4">
          {hasWebsite && (
            <Link
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-red-400 hover:text-white transition-all duration-300 group/link hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 px-3 py-2 rounded-lg font-semibold shadow-sm hover:shadow-lg hover:shadow-red-900/50"
            >
              <FaExternalLinkAlt className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
              <span className="text-xs sm:text-sm">Live</span>
            </Link>
          )}
          {hasFrontend && (
            <Link
              href={frontendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-red-400 hover:text-white transition-all duration-300 group/link hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 px-3 py-2 rounded-lg font-semibold shadow-sm hover:shadow-lg hover:shadow-red-900/50"
            >
              <FaGithub className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
              <span className="text-xs sm:text-sm">
                {hasBackend ? "Frontend" : "Code"}
              </span>
            </Link>
          )}
          {hasBackend && (
            <Link
              href={backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-red-400 hover:text-white transition-all duration-300 group/link hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 px-3 py-2 rounded-lg font-semibold shadow-sm hover:shadow-lg hover:shadow-red-900/50"
            >
              <FaGithub className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
              <span className="text-xs sm:text-sm">
                {hasFrontend ? "Backend" : "Code"}
              </span>
            </Link>
          )}
        </div>
        <span className="text-xs text-red-400 font-bold px-3 py-1.5 bg-red-950/50 rounded-lg border border-red-800/50">
          {project.type === "system" ? "Full-stack" : project.type === "web" ? "Frontend" : "Beginner"}
        </span>
      </div>
    </div>
  );
}