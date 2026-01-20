"use client";
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

// Sample images
import ABC1 from "../../../public/(uiux)/abc1.jpg";
import ABC2 from "../../../public/(uiux)/abc2.jpg";
import ABC3 from "../../../public/(uiux)/abc3.jpg";
import Cake1 from '../../../public/(uiux)/cake1.jpg';
import Coffee2 from '../../../public/(uiux)/coffee2.jpg';
import Coffee1 from '../../../public/(uiux)/coffee1.jpg';
import Cake2 from '../../../public/(uiux)/cake2.jpg';
import Pizza1 from '../../../public/(uiux)/pizza1.jpg';
import Pizza2 from '../../../public/(uiux)/pizza2.jpg'
import Pizza3 from '../../../public/(uiux)/pizza3.jpg'

const uiuxProjects = [
  {
    id: 1,
    title: "ABC Graphics - shop website",
    category: "Web app",
    year: "2025",
    highlights: ["50+ Components", "Figma Library"],
    description: "Designed a responsive website for a graphic design company using Figma, applying modern UI/UX principles. Developed clear low-to-high fidelity wireframes to structure layout and user journey. Added interactive animations and transitions to create a dynamic, engaging user experience. Focused on brand consistency, usability, and visual hierarchy across all pages.",
    images: [ABC1, ABC2, ABC3]
  },
  {
    id: 2,
    title: "Cake Shop App Design (Cake Haven)",
    category: "Mobile App",
    year: "2024",
    highlights: ["Smooth navigation", "Mobile-First", "Clearly wireframe"],
    description: "Designed a mobile application for a cake shop using Figma, focusing on an intuitive user experience and visually appealing interface. Created user flows, wireframes, and high-fidelity mockups for features such as cake browsing, customization, ordering, and delivery tracking. Applied a playful color scheme and custom iconography to reflect the brand's sweet and cheerful identity. Integrated micro-interactions and transitions to enhance app usability and engagement.",
    images: [Cake1, Cake2]
  },
  {
    id: 3,
    title: "Coffe Shop website (Cozy Bean Cafe)",
    category: "web app",
    year: "2025",
    highlights: ["50+ Components", "Figma Library"],
    description: "Designed a modern, user-friendly website for a coffee shop using Figma, focusing on aesthetic appeal and easy navigation. Created wireframes and high-fidelity mockups showcasing key sections such as the menu, online ordering, location, and contact. Applied a warm, inviting color palette and custom typography to reflect the brand’s cozy atmosphere. Incorporated interactive elements and smooth transitions to enhance user engagement and browsing experience.",
    images: [Coffee1, Coffee2]
  },
  {
    id: 4,
    title: "Pizza shop website",
    category: "web app",
    year: "2023",
    highlights: ["50+ Components", "Figma Library"],
    description: "Designed a modern and responsive Pizza Shop website using Figma, incorporating intuitive navigation, visually engaging layouts, and a clean user interface to enhance customer experience. Focused on UX principles to streamline the online ordering process, including interactive menu sections, cart management, and promotional banners. Ensured mobile responsiveness and consistency across all devices through well-structured wireframes and high-fidelity prototypes.",
    images: [Pizza2, Pizza1, Pizza3]
  }
];

const heroStats = [
  { label: 'Interfaces shipped', value: '52', sub: 'responsive screens & flows' },
  { label: 'Journeys mapped', value: '18', sub: 'user stories and personas' },
  { label: 'Brand systems', value: '2', sub: 'visual & interaction systems' },
];

const processFlow = [
  {
    step: '01',
    title: 'Discover & Align',
    description: 'Immersive workshops, brand audits, and experience mapping to surface what matters and where to innovate.',
  },
  {
    step: '02',
    title: 'Prototype the Magic',
    description: 'From sketches to interactive prototypes, every touchpoint gets gradient-rich artboards and playful transitions.',
  },
  {
    step: '03',
    title: 'Polish & Deliver',
    description: 'Micro-interactions, accessibility checks, and design tokens keep the experience coherent at every break point.',
  },
  {
    step: '04',
    title: 'Futureproof & Scale',
    description: 'Design systems, redlines, and motion specs handoff to engineers with a confident, creative voice.',
  },
];

