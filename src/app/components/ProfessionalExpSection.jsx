"use client";

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

export default function ProfessionalExpSection() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, duration: 0.6 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
  };

  const experiences = [
    {
      role: 'Intern Software Engineer',
      company: 'Cybernetic Technologies Pvt. Ltd., No. 1180, Rajamalwatta Road, Battaramulla, Sri Lanka',
      date: 'August 2025 – Present',
      bullets: [
        'Built scalable full-stack features using React.js, Next.js, and Angular on the frontend, combined with Laravel, Node.js, and Python Flask on the backend - ensuring smooth client–server communication and high performance.',
        'Designed and developed modular, reusable UI components with clean and maintainable code, improving consistency and speeding up development across projects.',
        'Collaborated in Agile environments, working closely with designers, product owners, and senior developers through daily stand-ups, sprint planning, and code reviews.',
        'Optimized application performance and UX by improving rendering logic, reducing unnecessary re-renders, and applying best practices for SEO, accessibility, and responsive design.',
        'Worked with Git/GitHub for version control and contributed to CI/CD pipelines to support continuous integration and deployment.',
        'Integrated RESTful APIs and handled full data workflows between frontend and backend using Axios, Fetch API, Laravel controllers, Express routes, and Flask endpoints.',
        'Strengthened knowledge of state management (Redux, Context API, Angular Services) and databases such as MySQL and MongoDB while working on real-world engineering tasks.'
      ]
    },
    {
      role: 'Freelance UI/UX & Graphic Designer',
      company: 'Self-employed',
      date: '2022 — 2024',
      bullets: [
        'Designed high-fidelity prototypes and brand assets using Figma and Adobe.',
        'Delivered UI kits and design systems for small product teams.',
        'Collaborated with developers to ensure pixel-perfect implementations.'
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="mt-12 px-4 sm:px-6 md:px-8 lg:px-24 py-8 sm:py-12 bg-gradient-to-r from-red-50 to-white dark:from-black dark:to-slate-900"
    >
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={container}>
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 sm:mb-6 text-red-700 dark:text-red-300"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-6xl mx-auto grid gap-6">
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              variants={item}
              className="bg-white/80 dark:bg-black/70 border border-transparent dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 backdrop-blur"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-red-100/80 dark:bg-red-900 text-red-600 dark:text-red-200 shadow-sm">
                    <FaBriefcase className="text-xl sm:text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full gap-2 sm:gap-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-red-100">{exp.role}</h3>
                    <span className="text-sm sm:text-base text-slate-500 dark:text-slate-400">{exp.date}</span>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-slate-800 dark:text-slate-300 mt-1 italic">{exp.company}</p>

                  <ul className="mt-4 sm:mt-6 list-disc list-inside text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
