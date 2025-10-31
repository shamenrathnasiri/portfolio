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
        'Contributed to scalable full-stack features using React.js / Next.js (frontend) and Laravel (PHP) backend, ensuring seamless client-server integration.',
        'Designed and implemented modular, reusable UI components with clean, maintainable code — improving development speed and consistency.',
        'Worked closely with designers, product managers, and senior engineers in Agile sprints; participated in daily stand-ups, sprint planning, and code reviews.',
        'Improved application performance and accessibility by optimizing rendering logic, reducing unnecessary re-renders, and applying SEO/responsive-design best practices.',
        'Collaborated using Git / GitHub and supported CI/CD pipelines for continuous integration and deployment.',
        'Integrated RESTful APIs and handled data management between frontend and backend using Axios and Laravel controllers.',
        'Enhanced understanding of state management (Redux / Context API) and relational databases (MySQL / PostgreSQL) while adapting to real-world engineering workflows.'
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
      className="mt-12 px-4 sm:px-6 md:px-12 lg:px-24 py-12 bg-gradient-to-r from-red-50 to-white dark:from-black dark:to-slate-900"
    >
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={container}>
        <motion.h2
          variants={item}
          className="text-4xl sm:text-6xl font-extrabold text-center mb-6 text-red-700 dark:text-red-300"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-6xl mx-auto grid gap-6">
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              variants={item}
              className="bg-white/80 dark:bg-black/70 border border-transparent dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-12 w-full rounded-full bg-red-100/80 dark:bg-red-900 text-red-600 dark:text-red-200 shadow-sm">
                    <FaBriefcase className="text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between w-full">
                    <h3 className="text-xl sm:text-3xl font-semibold text-slate-900 dark:text-red-100">{exp.role}</h3>
                    <span className="text-base text-slate-500 dark:text-slate-400">{exp.date}</span>
                  </div>
                  <p className="text-xl text-slate-800 dark:text-slate-300 mt-1 italic">{exp.company}</p>

                  <ul className="mt-8 list-disc list-inside text-xl text-slate-700 dark:text-slate-300 space-y-1">
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
