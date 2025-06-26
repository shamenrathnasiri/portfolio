import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    type: "system",
    title: "Inhouse Patient Management System",
    subtitle: "For Private Hospitals",
    description:
      "Designed and developed a comprehensive Patient Management System using React with Tailwind CSS, Flask, and MySQL. Features include full patient lifecycle tracking, history and treatment modules, digital signature approval, real-time chat between doctor and nurse, and role-based access control with a responsive UI.",
    tags: ["React", "Flask", "MySQL", "Tailwind CSS"],
    githubUrl:
      "https://github.com/shamenrathnasiri/Inhouse-patient-management-system-for-private-hospitals",
  },
  {
    type: "system",
    title: "Farm Management System",
    subtitle: "Agro Pulse",
    description:
      "Built a Farm Management System using React, Flask, MySQL, and Tailwind CSS to handle crops, expenses, income, and stock. Implemented CRUD operations, REST APIs, responsive frontend, and modular design for easy scalability.",
    tags: ["React", "Flask", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/shamenrathnasiri/Farm-Management-System",
  },
  {
    type: "system",
    title: "Inventory & Order Management System",
    subtitle: "Inventory Master",
    description:
      "Developed a full-featured inventory and order management platform with Angular, ExpressJS, and MongoDB. Features include product categorization, live stock tracking, order handling, user authentication, and secure API integration.",
    tags: ["Angular", "ExpressJS", "MongoDB"],
    githubUrl:
      "https://github.com/shamenrathnasiri/Inventory-Order-Management-System",
  },
  {
    type: "system",
    title: "Note App",
    subtitle: "Note Master",
    description:
      "Created a full-stack note-taking application with Angular, Flask, and MySQL. Allows users to create, edit, and manage notes with authentication, clean UI, and full CRUD features.",
    tags: ["Angular", "Flask", "MySQL"],
    githubUrl: "https://github.com/shamenrathnasiri/Note-Master",
  },
  {
    type: "web",
    title: "Hotel Website",
    subtitle: "Hotel Butterfly",
    description:
      "Designed and developed a responsive hotel website using React and Tailwind CSS. Includes room showcase, booking inquiry form, photo gallery, and location integration.",
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/shamenrathnasiri/hotel-website",
  },
  {
    type: "web",
    title: "Pizza Shop Website",
    subtitle: "Pizza Delight",
    description:
      "Built an engaging pizza shop website with React and Tailwind CSS, featuring a product catalog, responsive layout, and interactive animations for an appealing user experience.",
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/shamenrathnasiri/Pizza-shop-website",
  },
  {
    type: "web",
    title: "Cafe Shop Website",
    subtitle: "Cozy Bean Cafe",
    description:
      "Created a modern, minimal coffee shop landing page using Figma. Included interactive menus, contact section, and branding-focused visuals.",
    tags: ["React", "Tailwind CSS", "MySQL", "Flask"],
    githubUrl: "https://github.com/shamenrathnasiri/Cafe-shop-website",
  },
  {
    type: "web",
    title: "Portfolio Website",
    subtitle: "My Portfolio",
    description:
      "Developed my personal portfolio using NextJS and Tailwind CSS to showcase projects, skills, and contact form. Deployed with Vercel.",
    tags: ["NextJs", "Tailwind CSS"],
    githubUrl: "https://github.com/shamenrathnasiri/protfolio",
  },
  // Beginner Projects
  {
    type: "beginner",
    title: "Simple Calculator",
    subtitle: "Basic Arithmetic Operations",
    description:
      "A beginner-friendly calculator application built with Java that performs basic arithmetic operations like addition, subtraction, multiplication, and division with a clean interface.",
    tags: ["Java"],
    githubUrl: "https://github.com/shamenrathnasiri/simple-calculator",
  },
  {
    type: "beginner",
    title: "Sign In Page",
    subtitle: "User Authentication Form",
    description:
      "A responsive sign-in page with form validation, built using Java. Includes username and password fields with basic validation and a remember me checkbox.",
    tags: ["Java"],
    githubUrl: "https://github.com/shamenrathnasiri/sign-in-sign-up-page",
  },
  {
    type: "beginner",
    title: "To-Do App ",
    subtitle: "only API",
    description:
      "Create a TO-DO app api using Flask and test with Postman.",
    tags: ["Flask","Postman"],
    githubUrl: "https://github.com/shamenrathnasiri/To_Do-App",
  },
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-8 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Centered Main Title with Red Accent */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white relative inline-block">
            <span className="relative z-10">Development Projects</span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-red-600 z-0 transform skew-x-12"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my development projects from beginner to advanced levels
          </p>
        </div>

        {/* System Development Projects */}
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mr-3 sm:mr-4">
              System Development
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {projects
              .filter((p) => p.type === "system")
              .map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
          </div>
        </div>

        {/* Web Development Projects */}
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mr-3 sm:mr-4">
              Web Development
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects
              .filter((p) => p.type === "web")
              .map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
          </div>
        </div>

        {/* Beginner Development Projects */}
        <div>
          <div className="flex items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mr-3 sm:mr-4">
              Beginner Projects
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects
              .filter((p) => p.type === "beginner")
              .map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-red-500/30 border border-gray-700 hover:border-red-500 flex flex-col h-full">
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="mb-3 sm:mb-4">
          <span className={`inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold mb-1 sm:mb-2 ${
            project.type === "system" 
              ? "bg-red-900 text-red-100" 
              : project.type === "web" 
                ? "bg-blue-900 text-blue-100" 
                : "bg-green-900 text-green-100"
          }`}>
            {project.type === "system" ? "System" : project.type === "web" ? "Web" : "Beginner"}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h2>
          <h3 className="text-sm sm:text-lg text-red-400">{project.subtitle}</h3>
        </div>
        <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-gray-700 text-gray-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 px-4 py-3 sm:px-6 sm:py-4 border-t border-gray-700 flex justify-between items-center">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 sm:gap-2 text-white hover:text-red-400 transition-colors group"
        >
          <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          <span className="group-hover:underline text-xs sm:text-sm">View Code</span>
        </Link>
        <span className="text-xs text-red-400 font-medium">
          {project.type === "system" ? "Full-stack" : project.type === "web" ? "Frontend" : "Beginner"}
        </span>
      </div>
    </div>
  );
}