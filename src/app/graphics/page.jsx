"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaFacebook, FaExternalLinkAlt, FaPalette, FaImages } from 'react-icons/fa'
import Tute1 from '../../../public/(graphics)/Tute1.jpg'
import Tute2 from '../../../public/(graphics)/Tute2.jpg'
import Tute3 from '../../../public/(graphics)/Tute3.jpg'
import Tute4 from '../../../public/(graphics)/Tute4.jpg'
import Tute5 from '../../../public/(graphics)/Tute5.jpg'
import Tute6 from '../../../public/(graphics)/Tute6.jpg'
import Post1 from '../../../public/(graphics)/post1.jpg'
import Post2 from '../../../public/(graphics)/post2.jpg'
import Post3 from '../../../public/(graphics)/post3.jpg'
import Post4 from '../../../public/(graphics)/post4.jpg'
import Post5 from '../../../public/(graphics)/post5.jpg'
import Post6 from '../../../public/(graphics)/post6.jpg'
import Post7 from '../../../public/(graphics)/post7.jpg'
import Post8 from '../../../public/(graphics)/post8.jpg'
import Post9 from '../../../public/(graphics)/post9.jpg'
import Post10 from '../../../public/(graphics)/post10.jpg'
import Flayer1 from '../../../public/(graphics)/flayer1.jpg'
import Flayer2 from '../../../public/(graphics)/flayer2.jpg'
import Flayer3 from '../../../public/(graphics)/flayer3.jpg'
import Post11 from '../../../public/(graphics)/post11.jpg'
import Post12 from '../../../public/(graphics)/post12.jpg'
import Post13 from '../../../public/(graphics)/post13.jpg'

