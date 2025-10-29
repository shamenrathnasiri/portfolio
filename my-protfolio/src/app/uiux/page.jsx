"use client";
import { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

export default function UIUXPortfolio() {
  const [selectedId, setSelectedId] = useState(null);
  const [direction, setDirection] = useState(0);

  const selectedProject = uiuxProjects.find(proj => proj.id === selectedId);

  const selectProject = (id) => {
    setDirection(id > (selectedId || 0) ? 1 : -1);
    setSelectedId(id);
  };

  const closeDetail = () => setSelectedId(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">UI/UX Designs</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Selected works showcasing user-centered design solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {uiuxProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => selectProject(project.id)}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.3)" }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-700 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-gray-400 text-sm">{project.year}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeDetail}
            >
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={closeDetail}
                  className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-red-600 transition-colors"
                  aria-label="Close modal"
                >
                  &times;
                </button>

                <ProjectDetail
                  project={selectedProject}
                  direction={direction}
                  onNavigate={(newId) => {
                    const newIndex = uiuxProjects.findIndex(p => p.id === newId);
                    const currentIndex = uiuxProjects.findIndex(p => p.id === selectedId);
                    setDirection(newIndex > currentIndex ? 1 : -1);
                    setSelectedId(newId);
                    setCurrentImage(0); // Reset image index when navigating projects
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

function ProjectDetail({ project, direction, onNavigate }) {
  const [currentImage, setCurrentImage] = useState(0);
  const currentIndex = uiuxProjects.findIndex(p => p.id === project.id);
  
  return (
    <div className="grid lg:grid-cols-2 gap-0">
      {/* Left Column - Content */}
      <motion.div
        initial={{ x: direction * 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="p-6 sm:p-8 bg-gray-900"
      >
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              {project.category}
            </span>
            <span className="text-gray-400 text-sm">{project.year}</span>
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{project.title}</h2>
        
        <p className="text-gray-300 mb-6">{project.description}</p>
        
        <div className="mb-8">
          <h4 className="font-semibold text-white mb-3">Key Highlights</h4>
          <ul className="space-y-3">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-red-500 mr-3 mt-0.5">•</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-800">
          {currentIndex > 0 && (
            <button
              onClick={() => onNavigate(uiuxProjects[currentIndex - 1].id)}
              className="flex items-center justify-center gap-2 text-white hover:text-red-400 transition-colors px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
          )}
          {currentIndex < uiuxProjects.length - 1 && (
            <button
              onClick={() => onNavigate(uiuxProjects[currentIndex + 1].id)}
              className="flex items-center justify-center gap-2 text-white hover:text-red-400 transition-colors px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 ml-auto"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </motion.div>
      
      {/* Right Column - Gallery */}
      <motion.div
        initial={{ x: direction * -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 p-6 sm:p-8"
      >
        <div className="mb-4 h-64 sm:h-80 relative rounded-lg overflow-hidden bg-gray-900">
          <Image
            src={project.images[currentImage]}
            alt={`${project.title} - Image ${currentImage + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-20 sm:h-24 relative rounded overflow-hidden transition-all ${
                currentImage === i 
                  ? 'ring-2 ring-red-500 scale-105' 
                  : 'opacity-70 hover:opacity-100 hover:ring-1 hover:ring-gray-500'
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Image {currentImage + 1} of {project.images.length}
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentImage(prev => Math.max(0, prev - 1))}
              disabled={currentImage === 0}
              className="p-1.5 rounded-full bg-gray-700 text-gray-300 disabled:opacity-30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setCurrentImage(prev => Math.min(project.images.length - 1, prev + 1))}
              disabled={currentImage === project.images.length - 1}
              className="p-1.5 rounded-full bg-gray-700 text-gray-300 disabled:opacity-30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}