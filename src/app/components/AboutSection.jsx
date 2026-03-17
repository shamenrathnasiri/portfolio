"use client";

import { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaDownload, FaEnvelope, FaMapMarkerAlt, FaHeart, FaCoffee, FaGamepad, FaMusic, FaPlane, FaReact, FaNodeJs, FaPython, FaAngular, FaPhp, FaRocket, FaClock, FaFire, FaBirthdayCake } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript } from 'react-icons/si';
import { HiLightningBolt, HiChip, HiColorSwatch } from 'react-icons/hi';
import Image from 'next/image';

/* ─── Palette tokens (matches #330A05 → #C45306) ─── */
const P = {
  900: '#330A05',  // deepest ember
  800: '#550F05',  // dark char
  700: '#761305',  // volcanic core
  600: '#9D3306',  // amber ember
  500: '#C45306',  // bright copper flame
};

const TECH_MARQUEE_ICONS = [
  { label: 'React',      icon: FaReact,       color: 'text-[#C45306]', glow: 'from-[#C45306]/30 to-[#9D3306]/10' },
  { label: 'Next.js',    icon: SiNextdotjs,   color: 'text-[#e8c9a0]', glow: 'from-[#9D3306]/20 to-transparent' },
  { label: 'Node.js',    icon: FaNodeJs,      color: 'text-[#d4a96a]', glow: 'from-[#C45306]/25 to-transparent' },
  { label: 'Tailwind',   icon: SiTailwindcss, color: 'text-[#e8b87a]', glow: 'from-[#9D3306]/25 to-transparent' },
  { label: 'JavaScript', icon: SiJavascript,  color: 'text-[#f0c070]', glow: 'from-[#C45306]/25 to-transparent' },
  { label: 'TypeScript', icon: SiTypescript,  color: 'text-[#c8a0e0]', glow: 'from-[#761305]/25 to-transparent' },
  { label: 'Python',     icon: FaPython,      color: 'text-[#f0c070]', glow: 'from-[#C45306]/25 to-transparent' },
  { label: 'Angular',    icon: FaAngular,     color: 'text-[#e87060]', glow: 'from-[#9D3306]/25 to-transparent' },
  { label: 'PHP',        icon: FaPhp,         color: 'text-[#a090d8]', glow: 'from-[#761305]/25 to-transparent' },
  { label: 'UI Systems', icon: HiColorSwatch, color: 'text-[#e8a080]', glow: 'from-[#C45306]/25 to-transparent' },
  { label: 'Code Logic', icon: HiChip,        color: 'text-[#90d8b0]', glow: 'from-[#761305]/25 to-transparent' },
  { label: 'Fast Build', icon: HiLightningBolt, color: 'text-[#f0d080]', glow: 'from-[#C45306]/30 to-transparent' },
  { label: 'Launch',     icon: FaRocket,      color: 'text-[#e89060]', glow: 'from-[#9D3306]/25 to-transparent' },
];

const SKILLS_DATA = [
  { name: 'React',       level: 92, icon: FaReact,       color: 'text-[#C45306]' },
  { name: 'Next.js',     level: 88, icon: SiNextdotjs,   color: 'text-[#e8c9a0]' },
  { name: 'Node.js',     level: 84, icon: FaNodeJs,      color: 'text-[#d4a96a]' },
  { name: 'Tailwind',    level: 90, icon: SiTailwindcss, color: 'text-[#e8b87a]' },
  { name: 'TypeScript',  level: 86, icon: SiTypescript,  color: 'text-[#c8a0e0]' },
  { name: 'JavaScript',  level: 94, icon: SiJavascript,  color: 'text-[#f0c070]' },
  { name: 'Python',      level: 78, icon: FaPython,      color: 'text-[#f0c070]' },
  { name: 'Angular',     level: 72, icon: FaAngular,     color: 'text-[#e87060]' },
  { name: 'PHP/Laravel', level: 74, icon: FaPhp,         color: 'text-[#a090d8]' },
];

const STATS_DATA = [
  { value: '15+',  label: 'Projects',    icon: FaRocket },
  { value: '2+',   label: 'Years Exp',   icon: FaClock  },
  { value: '100%', label: 'Dedication',  icon: FaFire   },
];

const INTERESTS = [
  { icon: FaCoffee,  label: 'Coffee'  },
  { icon: FaGamepad, label: 'Gaming'  },
  { icon: FaMusic,   label: 'Music'   },
  { icon: FaPlane,   label: 'Travel'  },
];