/* ─── Styles ─── */
const GFX_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes gx-shimmer {
    0%   { background-position:-200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes gx-pulse-dot {
    0%,100% { opacity:1;  transform:scale(1);    box-shadow:0 0 0 0   rgba(196,83,6,0.55); }
    50%      { opacity:.7; transform:scale(1.18); box-shadow:0 0 0 7px rgba(196,83,6,0);    }
  }
  @keyframes gx-orbit {
    from { transform:translate(-50%,-50%) rotate(0deg); }
    to   { transform:translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes gx-rise {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes gx-glow-pulse {
    0%,100% { opacity:.55; }
    50%      { opacity:1;   }
  }
  @keyframes gx-bounce {
    0%,100% { transform:translateY(0);    }
    50%      { transform:translateY(-6px); }
  }
  @keyframes gx-nav-underline {
    from { width:0; }
    to   { width:100%; }
  }

  .gx-root { font-family:'DM Sans',sans-serif; }

  /* page bg */
  .gx-page {
    min-height:100vh; position:relative; overflow:hidden;
    background:linear-gradient(160deg,
      #330A05 0%, #550F05 22%, #761305 44%, #550F05 68%, #330A05 100%);
  }

  /* grid overlay */
  .gx-grid {
    position:absolute; inset:0; pointer-events:none;
    background-image:
      linear-gradient(rgba(196,83,6,0.07) 1px,transparent 1px),
      linear-gradient(90deg,rgba(196,83,6,0.05) 1px,transparent 1px);
    background-size:52px 52px;
    mask-image:radial-gradient(ellipse 88% 80% at 50% 30%, black 0%, transparent 75%);
  }

  /* bloom glows */
  .gx-bloom {
    position:absolute; border-radius:50%; pointer-events:none;
    filter:blur(90px);
    animation:gx-glow-pulse 5s ease-in-out infinite;
  }

  /* orbit ring */
  .gx-ring {
    position:absolute; border-radius:50%; pointer-events:none;
    border:1px dashed rgba(196,83,6,0.08);
    animation:gx-orbit 75s linear infinite;
  }

  /* heading shimmer */
  .gx-heading-grad {
    background:linear-gradient(90deg,#f5e6cc 0%,#f0c070 30%,#C45306 55%,#f0c070 80%,#f5e6cc 100%);
    background-size:200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation:gx-shimmer 5s linear infinite;
  }

  /* back button */
  .gx-back-btn {
    display:inline-flex; align-items:center; gap:8px;
    padding:10px 22px; border-radius:999px;
    background:linear-gradient(135deg,rgba(118,19,5,0.55),rgba(85,15,5,0.70));
    border:1px solid rgba(196,83,6,0.35);
    color:rgba(245,230,204,0.80);
    font-size:0.88rem; font-weight:600;
    text-decoration:none;
    box-shadow:0 4px 16px rgba(51,10,5,0.50);
    transition:background .25s,border-color .25s,color .25s,transform .22s,box-shadow .25s;
  }
  .gx-back-btn:hover {
    background:linear-gradient(135deg,rgba(196,83,6,0.35),rgba(118,19,5,0.60));
    border-color:rgba(196,83,6,0.60);
    color:#f0c070;
    transform:translateY(-2px);
    box-shadow:0 8px 24px rgba(51,10,5,0.60);
  }

  /* ornament */
  .gx-orn { display:flex; align-items:center; justify-content:center; gap:10px; }
  .gx-orn-line { width:44px; height:1px; background:linear-gradient(90deg,transparent,#C45306,transparent); }
  .gx-orn-gem  { width:6px; height:6px; border:1.5px solid #C45306; transform:rotate(45deg); flex-shrink:0; }
  .gx-orn-dot  { width:5px; height:5px; border-radius:50%; background:#C45306; flex-shrink:0;
    animation:gx-pulse-dot 2.8s ease-in-out infinite; }

  /* badge */
  .gx-badge {
    display:inline-flex; align-items:center; gap:7px;
    padding:5px 16px; border-radius:999px;
    font-size:0.68rem; font-weight:700; letter-spacing:0.18em; text-transform:uppercase;
    background:rgba(196,83,6,0.12); border:1px solid rgba(196,83,6,0.38);
    color:rgba(240,192,112,0.80);
  }

  /* ABC studio card */
  .gx-studio-card {
    position:relative; overflow:hidden;
    background:linear-gradient(145deg,rgba(85,15,5,0.85),rgba(51,10,5,0.93));
    border:1px solid rgba(196,83,6,0.32);
    border-radius:22px;
    box-shadow:0 20px 60px rgba(51,10,5,0.65), inset 0 1px 0 rgba(240,192,112,0.06);
    backdrop-filter:blur(20px);
  }
  .gx-studio-bar {
    height:2px;
    background:linear-gradient(90deg,#761305,#C45306,#f0c070,#C45306,#761305);
    background-size:200% auto;
    animation:gx-shimmer 5s linear infinite;
  }
  .gx-studio-icon {
    width:56px; height:56px; border-radius:14px; flex-shrink:0;
    background:linear-gradient(135deg,#761305,#C45306);
    border:1px solid rgba(196,83,6,0.40);
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 6px 20px rgba(51,10,5,0.50);
  }
  .gx-studio-link {
    display:inline-flex; align-items:center; gap:7px;
    padding:8px 18px; border-radius:999px;
    font-size:0.80rem; font-weight:600;
    background:rgba(118,19,5,0.40);
    border:1px solid rgba(196,83,6,0.28);
    color:rgba(245,230,204,0.80);
    text-decoration:none;
    transition:background .22s,border-color .22s,color .22s,transform .22s;
  }
  .gx-studio-link:hover {
    background:rgba(196,83,6,0.22);
    border-color:rgba(196,83,6,0.55);
    color:#f0c070;
    transform:translateY(-1px);
  }

  /* sticky nav */
  .gx-nav {
    position:sticky; top:0; z-index:30;
    background:linear-gradient(105deg,rgba(51,10,5,0.97),rgba(85,15,5,0.95),rgba(51,10,5,0.97));
    backdrop-filter:blur(20px);
    border-bottom:1px solid rgba(196,83,6,0.28);
    box-shadow:0 8px 32px rgba(51,10,5,0.55);
  }
  .gx-nav-bar {
    height:2px;
    background:linear-gradient(90deg,#761305,#C45306,#f0c070,#C45306,#761305);
    background-size:200% auto;
    animation:gx-shimmer 5s linear infinite;
  }
  .gx-nav-link {
    position:relative;
    display:inline-flex; align-items:center;
    padding:14px 6px; min-height:48px;
    font-size:0.85rem; font-weight:600; letter-spacing:0.04em;
    white-space:nowrap;
    color:rgba(245,230,204,0.60);
    text-decoration:none;
    transition:color .22s;
  }
  .gx-nav-link::after {
    content:'';
    position:absolute; bottom:0; left:0; right:0;
    height:2px; border-radius:999px;
    background:linear-gradient(90deg,#C45306,#f0c070);
    transform:scaleX(0); transform-origin:left;
    transition:transform .3s cubic-bezier(0.34,1.56,0.64,1);
  }
  .gx-nav-link:hover  { color:#f0c070; }
  .gx-nav-link:hover::after  { transform:scaleX(1); }
  .gx-nav-link-active { color:#f0c070 !important; }
  .gx-nav-link-active::after { transform:scaleX(1) !important; }

  /* section heading */
  .gx-sec-row { display:flex; align-items:center; gap:14px; margin-bottom:8px; }
  .gx-sec-bar  {
    width:4px; height:52px; border-radius:999px; flex-shrink:0;
    background:linear-gradient(to bottom,#C45306,#761305);
    box-shadow:0 0 12px rgba(196,83,6,0.45);
  }
  .gx-sec-title {
    font-family:'Playfair Display',serif;
    font-size:clamp(1.3rem,2.5vw,1.8rem); font-weight:700;
  }

  /* image card */
  .gx-img-card {
    position:relative; overflow:hidden;
    border-radius:16px;
    border:1px solid rgba(196,83,6,0.20);
    box-shadow:0 8px 28px rgba(51,10,5,0.50);
    transition:border-color .35s, box-shadow .35s, transform .35s;
    background:#330A05;
  }
  .gx-img-card:hover {
    border-color:rgba(196,83,6,0.55);
    box-shadow:0 16px 48px rgba(51,10,5,0.70), 0 0 0 1px rgba(196,83,6,0.18);
    transform:translateY(-4px) scale(1.015);
  }

  /* image corner lines decoration */
  .gx-img-deco {
    position:absolute; top:10px; left:10px; z-index:10;
    display:flex; flex-direction:column; gap:3px; pointer-events:none;
  }
  .gx-deco-line-1 { width:28px; height:1.5px; border-radius:999px;
    background:linear-gradient(90deg,rgba(196,83,6,0.70),transparent); }
  .gx-deco-line-2 { width:18px; height:1.5px; border-radius:999px;
    background:linear-gradient(90deg,rgba(196,83,6,0.45),transparent); }

  /* overlay */
  .gx-img-overlay {
    position:absolute; inset:0;
    background:linear-gradient(to top,rgba(51,10,5,0.92) 0%,rgba(51,10,5,0.40) 45%,transparent 100%);
    opacity:0; transition:opacity .32s;
    display:flex; flex-direction:column; justify-content:flex-end; padding:14px;
  }
  .gx-img-card:hover .gx-img-overlay { opacity:1; }

  /* arrow badge */
  .gx-arrow-badge {
    position:absolute; top:10px; right:10px; z-index:10;
    width:28px; height:28px; border-radius:50%;
    background:rgba(196,83,6,0.18);
    border:1px solid rgba(196,83,6,0.45);
    backdrop-filter:blur(6px);
    display:flex; align-items:center; justify-content:center;
    opacity:0; transform:rotate(0deg);
    transition:opacity .3s, transform .3s;
    color:rgba(240,192,112,0.85);
    font-size:0.85rem;
  }
  .gx-img-card:hover .gx-arrow-badge { opacity:1; transform:rotate(45deg); }

  /* overlay title */
  .gx-overlay-title {
    font-family:'Playfair Display',serif;
    font-size:0.92rem; font-weight:700; color:#f5e6cc; margin-bottom:5px;
  }
  .gx-overlay-sub {
    font-size:0.75rem; font-weight:600; color:#C45306; margin-bottom:6px;
  }
  .gx-overlay-line {
    width:36px; height:1.5px; border-radius:999px;
    background:linear-gradient(90deg,#C45306,transparent);
  }

  .gx-rise   { animation:gx-rise 0.65s ease both; }
  .gx-rise-2 { animation:gx-rise 0.65s ease 0.12s both; }
  .gx-bounce { animation:gx-bounce ease-in-out infinite; }
`;

/* ─── Data ─── */
const collections = {
  tuteCovers:[
    {id:1,image:Tute1,title:'Tutorial Cover 1'},
    {id:2,image:Tute2,title:'Tutorial Cover 2'},
    {id:3,image:Tute3,title:'Tutorial Cover 3'},
    {id:4,image:Tute4,title:'Tutorial Cover 4'},
    {id:5,image:Tute5,title:'Tutorial Cover 5'},
    {id:6,image:Tute6,title:'Tutorial Cover 6'},
  ],
  posts:[
    {id:1,image:Post1,title:'Social Post 1'},
    {id:2,image:Post2,title:'Social Post 2'},
    {id:3,image:Post3,title:'Social Post 3'},
    {id:4,image:Post4,title:'Social Post 4'},
    {id:5,image:Post5,title:'Social Post 5'},
    {id:6,image:Post6,title:'Social Post 6'},
    {id:7,image:Post7,title:'Social Post 7'},
    {id:8,image:Post8,title:'Social Post 8'},
    {id:9,image:Post9,title:'Social Post 9'},
    {id:10,image:Post10,title:'Social Post 10'},
    {id:11,image:Post11,title:'Social Post 11'},
    {id:12,image:Post12,title:'Social Post 12'},
    {id:13,image:Post13,title:'Social Post 13'},
  ],
  flayes:[
    {id:1,image:Flayer1,title:'Flyer Design 1',description:'For Shop'},
    {id:2,image:Flayer2,title:'Flyer Design 2',description:'For Class'},
    {id:3,image:Flayer3,title:'Flyer Design 3',description:'For Class'},
  ],
};

/* ─── Reusable image card ─── */
function GalleryCard({ item, delay = 0, aspectClass = 'aspect-[4/5]' }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.22,1,0.36,1] }}
      className="gx-img-card"
    >
      {/* corner decoration */}
      <div className="gx-img-deco">
        <div className="gx-deco-line-1" />
        <div className="gx-deco-line-2" />
      </div>

      <div className={aspectClass}>
        <Image
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          width={500} height={600}
          style={{ display:'block' }}
        />
      </div>

      {/* hover overlay */}
      <div className="gx-img-overlay">
        <p className="gx-overlay-title">{item.title}</p>
        {item.description && <p className="gx-overlay-sub">{item.description}</p>}
        <div className="gx-overlay-line" />
      </div>

      {/* arrow badge */}
      <div className="gx-arrow-badge">→</div>
    </motion.div>
  );
}

/* ─── Section heading ─── */
function SecHeading({ label, sub }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div className="gx-sec-row">
        <div className="gx-sec-bar" />
        <h2 className="gx-sec-title gx-heading-grad">{label}</h2>
      </div>
      {sub && <p style={{ color:'rgba(245,230,204,0.42)', fontSize:'0.80rem', marginLeft:18, paddingLeft:6, marginTop:4 }}>{sub}</p>}
    </div>
  );
}

export default function GraphicsPage() {
  const [activeNav, setActiveNav] = useState('tute-covers');

  const navLinks = [
    { id:'tute-covers', label:'Tute Covers' },
    { id:'posts',       label:'Posts'       },
    { id:'flayes',      label:'Flyers'      },
  ];

  const handleNav = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GFX_STYLES }} />

      <div className="gx-root gx-page">

        {/* ── bg decorations ── */}
        <div className="gx-grid" aria-hidden="true" />
        <div className="gx-bloom" aria-hidden="true" style={{ top:'8%',   left:'4%',   width:320, height:320, background:'rgba(196,83,6,0.16)', animationDelay:'0s'  }} />
        <div className="gx-bloom" aria-hidden="true" style={{ bottom:'6%', right:'3%',  width:380, height:380, background:'rgba(157,51,6,0.13)', animationDelay:'2s'  }} />
        <div className="gx-bloom" aria-hidden="true" style={{ top:'50%',   left:'50%',  transform:'translate(-50%,-50%)', width:560, height:560, background:'rgba(51,10,5,0.45)', animationDelay:'1s' }} />
        <div className="gx-ring" style={{ top:'50%', left:'50%', width:720, height:720 }} aria-hidden="true" />

        {/* corner brackets */}
        {[
          { top:'5%',    left:'3%',   borderTop:'1.5px solid rgba(196,83,6,0.30)',    borderLeft:'1.5px solid rgba(196,83,6,0.30)'  },
          { top:'5%',    right:'3%',  left:'auto', borderTop:'1.5px solid rgba(196,83,6,0.30)',  borderRight:'1.5px solid rgba(196,83,6,0.30)' },
          { bottom:'5%', left:'3%',   borderBottom:'1.5px solid rgba(196,83,6,0.30)', borderLeft:'1.5px solid rgba(196,83,6,0.30)'  },
          { bottom:'5%', right:'3%',  left:'auto', borderBottom:'1.5px solid rgba(196,83,6,0.30)',borderRight:'1.5px solid rgba(196,83,6,0.30)'},
        ].map((s,i)=>(
          <div key={i} aria-hidden="true" style={{ position:'absolute',...s, width:22, height:22, pointerEvents:'none' }} />
        ))}

        <div style={{ position:'relative', zIndex:10 }}>

          {/* ── Back button ── */}
          <div className="gx-rise" style={{ padding:'20px 24px 0' }}>
            <Link href="/#project" className="gx-back-btn">
              <FaArrowLeft style={{ width:13, height:13 }} />
              Back to Projects
            </Link>
          </div>

          {/* ── Header ── */}
          <header style={{ padding:'28px 24px 20px', maxWidth:1200, margin:'0 auto' }}>
            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
              style={{ textAlign:'center', marginBottom:'2.5rem' }}
            >
              <span className="gx-badge" style={{ marginBottom:18, display:'inline-flex' }}>
                <span style={{ width:5, height:5, borderRadius:'50%', background:'#C45306' }} />
                Creative Work
              </span>

              <h1 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, lineHeight:1.1,
                fontSize:'clamp(2.2rem,5.5vw,4rem)', marginBottom:18 }}>
                <span className="gx-heading-grad">Graphic Design Gallery</span>
              </h1>

              <div className="gx-orn" style={{ marginBottom:16 }}>
                <div className="gx-orn-line" />
                <div className="gx-orn-gem" />
                <div className="gx-orn-dot" />
                <div className="gx-orn-gem" />
                <div className="gx-orn-line" />
              </div>

              <p style={{ color:'rgba(245,230,204,0.55)', fontSize:'clamp(0.88rem,2vw,1rem)', lineHeight:1.8, maxWidth:540, margin:'0 auto 20px' }}>
                Visual storytelling through{' '}
                <span style={{ color:'#C45306', fontWeight:600 }}>vibrant compositions</span>,{' '}
                <span style={{ color:'#f0c070', fontWeight:600 }}>bold typography</span>, and ember-hot creativity.
              </p>

              <div style={{ display:'flex', justifyContent:'center', gap:8 }}>
                {[0,0.12,0.24].map((d,i)=>(
                  <div key={i} className="gx-bounce" style={{
                    width:7, height:7, borderRadius:'50%', background:'#C45306',
                    animationDuration:'1.2s', animationDelay:`${d}s`,
                  }} />
                ))}
              </div>
            </motion.div>

            {/* ── ABC Studio card ── */}
            <motion.div
              initial={{ opacity:0, y:24 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.18, duration:0.6, ease:[0.22,1,0.36,1] }}
            >
              <div className="gx-studio-card">
                <div className="gx-studio-bar" />
                {/* inner bloom */}
                <div aria-hidden="true" style={{
                  position:'absolute', top:-40, right:20, width:180, height:180, borderRadius:'50%',
                  background:'rgba(196,83,6,0.14)', filter:'blur(60px)', pointerEvents:'none',
                }} />

                <div style={{ padding:'1.75rem 2rem', display:'flex', flexDirection:'column', gap:16 }}>
                  <div style={{ display:'flex', flexWrap:'wrap', alignItems:'flex-start', gap:18 }}>
                    {/* icon */}
                    <div className="gx-studio-icon">
                      <FaFacebook style={{ width:26, height:26, color:'#f5e6cc' }} />
                    </div>

                    <div style={{ flex:1, minWidth:200 }}>
                      <p style={{ fontSize:'0.66rem', letterSpacing:'0.22em', textTransform:'uppercase',
                        color:'rgba(196,83,6,0.70)', marginBottom:6, fontWeight:700 }}>Featured Studio</p>
                      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.4rem,3vw,1.85rem)',
                        fontWeight:900, color:'#f5e6cc', marginBottom:10, lineHeight:1.1 }}>ABC Graphics</h3>
                      <p style={{ color:'rgba(245,230,204,0.60)', fontSize:'0.88rem', lineHeight:1.75, maxWidth:600, marginBottom:16 }}>
                        Freelance graphic design studio crafting bold social posts, eye-catching flyers,
                        professional tute covers, and cohesive branding systems.
                      </p>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
                        <a href="https://www.abcgraphics.lk" target="_blank" rel="noopener noreferrer" className="gx-studio-link">
                          Website <FaExternalLinkAlt style={{ width:11, height:11 }} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100095599507570" target="_blank" rel="noopener noreferrer" className="gx-studio-link">
                          Facebook Page <FaExternalLinkAlt style={{ width:11, height:11 }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </header>

          {/* ── Sticky Nav ── */}
          <nav className="gx-nav">
            <div className="gx-nav-bar" />
            <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px',
              display:'flex', gap:28, overflowX:'auto' }}>
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`gx-nav-link ${activeNav === id ? 'gx-nav-link-active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNav(id); }}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* ── Gallery sections ── */}
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'48px 24px 64px' }}>

            {/* Tute Covers */}
            <section id="tute-covers" style={{ marginBottom:'5rem' }}>
              <SecHeading label="Tutorial Covers" sub="Educational materials with bold, attention-grabbing designs" />
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:18 }}>
                {collections.tuteCovers.map((item, idx) => (
                  <GalleryCard key={item.id} item={item} delay={idx * 0.08} />
                ))}
              </div>
            </section>

            {/* Posts */}
            <section id="posts" style={{ marginBottom:'5rem' }}>
              <SecHeading label="Social Media Posts" sub="Engaging content crafted for maximum social impact" />
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:16 }}>
                {collections.posts.map((item, idx) => (
                  <GalleryCard key={item.id} item={item} delay={idx * 0.05} />
                ))}
              </div>
            </section>

            {/* Flyers */}
            <section id="flayes">
              <SecHeading label="Flyers & Print Design" sub="Professional print materials for businesses and classes" />
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:18 }}>
                {collections.flayes.map((item, idx) => (
                  <GalleryCard key={item.id} item={item} delay={idx * 0.10} />
                ))}
              </div>
            </section>

            {/* bottom ornament */}
            <div className="gx-orn" style={{ marginTop:'4rem', opacity:0.40 }}>
              <div className="gx-orn-line" style={{ width:60 }} />
              <div className="gx-orn-gem" />
              <div className="gx-orn-dot" />
              <div className="gx-orn-gem" />
              <div className="gx-orn-line" style={{ width:60 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}