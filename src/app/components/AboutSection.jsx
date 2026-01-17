"use client";

import { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaDownload, FaEnvelope, FaMapMarkerAlt, FaHeart, FaCoffee, FaGamepad, FaMusic, FaPlane, FaReact, FaNodeJs, FaPython, FaAngular, FaPhp, FaRocket, FaClock, FaFire, FaBirthdayCake } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript } from 'react-icons/si';
import { HiLightningBolt, HiChip, HiColorSwatch } from 'react-icons/hi';
import Image from 'next/image';
 

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

const SKILLS_DATA = [
  { name: 'React', level: 92, icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', level: 88, icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', level: 84, icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Tailwind', level: 90, icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'TypeScript', level: 86, icon: SiTypescript, color: 'text-blue-500' },
  { name: 'JavaScript', level: 94, icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Python', level: 78, icon: FaPython, color: 'text-yellow-300' },
  { name: 'Angular', level: 72, icon: FaAngular, color: 'text-red-500' },
  { name: 'PHP/Laravel', level: 74, icon: FaPhp, color: 'text-indigo-400' }
];

const STATS_DATA = [
  { value: '15+', label: 'Projects', icon: FaRocket },
  { value: '2+', label: 'Years Exp', icon: FaClock },
  { value: '100%', label: 'Dedication', icon: FaFire }
];

const INTERESTS = [
  { icon: FaCoffee, label: 'Coffee' },
  { icon: FaGamepad, label: 'Gaming' },
  { icon: FaMusic, label: 'Music' },
  { icon: FaPlane, label: 'Travel' }
];

export default function AboutSection() {
  const [animatedSkills, setAnimatedSkills] = useState(() => SKILLS_DATA.map(() => 0));
  const [activeCard, setActiveCard] = useState(null);
  const skillsRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const frameRef = useRef();

  useEffect(() => {
    const target = skillsRef.current;
    if (!target) return;

    if (typeof IntersectionObserver === 'undefined') {
      setAnimatedSkills(SKILLS_DATA.map((s) => s.level));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const duration = 1500;
          const start = performance.now();

          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setAnimatedSkills(SKILLS_DATA.map((s) => Math.round(s.level * eased)));
            if (progress < 1) frameRef.current = requestAnimationFrame(animate);
          };
          frameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-red-950 via-rose-950 to-red-950 animate-fade-in"
      style={{ animationDuration: '0.9s' }}
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-red-600/12 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-rose-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className="text-center mb-16 sm:mb-20 animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-red-400 uppercase bg-red-500/10 border border-red-500/20 rounded-full">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Crafting Digital
            <span className="block mt-2 bg-gradient-to-r from-red-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-20">
          
          {/* Profile Card - Left */}
          <div
            className="lg:col-span-4 animate-slideInLeft"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="sticky top-24 space-y-5">
              {/* Main Profile Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden">
                {/* Top Gradient Bar */}
                <div className="h-1.5 bg-gradient-to-r from-red-500 via-rose-500 to-orange-500" />
                
                <div className="p-6 sm:p-8">
                  {/* Avatar */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative mb-5">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 p-0.5 rotate-3 hover:rotate-0 transition-transform duration-300">
                        <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
                          <Image
                            src="/My.jpg"
                            alt="Profile photo"
                            width={140}
                            height={140}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </div>
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-[3px] border-slate-900 rounded-full" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Bhanuka Shamen Rathnasiri</h3>
                    <p className="text-red-400 font-medium text-sm mt-1">Software Engineer</p>
                  </div>

                  {/* Info List */}
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: FaMapMarkerAlt, text: 'Polonnaruwa, Sri Lanka', color: 'text-rose-400' },
                      { icon: FaGraduationCap, text: 'Eastern University, Sri Lanka', color: 'text-blue-400' },
                      { icon: FaEnvelope, text: 'shamenrathnasiri@gmail.com', color: 'text-emerald-400' },
                      { icon: FaBirthdayCake, text: 'DOB: 2000-07-20', color: 'text-pink-400' },
                      { icon: FaBriefcase, text: 'Availability: Full-time / Freelance', color: 'text-yellow-400' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <span className="truncate">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a
                      href="/CV/H.K.Bhanuka-Shamen-Rathnasiri-.pdf"
                      download="H.K.Bhanuka-Shamen-Rathnasiri-CV.pdf"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                    >
                      <FaDownload className="w-4 h-4" />
                      Download Resume
                    </a>
                    <a
                      href="mailto:shamenrathnasiri@gmail.com"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl border border-slate-700 transition-all duration-300"
                    >
                      <FaEnvelope className="w-4 h-4" />
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>

              {/* Interests Card */}
              <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 border border-slate-800">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FaHeart className="w-3 h-3 text-rose-400" /> Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map(({ icon: Icon, label }) => (
                    <span key={label} className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800/80 rounded-lg text-slate-400 text-sm hover:text-white hover:bg-slate-700 transition-all cursor-default border border-slate-700/50">
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="lg:col-span-8 space-y-6 animate-slideInRight"
            style={{ animationDelay: '0.35s' }}
          >
            
            {/* Bio Card */}
            <div
              className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-red-500/30 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-xl border border-red-500/20">
                  <HiLightningBolt className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                I&apos;m a passionate <span className="text-red-400 font-semibold">Computer Science undergraduate</span> at Eastern University, Sri Lanka, currently working as an Intern Software Engineer. My journey in tech is driven by a deep love for Full-Stack Development, Software Engineering, and creating exceptional user experiences through thoughtful UI/UX Design.
              </p>
            </div>

            {/* What I Do Grid */}
            <div
              className="grid sm:grid-cols-2 gap-4 animate-slide-up"
              style={{ animationDelay: '0.45s' }}
            >
              {[
                { icon: HiChip, title: 'Development', desc: 'Building scalable web applications with modern frameworks', gradient: 'from-cyan-500 to-blue-600' },
                { icon: HiColorSwatch, title: 'Design', desc: 'Creating intuitive and beautiful user interfaces', gradient: 'from-pink-500 to-rose-600' },
                { icon: FaCode, title: 'Backend', desc: 'Developing robust APIs and server-side logic', gradient: 'from-emerald-500 to-teal-600' },
                { icon: FaBriefcase, title: 'Consulting', desc: 'Helping businesses with digital solutions', gradient: 'from-violet-500 to-purple-600' }
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`group relative bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all duration-300 cursor-pointer ${activeCard === i ? 'border-red-500/50 bg-slate-800/60' : ''}`}
                  onMouseEnter={() => setActiveCard(i)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`inline-flex p-3 bg-gradient-to-br ${item.gradient} rounded-xl mb-4 shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div
              className="grid grid-cols-3 gap-4 animate-slide-up"
              style={{ animationDelay: '0.55s' }}
            >
              {STATS_DATA.map((stat) => (
                <div key={stat.label} className="relative bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-slate-800 hover:border-red-500/30 transition-all duration-300 group text-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <stat.icon className="w-6 h-6 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <span className="block text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</span>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="mb-20">
          <div
            className="text-center mb-12 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Technical Expertise</h3>
            <p className="text-slate-400">Technologies and tools I work with</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS_DATA.map((skill, index) => {
              const percentage = animatedSkills[index] ?? 0;
              const IconComponent = skill.icon;
              
              return (
                <div
                  key={skill.name}
                  className="group bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all duration-300 animate-fade-up-fast"
                  style={{ animationDelay: `${index * 0.08}s`, animationDuration: '0.7s' }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                      <IconComponent className={`w-5 h-5 ${skill.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-red-400 font-semibold text-sm">{percentage}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 to-rose-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div
          className="relative animate-slide-up"
          style={{ animationDelay: '0.65s' }}
        >
          
          <div className="overflow-hidden py-4">
            <div className="flex items-center gap-6 sm:gap-8 flex-nowrap animate-marquee-left" style={{ width: '200%' }}>
              {ICONS.concat(ICONS).map((src, index) => (
                <div 
                  key={`${src}-${index}`} 
                  className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center shrink-0 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-800 p-3 hover:bg-slate-800 hover:border-red-500/30 hover:scale-110 transition-all duration-300"
                >
                  <Image src={src} alt={`tech icon ${index}`} width={48} height={48} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
