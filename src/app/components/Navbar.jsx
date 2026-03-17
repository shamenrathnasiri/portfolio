'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',      hash: 'home'    },
  { label: 'About Me',  hash: 'about'   },
  { label: 'Resume',    hash: 'resume'  },
  { label: 'Projects',  hash: 'project' },
  { label: 'Contact',   hash: 'contact' },
]

const NAVBAR_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');

  @keyframes navSlideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to   { transform: translateY(0);     opacity: 1; }
  }
  @keyframes underlineGrow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes emberGlow {
    0%,100% { box-shadow: 0 0 12px rgba(196,83,6,0.35); }
    50%      { box-shadow: 0 0 22px rgba(196,83,6,0.65); }
  }
  @keyframes dotPulse {
    0%,100% { opacity: 1;  transform: scale(1);    }
    50%      { opacity: 0.5; transform: scale(0.75); }
  }

  .nb-root {
    font-family: 'DM Sans', sans-serif;
    position: sticky; 
    top: 0; 
    z-index: 50;
    animation: navSlideDown 0.55s cubic-bezier(0.22,1,0.36,1) both;
    width: 100%;
  }

  .nb-inner {
    width: 100%;
    max-width: 1152px;
    margin: 0 auto;
    padding: 0 16px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  /* glass layer */
  .nb-glass {
    background: linear-gradient(
      105deg,
      rgba(51,10,5,0.96)  0%,
      rgba(85,15,5,0.94)  40%,
      rgba(118,19,5,0.92) 70%,
      rgba(51,10,5,0.96)  100%
    );
    backdrop-filter: blur(18px) saturate(1.4);
    -webkit-backdrop-filter: blur(18px) saturate(1.4);
    border-bottom: 1px solid rgba(196,83,6,0.25);
    box-shadow:
      0 1px 0 rgba(240,192,112,0.06) inset,
      0 8px 32px rgba(51,10,5,0.65);
  }

  /* top accent bar */
  .nb-top-bar {
    height: 2px;
    background: linear-gradient(90deg, #761305, #C45306, #f0c070, #C45306, #761305);
    background-size: 200% auto;
    animation: underlineGrow 0.8s ease 0.3s both, shimmerBar 4s linear 1.1s infinite;
  }
  @keyframes shimmerBar {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  /* logo */
  .nb-logo {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    background: linear-gradient(90deg, #f5e6cc 0%, #f0c070 50%, #C45306 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
    transition: filter 0.25s;
    position: relative;
    min-width: 0;
    flex: 1;
    max-width: calc(100% - 52px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nb-logo:hover { filter: brightness(1.18); }
  .nb-logo-text {
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
    font-size: clamp(0.9rem, 4vw, 1.45rem);
  }

  /* nav link base - desktop */
  .nb-link {
    position: relative;
    display: inline-flex; 
    align-items: center; 
    gap: 6px;
    padding: 7px 13px;
    border-radius: 8px;
    font-size: 0.84rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: rgba(245,230,204,0.70);
    text-decoration: none;
    border: 1px solid transparent;
    transition: color 0.22s, background 0.22s, border-color 0.22s;
    cursor: pointer;
    background: none;
    white-space: nowrap;
  }
  .nb-link::after {
    content: '';
    position: absolute; 
    bottom: 4px; 
    left: 13px; 
    right: 13px;
    height: 1.5px;
    background: linear-gradient(90deg, #761305, #C45306, #f0c070);
    border-radius: 999px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
  }
  .nb-link:hover {
    color: #f0c070;
    background: rgba(196,83,6,0.10);
    border-color: rgba(196,83,6,0.22);
  }
  .nb-link:hover::after { transform: scaleX(1); }

  /* active state */
  .nb-link-active {
    color: #f0c070 !important;
    background: rgba(196,83,6,0.15) !important;
    border-color: rgba(196,83,6,0.35) !important;
  }
  .nb-link-active::after { transform: scaleX(1) !important; }

  /* scrolled state — slightly more opaque */
  .nb-scrolled .nb-glass {
    background: linear-gradient(
      105deg,
      rgba(51,10,5,0.99)  0%,
      rgba(85,15,5,0.98)  40%,
      rgba(118,19,5,0.97) 70%,
      rgba(51,10,5,0.99)  100%
    );
    box-shadow: 0 8px 40px rgba(51,10,5,0.80);
  }

  /* mobile menu button */
  .nb-mobile-btn {
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    gap: 5px; 
    width: 40px; 
    height: 40px; 
    cursor: pointer;
    background: rgba(196,83,6,0.10);
    border: 1px solid rgba(196,83,6,0.28);
    border-radius: 9px;
    padding: 0;
    transition: background 0.22s, border-color 0.22s;
    flex-shrink: 0;
    margin-left: 8px;
  }
  .nb-mobile-btn:hover { 
    background: rgba(196,83,6,0.20); 
    border-color: rgba(196,83,6,0.50); 
  }
  
  .nb-bar {
    width: 18px; 
    height: 1.5px; 
    border-radius: 999px;
    background: linear-gradient(90deg, #C45306, #f0c070);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center;
  }

  /* hamburger animation */
  .nb-mobile-btn.open .nb-bar:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }
  .nb-mobile-btn.open .nb-bar:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .nb-mobile-btn.open .nb-bar:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  /* mobile menu dropdown */
  .nb-mobile-open {
    position: absolute; 
    top: calc(100% + 8px); 
    left: 12px; 
    right: 12px;
    background: linear-gradient(160deg, rgba(51,10,5,0.98), rgba(85,15,5,0.97));
    border: 1px solid rgba(196,83,6,0.28);
    border-radius: 16px;
    padding: 12px 8px;
    box-shadow: 0 20px 48px rgba(51,10,5,0.85);
    display: flex; 
    flex-direction: column; 
    gap: 4px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    animation: fadeDown 0.3s ease both;
    max-height: min(70vh, 420px);
    overflow-y: auto;
    z-index: 100;
  }
  
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  
  .nb-mobile-link {
    padding: 14px 18px;
    border-radius: 12px;
    font-size: 1rem; 
    font-weight: 500;
    color: rgba(245,230,204,0.75);
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    display: flex; 
    align-items: center; 
    gap: 12px;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  .nb-mobile-link:hover, 
  .nb-mobile-link:active { 
    background: rgba(196,83,6,0.16); 
    color: #f0c070; 
  }
  
  .nb-mobile-link-active { 
    color: #f0c070; 
    background: rgba(196,83,6,0.18); 
    border-left: 3px solid #C45306;
  }

  /* backdrop overlay for mobile menu */
  .nb-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 45;
    animation: fadeIn 0.2s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* desktop visibility */
  .desktop-links {
    display: none;
  }
  
  @media (min-width: 641px) {
    .desktop-links {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .nb-mobile-btn {
      display: none;
    }
    .nb-mobile-open {
      display: none;
    }
    .nb-backdrop {
      display: none;
    }
    .nb-inner {
      padding: 0 24px;
    }
  }

  /* small mobile adjustments */
  @media (max-width: 480px) {
    .nb-inner {
      padding: 0 12px;
      height: 56px;
    }
    .nb-mobile-open {
      left: 8px;
      right: 8px;
      top: calc(100% + 6px);
      padding: 10px 6px;
      border-radius: 14px;
    }
    .nb-mobile-link {
      padding: 12px 14px;
      font-size: 0.95rem;
    }
    .nb-mobile-btn {
      width: 38px;
      height: 38px;
      gap: 4px;
    }
    .nb-bar {
      width: 16px;
    }
  }

  @media (max-width: 360px) {
    .nb-logo-text {
      font-size: 0.9rem;
    }
    .nb-logo-dot {
      width: 4px !important;
      height: 4px !important;
      margin-left: 2px !important;
    }
    .nb-mobile-link {
      padding: 10px 12px;
      font-size: 0.9rem;
    }
  }

  /* prevent body scroll when menu open */
  body.menu-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    .nb-root, .nb-top-bar, .nb-mobile-open, .nb-backdrop { 
      animation: none !important; 
    }
    .nb-link::after, .nb-bar { 
      transition: none !important; 
    }
  }
`

export default function Navbar() {
  const pathname  = usePathname()
  const [scrolled,    setScrolled]    = useState(false)
  const [activeHash,  setActiveHash]  = useState('home')
  const [mobileOpen,  setMobileOpen]  = useState(false)

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // close mobile menu on window resize (if switching to desktop)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 641) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [mobileOpen])

  // track scroll for glass intensity + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      // highlight active section
      for (const { hash } of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(hash)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveHash(hash)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    
    // initial check
    onScroll()
    
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScrollTo = (hash) => {
    setMobileOpen(false)
    
    if (pathname === '/') {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = `/#${hash}`
    }
  }

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NAVBAR_STYLES }} />

      {/* Backdrop overlay for mobile */}
      {mobileOpen && (
        <div className="nb-backdrop" onClick={() => setMobileOpen(false)} />
      )}

      <nav className={`nb-root ${scrolled ? 'nb-scrolled' : ''}`}>
        {/* shimmer top bar */}
        <div className="nb-top-bar" />

        <div className="nb-glass">
          <div className="nb-inner">

            {/* ── Logo ── */}
            <Link href="/" className="nb-logo">
              <span className="nb-logo-text">Bhanuka Shamen</span>
              {/* decorative dot */}
              <span 
                className="nb-logo-dot" 
                style={{
                  display: 'inline-block', 
                  marginLeft: '4px',
                  width: 'clamp(4px, 1.5vw, 6px)', 
                  height: 'clamp(4px, 1.5vw, 6px)', 
                  borderRadius: '50%',
                  background: '#C45306',
                  verticalAlign: 'super',
                  animation: 'dotPulse 2.5s ease-in-out infinite',
                  flexShrink: 0
                }} 
              />
            </Link>

            {/* ── Desktop links ── */}
            <div className="desktop-links">
              {NAV_LINKS.map(({ label, hash }) => (
                <a
                  key={hash}
                  href={`#${hash}`}
                  className={`nb-link ${activeHash === hash ? 'nb-link-active' : ''}`}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    handleScrollTo(hash) 
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* ── Mobile menu button ── */}
            <button 
              className={`nb-mobile-btn ${mobileOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="nb-bar" />
              <div className="nb-bar" />
              <div className="nb-bar" />
            </button>

            {/* ── Mobile menu dropdown ── */}
            {mobileOpen && (
              <div className="nb-mobile-open">
                {NAV_LINKS.map(({ label, hash }) => (
                  <a
                    key={hash}
                    href={`#${hash}`}
                    className={`nb-mobile-link ${activeHash === hash ? 'nb-mobile-link-active' : ''}`}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      handleScrollTo(hash) 
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}