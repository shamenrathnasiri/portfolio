"use client";

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaPalette, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa';
import { HiAcademicCap, HiOfficeBuilding, HiSparkles } from 'react-icons/hi';

export default function ResumeSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -5, transition: { duration: 0.3 } }
  };

  const workExperience = [
    {
      role: 'Intern Software Engineer',
      company: 'Cybernetic Technologies Pvt. Ltd.',
      location: 'Battaramulla, Sri Lanka',
      date: 'August 2025 – Present',
      type: 'Full-time',
      bullets: [
        'Built scalable full-stack features using React.js, Next.js, and Angular on the frontend, combined with Laravel and Node.js on the backend.',
        'Designed and developed modular, reusable UI components with clean and maintainable code.',
        'Optimized application performance and UX by improving rendering logic and applying best practices for SEO and accessibility.',
        'Integrated RESTful APIs using Axios, Fetch API, Laravel controllers, Express routes, and Flask endpoints.',
        'Strengthened knowledge of state management (Redux, Context API) and databases (MySQL, MongoDB).'
      ]
    },
     {
      role: ' Bank Assistent (Trainee)',
      company: 'Regional Development Bank (Manampitiya Branch).',
      location: 'Manampitiya, Sri Lanka',
      date: '01st of August 2021 – 31th of January 2022',
      type: 'Full-time',
      bullets: [
        'Assisted in daily banking operations including customer service, account handling, and transaction processing.',
        'Supported staff with opening new customer accounts and verifying required documentation.',
        'Handled cash deposits, withdrawals, and basic teller activities under supervision.',
        'Maintained accurate records and updated customer information in the banking system.',
        'Gained hands-on experience with core banking software and office automation tools.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science ',
      institution: 'Trincomalee Campus, Eastern University, Sri Lanka',
      location: 'Trincomalee, Sri Lanka',
      date: '2021 – Present',
      status: 'Undergraduate',
      highlights: [
        'Specializing in Software Engineering and Web Technologies',
        'Active member of the Computer Science Student Association',
      ]
    },
    {
      degree: 'G.C.E. Advanced Level - Physical Science',
      institution: 'Polonnaruwa Thopawewa Central College',
      location: 'Polonnaruwa, Sri Lanka',
      date: '2019 – 2021',
      status: 'Completed',
      highlights: [
        'Combined Mathematics, Physics, Chemistry',
        'Achieved strong academic performance'
      ]
    }
  ];

  const freelance = [
    {
      role: 'Graphic Designer',
      platform: 'Self-employed',
      date: '2020 – Present',
      projects: '200+ Projects',
      website: 'https://www.abcgraphics.lk',
      facebook: 'https://www.facebook.com/profile.php?id=100095599507570',
      bullets: [
        'Created logos, brand identities, and marketing materials for local businesses.',
        'Designed social media content and promotional graphics.',
        'Developed print-ready designs including brochures, flyers, and business cards.'
      ]
    }
  ];

  return (
    <section
      id="resume"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-black via-red-950 to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-rose-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={container}
          className="text-center mb-16"
        >
          <motion.span 
            variants={item}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-red-400 uppercase bg-red-500/10 border border-red-500/20 rounded-full"
          >
            My Journey
          </motion.span>
          <motion.h2 
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Resume &
            <span className="block mt-2 bg-gradient-to-r from-red-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={container}
          className="mb-16"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl shadow-lg shadow-red-500/25">
              <FaBriefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Work Experience</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-transparent ml-4" />
          </motion.div>

          <div className="space-y-6">
            {workExperience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={item}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.article 
                  variants={cardHover}
                  className="relative bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden hover:border-red-500/30 transition-colors duration-300"
                >
                  {/* Top Accent */}
                  <div className="h-1 bg-gradient-to-r from-red-500 via-rose-500 to-orange-500" />
                  
                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.role}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-slate-400">
                          <span className="flex items-center gap-2">
                            <HiOfficeBuilding className="w-4 h-4 text-red-400" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaMapMarkerAlt className="w-3.5 h-3.5 text-rose-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 text-red-400 text-sm font-medium rounded-lg border border-red-500/20">
                          <FaCalendarAlt className="w-3.5 h-3.5" />
                          {exp.date}
                        </span>
                        <span className="inline-flex items-center px-3 py-1.5 bg-rose-500/10 text-rose-300 text-sm font-medium rounded-lg border border-rose-500/20">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <FaCheckCircle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm sm:text-base leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={container}
          className="mb-16"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg shadow-red-500/25">
              <FaGraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Education</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-transparent ml-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={item}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.article 
                  variants={cardHover}
                  className="relative h-full bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden hover:border-red-500/30 transition-colors duration-300"
                >
                  {/* Top Accent */}
                  <div className="h-1 bg-gradient-to-r from-red-500 via-rose-500 to-orange-500" />
                  
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="p-2.5 bg-red-500/10 rounded-xl border border-red-500/20">
                        <HiAcademicCap className="w-6 h-6 text-red-400" />
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-lg ${
                        edu.status === 'Undergraduate' 
                          ? 'bg-red-500/10 text-red-300 border border-red-500/20' 
                          : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-red-400 font-medium mb-1">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-3 text-slate-400 text-sm mb-4">
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="w-3.5 h-3.5" />
                        {edu.date}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Freelance Section */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={container}
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl shadow-lg shadow-red-500/25">
              <FaPalette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Freelance Work</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-rose-500/50 to-transparent ml-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {freelance.map((work, idx) => (
              <motion.div
                key={idx}
                variants={item}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.article 
                  variants={cardHover}
                  className="relative h-full bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden hover:border-rose-500/30 transition-colors duration-300"
                >
                  {/* Top Accent */}
                  <div className="h-1 bg-gradient-to-r from-rose-500 via-red-500 to-orange-500" />
                  
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{work.role}</h4>
                        <p className="text-rose-400 font-medium text-sm">{work.platform}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-500/10 text-rose-300 text-xs font-medium rounded-lg border border-rose-500/20">
                          <HiSparkles className="w-3.5 h-3.5" />
                          {work.projects}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <FaCalendarAlt className="w-3.5 h-3.5" />
                      {work.date}
                    </div>

                    {(work.website || work.facebook) && (
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {work.website && (
                          <a
                            href={work.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/70 text-slate-200 text-xs sm:text-sm font-medium rounded-lg border border-slate-700 hover:border-rose-500/40 hover:text-white transition-colors"
                          >
                            <FaExternalLinkAlt className="w-3.5 h-3.5" />
                            www.abcgraphics.lk
                          </a>
                        )}
                        {work.facebook && (
                          <a
                            href={work.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 text-rose-200 text-xs sm:text-sm font-medium rounded-lg border border-rose-500/20 hover:border-rose-500/40 hover:text-white transition-colors"
                          >
                            <FaFacebook className="w-3.5 h-3.5" />
                            Facebook Page
                          </a>
                        )}
                      </div>
                    )}

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {work.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <FaCheckCircle className="w-3.5 h-3.5 text-rose-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