/* ─── Inline style block for custom CSS (keyframes etc.) ─── */
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --ember-900: #330A05;
    --ember-800: #550F05;
    --ember-700: #761305;
    --ember-600: #9D3306;
    --ember-500: #C45306;
    --ember-glow: rgba(196,83,6,0.55);
    --gold:  #f0c070;
    --cream: #f5e6cc;
  }

  @keyframes ember-rise {
    0%   { opacity: 0; transform: translateY(32px); }
    100% { opacity: 1; transform: translateY(0);    }
  }
  @keyframes ember-left {
    0%   { opacity: 0; transform: translateX(-28px); }
    100% { opacity: 1; transform: translateX(0);     }
  }
  @keyframes ember-right {
    0%   { opacity: 0; transform: translateX(28px); }
    100% { opacity: 1; transform: translateX(0);    }
  }
  @keyframes marquee-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes pulse-ring {
    0%, 100% { box-shadow: 0 0 0 0 rgba(196,83,6,0.5); }
    50%       { box-shadow: 0 0 0 8px rgba(196,83,6,0);  }
  }
  @keyframes slow-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes flicker {
    0%,100% { opacity: 1; }
    50%     { opacity: 0.65; }
  }

  .ember-rise          { animation: ember-rise  0.75s ease both; }
  .ember-left          { animation: ember-left  0.75s ease both; }
  .ember-right         { animation: ember-right 0.75s ease both; }
  .marquee-run         { animation: marquee-scroll 28s linear infinite; }
  .avatar-ring         { animation: pulse-ring  3s ease-in-out infinite; }
  .ornament-spin       { animation: slow-spin   30s linear infinite; }
  .flicker-dot         { animation: flicker      2s ease-in-out infinite; }

  /* Noise overlay for depth */
  .noise::before {
    content: '';
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none; z-index: 0;
  }

  .font-display { font-family: 'Playfair Display', serif; }
  .font-body    { font-family: 'DM Sans', sans-serif; }

  /* Skill bar shimmer */
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  .skill-bar {
    background: linear-gradient(90deg,
      #761305 0%, #9D3306 35%, #C45306 50%, #f0c070 55%, #C45306 65%, #9D3306 100%);
    background-size: 200% auto;
    animation: shimmer 3.5s linear infinite;
  }
`;

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
      setAnimatedSkills(SKILLS_DATA.map(s => s.level));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const duration = 1600;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setAnimatedSkills(SKILLS_DATA.map(s => Math.round(s.level * eased)));
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
    <>
      <style>{GLOBAL_STYLES}</style>

      <section
        id="about"
        className="font-body relative py-24 sm:py-32 overflow-hidden noise"
        style={{ background: 'linear-gradient(160deg, #330A05 0%, #550F05 30%, #761305 60%, #550F05 85%, #330A05 100%)' }}
      >
        {/* ── Decorative background layers ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid */}
          <div style={{
            backgroundImage: 'linear-gradient(rgba(196,83,6,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(196,83,6,0.07) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
            position: 'absolute', inset: 0,
          }} />
          {/* Radial bloom top */}
          <div style={{
            position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 600,
            background: 'radial-gradient(ellipse at center, rgba(196,83,6,0.20) 0%, transparent 70%)',
          }} />
          {/* Bottom right ember */}
          <div style={{
            position: 'absolute', bottom: '5%', right: '0',
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(157,51,6,0.18) 0%, transparent 65%)',
          }} />
          {/* Rotating decorative ring */}
          <div className="ornament-spin absolute top-16 right-16 opacity-10 hidden lg:block" style={{
            width: 260, height: 260,
            border: '1px solid #C45306',
            borderRadius: '50%',
            borderStyle: 'dashed',
          }} />
          <div className="ornament-spin absolute bottom-20 left-10 opacity-8 hidden lg:block" style={{
            width: 180, height: 180,
            border: '1px solid #9D3306',
            borderRadius: '50%',
            animationDirection: 'reverse',
            animationDuration: '40s',
            borderStyle: 'dashed',
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <div className="text-center mb-16 sm:mb-20 ember-rise" style={{ animationDelay: '0.1s' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 20px',
              marginBottom: 24,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#f0c070',
              background: 'rgba(196,83,6,0.15)',
              border: '1px solid rgba(196,83,6,0.45)',
              borderRadius: 999,
            }}>
              About Me
            </span>
            <h2 className="font-display" style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              fontWeight: 900,
              color: '#f5e6cc',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              Crafting Digital
              <span style={{
                display: 'block',
                marginTop: 8,
                background: 'linear-gradient(90deg, #f0c070 0%, #C45306 40%, #f0c070 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
                animation: 'shimmer 4s linear infinite',
              }}>
                Experiences
              </span>
            </h2>
            {/* Ornamental divider */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 20 }}>
              <div style={{ width: 48, height: 1, background: 'linear-gradient(to right, transparent, #C45306)' }} />
              <div style={{ width: 6, height: 6, background: '#C45306', borderRadius: '50%' }} />
              <div style={{ width: 12, height: 12, border: '1.5px solid #C45306', borderRadius: '50%', transform: 'rotate(45deg)' }} />
              <div style={{ width: 6, height: 6, background: '#C45306', borderRadius: '50%' }} />
              <div style={{ width: 48, height: 1, background: 'linear-gradient(to left, transparent, #C45306)' }} />
            </div>
          </div>

          {/* ── Main Grid ── */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-20">

            {/* ── Profile Card (left) ── */}
            <div className="lg:col-span-4 ember-left" style={{ animationDelay: '0.25s' }}>
              <div className="space-y-5 lg:sticky lg:top-24">

                {/* Main Profile Card */}
                <div style={{
                  background: 'linear-gradient(145deg, rgba(85,15,5,0.9) 0%, rgba(51,10,5,0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 20,
                  border: '1px solid rgba(196,83,6,0.30)',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(51,10,5,0.7), inset 0 1px 0 rgba(240,192,112,0.08)',
                }}>
                  {/* Top accent bar */}
                  <div style={{ height: 3, background: 'linear-gradient(90deg, #761305, #C45306, #f0c070, #C45306, #761305)' }} />

                  <div style={{ padding: '2rem 2rem 1.75rem' }}>
                    {/* Avatar */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 24 }}>
                      <div className="avatar-ring" style={{ position: 'relative', marginBottom: 18 }}>
                        {/* Outer glow frame */}
                        <div style={{
                          width: 110, height: 110,
                          borderRadius: 20,
                          background: 'linear-gradient(135deg, #C45306, #761305)',
                          padding: 2,
                          transform: 'rotate(4deg)',
                          transition: 'transform 0.3s',
                        }}>
                          <div style={{ width: '100%', height: '100%', borderRadius: 18, background: '#330A05', overflow: 'hidden' }}>
                            <Image
                              src="/My.png"
                              alt="Profile photo"
                              width={140}
                              height={140}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              priority
                            />
                          </div>
                        </div>
                        {/* Status dot */}
                        <span className="flicker-dot" style={{
                          position: 'absolute', bottom: -2, right: -2,
                          width: 16, height: 16,
                          background: '#4ade80',
                          border: '3px solid #330A05',
                          borderRadius: '50%',
                        }} />
                      </div>

                      <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f5e6cc', marginBottom: 4 }}>
                        Bhanuka Shamen Rathnasiri
                      </h3>
                      <p style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#C45306',
                      }}>
                        Software Engineer
                      </p>
                    </div>

                    {/* Info list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
                      {[
                        { icon: FaMapMarkerAlt, text: 'Polonnaruwa, Sri Lanka',           color: '#C45306' },
                        { icon: FaGraduationCap, text: 'Eastern University, Sri Lanka',   color: '#a090d8' },
                        { icon: FaEnvelope,      text: 'shamenrathnasiri@gmail.com',      color: '#90d8b0' },
                        { icon: FaBirthdayCake,  text: 'DOB: 2000-07-20',                color: '#f0c070' },
                        { icon: FaBriefcase,     text: 'Full-time / Freelance',           color: '#f0a060' },
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(245,230,204,0.65)', fontSize: '0.82rem' }}>
                          <item.icon style={{ width: 14, height: 14, color: item.color, flexShrink: 0 }} />
                          <span style={{ overflowWrap: 'anywhere' }}>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <a
                        href="/CV/H.K.Bhanuka-Shamen-Rathnasiri-.pdf"
                        download="H.K.Bhanuka-Shamen-Rathnasiri-CV.pdf"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                          padding: '11px 0',
                          background: 'linear-gradient(90deg, #761305, #C45306)',
                          color: '#f5e6cc',
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          borderRadius: 12,
                          textDecoration: 'none',
                          transition: 'all 0.3s',
                          boxShadow: '0 4px 20px rgba(196,83,6,0.35)',
                          letterSpacing: '0.03em',
                        }}
                      >
                        <FaDownload style={{ width: 13, height: 13 }} />
                        Download Resume
                      </a>
                      <a
                        href="mailto:shamenrathnasiri@gmail.com"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                          padding: '11px 0',
                          background: 'rgba(85,15,5,0.5)',
                          color: 'rgba(245,230,204,0.75)',
                          fontWeight: 500,
                          fontSize: '0.88rem',
                          borderRadius: 12,
                          textDecoration: 'none',
                          border: '1px solid rgba(196,83,6,0.25)',
                          transition: 'all 0.3s',
                        }}
                      >
                        <FaEnvelope style={{ width: 13, height: 13 }} />
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>

                {/* Interests card */}
                <div style={{
                  background: 'rgba(85,15,5,0.55)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 14,
                  padding: '1.1rem 1.25rem',
                  border: '1px solid rgba(196,83,6,0.22)',
                }}>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(240,192,112,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                    <FaHeart style={{ width: 10, height: 10, color: '#C45306' }} /> Interests
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {INTERESTS.map(({ icon: Icon, label }) => (
                      <span key={label} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '7px 12px',
                        background: 'rgba(118,19,5,0.35)',
                        borderRadius: 9,
                        color: 'rgba(245,230,204,0.7)',
                        fontSize: '0.8rem',
                        border: '1px solid rgba(196,83,6,0.2)',
                        cursor: 'default',
                        transition: 'all 0.25s',
                      }}>
                        <Icon style={{ width: 12, height: 12 }} /> {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Content ── */}
            <div className="lg:col-span-8 ember-right" style={{ animationDelay: '0.3s', display: 'flex', flexDirection: 'column', gap: 22 }}>

              {/* Bio card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(85,15,5,0.75) 0%, rgba(51,10,5,0.85) 100%)',
                backdropFilter: 'blur(16px)',
                borderRadius: 18,
                padding: '2rem 2.25rem',
                border: '1px solid rgba(196,83,6,0.25)',
                boxShadow: '0 8px 32px rgba(51,10,5,0.5)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{
                    padding: 10,
                    background: 'linear-gradient(135deg, rgba(196,83,6,0.25), rgba(157,51,6,0.15))',
                    borderRadius: 12,
                    border: '1px solid rgba(196,83,6,0.3)',
                  }}>
                    <HiLightningBolt style={{ width: 18, height: 18, color: '#C45306' }} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f5e6cc' }}>Who I Am</h3>
                </div>
                <p style={{ color: 'rgba(245,230,204,0.78)', lineHeight: 1.85, fontSize: '1rem' }}>
                  I&apos;m a passionate{' '}
                  <span style={{ color: '#C45306', fontWeight: 600 }}>Computer Science undergraduate</span>
                  {' '}at Eastern University, Sri Lanka, currently working as an Intern Software Engineer. My journey in tech is driven by a deep love for Full-Stack Development, Software Engineering, and creating exceptional user experiences through thoughtful UI/UX Design.
                </p>
              </div>

              {/* What I Do grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                {[
                  { icon: HiChip,        title: 'Development', desc: 'Building scalable web applications with modern frameworks', grad: 'linear-gradient(135deg,#9D3306,#C45306)' },
                  { icon: HiColorSwatch, title: 'Design',      desc: 'Creating intuitive and beautiful user interfaces',         grad: 'linear-gradient(135deg,#761305,#9D3306)' },
                  { icon: FaCode,        title: 'Backend',     desc: 'Developing robust APIs and server-side logic',             grad: 'linear-gradient(135deg,#550F05,#761305)' },
                  { icon: FaBriefcase,   title: 'Consulting',  desc: 'Helping businesses with digital solutions',                grad: 'linear-gradient(135deg,#C45306,#f0c070)' },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    onMouseEnter={() => setActiveCard(i)}
                    onMouseLeave={() => setActiveCard(null)}
                    style={{
                      background: activeCard === i
                        ? 'rgba(118,19,5,0.55)'
                        : 'rgba(85,15,5,0.5)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: 14,
                      padding: '1.25rem',
                      border: activeCard === i
                        ? '1px solid rgba(196,83,6,0.50)'
                        : '1px solid rgba(196,83,6,0.18)',
                      transition: 'all 0.3s',
                      cursor: 'default',
                    }}
                  >
                    <div style={{
                      display: 'inline-flex', padding: 10,
                      background: item.grad,
                      borderRadius: 10,
                      marginBottom: 14,
                      boxShadow: '0 4px 14px rgba(51,10,5,0.45)',
                    }}>
                      <item.icon style={{ width: 18, height: 18, color: '#f5e6cc' }} />
                    </div>
                    <h4 style={{ color: '#f5e6cc', fontWeight: 600, marginBottom: 6, fontSize: '0.95rem' }}>{item.title}</h4>
                    <p style={{ color: 'rgba(245,230,204,0.55)', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 14 }}>
                {STATS_DATA.map((stat, i) => (
                  <div key={stat.label} style={{
                    background: 'rgba(51,10,5,0.65)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 14,
                    padding: '1.4rem 1rem',
                    border: '1px solid rgba(196,83,6,0.22)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s',
                  }}>
                    {/* Subtle corner accent */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0,
                      height: 2,
                      background: i === 0 ? 'linear-gradient(90deg,#761305,#C45306)'
                        : i === 1 ? 'linear-gradient(90deg,#C45306,#f0c070)'
                        : 'linear-gradient(90deg,#9D3306,#761305)',
                    }} />
                    <stat.icon style={{ width: 22, height: 22, color: '#C45306', margin: '0 auto 10px' }} />
                    <span className="font-display" style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: '#f5e6cc', lineHeight: 1 }}>{stat.value}</span>
                    <p style={{ color: 'rgba(240,192,112,0.5)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 6 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Skills Section ── */}
          <div ref={skillsRef} style={{ marginBottom: '5rem' }}>
            <div className="text-center ember-rise" style={{ animationDelay: '0.5s', marginBottom: '3rem' }}>
              <h3 className="font-display" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#f5e6cc', marginBottom: 8 }}>
                Technical Expertise
              </h3>
              <p style={{ color: 'rgba(240,192,112,0.5)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>Technologies and tools I work with</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 14 }}>
              {SKILLS_DATA.map((skill, index) => {
                const pct = animatedSkills[index] ?? 0;
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="ember-rise"
                    style={{
                      animationDelay: `${index * 0.07}s`,
                      background: 'linear-gradient(135deg, rgba(85,15,5,0.65), rgba(51,10,5,0.8))',
                      backdropFilter: 'blur(12px)',
                      borderRadius: 14,
                      padding: '1.1rem 1.25rem',
                      border: '1px solid rgba(196,83,6,0.22)',
                      transition: 'border-color 0.3s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        padding: 9,
                        background: 'rgba(118,19,5,0.5)',
                        borderRadius: 9,
                        border: '1px solid rgba(196,83,6,0.2)',
                      }}>
                        <Icon style={{ width: 18, height: 18 }} className={skill.color} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span style={{ color: '#f5e6cc', fontWeight: 500, fontSize: '0.88rem' }}>{skill.name}</span>
                          <span style={{ color: '#C45306', fontWeight: 700, fontSize: '0.82rem' }}>{pct}%</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ height: 5, background: 'rgba(118,19,5,0.45)', borderRadius: 999, overflow: 'hidden' }}>
                      <div
                        className="skill-bar"
                        style={{ height: '100%', width: `${pct}%`, borderRadius: 999, transition: 'width 1s ease-out' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Tech Marquee ── */}
          <div className="ember-rise" style={{ animationDelay: '0.6s' }}>
            {/* Section label */}
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <span style={{
                fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(240,192,112,0.45)',
              }}>
                Tech Stack
              </span>
            </div>

            {/* Fade masks */}
            <div style={{ position: 'relative', overflow: 'hidden', padding: '8px 0' }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
                background: 'linear-gradient(to right, #550F05, transparent)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
                background: 'linear-gradient(to left, #550F05, transparent)',
                pointerEvents: 'none',
              }} />

              <div className="marquee-run" style={{ display: 'flex', gap: 12, width: '200%' }}>
                {TECH_MARQUEE_ICONS.concat(TECH_MARQUEE_ICONS).map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`${item.label}-${index}`}
                      style={{
                        flexShrink: 0,
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        width: 88, height: 76,
                        background: 'linear-gradient(145deg, rgba(118,19,5,0.55), rgba(51,10,5,0.70))',
                        borderRadius: 14,
                        border: '1px solid rgba(196,83,6,0.28)',
                        backdropFilter: 'blur(8px)',
                        cursor: 'default',
                        transition: 'transform 0.3s, border-color 0.3s',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Inner glow on hover via CSS-in-style won't work directly — static glow */}
                      <div style={{
                        position: 'absolute', inset: 0, borderRadius: 14,
                        background: `radial-gradient(circle at 50% 0%, rgba(196,83,6,0.18), transparent 70%)`,
                      }} />
                      <Icon style={{ width: 22, height: 22, position: 'relative', zIndex: 1 }} className={item.color} />
                      <span style={{
                        position: 'relative', zIndex: 1,
                        marginTop: 7, fontSize: '0.62rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'rgba(245,230,204,0.6)',
                      }}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}