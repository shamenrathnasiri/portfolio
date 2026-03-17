const FOOTER_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');

  @keyframes ft-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes ft-pulse-dot {
    0%,100% { opacity:1; transform:scale(1);     box-shadow:0 0 0 0   rgba(196,83,6,0.55); }
    50%      { opacity:.6; transform:scale(1.18); box-shadow:0 0 0 7px rgba(196,83,6,0);    }
  }
  @keyframes ft-orbit {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }
  @keyframes ft-rise {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0);    }
  }

  .ft-root {
    font-family: 'DM Sans', sans-serif;
    position: relative; overflow: hidden;
    background: linear-gradient(170deg, #330A05 0%, #550F05 45%, #330A05 100%);
    border-top: 1px solid rgba(196,83,6,0.30);
  }

  /* shimmer top bar */
  .ft-top-bar {
    height: 2px;
    background: linear-gradient(90deg, #761305, #C45306, #f0c070, #C45306, #761305);
    background-size: 200% auto;
    animation: ft-shimmer 5s linear infinite;
  }

  /* grid bg */
  .ft-grid {
    position:absolute; inset:0; pointer-events:none;
    background-image:
      linear-gradient(rgba(196,83,6,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(196,83,6,0.04) 1px, transparent 1px);
    background-size: 52px 52px;
    mask-image: radial-gradient(ellipse 100% 100% at 50% 100%, black 0%, transparent 70%);
  }

  /* glow bloom */
  .ft-bloom {
    position:absolute; bottom:-30%; left:50%; transform:translateX(-50%);
    width:600px; height:300px; pointer-events:none;
    background:radial-gradient(ellipse at center, rgba(196,83,6,0.14) 0%, transparent 65%);
  }

  /* name shimmer */
  .ft-name {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    background: linear-gradient(90deg, #f5e6cc 0%, #f0c070 35%, #C45306 55%, #f0c070 80%, #f5e6cc 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ft-shimmer 5s linear infinite;
  }

  /* social icon button */
  .ft-icon-btn {
    width:44px; height:44px; border-radius:11px;
    display:flex; align-items:center; justify-content:center;
    background: rgba(118,19,5,0.40);
    border: 1px solid rgba(196,83,6,0.28);
    color: rgba(245,230,204,0.70);
    text-decoration:none;
    transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.22s, box-shadow 0.25s;
  }
  .ft-icon-btn:hover {
    background: rgba(196,83,6,0.22);
    border-color: rgba(196,83,6,0.55);
    color: #f0c070;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(196,83,6,0.32);
  }

  /* ornament */
  .ft-ornament { display:flex; align-items:center; gap:10px; }
  .ft-orn-line { flex:1; height:1px; background:linear-gradient(90deg,transparent,rgba(196,83,6,0.35),transparent); }
  .ft-orn-gem  { width:6px; height:6px; border:1.5px solid rgba(196,83,6,0.55); transform:rotate(45deg); flex-shrink:0; }
  .ft-orn-dot  { width:5px; height:5px; border-radius:50%; background:#C45306; flex-shrink:0;
    animation: ft-pulse-dot 2.8s ease-in-out infinite; }

  .ft-rise { animation: ft-rise 0.7s ease both; }
  .ft-rise-2 { animation: ft-rise 0.7s ease 0.15s both; }
  .ft-rise-3 { animation: ft-rise 0.7s ease 0.28s both; }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FOOTER_STYLES }} />

      <footer className="ft-root">
        {/* shimmer top line */}
        <div className="ft-top-bar" />

        {/* bg decorations */}
        <div className="ft-grid"  aria-hidden="true" />
        <div className="ft-bloom" aria-hidden="true" />

        {/* rotating orbit ring */}
        <div aria-hidden="true" style={{
          position:'absolute', bottom:'-80%', left:'50%',
          transform:'translateX(-50%)',
          width:420, height:420, borderRadius:'50%',
          border:'1px dashed rgba(196,83,6,0.10)',
          animation:'ft-orbit 55s linear infinite',
          pointerEvents:'none',
        }} />

        <div style={{ position:'relative', zIndex:10, maxWidth:1152, margin:'0 auto', padding:'2.5rem 1.5rem 2rem' }}>

          {/* ── ornamental divider top ── */}
          <div className="ft-ornament ft-rise" style={{ marginBottom:'1.75rem' }}>
            <div className="ft-orn-line" />
            <div className="ft-orn-gem" />
            <div className="ft-orn-dot" />
            <div className="ft-orn-gem" />
            <div className="ft-orn-line" />
          </div>

          {/* ── Main content ── */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:20, textAlign:'center' }}>

            {/* Logo / name */}
            <div className="ft-rise-2">
              <span className="ft-name" style={{ fontSize:'clamp(1.3rem,3vw,1.8rem)' }}>
                Bhanuka Shamen
              </span>
              <span style={{
                display:'inline-block', marginLeft:5,
                width:5, height:5, borderRadius:'50%',
                background:'#C45306', verticalAlign:'super',
                animation:'ft-pulse-dot 2.5s ease-in-out infinite',
              }} />
            </div>

            {/* Role label */}
            <div className="ft-rise-2" style={{
              display:'inline-flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap', gap:7,
              padding:'4px 14px',
              background:'rgba(196,83,6,0.10)',
              border:'1px solid rgba(196,83,6,0.28)',
              borderRadius:999,
              fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase',
              color:'rgba(240,192,112,0.70)',
              maxWidth:'100%',
            }}>
              <span style={{ width:5, height:5, borderRadius:'50%', background:'#C45306', flexShrink:0 }} />
              Software Engineer · UI/UX Designer
            </div>

            {/* Social icons */}
            <div className="ft-rise-3" style={{ display:'flex', alignItems:'center', gap:12 }}>
              {/* GitHub */}
              <a
                href="https://github.com/shamenrathnasiri"
                target="_blank" rel="noopener noreferrer"
                className="ft-icon-btn" aria-label="GitHub"
              >
                <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>

              {/* Dot separator */}
              <div style={{ width:4, height:4, borderRadius:'50%', background:'rgba(196,83,6,0.40)' }} />

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bhanuka-shamen-859183288/"
                target="_blank" rel="noopener noreferrer"
                className="ft-icon-btn" aria-label="LinkedIn"
              >
                <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Dot separator */}
              <div style={{ width:4, height:4, borderRadius:'50%', background:'rgba(196,83,6,0.40)' }} />

              {/* WhatsApp */}
              <a
                href="https://wa.me/94759715913"
                target="_blank" rel="noopener noreferrer"
                className="ft-icon-btn" aria-label="WhatsApp"
              >
                <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            {/* ── ornamental divider bottom ── */}
            <div className="ft-ornament" style={{ width:'100%', maxWidth:340 }}>
              <div className="ft-orn-line" />
              <div className="ft-orn-gem" />
              <div className="ft-orn-dot" />
              <div className="ft-orn-gem" />
              <div className="ft-orn-line" />
            </div>

            {/* Copyright */}
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
              <p style={{ fontSize:'0.88rem', color:'rgba(245,230,204,0.60)' }}>
                Created{' '}by{' '}
                <span style={{
                  fontWeight:600, color:'#f0c070',
                }}>Bhanuka Shamen</span>
                {' '}© {currentYear}
              </p>
              <p style={{ fontSize:'0.72rem', color:'rgba(196,83,6,0.45)', letterSpacing:'0.12em', textTransform:'uppercase' }}>
                All rights reserved
              </p>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;