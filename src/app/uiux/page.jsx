"use client";
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

import ABC1 from "../../../public/(uiux)/abc1.jpg";
import ABC2 from "../../../public/(uiux)/abc2.jpg";
import ABC3 from "../../../public/(uiux)/abc3.jpg";
import Cake1 from '../../../public/(uiux)/cake1.jpg';
import Coffee2 from '../../../public/(uiux)/coffee2.jpg';
import Coffee1 from '../../../public/(uiux)/coffee1.jpg';
import Cake2 from '../../../public/(uiux)/cake2.jpg';
import Pizza1 from '../../../public/(uiux)/pizza1.jpg';
import Pizza2 from '../../../public/(uiux)/pizza2.jpg';
import Pizza3 from '../../../public/(uiux)/pizza3.jpg';

/* ─── Styles ─── */
const UX_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes ux-shimmer {
    0%   { background-position:-200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes ux-pulse-dot {
    0%,100% { opacity:1;  transform:scale(1);    box-shadow:0 0 0 0   rgba(196,83,6,0.55); }
    50%      { opacity:.7; transform:scale(1.18); box-shadow:0 0 0 7px rgba(196,83,6,0);    }
  }
  @keyframes ux-orbit {
    from { transform:translate(-50%,-50%) rotate(0deg); }
    to   { transform:translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes ux-rise {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes ux-glow-pulse {
    0%,100% { opacity:.55; }
    50%      { opacity:1;   }
  }
  @keyframes ux-bounce {
    0%,100% { transform:translateY(0);    }
    50%      { transform:translateY(-6px); }
  }

  .ux-root { font-family:'DM Sans',sans-serif; }

  /* page */
  .ux-page {
    min-height:100vh; position:relative; overflow:hidden;
    background:linear-gradient(160deg,
      #330A05 0%, #550F05 22%, #761305 44%, #550F05 68%, #330A05 100%);
  }

  /* grid */
  .ux-grid {
    position:absolute; inset:0; pointer-events:none;
    background-image:
      linear-gradient(rgba(196,83,6,0.07) 1px,transparent 1px),
      linear-gradient(90deg,rgba(196,83,6,0.05) 1px,transparent 1px);
    background-size:52px 52px;
    mask-image:radial-gradient(ellipse 88% 80% at 50% 30%, black 0%, transparent 75%);
  }

  /* bloom */
  .ux-bloom {
    position:absolute; border-radius:50%; pointer-events:none;
    filter:blur(90px);
    animation:ux-glow-pulse 5s ease-in-out infinite;
  }

  /* orbit ring */
  .ux-ring {
    position:absolute; border-radius:50%; pointer-events:none;
    border:1px dashed rgba(196,83,6,0.08);
    animation:ux-orbit 75s linear infinite;
  }

  /* heading shimmer */
  .ux-heading-grad {
    background:linear-gradient(90deg,#f5e6cc 0%,#f0c070 30%,#C45306 55%,#f0c070 80%,#f5e6cc 100%);
    background-size:200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation:ux-shimmer 5s linear infinite;
  }

  /* back button */
  .ux-back-btn {
    display:inline-flex; align-items:center; gap:8px;
    padding:10px 22px; border-radius:999px;
    background:linear-gradient(135deg,rgba(118,19,5,0.55),rgba(85,15,5,0.70));
    border:1px solid rgba(196,83,6,0.35);
    color:rgba(245,230,204,0.80); font-size:0.88rem; font-weight:600;
    text-decoration:none; box-shadow:0 4px 16px rgba(51,10,5,0.50);
    transition:background .25s,border-color .25s,color .25s,transform .22s,box-shadow .25s;
  }
  .ux-back-btn:hover {
    background:linear-gradient(135deg,rgba(196,83,6,0.35),rgba(118,19,5,0.60));
    border-color:rgba(196,83,6,0.60); color:#f0c070;
    transform:translateY(-2px); box-shadow:0 8px 24px rgba(51,10,5,0.60);
  }

  /* ornament */
  .ux-orn { display:flex; align-items:center; justify-content:center; gap:10px; }
  .ux-orn-line { width:44px; height:1px; background:linear-gradient(90deg,transparent,#C45306,transparent); }
  .ux-orn-gem  { width:6px; height:6px; border:1.5px solid #C45306; transform:rotate(45deg); flex-shrink:0; }
  .ux-orn-dot  { width:5px; height:5px; border-radius:50%; background:#C45306; flex-shrink:0;
    animation:ux-pulse-dot 2.8s ease-in-out infinite; }

  /* badge */
  .ux-badge {
    display:inline-flex; align-items:center; gap:7px; padding:5px 16px; border-radius:999px;
    font-size:0.68rem; font-weight:700; letter-spacing:0.18em; text-transform:uppercase;
    background:rgba(196,83,6,0.12); border:1px solid rgba(196,83,6,0.38);
    color:rgba(240,192,112,0.80);
  }

  /* ── Project Card ── */
  .ux-card {
    position:relative; overflow:hidden;
    background:linear-gradient(145deg,rgba(85,15,5,0.82),rgba(51,10,5,0.92));
    border:1px solid rgba(196,83,6,0.22);
    border-radius:18px; cursor:pointer;
    box-shadow:0 12px 40px rgba(51,10,5,0.60), inset 0 1px 0 rgba(240,192,112,0.05);
    transition:border-color .32s, box-shadow .32s;
    min-height:420px; display:flex; flex-direction:column;
  }
  .ux-card:hover {
    border-color:rgba(196,83,6,0.52);
    box-shadow:0 20px 56px rgba(51,10,5,0.72), 0 0 0 1px rgba(196,83,6,0.18);
  }

  /* card shimmer bar */
  .ux-card-bar {
    height:2px;
    background:linear-gradient(90deg,#761305,#C45306,#f0c070,#C45306,#761305);
    background-size:200% auto;
    animation:ux-shimmer 5s linear infinite;
  }

  /* card deco lines */
  .ux-card-deco {
    position:absolute; top:10px; left:10px; z-index:10;
    display:flex; flex-direction:column; gap:3px; pointer-events:none;
  }
  .ux-deco-l1 { width:32px; height:1.5px; border-radius:999px;
    background:linear-gradient(90deg,rgba(196,83,6,0.65),transparent); }
  .ux-deco-l2 { width:20px; height:1.5px; border-radius:999px;
    background:linear-gradient(90deg,rgba(196,83,6,0.40),transparent); }

  /* card grow divider */
  .ux-grow-line {
    height:2px; border-radius:999px;
    background:linear-gradient(90deg,#C45306,transparent);
    width:44px; margin-bottom:10px;
    transition:width 0.5s cubic-bezier(0.22,1,0.36,1);
  }
  .ux-card:hover .ux-grow-line { width:100%; }

  /* arrow badge */
  .ux-arrow-badge {
    position:absolute; top:10px; right:10px; z-index:10;
    width:30px; height:30px; border-radius:50%;
    background:rgba(196,83,6,0.18); border:1px solid rgba(196,83,6,0.45);
    backdrop-filter:blur(6px);
    display:flex; align-items:center; justify-content:center;
    opacity:0; transform:rotate(0deg);
    transition:opacity .3s, transform .3s;
    color:rgba(240,192,112,0.85); font-size:0.9rem;
  }
  .ux-card:hover .ux-arrow-badge { opacity:1; transform:rotate(45deg); }

  /* category / year pill */
  .ux-pill-cat {
    display:inline-flex; align-items:center;
    padding:4px 14px; border-radius:999px;
    font-size:0.72rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;
    background:linear-gradient(135deg,#761305,#C45306);
    border:1px solid rgba(196,83,6,0.45);
    color:#f5e6cc;
  }
  .ux-pill-year {
    display:inline-flex; align-items:center;
    padding:4px 11px; border-radius:999px;
    font-size:0.72rem; font-weight:600;
    background:rgba(51,10,5,0.65); border:1px solid rgba(196,83,6,0.28);
    color:rgba(196,83,6,0.80);
    backdrop-filter:blur(6px);
  }

  /* highlight tag */
  .ux-tag {
    display:inline-block; padding:4px 11px; border-radius:7px;
    font-size:0.72rem; font-weight:600;
    background:rgba(118,19,5,0.40); border:1px solid rgba(196,83,6,0.22);
    color:rgba(245,230,204,0.72);
    transition:background .22s,border-color .22s,color .22s,transform .22s;
  }
  .ux-tag:hover {
    background:rgba(196,83,6,0.22); border-color:rgba(196,83,6,0.50);
    color:#f0c070; transform:scale(1.05);
  }

  /* ── Modal ── */
  .ux-modal-overlay {
    position:fixed; inset:0; z-index:50;
    background:rgba(26,3,2,0.95); backdrop-filter:blur(16px);
    display:flex; align-items:center; justify-content:center;
    padding:12px;
  }
  .ux-modal-inner {
    background:linear-gradient(145deg,rgba(85,15,5,0.95),rgba(51,10,5,0.98));
    border:1px solid rgba(196,83,6,0.30);
    border-radius:20px;
    max-width:960px; width:100%;
    max-height:90vh; overflow-y:auto;
    box-shadow:0 30px 80px rgba(51,10,5,0.80), inset 0 1px 0 rgba(240,192,112,0.06);
    position:relative;
  }
  .ux-modal-bar {
    height:2px; border-radius:20px 20px 0 0;
    background:linear-gradient(90deg,#761305,#C45306,#f0c070,#C45306,#761305);
    background-size:200% auto;
    animation:ux-shimmer 5s linear infinite;
  }

  /* close button */
  .ux-close-btn {
    position:absolute; top:14px; right:14px; z-index:20;
    width:40px; height:40px; border-radius:50%;
    background:linear-gradient(135deg,#761305,#C45306);
    border:1px solid rgba(196,83,6,0.50);
    color:#f5e6cc; font-size:1.2rem; font-weight:700;
    display:flex; align-items:center; justify-content:center; cursor:pointer;
    box-shadow:0 4px 16px rgba(51,10,5,0.55);
    transition:filter .25s, transform .25s;
  }
  .ux-close-btn:hover { filter:brightness(1.15); transform:rotate(90deg) scale(1.08); }

  /* modal nav buttons */
  .ux-nav-btn {
    display:inline-flex; align-items:center; gap:7px;
    padding:9px 18px; border-radius:11px;
    font-size:0.84rem; font-weight:600;
    background:rgba(118,19,5,0.40); border:1px solid rgba(196,83,6,0.25);
    color:rgba(245,230,204,0.75);
    cursor:pointer; transition:background .22s,border-color .22s,color .22s,transform .22s;
  }
  .ux-nav-btn:hover {
    background:rgba(196,83,6,0.22); border-color:rgba(196,83,6,0.52); color:#f0c070;
    transform:translateY(-1px);
  }

  /* image viewer thumbnail */
  .ux-thumb {
    position:relative; height:80px; border-radius:10px; overflow:hidden; cursor:pointer;
    border:1px solid rgba(196,83,6,0.18);
    transition:border-color .25s, transform .25s, box-shadow .25s;
    opacity:0.60;
  }
  .ux-thumb:hover { opacity:1; border-color:rgba(196,83,6,0.45); transform:scale(1.04); }
  .ux-thumb-active {
    opacity:1 !important; border-color:#C45306 !important;
    transform:scale(1.06) !important;
    box-shadow:0 0 14px rgba(196,83,6,0.40) !important;
  }

  /* image counter row */
  .ux-img-counter {
    display:flex; justify-content:space-between; align-items:center;
    padding:10px 14px; border-radius:11px;
    background:rgba(51,10,5,0.55); border:1px solid rgba(196,83,6,0.18);
  }
  .ux-img-nav-btn {
    padding:7px 10px; border-radius:8px;
    background:rgba(118,19,5,0.40); border:1px solid rgba(196,83,6,0.22);
    color:rgba(196,83,6,0.80); cursor:pointer;
    transition:background .22s,border-color .22s,color .22s,transform .22s;
    display:flex; align-items:center;
  }
  .ux-img-nav-btn:hover { background:rgba(196,83,6,0.22); border-color:rgba(196,83,6,0.52); color:#f0c070; transform:scale(1.08); }
  .ux-img-nav-btn:disabled { opacity:0.28; cursor:not-allowed; transform:none; }

  /* highlights box */
  .ux-highlights-box {
    background:rgba(51,10,5,0.55); border:1px solid rgba(196,83,6,0.20);
    border-radius:13px; padding:1.1rem 1.25rem;
  }

  .ux-modal-grid {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  }

  @media (max-width: 768px) {
    .ux-modal-inner { max-height:94vh; }
    .ux-modal-grid { grid-template-columns:1fr; }
    .ux-modal-col-left {
      border-right:none !important;
      border-bottom:1px solid rgba(196,83,6,0.18);
      padding:1.25rem !important;
    }
    .ux-modal-col-right { padding:1.25rem !important; }
  }

  .ux-rise   { animation:ux-rise 0.65s ease both; }
  .ux-rise-2 { animation:ux-rise 0.65s ease 0.12s both; }
  .ux-bounce { animation:ux-bounce ease-in-out infinite; }
`;

/* ─── Data ─── */
const uiuxProjects = [
  {
    id:1, title:"ABC Graphics – Shop Website", category:"Web App", year:"2025",
    highlights:["50+ Components","Figma Library","Interactive Animations"],
    description:"Designed a responsive website for a graphic design company using Figma, applying modern UI/UX principles. Developed clear low-to-high fidelity wireframes to structure layout and user journey. Added interactive animations and transitions to create a dynamic, engaging user experience. Focused on brand consistency, usability, and visual hierarchy across all pages.",
    images:[ABC1,ABC2,ABC3],
  },
  {
    id:2, title:"Cake Shop App Design (Cake Haven)", category:"Mobile App", year:"2024",
    highlights:["Smooth Navigation","Mobile-First","Clear Wireframes"],
    description:"Designed a mobile application for a cake shop using Figma, focusing on an intuitive user experience and visually appealing interface. Created user flows, wireframes, and high-fidelity mockups for cake browsing, customization, ordering, and delivery tracking. Applied a playful color scheme and custom iconography to reflect the brand's sweet identity.",
    images:[Cake1,Cake2],
  },
  {
    id:3, title:"Coffee Shop Website (Cozy Bean Cafe)", category:"Web App", year:"2025",
    highlights:["50+ Components","Figma Library","Warm UI Palette"],
    description:"Designed a modern, user-friendly website for a coffee shop using Figma, focusing on aesthetic appeal and easy navigation. Created wireframes and high-fidelity mockups showcasing key sections such as the menu, online ordering, location, and contact. Applied a warm, inviting color palette and custom typography to reflect the brand's cozy atmosphere.",
    images:[Coffee1,Coffee2],
  },
  {
    id:4, title:"Pizza Shop Website", category:"Web App", year:"2023",
    highlights:["50+ Components","Figma Library","Responsive Layout"],
    description:"Designed a modern and responsive Pizza Shop website using Figma, incorporating intuitive navigation, visually engaging layouts, and a clean user interface to enhance customer experience. Focused on UX principles to streamline the online ordering process, including interactive menu sections, cart management, and promotional banners.",
    images:[Pizza2,Pizza1,Pizza3],
  },
];

export default function UIUXPortfolio() {
  const [selectedId, setSelectedId]       = useState(null);
  const [direction, setDirection]         = useState(0);
  const [modalImageIndex, setModalImgIdx] = useState(0);

  const selectedProject = uiuxProjects.find(p => p.id === selectedId);

  const selectProject = (id) => {
    setDirection(id > (selectedId || 0) ? 1 : -1);
    setSelectedId(id); setModalImgIdx(0);
  };
  const closeDetail = () => { setSelectedId(null); setModalImgIdx(0); };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: UX_STYLES }} />

      <section className="ux-root ux-page px-4 sm:px-6 md:px-10 py-16">

        {/* bg decorations */}
        <div className="ux-grid" aria-hidden="true" />
        <div className="ux-bloom" aria-hidden="true" style={{ top:'8%',  left:'4%',  width:300, height:300, background:'rgba(196,83,6,0.16)', animationDelay:'0s'  }} />
        <div className="ux-bloom" aria-hidden="true" style={{ bottom:'6%',right:'3%', width:360, height:360, background:'rgba(157,51,6,0.13)', animationDelay:'2s'  }} />
        <div className="ux-bloom" aria-hidden="true" style={{ top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:540, height:540, background:'rgba(51,10,5,0.45)', animationDelay:'1s' }} />
        <div className="ux-ring" style={{ top:'50%', left:'50%', width:700, height:700 }} aria-hidden="true" />

        {/* corner brackets */}
        {[
          { top:'5%',    left:'3%',   borderTop:'1.5px solid rgba(196,83,6,0.28)',    borderLeft:'1.5px solid rgba(196,83,6,0.28)'  },
          { top:'5%',    right:'3%',  left:'auto', borderTop:'1.5px solid rgba(196,83,6,0.28)',  borderRight:'1.5px solid rgba(196,83,6,0.28)' },
          { bottom:'5%', left:'3%',   borderBottom:'1.5px solid rgba(196,83,6,0.28)', borderLeft:'1.5px solid rgba(196,83,6,0.28)'  },
          { bottom:'5%', right:'3%',  left:'auto', borderBottom:'1.5px solid rgba(196,83,6,0.28)',borderRight:'1.5px solid rgba(196,83,6,0.28)'},
        ].map((s,i)=>(
          <div key={i} aria-hidden="true" style={{ position:'absolute',...s, width:22, height:22, pointerEvents:'none' }} />
        ))}

        <div style={{ position:'relative', zIndex:10, maxWidth:1200, margin:'0 auto' }}>

          {/* back button */}
          <div className="ux-rise" style={{ marginBottom:28 }}>
            <Link href="/#project" className="ux-back-btn">
              <FaArrowLeft style={{ width:13, height:13 }} /> Back to Projects
            </Link>
          </div>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
            style={{ textAlign:'center', marginBottom:'3.5rem' }}
          >
            <span className="ux-badge" style={{ marginBottom:18, display:'inline-flex' }}>
              <span style={{ width:5, height:5, borderRadius:'50%', background:'#C45306' }} />
              Design Work
            </span>

            <h1 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, lineHeight:1.1,
              fontSize:'clamp(2.2rem,5.5vw,4rem)', marginBottom:18 }}>
              <span className="ux-heading-grad">UI/UX Design Projects</span>
            </h1>

            <div className="ux-orn" style={{ marginBottom:16 }}>
              <div className="ux-orn-line" /><div className="ux-orn-gem" />
              <div className="ux-orn-dot" /><div className="ux-orn-gem" /><div className="ux-orn-line" />
            </div>

            <p style={{ color:'rgba(245,230,204,0.55)', fontSize:'clamp(0.88rem,2vw,1rem)',
              lineHeight:1.8, maxWidth:540, margin:'0 auto 20px' }}>
              Selected works crafted with{' '}
              <span style={{ color:'#C45306', fontWeight:600 }}>Figma</span>,{' '}
              <span style={{ color:'#f0c070', fontWeight:600 }}>layered glass</span>, and cinematic motion.
            </p>

            <div style={{ display:'flex', justifyContent:'center', gap:8 }}>
              {[0,0.12,0.24].map((d,i)=>(
                <div key={i} className="ux-bounce" style={{
                  width:7, height:7, borderRadius:'50%', background:'#C45306',
                  animationDuration:'1.2s', animationDelay:`${d}s`,
                }} />
              ))}
            </div>
          </motion.div>

          {/* ── Project Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" style={{ gap:22, marginBottom:48 }}>
            {uiuxProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                onClick={() => selectProject(project.id)}
                initial={{ opacity:0, y:22 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:idx*0.09, duration:0.55, ease:[0.22,1,0.36,1] }}
                whileHover={{ y:-8, scale:1.018 }}
                className="ux-card"
              >
                <div className="ux-card-bar" />
                <div className="ux-card-deco">
                  <div className="ux-deco-l1" /><div className="ux-deco-l2" />
                </div>
                <div className="ux-arrow-badge">→</div>

                {/* image */}
                <div style={{ position:'relative', height:200, overflow:'hidden' }}>
                  <Image
                    src={project.images[0]} alt={project.title} fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    style={{ transition:'transform .65s', transformOrigin:'center' }}
                  />
                  {/* image overlay */}
                  <div style={{
                    position:'absolute', inset:0,
                    background:'linear-gradient(to top,rgba(51,10,5,0.90) 0%,rgba(51,10,5,0.35) 55%,transparent 100%)',
                  }} />
                  {/* pills */}
                  <div style={{ position:'absolute', bottom:12, left:12, display:'flex', gap:8 }}>
                    <span className="ux-pill-cat">{project.category}</span>
                    <span className="ux-pill-year">{project.year}</span>
                  </div>
                </div>

                {/* body */}
                <div style={{ padding:'1.25rem', flexGrow:1, display:'flex', flexDirection:'column' }}>
                  <h3 style={{
                    fontFamily:"'Playfair Display',serif", fontSize:'1.1rem', fontWeight:700,
                    color:'#f5e6cc', marginBottom:8, lineHeight:1.3,
                    transition:'color .25s',
                  }}>
                    {project.title}
                  </h3>
                  <div className="ux-grow-line" />
                  <p style={{ color:'rgba(245,230,204,0.58)', fontSize:'0.84rem', lineHeight:1.75,
                    flexGrow:1, marginBottom:14,
                    display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden',
                  }}>
                    {project.description}
                  </p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                    {project.highlights.map((h,i) => <span key={i} className="ux-tag">{h}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* bottom ornament */}
          <div className="ux-orn" style={{ opacity:0.38 }}>
            <div className="ux-orn-line" style={{ width:60 }} /><div className="ux-orn-gem" />
            <div className="ux-orn-dot" /><div className="ux-orn-gem" />
            <div className="ux-orn-line" style={{ width:60 }} />
          </div>
        </div>

        {/* ── Modal ── */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="ux-modal-overlay"
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              transition={{ duration:0.22 }}
              onClick={closeDetail}
            >
              <motion.div
                layoutId={`card-${selectedId}`}
                initial={{ scale:0.88, y:-18, opacity:0 }}
                animate={{ scale:1, y:0, opacity:1 }}
                exit={{ scale:0.88, y:10, opacity:0 }}
                transition={{ duration:0.32, ease:'easeOut' }}
                className="ux-modal-inner"
                onClick={e => e.stopPropagation()}
              >
                <div className="ux-modal-bar" />
                <button className="ux-close-btn" onClick={closeDetail} aria-label="Close">&times;</button>

                <ProjectDetail
                  project={selectedProject}
                  direction={direction}
                  currentImage={modalImageIndex}
                  onImageChange={setModalImgIdx}
                  onNavigate={(newId) => {
                    const ni = uiuxProjects.findIndex(p => p.id === newId);
                    const ci = uiuxProjects.findIndex(p => p.id === selectedId);
                    setDirection(ni > ci ? 1 : -1);
                    setSelectedId(newId); setModalImgIdx(0);
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

/* ─── ProjectDetail (modal body) ─── */
function ProjectDetail({ project, direction, currentImage, onImageChange, onNavigate }) {
  const currentIndex = uiuxProjects.findIndex(p => p.id === project.id);

  return (
    <div className="ux-modal-grid">

      {/* ── Left: info ── */}
      <motion.div
        className="ux-modal-col-left"
        initial={{ x: direction * 50, opacity:0 }}
        animate={{ x:0, opacity:1 }}
        transition={{ duration:0.30 }}
        style={{
          padding:'2rem', borderRight:'1px solid rgba(196,83,6,0.18)',
          display:'flex', flexDirection:'column', gap:18,
          position:'relative', overflow:'hidden',
        }}
      >
        {/* inner bloom */}
        <div aria-hidden="true" style={{
          position:'absolute', top:-30, left:-30, width:160, height:160, borderRadius:'50%',
          background:'rgba(196,83,6,0.10)', filter:'blur(60px)', pointerEvents:'none',
        }} />

        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          <span style={{
            display:'inline-flex', alignItems:'center',
            padding:'4px 14px', borderRadius:999,
            fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase',
            background:'linear-gradient(135deg,#761305,#C45306)', color:'#f5e6cc',
          }}>{project.category}</span>
          <span style={{
            display:'inline-flex', alignItems:'center',
            padding:'4px 11px', borderRadius:999,
            fontSize:'0.72rem', fontWeight:600,
            background:'rgba(51,10,5,0.65)', border:'1px solid rgba(196,83,6,0.28)',
            color:'rgba(196,83,6,0.80)',
          }}>{project.year}</span>
        </div>

        <div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.3rem,2.5vw,1.7rem)',
            fontWeight:900, color:'#f5e6cc', marginBottom:10, lineHeight:1.2 }}>
            <span className="ux-heading-grad">{project.title}</span>
          </h2>
          <div style={{ width:44, height:2, borderRadius:999,
            background:'linear-gradient(90deg,#C45306,transparent)', marginBottom:14 }} />
          <p style={{ color:'rgba(245,230,204,0.65)', fontSize:'0.90rem', lineHeight:1.80 }}>
            {project.description}
          </p>
        </div>

        {/* highlights */}
        <div className="ux-highlights-box">
          <h4 style={{ display:'flex', alignItems:'center', gap:8,
            fontWeight:700, color:'#f5e6cc', marginBottom:12, fontSize:'0.90rem' }}>
            <span style={{ width:3, height:22, borderRadius:999,
              background:'linear-gradient(to bottom,#C45306,#761305)' }} />
            Key Highlights
          </h4>
          <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:9 }}>
            {project.highlights.map((item,i) => (
              <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10,
                color:'rgba(245,230,204,0.68)', fontSize:'0.86rem' }}>
                <span style={{ color:'#C45306', fontSize:'1rem', flexShrink:0, lineHeight:1.5 }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* prev / next navigation */}
        <div style={{ display:'flex', gap:10, flexWrap:'wrap',
          borderTop:'1px solid rgba(196,83,6,0.18)', paddingTop:16 }}>
          {currentIndex > 0 && (
            <button className="ux-nav-btn" onClick={() => onNavigate(uiuxProjects[currentIndex-1].id)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7"/></svg>
              Previous
            </button>
          )}
          {currentIndex < uiuxProjects.length-1 && (
            <button className="ux-nav-btn" style={{ marginLeft:'auto' }} onClick={() => onNavigate(uiuxProjects[currentIndex+1].id)}>
              Next
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          )}
        </div>
      </motion.div>

      {/* ── Right: image viewer ── */}
      <motion.div
        className="ux-modal-col-right"
        initial={{ x: direction * -50, opacity:0 }}
        animate={{ x:0, opacity:1 }}
        transition={{ duration:0.30 }}
        style={{ padding:'2rem', display:'flex', flexDirection:'column', gap:14, position:'relative' }}
      >
        {/* corner brackets */}
        {[
          { top:8,  left:8,  borderTop:'1.5px solid rgba(196,83,6,0.35)',    borderLeft:'1.5px solid rgba(196,83,6,0.35)'  },
          { bottom:8,right:8,borderBottom:'1.5px solid rgba(196,83,6,0.35)', borderRight:'1.5px solid rgba(196,83,6,0.35)' },
        ].map((s,i)=>(
          <div key={i} aria-hidden="true" style={{ position:'absolute',...s, width:22, height:22, pointerEvents:'none' }} />
        ))}

        {/* main image */}
        <div style={{
          position:'relative', height:'clamp(200px,30vw,320px)', borderRadius:14, overflow:'hidden',
          background:'#1a0503',
          border:'1px solid rgba(196,83,6,0.25)',
          boxShadow:'0 10px 36px rgba(51,10,5,0.60)',
        }}>
          <Image
            src={project.images[currentImage]}
            alt={`${project.title} – ${currentImage+1}`}
            fill className="object-contain"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          {/* inner corner accents */}
          {[
            { top:0, left:0, borderTop:'1.5px solid rgba(196,83,6,0.40)', borderLeft:'1.5px solid rgba(196,83,6,0.40)', borderRadius:'14px 0 0 0' },
            { bottom:0, right:0, borderBottom:'1.5px solid rgba(196,83,6,0.40)', borderRight:'1.5px solid rgba(196,83,6,0.40)', borderRadius:'0 0 14px 0' },
          ].map((s,i)=>(
            <div key={i} style={{ position:'absolute', ...s, width:20, height:20, pointerEvents:'none' }} />
          ))}
        </div>

        {/* thumbnails */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(80px,1fr))', gap:8 }}>
          {project.images.map((img,i) => (
            <button
              key={i}
              onClick={() => onImageChange(i)}
              className={`ux-thumb ${currentImage===i ? 'ux-thumb-active':''}`}
              style={{ background:'none', border:'none', padding:0 }}
            >
              <Image src={img} alt={`Thumb ${i+1}`} fill className="object-cover" />
              {currentImage !== i && (
                <div style={{ position:'absolute',inset:0,
                  background:'linear-gradient(to top,rgba(51,10,5,0.55),transparent)' }} />
              )}
            </button>
          ))}
        </div>

        {/* counter + arrows */}
        <div className="ux-img-counter">
          <span style={{ fontSize:'0.80rem', fontWeight:600 }}>
            <span style={{ color:'#C45306' }}>Image {currentImage+1}</span>
            <span style={{ color:'rgba(245,230,204,0.35)', margin:'0 5px' }}>/</span>
            <span style={{ color:'rgba(245,230,204,0.50)' }}>{project.images.length}</span>
          </span>
          <div style={{ display:'flex', gap:6 }}>
            <button className="ux-img-nav-btn"
              disabled={currentImage===0}
              onClick={() => onImageChange(Math.max(0, currentImage-1))}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button className="ux-img-nav-btn"
              disabled={currentImage===project.images.length-1}
              onClick={() => onImageChange(Math.min(project.images.length-1, currentImage+1))}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}