export default function UIUXPortfolio() {
  const [selectedId, setSelectedId] = useState(null);
  const [direction, setDirection] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const selectedProject = uiuxProjects.find(proj => proj.id === selectedId);

  const selectProject = (id) => {
    setDirection(id > (selectedId || 0) ? 1 : -1);
    setSelectedId(id);
    setModalImageIndex(0);
  };

  const closeDetail = () => {
    setSelectedId(null);
    setModalImageIndex(0);
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-950 via-black to-gray-950 px-4 sm:px-6 md:px-10 py-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 w-[60vw] h-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.35),transparent_70%)] blur-[120px]"></div>
        <div className="absolute top-6 right-10 w-64 h-64 bg-red-600/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute inset-y-12 left-10 w-1 bg-gradient-to-b from-red-600/40 to-transparent opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        <div className="flex justify-start">
          <Link
            href="/#project"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-red-100 hover:text-white transition-all duration-300 bg-gradient-to-r from-red-900/80 to-red-800/60 hover:from-red-800 hover:to-red-700 border-2 border-red-600/50 hover:border-red-500 rounded-full px-6 py-2.5 shadow-lg shadow-red-900/50 hover:shadow-xl hover:shadow-red-800/60 hover:scale-105 transform"
          >
            <FaArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-semibold">Back to Projects</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center space-y-6"
        >
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 relative z-10 drop-shadow-2xl">
              UI/UX Design Projects
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 blur-2xl opacity-30 animate-pulse"></div>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full animate-pulse"></span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Selected works that pulse with red gradients, layered glass, and cinematic motion.
          </p>
          <div className="flex justify-center gap-2 mt-3">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {uiuxProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => selectProject(project.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-900 via-gray-900/95 to-black rounded-2xl shadow-2xl overflow-hidden cursor-pointer border-2 border-red-900/30 hover:border-red-500/80 transition-all duration-500 relative min-h-[420px] sm:min-h-[440px]"
            >
              <div className="absolute left-5 top-5 flex flex-col gap-1">
                <span className="w-14 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full opacity-60"></span>
                <span className="w-10 h-1 bg-gradient-to-r from-red-400 to-transparent rounded-full opacity-40"></span>
              </div>

              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-4 py-1.5 rounded-full font-bold shadow-lg shadow-red-900/50">
                    {project.category}
                  </span>
                  <span className="bg-black/60 backdrop-blur-sm text-red-400 text-xs px-3 py-1.5 rounded-full font-semibold border border-red-500/30">
                    {project.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/50 flex items-center justify-center">
                    <span className="text-red-400 text-lg">→</span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 relative z-10">
                <h3 className="text-xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300 mb-3">
                  {project.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full mb-3 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-300 group-hover:text-gray-200 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 text-xs px-3 py-1.5 rounded-lg font-semibold border border-red-900/30 hover:border-red-500/50 hover:from-red-900/50 hover:to-red-800/50 hover:text-white transition-all duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={closeDetail}
            >
              <motion.div
                layoutId={`card-${selectedId}`}
                initial={{ scale: 0.85, y: -20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.85, y: 10, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl max-w-5xl w-full max-h-[88vh] sm:max-h-[85vh] overflow-y-auto border-2 border-red-900/50 shadow-2xl shadow-red-900/30 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
                </div>
                <button
                  onClick={closeDetail}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 transition-all duration-300 shadow-lg shadow-red-900/50 hover:scale-110 hover:rotate-90 border-2 border-red-500/50 font-bold text-xl sm:text-2xl"
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <ProjectDetail
                  project={selectedProject}
                  direction={direction}
                  currentImage={modalImageIndex}
                  onImageChange={setModalImageIndex}
                  onNavigate={(newId) => {
                    const newIndex = uiuxProjects.findIndex((p) => p.id === newId);
                    const currentIndex = uiuxProjects.findIndex((p) => p.id === selectedId);
                    setDirection(newIndex > currentIndex ? 1 : -1);
                    setSelectedId(newId);
                    setModalImageIndex(0);
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectDetail({ project, direction, currentImage, onImageChange, onNavigate }) {
  const currentIndex = uiuxProjects.findIndex((p) => p.id === project.id);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
      <motion.div
        initial={{ x: direction * 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-black order-2 lg:order-1 border-r border-red-900/30"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-6 left-6 w-32 h-32 bg-red-600/10 blur-3xl"></div>
          <div className="absolute bottom-6 right-6 w-32 h-32 bg-red-500/10 blur-3xl"></div>
        </div>
        <div className="relative z-10 space-y-6">
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg shadow-red-900/50">
                {project.category}
              </span>
              <span className="text-red-400 text-sm font-semibold bg-red-950/30 px-3 py-1.5 rounded-full border border-red-800/30">{project.year}</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
              {project.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full mb-4"></div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>
          <div className="mb-8 bg-gradient-to-r from-red-950/20 to-transparent p-5 rounded-xl border border-red-900/20">
            <h4 className="font-black text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((item, i) => (
                <li key={i} className="flex items-start group">
                  <span className="text-red-500 mr-3 mt-1 text-lg group-hover:scale-125 transition-transform">✦</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-red-900/30">
            {currentIndex > 0 && (
              <button
                onClick={() => onNavigate(uiuxProjects[currentIndex - 1].id)}
                className="flex items-center justify-center gap-2 text-white hover:text-white transition-all duration-300 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-red-900/50 hover:to-red-800/50 border border-red-900/30 hover:border-red-500/50 shadow-lg hover:shadow-red-900/30 hover:scale-105 font-semibold w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
            )}
            {currentIndex < uiuxProjects.length - 1 && (
              <button
                onClick={() => onNavigate(uiuxProjects[currentIndex + 1].id)}
                className="flex items-center justify-center gap-2 text-white hover:text-white transition-all duration-300 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-red-900/50 hover:to-red-800/50 border border-red-900/30 hover:border-red-500/50 shadow-lg hover:shadow-red-900/30 hover:scale-105 font-semibold ml-auto w-full sm:w-auto"
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: direction * -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-bl from-gray-900 to-black p-4 sm:p-6 lg:p-8 order-1 lg:order-2 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-2 w-24 h-24 border-t-2 border-l-2 border-red-600/60 rounded-tr-2xl"></div>
          <div className="absolute bottom-2 right-2 w-24 h-24 border-b-2 border-r-2 border-red-600/60 rounded-bl-2xl"></div>
        </div>
        <div className="relative z-10 space-y-4">
          <div className="mb-4 h-48 sm:h-64 md:h-80 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-950 to-black border-2 border-red-900/30 shadow-2xl shadow-red-900/20">
            <Image
              src={project.images[currentImage]}
              alt={`${project.title} - Image ${currentImage + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-500/50 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-500/50 rounded-br-2xl"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => onImageChange(i)}
                className={`h-20 sm:h-24 relative rounded-xl overflow-hidden transition-all duration-300 ${
                  currentImage === i
                    ? 'ring-2 ring-red-500 scale-105 shadow-lg shadow-red-500/50'
                    : 'opacity-60 hover:opacity-100 hover:ring-2 hover:ring-red-400/50 hover:scale-105 border-2 border-gray-700'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${
                    currentImage === i ? 'opacity-0' : 'opacity-100'
                  } transition-opacity`}
                ></div>
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center bg-gradient-to-r from-red-950/20 to-transparent p-4 rounded-xl border border-red-900/20">
            <div className="text-sm font-semibold">
              <span className="text-red-400">Image {currentImage + 1}</span>
              <span className="text-gray-500 mx-1">/</span>
              <span className="text-gray-400">{project.images.length}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onImageChange((prev) => Math.max(0, prev - 1))}
                disabled={currentImage === 0}
                className="p-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-red-400 disabled:opacity-30 disabled:cursor-not-allowed hover:from-red-900/50 hover:to-red-800/50 transition-all duration-300 border border-red-900/30 hover:border-red-500/50 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => onImageChange((prev) => Math.min(project.images.length - 1, prev + 1))}
                disabled={currentImage === project.images.length - 1}
                className="p-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-red-400 disabled:opacity-30 disabled:cursor-not-allowed hover:from-red-900/50 hover:to-red-800/50 transition-all duration-300 border border-red-900/30 hover:border-red-500/50 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}