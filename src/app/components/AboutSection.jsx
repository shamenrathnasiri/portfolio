"use client";

import { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaHeart, FaCode, FaPen, FaUser, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const ICONS = [
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

const SKILL_PROGRESS = [
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

export default function AboutSection() {
  const [animatedPercentages, setAnimatedPercentages] = useState(() => SKILL_PROGRESS.map(() => 0));
  const skillsSectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const frameRef = useRef();

  useEffect(() => {
    const target = skillsSectionRef.current;
    if (!target) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setAnimatedPercentages(SKILL_PROGRESS.map((skill) => skill.level));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const duration = 700;
          const start = performance.now();

          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setAnimatedPercentages(
              SKILL_PROGRESS.map((skill) => Math.round(skill.level * progress))
            );

            if (progress < 1) {
              frameRef.current = requestAnimationFrame(step);
            }
          };

          frameRef.current = requestAnimationFrame(step);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="mt-8 min-h-fit flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 w-full md:w-auto animate-slideInLeft space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-tr from-red-600 to-red-900 text-transparent bg-clip-text animate-fade-up-fast">
            Professional Journey
          </h1>
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center md:mt-8">
            <div className="bg-red-800 text-white rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col items-center justify-center w-full sm:w-80 min-h-[8rem] sm:min-h-[11.3rem] animate-fade-up-fast" style={{ animationDelay: '50ms' }}>
              <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold">15+</span>
              <span className="mt-1 text-sm sm:text-base md:text-2xl font-semibold">Projects Completed</span>
            </div>
            <div className="bg-black text-white text-center rounded-2xl p-4 sm:p-6 shadow-inner flex flex-col items-center justify-center w-full sm:w-80 min-h-[8rem] sm:min-h-[10rem] border-2 border-red-800 animate-fade-up-fast" style={{ animationDelay: '120ms' }}>
              <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold">2+</span>
              <span className="mt-1 text-sm sm:text-base md:text-2xl font-semibold">Years — Full-Stack Development</span>
            </div>
            <div className="bg-black text-white text-center rounded-2xl p-4 sm:p-6 shadow-inner flex flex-col items-center justify-center w-full sm:w-80 min-h-[8rem] sm:min-h-[10rem] border-2 border-red-800 animate-fade-up-fast" style={{ animationDelay: '190ms' }}>
              <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold">2+</span>
              <span className="mt-1 text-sm sm:text-base md:text-2xl font-semibold">Years — Graphic Design with UI/UX</span>
            </div>
          </div>
        </div>
      </div>

      <div id="professional-journey" className="mt-8 w-full mx-auto flex flex-col items-center">
        <div className="text-gray-800 dark:text-gray-200 w-full animate-slideInRight">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text mb-4 animate-fade-up-fast">
            Who I am
          </h2>

          <p className="leading-relaxed text-center text-sm sm:text-base md:text-lg lg:text-2xl max-w-4xl mx-auto animate-fade-up-fast">
            I’m an Intern Software Engineer and Computer Science undergraduate at Eastern University, Sri Lanka, driven by a passion for Full-Stack Development, Software Engineering, and UI/UX Design. I enjoy creating scalable, high-performance applications using modern frameworks and technologies while continuously learning and refining my craft.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up-fast">
            <Link
              href="/CV/bhanula-full-stack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              <FaDownload className="text-lg" />
              Download CV
            </Link>

            <a
              href="mailto:shamenrathnasiri@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-base font-semibold text-gray-900 transition hover:border-red-700 hover:text-red-700 dark:border-gray-700 dark:text-gray-100"
            >
              Reach Out
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-up-fast">
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaBriefcase className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-semibold text-lg sm:text-xl md:text-2xl">Role</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">Intern Software Engineer</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaGraduationCap className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Education</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">Computer Science — Eastern University, Sri Lanka</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaHeart className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Interests</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">Software Engineering (Full-Stack Development) • Graphic Design • UI/UX Design</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaCode className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Tech Stack</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">React, Next.js, Node.js, Tailwind CSS, Angular, Python, PHP-Laravel, TypeScript, JavaScript</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaPen className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Design Tools</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">Figma, Adobe Photoshop, Canva, Adobe Illustrator</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaUser className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Full Name</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">H.K.Bhanuka Shamen Rathnasiri</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaCalendarAlt className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Birthday</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">July 20, 2000</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaEnvelope className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Email</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">shamenrathnasiri@gmail.com</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaMapMarkerAlt className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Location</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">Polonnaruwa, Sri Lanka</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <FaClock className="text-2xl sm:text-3xl mb-3 text-red-800 mx-auto" />
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Availability</h4>
              <p className="text-sm sm:text-base md:text-lg mt-2">FullTime / Freelance</p>
            </div>
          </div>

          <div className="mt-10 w-full max-w-5xl mx-auto px-2 sm:px-0 animate-fade-up-fast">
            <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">Tech Stack Proficiency</h3>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-red-600 dark:text-red-400 sm:text-xs">Live metrics</span>
            </div>

            <div
              ref={skillsSectionRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {SKILL_PROGRESS.map((skill, index) => {
                const percentage = animatedPercentages[index] ?? 0;

                return (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up-fast"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h4>
                    <span className="text-sm font-bold text-red-600 dark:text-red-400">{percentage}%</span>
                  </div>
                  <div className="relative">
                    <div className="h-3 sm:h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full shadow-inner transition-[width] duration-200 ease-out"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-fade-in"></div>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 w-full overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 flex-nowrap animate-marquee-left" style={{ width: '200%' }}>
          {ICONS.concat(ICONS).map((src, index) => (
            <div key={`${src}-${index}`} className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center shrink-0">
              <Image src={src} alt={`tech icon ${index}`} width={48} height={48} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}