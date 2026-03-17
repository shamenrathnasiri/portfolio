"use client";

import React from "react";

const particles = [
  { top: "12%", left: "10%",  opacity: 0.40, dur: 10, delay: 0   },
  { top: "22%", left: "72%",  opacity: 0.30, dur: 12, delay: 1.5 },
  { top: "48%", left: "18%",  opacity: 0.25, dur: 14, delay: 0.6 },
  { top: "62%", left: "78%",  opacity: 0.28, dur: 11, delay: 2.2 },
  { top: "78%", left: "40%",  opacity: 0.20, dur: 16, delay: 1.2 },
  { top: "35%", left: "88%",  opacity: 0.22, dur: 13, delay: 3.0 },
  { top: "85%", left: "8%",   opacity: 0.18, dur: 15, delay: 0.9 },
];

const EMBER_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  /* ── Keyframes ── */
  @keyframes gridDrift {
    0%   { background-position: 0px 0px; }
    100% { background-position: 80px 60px; }
  }
  @keyframes scanRise {
    0%   { transform: translateY(-130%); opacity: 0;   }
    8%   { opacity: 1; }
    65%  { opacity: 0.5; }
    100% { transform: translateY(130%);  opacity: 0;   }
  }
  @keyframes floatBit {
    0%,100% { transform: translateY(0)    rotate(0deg);  }
    50%      { transform: translateY(-16px) rotate(1.5deg); }
  }
  @keyframes emberPulse {
    0%,100% { opacity: 0.55; transform: scale(1);    }
    50%      { opacity: 1;    transform: scale(1.06); }
  }
  @keyframes shimmerText {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes subtleBreathe {
    0%,100% { opacity: 0.75; }
    50%      { opacity: 1;    }
  }
  @keyframes orbitRing {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes orbitRingRev {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }
  @keyframes fadeSlideUp {
    0%   { opacity: 0; transform: translateY(28px); }
    100% { opacity: 1; transform: translateY(0);    }
  }
  @keyframes tagPop {
    0%   { opacity: 0; transform: scale(0.85); }
    100% { opacity: 1; transform: scale(1);    }
  }

  /* ── Utility classes ── */
  .hs-font-display { font-family: 'Playfair Display', serif; }
  .hs-font-body    { font-family: 'DM Sans', sans-serif;     }

  .hs-grid-layer {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(196,83,6,0.09) 1px, transparent 1px),
      linear-gradient(90deg, rgba(196,83,6,0.07) 1px, transparent 1px);
    background-size: 48px 48px;
    animation: gridDrift 22s linear infinite;
    mask-image: radial-gradient(ellipse 80% 70% at 30% 30%, black 0%, transparent 75%);
  }

  .hs-scanline {
    position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(to bottom,
      transparent 0%,
      rgba(196,83,6,0.22) 40%,
      rgba(240,192,112,0.10) 50%,
      rgba(196,83,6,0.12) 60%,
      transparent 100%);
    height: 30%; width: 100%;
    animation: scanRise 7s linear infinite;
    mix-blend-mode: screen;
    filter: blur(0.5px);
  }

  .hs-particle {
    position: absolute; pointer-events: none;
    font-family: ui-monospace, monospace;
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    color: rgba(240,192,112,0.55);
    text-shadow: 0 0 14px rgba(196,83,6,0.50);
    animation: floatBit ease-in-out infinite;
  }

  .hs-name-gradient {
    background: linear-gradient(90deg,
      #f5e6cc 0%,
      #f0c070 25%,
      #C45306 50%,
      #f0c070 75%,
      #f5e6cc 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmerText 5s linear infinite;
  }

  .hs-role-tag {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 5px 14px;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    animation: tagPop 0.5s ease both;
  }

  .hs-btn-primary {
    position: relative; overflow: hidden;
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    padding: 13px 28px;
    background: linear-gradient(135deg, #761305 0%, #C45306 100%);
    color: #f5e6cc;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.04em;
    border-radius: 999px;
    text-decoration: none;
    border: 1px solid rgba(196,83,6,0.5);
    box-shadow: 0 4px 24px rgba(196,83,6,0.40), inset 0 1px 0 rgba(240,192,112,0.15);
    transition: transform 0.25s, box-shadow 0.25s;
    animation: fadeSlideUp 0.6s ease both;
  }
  .hs-btn-primary::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(240,192,112,0.18), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .hs-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(196,83,6,0.55); }
  .hs-btn-primary:hover::before { opacity: 1; }

  .hs-btn-icon {
    display: inline-flex; align-items: center; justify-content: center;
    width: 50px; height: 50px; border-radius: 50%;
    text-decoration: none;
    transition: transform 0.25s, box-shadow 0.25s;
    animation: fadeSlideUp 0.6s ease both;
    border: 1px solid rgba(196,83,6,0.35);
  }
  .hs-btn-icon:hover { transform: translateY(-2px) scale(1.08); }

  .hs-orbit {
    position: absolute; border-radius: 50%; pointer-events: none;
    border-style: dashed;
  }

  .hs-divider-line {
    width: 52px; height: 1px;
    background: linear-gradient(90deg, transparent, #C45306, transparent);
  }
  .hs-divider-gem {
    width: 7px; height: 7px;
    border: 1.5px solid #C45306;
    transform: rotate(45deg);
    animation: emberPulse 2.5s ease-in-out infinite;
  }

  .hs-fade-1 { animation: fadeSlideUp 0.7s ease 0.1s both; }
  .hs-fade-2 { animation: fadeSlideUp 0.7s ease 0.25s both; }
  .hs-fade-3 { animation: fadeSlideUp 0.7s ease 0.4s both; }
  .hs-fade-4 { animation: fadeSlideUp 0.7s ease 0.55s both; }
  .hs-fade-5 { animation: fadeSlideUp 0.7s ease 0.70s both; }
  .hs-fade-6 { animation: fadeSlideUp 0.7s ease 0.85s both; }

  @media (prefers-reduced-motion: reduce) {
    .hs-grid-layer, .hs-scanline, .hs-particle,
    .hs-name-gradient, .hs-orbit,
    [class*="hs-fade"] { animation: none !important; }
  }
`;

export default function HomeSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: EMBER_STYLES }} />

      <section
        id="home"
        className="hs-font-body w-full min-h-[500px] sm:min-h-[600px] md:min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 py-10 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% 10%, rgba(196,83,6,0.28) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 85% 80%, rgba(118,19,5,0.22) 0%, transparent 55%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(85,15,5,0.60) 0%, transparent 80%),
            linear-gradient(170deg, #330A05 0%, #1a0503 50%, #330A05 100%)
          `,
        }}
      >
        {/* ── Ambient layers ── */}
        <div className="hs-grid-layer" aria-hidden="true" />
        <div className="hs-scanline"   aria-hidden="true" />

        {/* ── Orbiting rings ── */}
        <div
          aria-hidden="true"
          className="hs-orbit"
          style={{
            width: 520, height: 520,
            border: '1px dashed rgba(196,83,6,0.18)',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            animation: 'orbitRing 50s linear infinite',
          }}
        />
        <div
          aria-hidden="true"
          className="hs-orbit"
          style={{
            width: 340, height: 340,
            border: '1px dashed rgba(157,51,6,0.15)',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            animation: 'orbitRingRev 35s linear infinite',
          }}
        />

        {/* ── Corner glyphs ── */}
        {[
          { top:  '6%', left:  '4%' }, { top:  '6%', right: '4%', left: 'auto' },
          { bottom: '6%', left: '4%' }, { bottom: '6%', right: '4%', left: 'auto' },
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{
              position: 'absolute', ...pos,
              width: 24, height: 24,
              borderTop:  i < 2  ? '1.5px solid rgba(196,83,6,0.35)' : 'none',
              borderBottom: i >= 2 ? '1.5px solid rgba(196,83,6,0.35)' : 'none',
              borderLeft:  (i === 0 || i === 2) ? '1.5px solid rgba(196,83,6,0.35)' : 'none',
              borderRight: (i === 1 || i === 3) ? '1.5px solid rgba(196,83,6,0.35)' : 'none',
            }}
          />
        ))}

        {/* ── Floating binary particles ── */}
        {particles.map((p, idx) => (
          <div
            key={idx}
            aria-hidden="true"
            className="hs-particle"
            style={{
              top: p.top, left: p.left,
              opacity: p.opacity,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            0101 1100 1010
          </div>
        ))}

        {/* ── Main content ── */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 0, textAlign: 'center',
          maxWidth: 860, position: 'relative', zIndex: 10,
          padding: '0 8px',
        }}>

          {/* Badge */}
          <div className="hs-fade-1" style={{ marginBottom: 24 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 20px',
              background: 'rgba(196,83,6,0.12)',
              border: '1px solid rgba(196,83,6,0.38)',
              borderRadius: 999,
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(240,192,112,0.85)',
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#C45306',
                animation: 'emberPulse 2s ease-in-out infinite',
                display: 'inline-block',
              }} />
              Available for Opportunities
            </span>
          </div>

          {/* Greeting */}
          <p className="hs-fade-2" style={{
            fontSize: 'clamp(0.9rem,2vw,1.1rem)',
            color: 'rgba(240,192,112,0.65)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: 10,
          }}>
            Hello, World — I&apos;m
          </p>

          {/* Name */}
          <h1
            className="hs-font-display hs-name-gradient hs-fade-3"
            style={{
              fontSize: 'clamp(2.6rem, 7vw, 5.2rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              marginBottom: 20,
            }}
          >
            Bhanuka Shamen
          </h1>

          {/* Ornamental divider */}
          <div className="hs-fade-3" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 10, marginBottom: 20,
          }}>
            <div className="hs-divider-line" />
            <div className="hs-divider-gem" />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#C45306' }} />
            <div className="hs-divider-gem" />
            <div className="hs-divider-line" />
          </div>

          {/* Role tags */}
          <div className="hs-fade-4" style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8,
            marginBottom: 22,
          }}>
            {[
              { label: 'Software Engineer', delay: '0.55s', bg: 'rgba(196,83,6,0.18)', border: 'rgba(196,83,6,0.40)', dot: '#C45306' },
              { label: 'UI/UX Designer',    delay: '0.65s', bg: 'rgba(157,51,6,0.16)', border: 'rgba(157,51,6,0.38)', dot: '#9D3306' },
              { label: 'Graphic Designer',  delay: '0.75s', bg: 'rgba(118,19,5,0.16)', border: 'rgba(118,19,5,0.35)', dot: '#761305' },
            ].map(({ label, delay, bg, border, dot }) => (
              <span
                key={label}
                className="hs-role-tag"
                style={{
                  background: bg,
                  border: `1px solid ${border}`,
                  color: 'rgba(245,230,204,0.85)',
                  animationDelay: delay,
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: dot, flexShrink: 0 }} />
                {label}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="hs-fade-5" style={{
            color: 'rgba(245,230,204,0.62)',
            fontSize: 'clamp(0.88rem, 2vw, 1.05rem)',
            lineHeight: 1.85,
            maxWidth: 680,
            marginBottom: 36,
          }}>
            Software Engineer Intern and Computer Science undergraduate at{' '}
            <span style={{ color: '#C45306', fontWeight: 600 }}>Eastern University, Sri Lanka</span>
            {' '}— passionate about Full-Stack Development and UI/UX Design. Skilled in{' '}
            <span style={{ color: 'rgba(240,192,112,0.9)', fontWeight: 500 }}>React, Angular, Express.js,</span>
            {' '}and{' '}
            <span style={{ color: 'rgba(240,192,112,0.9)', fontWeight: 500 }}>Figma</span>
            , building scalable apps with clean code and creative design.
          </p>

          {/* CTA row */}
          <div className="hs-fade-6" style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12,
          }}>
            {/* Get in Touch */}
            <a href="#contact" className="hs-btn-primary" style={{ animationDelay: '0.85s' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get in Touch
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/shamenrathnasiri?tab=overview&from=2024-10-01&to=2024-10-31"
              target="_blank"
              rel="noopener noreferrer"
              className="hs-btn-icon"
              title="GitHub"
              style={{
                background: 'rgba(85,15,5,0.60)',
                color: '#f5e6cc',
                animationDelay: '0.95s',
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bhanuka-shamen-859183288/"
              target="_blank"
              rel="noopener noreferrer"
              className="hs-btn-icon"
              title="LinkedIn"
              style={{
                background: 'linear-gradient(135deg, rgba(157,51,6,0.55), rgba(196,83,6,0.40))',
                color: '#f5e6cc',
                animationDelay: '1.05s',
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Scroll hint */}
          <div style={{
            marginTop: 52,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            animation: 'subtleBreathe 2.5s ease-in-out infinite',
          }}>
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(196,83,6,0.45)' }}>Scroll</span>
            <div style={{
              width: 1, height: 36,
              background: 'linear-gradient(to bottom, rgba(196,83,6,0.6), transparent)',
            }} />
          </div>

        </div>
      </section>
    </>
  );
}