"use client"; // Essential for Framer Motion in Next.js 13+

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaHeart, FaCode, FaPen, FaUser, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
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

  const skillProgress = [
    { name: 'React', level: 92 },
    { name: 'Next.js', level: 88 },
    { name: 'Node.js', level: 84 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Angular', level: 72 },
    { name: 'Python', level: 78 },
    { name: 'PHP & Laravel', level: 74 },
    { name: 'TypeScript', level: 86 },
    { name: 'JavaScript', level: 94 }
  ];

  return (
    <>
  <section id='about' className="mt-8 min-h-fit flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-tr from-red-600 to-red-900 text-transparent bg-clip-text">Professional Journey</h1>
          <div className="flex w-full flex-col items-center gap-4 mt-6 sm:flex-row sm:items-start sm:justify-center md:mt-8">
            <div className="bg-red-800 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center w-full sm:w-80 min-h-[10rem]">
              <span className="text-4xl sm:text-6xl font-extrabold">15+</span>
              <span className="mt-1 text-base sm:text-2xl font-semibold">Projects Completed</span>
            </div>
            <div className="bg-black text-white text-center rounded-2xl p-6 shadow-inner flex flex-col items-center justify-center w-full sm:w-80 min-h-[10rem] border-2 border-red-800">
              <span className="text-4xl sm:text-6xl font-extrabold">1+</span>
              <span className="mt-1 text-base sm:text-2xl font-semibold">Years — Full-Stack Development</span>
            </div>

            <div className="bg-black text-white text-center rounded-2xl p-6 shadow-inner flex flex-col items-center justify-center w-full sm:w-80 min-h-[10rem] border-2 border-red-800">
              <span className="text-4xl sm:text-6xl font-extrabold">2+</span>
              <span className="mt-1 text-base sm:text-2xl font-semibold">Years — Graphic Design with UI/UX</span>
            </div>
          </div>
        </motion.div>
      </div>
        {/* end of about content */}

      {/* Professional Journey: moved inside #about so both blocks center together */}
      <div id="professional-journey" className="mt-8 w-full mx-auto flex flex-col items-center">
     
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px 0px -100px 0px", amount: 0.2 }}
          variants={slideInRight}
          className="text-gray-800 dark:text-gray-200 w-full"
        >
          <motion.h3
            variants={paragraphVariants}
            className="text-2xl md:text-3xl font-bold mb-3 text-center"
          />
          <h2 className="text-2xl md:text-3xl font-extrabold text-center bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text mb-4">Who I am</h2>

          <motion.p
            variants={paragraphVariants}
            className="leading-relaxed text-center text-base md:text-lg lg:text-2xl max-w-4xl mx-auto"
          >
            I’m an Intern Software Engineer and Computer Science undergraduate at Eastern University, Sri Lanka, driven by a passion for Full-Stack Development, Software Engineering, and UI/UX Design. I enjoy creating scalable, high-performance applications using modern frameworks and technologies while continuously learning and refining my craft.
          </motion.p>

          <motion.div
            variants={slideInLeft}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaBriefcase className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-semibold text-xl md:text-2xl">Role</h4>
              <p className="text-base md:text-lg mt-2">Intern Software Engineer</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaGraduationCap className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-xl md:text-2xl">Education</h4>
              <p className="text-base md:text-lg mt-2">Computer Science — Eastern University, Sri Lanka</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaHeart className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-xl md:text-2xl">Interests</h4>
              <p className="text-base md:text-lg mt-2">Software Engineering (Full-Stack Development) • Graphic Design • UI/UX Design</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaCode className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-xl md:text-2xl">Tech Stack</h4>
              <p className="text-base md:text-lg mt-2">React, Next.js, Node.js, Tailwind CSS, Angular, Python, PHP-Laravel, TypeScript, JavaScript</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaPen className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-xl md:text-2xl">Design Tools</h4>
              <p className="text-base md:text-lg mt-2">Figma, Adobe Photoshop, Canva, Adobe Illustrator</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaUser className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-xl md:text-2xl">Full Name</h4>
              <p className="text-base md:text-lg mt-2">H.K.Bhanuka Shamen Rathnasiri</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaCalendarAlt className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-xl md:text-2xl">Birthday</h4>
              <p className="text-base md:text-lg mt-2">July 20, 2000</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaEnvelope className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-xl md:text-2xl">Email</h4>
              <p className="text-base md:text-lg mt-2">shamenrathnasiri@gmail.com</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaMapMarkerAlt className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-xl md:text-2xl">Location</h4>
              <p className="text-base md:text-lg mt-2">Polonnaruwa, Sri Lanka</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm text-center">
              <FaClock className="text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-xl md:text-2xl">Availability</h4>
              <p className="text-base md:text-lg mt-2">FullTime / Freelance</p>
            </div>
          </motion.div>

          <motion.div
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="mt-10 w-full max-w-5xl mx-auto px-2 sm:px-0"
          >
            <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 sm:text-xl md:text-2xl">Tech Stack Proficiency</h3>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-red-600 dark:text-red-400 sm:text-xs">Live metrics</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillProgress.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h4>
                    <span className="text-sm font-bold text-red-600 dark:text-red-400">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full shadow-inner"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Auto-scrolling tech icons */}
      <div className="mt-12 w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-4 sm:gap-8 flex-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ width: '200%' }}
        >
          {icons.concat(icons).map((src, index) => (
            <div key={index} className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center shrink-0">
              <Image src={src} alt={`tech icon ${index}`} width={48} height={48} className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
      </section>
    </>
  );
}