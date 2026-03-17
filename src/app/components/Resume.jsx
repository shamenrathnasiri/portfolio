"use client";

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaPalette, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa';
import { HiAcademicCap, HiOfficeBuilding, HiSparkles } from 'react-icons/hi';

/* ─── Ember palette ─── */
const E = {
  900: '#330A05',
  800: '#550F05',
  700: '#761305',
  600: '#9D3306',
  500: '#C45306',
  gold: '#f0c070',
  cream: '#f5e6cc',
};

const RESUME_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes rs-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes rs-pulse {
    0%,100% { opacity:1; transform:scale(1);     box-shadow:0 0 0 0   rgba(196,83,6,0.55); }
    50%      { opacity:.7; transform:scale(1.15); box-shadow:0 0 0 7px rgba(196,83,6,0);    }
  }
  @keyframes rs-orbit {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }

  .rs-root { font-family:'DM Sans',sans-serif; }

  /* section bg */
  .rs-section {
    position:relative; overflow:hidden;
    background: linear-gradient(160deg,
      #330A05 0%, #550F05 25%, #761305 50%, #550F05 75%, #330A05 100%);
  }

  /* grid overlay */
  .rs-grid {
    position:absolute; inset:0; pointer-events:none;
    background-image:
      linear-gradient(rgba(196,83,6,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(196,83,6,0.05) 1px, transparent 1px);
    background-size:56px 56px;
    mask-image:radial-gradient(ellipse 90% 80% at 50% 30%, black 0%, transparent 75%);
  }

  /* bloom accents */
  .rs-bloom-l {
    position:absolute; top:20%; left:-5%; width:520px; height:520px;
    background:radial-gradient(circle, rgba(196,83,6,0.16) 0%, transparent 65%);
    pointer-events:none;
  }
  .rs-bloom-r {
    position:absolute; bottom:15%; right:-4%; width:440px; height:440px;
    background:radial-gradient(circle, rgba(157,51,6,0.13) 0%, transparent 65%);
    pointer-events:none;
  }

  /* card glass */
  .rs-card {
    background: linear-gradient(145deg, rgba(85,15,5,0.82), rgba(51,10,5,0.90));
    border: 1px solid rgba(196,83,6,0.22);
    border-radius: 18px;
    backdrop-filter: blur(18px);
    box-shadow: 0 16px 48px rgba(51,10,5,0.60), inset 0 1px 0 rgba(240,192,112,0.05);
    overflow: hidden;
    transition: border-color 0.3s, box-shadow 0.3s;
    height: 100%;
  }
  .rs-card:hover {
    border-color: rgba(196,83,6,0.45);
    box-shadow: 0 20px 60px rgba(51,10,5,0.70), 0 0 0 1px rgba(196,83,6,0.20);
  }

  /* shimmer top accent bar */
  .rs-card-bar {
    height: 2px;
    background: linear-gradient(90deg, #761305, #C45306, #f0c070, #C45306, #761305);
    background-size: 200% auto;
    animation: rs-shimmer 5s linear infinite;
  }

  /* section heading shimmer */
  .rs-heading-grad {
    background: linear-gradient(90deg, #f5e6cc 0%, #f0c070 30%, #C45306 55%, #f0c070 80%, #f5e6cc 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rs-shimmer 5s linear infinite;
  }

  /* icon box */
  .rs-icon-box {
    padding:10px;
    background: linear-gradient(135deg, rgba(196,83,6,0.30), rgba(118,19,5,0.40));
    border: 1px solid rgba(196,83,6,0.30);
    border-radius:12px;
    display:inline-flex; align-items:center; justify-content:center;
    box-shadow:0 4px 14px rgba(51,10,5,0.40);
  }

  /* section divider line */
  .rs-divider {
    flex:1; height:1px;
    background: linear-gradient(90deg, rgba(196,83,6,0.45), transparent);
    margin-left: 12px;
  }

  /* badge */
  .rs-badge {
    display:inline-flex; align-items:center; gap:6px;
    padding:5px 12px;
    border-radius:999px;
    font-size:0.72rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase;
    background:rgba(196,83,6,0.12);
    border:1px solid rgba(196,83,6,0.35);
    color:rgba(240,192,112,0.80);
  }

  /* meta tag pill */
  .rs-meta-pill {
    display:inline-flex; align-items:center; gap:6px;
    padding:5px 12px;
    border-radius:8px;
    font-size:0.78rem; font-weight:500;
    background:rgba(118,19,5,0.40);
    border:1px solid rgba(196,83,6,0.25);
    color:rgba(245,230,204,0.70);
  }

  /* link pill */
  .rs-link-pill {
    display:inline-flex; align-items:center; gap:7px;
    padding:6px 14px;
    border-radius:9px;
    font-size:0.80rem; font-weight:500;
    background:rgba(51,10,5,0.55);
    border:1px solid rgba(196,83,6,0.22);
    color:rgba(245,230,204,0.72);
    text-decoration:none;
    transition:background 0.22s, border-color 0.22s, color 0.22s;
  }
  .rs-link-pill:hover {
    background:rgba(118,19,5,0.50);
    border-color:rgba(196,83,6,0.50);
    color:#f0c070;
  }

  /* ornament */
  .rs-orn { display:flex; align-items:center; justify-content:center; gap:10px; }
  .rs-orn-line { width:44px; height:1px; background:linear-gradient(90deg,transparent,#C45306,transparent); }
  .rs-orn-gem  { width:6px; height:6px; border:1.5px solid #C45306; transform:rotate(45deg); flex-shrink:0; }
  .rs-orn-dot  { width:5px; height:5px; border-radius:50%; background:#C45306; flex-shrink:0;
    animation:rs-pulse 2.8s ease-in-out infinite; }

  /* bullet marker */
  .rs-check { color:#C45306; width:14px; height:14px; flex-shrink:0; margin-top:3px; }
  .rs-dot    { width:6px; height:6px; border-radius:50%; background:#C45306; flex-shrink:0; margin-top:6px; }
`;

/* ─── Animation variants ─── */
const container = {
  hidden:   { opacity: 0 },
  visible:  { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};
const item = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const cardHover = {
  rest:  { scale: 1,    y: 0  },
  hover: { scale: 1.015, y: -4, transition: { duration: 0.28 } },
};

/* ─── Data ─── */
const workExperience = [
  {
    role: 'Intern Software Engineer',
    company: 'Cybernetic Technologies Pvt. Ltd.',
    location: 'Battaramulla, Sri Lanka',
    date: '01st Aug 2025 – 01st Feb 2026',
    type: 'Full-time / Onsite',
    bullets: [
      'Built scalable full-stack features using React.js, Next.js, and Angular on the frontend, combined with Laravel and Node.js on the backend.',
      'Designed and developed modular, reusable UI components with clean and maintainable code.',
      'Optimized application performance and UX by improving rendering logic and applying best practices for SEO and accessibility.',
      'Integrated RESTful APIs using Axios, Fetch API, Laravel controllers, Express routes, and Flask endpoints.',
      'Strengthened knowledge of state management (Redux, Context API) and databases (MySQL, MongoDB).',
    ],
  },
  {
    role: 'Bank Assistant (Trainee)',
    company: 'Regional Development Bank (Manampitiya Branch)',
    location: 'Manampitiya, Sri Lanka',
    date: '01st Aug 2021 – 31st Jan 2022',
    type: 'Full-time',
    bullets: [
      'Assisted in daily banking operations including customer service, account handling, and transaction processing.',
      'Supported staff with opening new customer accounts and verifying required documentation.',
      'Handled cash deposits, withdrawals, and basic teller activities under supervision.',
      'Maintained accurate records and updated customer information in the banking system.',
      'Gained hands-on experience with core banking software and office automation tools.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Trincomalee Campus, Eastern University, Sri Lanka',
    location: 'Trincomalee, Sri Lanka',
    date: '2021 – Present',
    status: 'Undergraduate',
    highlights: [
      'Specializing in Software Engineering and Web Technologies',
      'Active member of the Computer Science Student Association',
    ],
  },
  {
    degree: 'G.C.E. Advanced Level – Physical Science',
    institution: 'Polonnaruwa Thopawewa Central College',
    location: 'Polonnaruwa, Sri Lanka',
    date: '2019 – 2021',
    status: 'Completed',
    highlights: [
      'Combined Mathematics, Physics, Chemistry',
      'Achieved strong academic performance',
    ],
  },
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
      'Developed print-ready designs including brochures, flyers, and business cards.',
    ],
  },
];

/* ─── Reusable section title row ─── */
function SectionTitle({ icon: Icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
      <div className="rs-icon-box">
        <Icon style={{ width: 22, height: 22, color: E.cream }} />
      </div>
      <h3
        className="rs-root"
        style={{ fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 700, color: E.cream, margin: 0 }}
      >
        {label}
      </h3>
      <div className="rs-divider" />
    </div>
  );
}

export default function ResumeSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESUME_STYLES }} />

      <section id="resume" className="rs-root rs-section py-20 sm:py-28">
        {/* bg decorations */}
        <div className="rs-grid"   aria-hidden="true" />
        <div className="rs-bloom-l" aria-hidden="true" />
        <div className="rs-bloom-r" aria-hidden="true" />
        {/* orbit ring */}
        <div aria-hidden="true" style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%,-50%)',
          width:800, height:800, borderRadius:'50%',
          border:'1px dashed rgba(196,83,6,0.08)',
          animation:'rs-orbit 70s linear infinite',
          pointerEvents:'none',
        }} />

        <div style={{ position:'relative', zIndex:10, maxWidth:1152, margin:'0 auto', padding:'0 1.5rem' }}>

          {/* ── Section Header ── */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            style={{ textAlign:'center', marginBottom:'4.5rem' }}
          >
            <motion.span variants={item}>
              <span className="rs-badge" style={{ marginBottom:20, display:'inline-flex' }}>
                <span style={{ width:5, height:5, borderRadius:'50%', background:E[500] }} />
                My Journey
              </span>
            </motion.span>

            <motion.h2
              variants={item}
              style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, lineHeight:1.1,
                fontSize:'clamp(2.4rem,5.5vw,4rem)', color:E.cream, marginBottom:16 }}
            >
              Resume &amp;
              <span className="rs-heading-grad" style={{ display:'block', marginTop:6 }}>
                Experience
              </span>
            </motion.h2>

            <motion.div variants={item} className="rs-orn" style={{ justifyContent:'center' }}>
              <div className="rs-orn-line" />
              <div className="rs-orn-gem" />
              <div className="rs-orn-dot" />
              <div className="rs-orn-gem" />
              <div className="rs-orn-line" />
            </motion.div>
          </motion.div>

          {/* ── Work Experience ── */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={container}
            style={{ marginBottom:'4rem' }}
          >
            <motion.div variants={item}>
              <SectionTitle icon={FaBriefcase} label="Work Experience" />
            </motion.div>

            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              {workExperience.map((exp, idx) => (
                <motion.div key={idx} variants={item} initial="rest" whileHover="hover" animate="rest">
                  <motion.article variants={cardHover} className="rs-card">
                    <div className="rs-card-bar" />
                    <div style={{ padding:'clamp(1.25rem,3vw,2rem)' }}>

                      {/* Header row */}
                      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:14, marginBottom:20 }}>
                        <div>
                          <h4 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.1rem,2.5vw,1.4rem)', fontWeight:700, color:E.cream, marginBottom:8 }}>
                            {exp.role}
                          </h4>
                          <div style={{ display:'flex', flexWrap:'wrap', gap:12, color:'rgba(245,230,204,0.55)', fontSize:'0.88rem' }}>
                            <span style={{ display:'flex', alignItems:'center', gap:6 }}>
                              <HiOfficeBuilding style={{ width:14, height:14, color:E[500] }} />
                              {exp.company}
                            </span>
                            <span style={{ display:'flex', alignItems:'center', gap:6 }}>
                              <FaMapMarkerAlt style={{ width:12, height:12, color:E[600] }} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div style={{ display:'flex', flexWrap:'wrap', gap:8, alignItems:'flex-start' }}>
                          <span className="rs-meta-pill">
                            <FaCalendarAlt style={{ width:11, height:11, color:E[500] }} />
                            {exp.date}
                          </span>
                          <span className="rs-meta-pill" style={{ background:'rgba(157,51,6,0.30)', borderColor:'rgba(157,51,6,0.35)' }}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
                        {exp.bullets.map((b, i) => (
                          <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, color:'rgba(245,230,204,0.70)', fontSize:'0.9rem', lineHeight:1.7 }}>
                            <FaCheckCircle className="rs-check" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Education ── */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={container}
            style={{ marginBottom:'4rem' }}
          >
            <motion.div variants={item}>
              <SectionTitle icon={FaGraduationCap} label="Education" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap:20 }}>
              {education.map((edu, idx) => (
                <motion.div key={idx} variants={item} initial="rest" whileHover="hover" animate="rest">
                  <motion.article variants={cardHover} className="rs-card">
                    <div className="rs-card-bar" />
                    <div style={{ padding:'1.5rem' }}>

                      {/* Top row */}
                      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', gap:10, marginBottom:16 }}>
                        <div style={{
                          padding:9,
                          background:'rgba(118,19,5,0.45)',
                          border:'1px solid rgba(196,83,6,0.28)',
                          borderRadius:11,
                          display:'inline-flex',
                        }}>
                          <HiAcademicCap style={{ width:22, height:22, color:E[500] }} />
                        </div>
                        <span style={{
                          display:'inline-flex', alignItems:'center',
                          padding:'4px 11px',
                          borderRadius:999, fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.10em', textTransform:'uppercase',
                          background: edu.status === 'Undergraduate' ? 'rgba(196,83,6,0.14)' : 'rgba(157,51,6,0.14)',
                          border: `1px solid ${edu.status === 'Undergraduate' ? 'rgba(196,83,6,0.38)' : 'rgba(157,51,6,0.35)'}`,
                          color: edu.status === 'Undergraduate' ? E.gold : 'rgba(240,192,112,0.70)',
                        }}>
                          {edu.status}
                        </span>
                      </div>

                      <h4 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.1rem', fontWeight:700, color:E.cream, marginBottom:6 }}>
                        {edu.degree}
                      </h4>
                      <p style={{ color:E[500], fontWeight:600, fontSize:'0.88rem', marginBottom:10 }}>{edu.institution}</p>

                      <div style={{ display:'flex', flexWrap:'wrap', gap:10, color:'rgba(245,230,204,0.50)', fontSize:'0.80rem', marginBottom:14 }}>
                        <span style={{ display:'flex', alignItems:'center', gap:5 }}>
                          <FaMapMarkerAlt style={{ width:11, height:11 }} /> {edu.location}
                        </span>
                        <span style={{ display:'flex', alignItems:'center', gap:5 }}>
                          <FaCalendarAlt style={{ width:11, height:11 }} /> {edu.date}
                        </span>
                      </div>

                      <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:8 }}>
                        {edu.highlights.map((h, i) => (
                          <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:9, color:'rgba(245,230,204,0.60)', fontSize:'0.84rem', lineHeight:1.6 }}>
                            <span className="rs-dot" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Freelance ── */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={container}
          >
            <motion.div variants={item}>
              <SectionTitle icon={FaPalette} label="Freelance Work" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap:20 }}>
              {freelance.map((work, idx) => (
                <motion.div key={idx} variants={item} initial="rest" whileHover="hover" animate="rest">
                  <motion.article variants={cardHover} className="rs-card">
                    <div className="rs-card-bar" />
                    <div style={{ padding:'1.5rem' }}>

                      {/* Header */}
                      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', gap:10, marginBottom:14 }}>
                        <div>
                          <h4 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.15rem', fontWeight:700, color:E.cream, marginBottom:4 }}>
                            {work.role}
                          </h4>
                          <p style={{ color:E[500], fontWeight:600, fontSize:'0.84rem' }}>{work.platform}</p>
                        </div>
                        <span style={{
                          display:'inline-flex', alignItems:'center', gap:6,
                          padding:'5px 11px',
                          background:'rgba(196,83,6,0.15)',
                          border:'1px solid rgba(196,83,6,0.35)',
                          borderRadius:999,
                          fontSize:'0.72rem', fontWeight:700,
                          color:E.gold,
                        }}>
                          <HiSparkles style={{ width:12, height:12 }} />
                          {work.projects}
                        </span>
                      </div>

                      <div style={{ display:'flex', alignItems:'center', gap:7, color:'rgba(245,230,204,0.50)', fontSize:'0.82rem', marginBottom:14 }}>
                        <FaCalendarAlt style={{ width:12, height:12 }} /> {work.date}
                      </div>

                      {/* Links */}
                      {(work.website || work.facebook) && (
                        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:16 }}>
                          {work.website && (
                            <a href={work.website} target="_blank" rel="noopener noreferrer" className="rs-link-pill">
                              <FaExternalLinkAlt style={{ width:11, height:11 }} />
                              www.abcgraphics.lk
                            </a>
                          )}
                          {work.facebook && (
                            <a href={work.facebook} target="_blank" rel="noopener noreferrer" className="rs-link-pill"
                              style={{ background:'rgba(118,19,5,0.40)', borderColor:'rgba(196,83,6,0.30)' }}>
                              <FaFacebook style={{ width:12, height:12, color:'#60a5fa' }} />
                              Facebook Page
                            </a>
                          )}
                        </div>
                      )}

                      {/* Bullets */}
                      <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:9 }}>
                        {work.bullets.map((b, i) => (
                          <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:9, color:'rgba(245,230,204,0.68)', fontSize:'0.86rem', lineHeight:1.7 }}>
                            <FaCheckCircle className="rs-check" style={{ width:13, height:13 }} />
                            {b}
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
    </>
  );
}