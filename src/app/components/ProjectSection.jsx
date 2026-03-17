import Link from 'next/link';
import { FaCode, FaPaintBrush, FaDesktop } from 'react-icons/fa';

const PROJECT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes pj-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes pj-pulse-dot {
    0%,100% { opacity:1; transform:scale(1);     box-shadow:0 0 0 0   rgba(196,83,6,0.55); }
    50%      { opacity:.7; transform:scale(1.18); box-shadow:0 0 0 8px rgba(196,83,6,0);    }
  }
  @keyframes pj-orbit {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes pj-orbit-rev {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(-360deg); }
  }
  @keyframes pj-float {
    0%,100% { transform: translateY(0)   scale(1);    }
    50%      { transform: translateY(-8px) scale(1.02); }
  }
  @keyframes pj-rise {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes pj-card-in {
    from { opacity:0; transform:translateY(32px) scale(0.96); }
    to   { opacity:1; transform:translateY(0)    scale(1);    }
  }
  @keyframes pj-glow-pulse {
    0%,100% { opacity:0.55; }
    50%      { opacity:1;    }
  }
  @keyframes pj-arrow {
    0%,100% { transform:translateX(0); }
    50%      { transform:translateX(5px); }
  }

  .pj-root { font-family:'DM Sans',sans-serif; }

  /* section */
  .pj-section {
    position:relative; overflow:hidden; min-height:100vh;
    background: linear-gradient(160deg,
      #330A05 0%, #550F05 22%, #761305 45%, #9D3306 62%, #550F05 80%, #330A05 100%);
  }

  /* grid overlay */
  .pj-grid {
    position:absolute; inset:0; pointer-events:none;
    background-image:
      linear-gradient(rgba(196,83,6,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(196,83,6,0.06) 1px, transparent 1px);
    background-size:54px 54px;
    mask-image:radial-gradient(ellipse 85% 85% at 50% 40%, black 0%, transparent 75%);
  }

  /* bloom balls */
  .pj-bloom {
    position:absolute; border-radius:50%; pointer-events:none;
    filter:blur(90px);
    animation:pj-glow-pulse 5s ease-in-out infinite;
  }

  /* orbit rings */
  .pj-ring {
    position:absolute; border-radius:50%; pointer-events:none;
    border-style:dashed;
  }

  /* ── card wrapper ── */
  .pj-card-wrap {
    position:relative;
    animation:pj-card-in 0.65s cubic-bezier(0.22,1,0.36,1) both;
  }

  /* halo glow behind card */
  .pj-card-halo {
    position:absolute; inset:-2px; border-radius:22px;
    opacity:0;
    transition:opacity 0.45s;
    filter:blur(18px);
    z-index:0;
  }
  .pj-card-wrap:hover .pj-card-halo { opacity:0.55; }

  /* card itself */
  .pj-card {
    position:relative; z-index:1;
    background: linear-gradient(145deg, rgba(85,15,5,0.85), rgba(51,10,5,0.92));
    border: 1px solid rgba(196,83,6,0.28);
    border-radius:20px;
    padding:2.25rem 2rem;
    backdrop-filter:blur(20px);
    box-shadow:0 16px 48px rgba(51,10,5,0.65), inset 0 1px 0 rgba(240,192,112,0.06);
    overflow:hidden;
    transition:border-color 0.35s, box-shadow 0.35s, transform 0.35s;
    animation:pj-float 6s ease-in-out infinite;
    display:flex; flex-direction:column; align-items:center; text-align:center;
    cursor:pointer;
  }
  .pj-card:hover {
    border-color:rgba(196,83,6,0.60);
    box-shadow:0 24px 64px rgba(51,10,5,0.75), 0 0 0 1px rgba(196,83,6,0.22);
    transform:translateY(-6px) scale(1.02);
  }

  /* top shimmer bar */
  .pj-card-bar {
    position:absolute; top:0; left:0; right:0; height:2px;
    background: linear-gradient(90deg, #761305, #C45306, #f0c070, #C45306, #761305);
    background-size:200% auto;
    animation:pj-shimmer 5s linear infinite;
  }

  /* corner arc decoration */
  .pj-corner-arc {
    position:absolute; top:0; right:0;
    width:90px; height:90px;
    border-radius:0 20px 0 100%;
    pointer-events:none;
  }

  /* icon container */
  .pj-icon-wrap {
    position:relative; margin-bottom:1.5rem;
  }
  .pj-icon-glow {
    position:absolute; inset:-4px; border-radius:18px;
    opacity:0.35;
    filter:blur(14px);
    transition:opacity 0.3s, filter 0.3s;
  }
  .pj-card:hover .pj-icon-glow { opacity:0.65; filter:blur(20px); }

  .pj-icon-box {
    position:relative; z-index:1;
    padding:18px;
    border-radius:16px;
    border:1px solid rgba(196,83,6,0.30);
    box-shadow:0 6px 22px rgba(51,10,5,0.45);
    display:inline-flex;
    transition:transform 0.35s;
  }
  .pj-card:hover .pj-icon-box-dev  { transform:rotate(6deg); }
  .pj-card:hover .pj-icon-box-ui   { transform:scale(1.12); }
  .pj-card:hover .pj-icon-box-gfx  { transform:rotate(-6deg); }

  /* heading shimmer */
  .pj-heading-grad {
    background: linear-gradient(90deg, #f5e6cc 0%, #f0c070 30%, #C45306 55%, #f0c070 80%, #f5e6cc 100%);
    background-size:200% auto;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    animation:pj-shimmer 5s linear infinite;
  }

  /* card title */
  .pj-card-title {
    font-family:'Playfair Display',serif;
    font-size:1.3rem; font-weight:700;
    color:#f5e6cc;
    margin-bottom:10px;
    transition:color 0.25s;
  }
  .pj-card:hover .pj-card-title { color:#f0c070; }

  /* desc */
  .pj-card-desc {
    color:rgba(245,230,204,0.55);
    font-size:0.88rem; line-height:1.75;
    margin-bottom:1.5rem;
  }

  /* explore arrow */
  .pj-explore {
    display:inline-flex; align-items:center; gap:8px;
    font-size:0.82rem; font-weight:600;
    letter-spacing:0.08em; text-transform:uppercase;
    color:rgba(196,83,6,0.75);
    padding:8px 18px;
    border:1px solid rgba(196,83,6,0.25);
    border-radius:999px;
    background:rgba(118,19,5,0.25);
    transition:color 0.25s, background 0.25s, border-color 0.25s, box-shadow 0.25s;
  }
  .pj-card:hover .pj-explore {
    color:#f0c070;
    background:rgba(196,83,6,0.18);
    border-color:rgba(196,83,6,0.50);
    box-shadow:0 0 14px rgba(196,83,6,0.25);
  }
  .pj-arrow { animation:pj-arrow 1.4s ease-in-out infinite; }

  /* ornament */
  .pj-orn { display:flex; align-items:center; justify-content:center; gap:10px; }
  .pj-orn-line { width:48px; height:1px; background:linear-gradient(90deg,transparent,#C45306,transparent); }
  .pj-orn-gem  { width:6px; height:6px; border:1.5px solid #C45306; transform:rotate(45deg); flex-shrink:0; }
  .pj-orn-dot  { width:5px; height:5px; border-radius:50%; background:#C45306; flex-shrink:0;
    animation:pj-pulse-dot 2.8s ease-in-out infinite; }

  /* badge */
  .pj-badge {
    display:inline-flex; align-items:center; gap:7px;
    padding:6px 18px; border-radius:999px;
    font-size:0.70rem; font-weight:700; letter-spacing:0.20em; text-transform:uppercase;
    background:rgba(196,83,6,0.12); border:1px solid rgba(196,83,6,0.38);
    color:rgba(240,192,112,0.80);
  }

  @media (prefers-reduced-motion:reduce) {
    .pj-card, .pj-card-bar, .pj-heading-grad,
    .pj-ring, .pj-bloom, .pj-arrow { animation:none !important; }
  }
`;

const CARDS = [
  {
    href: '/development',
    Icon: FaCode,
    label: 'Development',
    desc: 'Building robust web applications with modern technologies',
    iconGrad: 'linear-gradient(135deg,#761305,#C45306)',
    haloGrad: 'linear-gradient(135deg,#C45306,#9D3306)',
    cornerColor: 'rgba(196,83,6,0.18)',
    boxClass: 'pj-icon-box-dev',
    delay: '0.15s',
    floatDelay: '0s',
  },
  {
    href: '/uiux',
    Icon: FaDesktop,
    label: 'UI/UX Design',
    desc: 'Creating intuitive and engaging user experiences',
    iconGrad: 'linear-gradient(135deg,#9D3306,#C45306)',
    haloGrad: 'linear-gradient(135deg,#C45306,#f0c070)',
    cornerColor: 'rgba(157,51,6,0.18)',
    boxClass: 'pj-icon-box-ui',
    delay: '0.28s',
    floatDelay: '1.5s',
  },
  {
    href: '/graphics',
    Icon: FaPaintBrush,
    label: 'Graphic Design',
    desc: 'Designing visually stunning graphics and branding',
    iconGrad: 'linear-gradient(135deg,#C45306,#f0c070)',
    haloGrad: 'linear-gradient(135deg,#f0c070,#C45306)',
    cornerColor: 'rgba(240,192,112,0.12)',
    boxClass: 'pj-icon-box-gfx',
    delay: '0.41s',
    floatDelay: '3s',
  },
];

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PROJECT_STYLES }} />

      <section id="project" className="pj-root pj-section py-24">

        {/* ── bg decorations ── */}
        <div className="pj-grid" aria-hidden="true" />

        {/* bloom glows */}
        <div className="pj-bloom" aria-hidden="true" style={{ top:'12%', left:'8%', width:320, height:320, background:'rgba(196,83,6,0.18)', animationDelay:'0s' }} />
        <div className="pj-bloom" aria-hidden="true" style={{ bottom:'14%', right:'6%', width:380, height:380, background:'rgba(157,51,6,0.14)', animationDelay:'2.5s' }} />
        <div className="pj-bloom" aria-hidden="true" style={{ top:'55%', left:'50%', transform:'translate(-50%,-50%)', width:560, height:560, background:'rgba(85,15,5,0.50)', animationDelay:'1.2s' }} />

        {/* orbit rings */}
        <div className="pj-ring" aria-hidden="true" style={{
          top:'50%', left:'50%', width:680, height:680,
          border:'1px dashed rgba(196,83,6,0.10)',
          animation:'pj-orbit 65s linear infinite',
        }} />
        <div className="pj-ring" aria-hidden="true" style={{
          top:'50%', left:'50%', width:440, height:440,
          border:'1px dashed rgba(157,51,6,0.10)',
          animation:'pj-orbit-rev 45s linear infinite',
        }} />

        {/* corner bracket glyphs */}
        {[
          { top:'5%',  left:'3%',  bt:'none',  bb:'none',  bl:'1.5px solid rgba(196,83,6,0.30)', br:'none',  bt2:'1.5px solid rgba(196,83,6,0.30)' },
          { top:'5%',  right:'3%', left:'auto', bt:'none', bb:'none', bl:'none', br:'1.5px solid rgba(196,83,6,0.30)', bt2:'1.5px solid rgba(196,83,6,0.30)' },
          { bottom:'5%', left:'3%',  top:'auto', bt:'none', bb:'1.5px solid rgba(196,83,6,0.30)', bl:'1.5px solid rgba(196,83,6,0.30)', br:'none', bt2:'none' },
          { bottom:'5%', right:'3%', top:'auto', left:'auto', bt:'none', bb:'1.5px solid rgba(196,83,6,0.30)', bl:'none', br:'1.5px solid rgba(196,83,6,0.30)', bt2:'none' },
        ].map((s, i) => (
          <div key={i} aria-hidden="true" style={{
            position:'absolute', ...s,
            width:22, height:22,
            borderTop:s.bt2 || 'none', borderBottom:s.bb,
            borderLeft:s.bl, borderRight:s.br,
            pointerEvents:'none',
          }} />
        ))}

        {/* ── content ── */}
        <div style={{ position:'relative', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center', padding:'0 1.5rem' }}>

          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:'4.5rem', animation:'pj-rise 0.7s ease both' }}>
            <span className="pj-badge" style={{ marginBottom:20, display:'inline-flex' }}>
              <span style={{ width:5, height:5, borderRadius:'50%', background:'#C45306' }} />
              Portfolio
            </span>

            <h2
              style={{
                fontFamily:"'Playfair Display',serif",
                fontWeight:900, lineHeight:1.1,
                fontSize:'clamp(2.5rem,5.5vw,4.2rem)',
                marginBottom:20,
              }}
            >
              <span className="pj-heading-grad">My Projects</span>
            </h2>

            <div className="pj-orn" style={{ justifyContent:'center', marginBottom:16 }}>
              <div className="pj-orn-line" />
              <div className="pj-orn-gem" />
              <div className="pj-orn-dot" />
              <div className="pj-orn-gem" />
              <div className="pj-orn-line" />
            </div>

            <p style={{ color:'rgba(245,230,204,0.52)', fontSize:'clamp(0.88rem,2vw,1rem)', lineHeight:1.75, maxWidth:520, margin:'0 auto' }}>
              A curated collection of work spanning{' '}
              <span style={{ color:'#C45306', fontWeight:600 }}>engineering</span>,{' '}
              <span style={{ color:'#f0c070', fontWeight:600 }}>design</span>, and{' '}
              <span style={{ color:'rgba(196,83,6,0.85)', fontWeight:600 }}>visual storytelling</span>.
            </p>
          </div>

          {/* Cards grid */}
          <div style={{
            display:'flex', flexWrap:'wrap', justifyContent:'center',
            gap:28, width:'100%', maxWidth:1100,
          }}>
            {CARDS.map(({ href, Icon, label, desc, iconGrad, haloGrad, cornerColor, boxClass, delay, floatDelay }) => (
              <Link
                key={href}
                href={href}
                className="pj-card-wrap"
                style={{ width:'100%', maxWidth:320, animationDelay:delay, textDecoration:'none' }}
              >
                {/* halo */}
                <div className="pj-card-halo" style={{ background:haloGrad }} />

                {/* card */}
                <div className="pj-card" style={{ animationDelay:floatDelay }}>
                  {/* shimmer bar */}
                  <div className="pj-card-bar" />

                  {/* corner arc */}
                  <div className="pj-corner-arc" style={{ background:`linear-gradient(to bottom-left, ${cornerColor}, transparent)` }} />

                  {/* icon */}
                  <div className="pj-icon-wrap">
                    <div className="pj-icon-glow" style={{ background:iconGrad }} />
                    <div className={`pj-icon-box ${boxClass}`} style={{ background:iconGrad }}>
                      <Icon style={{ width:36, height:36, color:'#f5e6cc' }} />
                    </div>
                  </div>

                  {/* text */}
                  <h3 className="pj-card-title">{label}</h3>
                  <p className="pj-card-desc">{desc}</p>

                  {/* explore pill */}
                  <div className="pj-explore">
                    Explore
                    <span className="pj-arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom ornament */}
          <div className="pj-orn" style={{ marginTop:'4rem', opacity:0.45 }}>
            <div className="pj-orn-line" style={{ width:64 }} />
            <div className="pj-orn-gem" />
            <div className="pj-orn-dot" />
            <div className="pj-orn-gem" />
            <div className="pj-orn-line" style={{ width:64 }} />
          </div>
        </div>
      </section>
    </>
  );
}