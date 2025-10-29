"use client"; // Essential for Framer Motion in Next.js 13+

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaHeart, FaCode, FaDesktop, FaPen } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutSection() {
  // Animation variants for cleaner code
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97], // Custom easing for smoother motion
        when: "beforeChildren"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
        staggerChildren: 0.1
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // List of all icons from public/icons folder
  const icons = [
    '/icons/adobe-photoshop.png',
    '/icons/css-3.png',
    '/icons/figma.png',
    '/icons/html-5.png',
    '/icons/icons8-tailwind-css-48.png',
    '/icons/illustrator.png',
    '/icons/js.png',
    '/icons/php.png',
    '/icons/programing (1).png',
    '/icons/programing.png',
    '/icons/python.png',
    '/icons/science.png',
    '/icons/typescript.png'
  ];

  return (
    <>
    <section id='about' className="mt-8 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* New layout: stat cards (red/black theme) + text */}
      <div className="flex flex-col md:flex-row items-center gap-10">        {/* Stat cards with red/black theme (replaces profile image) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px 0px -100px 0px", amount: 0.2 }}
          variants={slideInLeft}
          className="flex-shrink-0 w-full md:w-auto"
        >
          {/* Label the stats clearly as professional */}
          <h1 className="text-4xl text-center font-extrabold bg-gradient-to-tr from-red-600 to-red-900 text-transparent bg-clip-text">Professional Journey</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start mt-8">
            <div className="bg-red-800 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center w-64 h-34">
              <span className="text-4xl font-extrabold">15+</span>
              <span className="mt-1 text-sm font-semibold">Projects Completed</span>
            </div>
             <div className="bg-black text-white text-center rounded-2xl p-6 shadow-inner flex flex-col items-center justify-center w-64 border-2 border-red-800">
              <span className="text-4xl font-extrabold">1+</span>
              <span className="mt-1 text-sm font-semibold">Years — Full-Stack Development</span>
            </div>

            <div className="bg-black text-white text-center rounded-2xl p-6 shadow-inner flex flex-col items-center justify-center w-64 border-2 border-red-800">
              <span className="text-4xl font-extrabold">2+</span>
              <span className="mt-1 text-sm font-semibold">Years — Graphic Design with UI/UX</span>
            </div>

          </div>
        </motion.div>
      </div>
        {/* end of about content */}

      {/* Professional Journey: moved inside #about so both blocks center together */}
      <div id="professional-journey" className="mt-8 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px 0px -100px 0px", amount: 0.2 }}
          variants={slideInRight}
          className="text-gray-800 dark:text-gray-200 w-full"
        >
          <motion.h3
            variants={paragraphVariants}
            className="text-2xl font-bold mb-3 text-center"
          >
        
          </motion.h3>

          <motion.p
            variants={paragraphVariants}
            className=" leading-relaxed text-center text-md"
          >
            I’m an Intern Software Engineer and Computer Science undergraduate at Eastern University, Sri Lanka, driven by a passion for Full-Stack Development, Software Engineering, and UI/UX Design. I enjoy creating scalable, high-performance applications using modern frameworks and technologies while continuously learning and refining my craft.
          </motion.p>

          <motion.div
            variants={slideInLeft}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaBriefcase className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-semibold text-lg">Role</h4>
              <p className="text-sm mt-2">Intern Software Engineer</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaGraduationCap className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-semibold text-lg">Education</h4>
              <p className="text-sm mt-2">Computer Science — Eastern University, Sri Lanka</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaHeart className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-semibold text-lg">Interests</h4>
              <p className="text-sm mt-2">Software Engineering (Full-Stack Development) • Graphic Design • UI/UX Design</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaCode className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-semibold text-lg">Tech Stack</h4>
              <p className="text-sm mt-2">React, Next.js, Node.js, Tailwind CSS, Angular, Python, PHP-Laravel, TypeScript, Java Script ... </p>
            </div>
           
               <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaPen className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-semibold text-lg">Design Tools</h4>
              <p className="text-sm mt-2">Figma, Adobe Photoshop, Canva, Adobe Illustrator</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Auto-scrolling tech icons */}
      <div className="mt-12 w-4xl overflow-hidden">
        <motion.div
          className="flex space-x-12"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ width: '300%' }}
        >
          {icons.concat(icons).map((src, index) => (
            <Image key={index} src={src} alt="tech icon" width={48} height={48} />
          ))}
        </motion.div>
      </div>
      </section>
    </>
  );
}