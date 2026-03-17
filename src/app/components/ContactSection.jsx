"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CONTACT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes cp-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes cp-pulse-dot {
    0%,100% { opacity:1; transform:scale(1);    box-shadow:0 0 0 0 rgba(196,83,6,0.5); }
    50%      { opacity:.7; transform:scale(1.15); box-shadow:0 0 0 6px rgba(196,83,6,0); }
  }
  @keyframes cp-orbit {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }
  @keyframes cp-glow-btn {
    0%,100% { box-shadow:0 4px 20px rgba(196,83,6,0.40); }
    50%      { box-shadow:0 6px 30px rgba(196,83,6,0.65); }
  }
  @keyframes cp-input-focus-bar {
    from { transform:scaleX(0); }
    to   { transform:scaleX(1); }
  }
  @keyframes cp-spin {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }

  .cp-font-display { font-family:'Playfair Display',serif; }
  .cp-font-body    { font-family:'DM Sans',sans-serif; }

  /* section bg */
  .cp-section {
    background: linear-gradient(165deg,
      #330A05 0%, #550F05 25%, #761305 50%, #550F05 75%, #330A05 100%);
    position: relative;
  }

  /* grid overlay */
  .cp-grid-bg {
    position:absolute; inset:0; pointer-events:none;
    background-image:
      linear-gradient(rgba(196,83,6,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(196,83,6,0.05) 1px, transparent 1px);
    background-size:56px 56px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
  }

  /* radial bloom */
  .cp-bloom-tl {
    position:absolute; top:-10%; left:-5%; width:500px; height:500px; pointer-events:none;
    background:radial-gradient(circle, rgba(196,83,6,0.18) 0%, transparent 65%);
  }
  .cp-bloom-br {
    position:absolute; bottom:-8%; right:-3%; width:420px; height:420px; pointer-events:none;
    background:radial-gradient(circle, rgba(157,51,6,0.14) 0%, transparent 65%);
  }

  /* card glass */
  .cp-card {
    background: linear-gradient(145deg, rgba(85,15,5,0.82), rgba(51,10,5,0.90));
    border: 1px solid rgba(196,83,6,0.25);
    border-radius: 18px;
    backdrop-filter: blur(18px);
    box-shadow: 0 20px 60px rgba(51,10,5,0.65), inset 0 1px 0 rgba(240,192,112,0.06);
    overflow: hidden;
    position: relative;
  }
  .cp-card-accent {
    height: 2px;
    background: linear-gradient(90deg, #761305, #C45306, #f0c070, #C45306, #761305);
    background-size: 200% auto;
    animation: cp-shimmer 5s linear infinite;
  }

  /* heading shimmer */
  .cp-heading-grad {
    background: linear-gradient(90deg, #f5e6cc 0%, #f0c070 30%, #C45306 55%, #f0c070 80%, #f5e6cc 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: cp-shimmer 5s linear infinite;
  }

  /* inputs */
  .cp-input {
    width: 100%;
    padding: 12px 16px;
    background: rgba(51,10,5,0.55);
    border: 1px solid rgba(196,83,6,0.25);
    border-radius: 10px;
    color: #f5e6cc;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
    position: relative;
  }
  .cp-input::placeholder { color: rgba(245,230,204,0.30); }
  .cp-input:focus {
    border-color: rgba(196,83,6,0.65);
    background: rgba(85,15,5,0.65);
    box-shadow: 0 0 0 3px rgba(196,83,6,0.14);
  }

  .cp-label {
    display: block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(240,192,112,0.65);
    margin-bottom: 7px;
  }

  /* submit button */
  .cp-btn-submit {
    width: 100%; padding: 13px;
    background: linear-gradient(135deg, #761305, #C45306);
    border: 1px solid rgba(196,83,6,0.5);
    border-radius: 11px;
    color: #f5e6cc;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.06em;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 9px;
    transition: filter 0.25s, transform 0.2s;
    animation: cp-glow-btn 3s ease-in-out infinite;
    position: relative; overflow: hidden;
  }
  .cp-btn-submit::before {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(135deg, rgba(240,192,112,0.15), transparent);
    opacity:0; transition:opacity 0.3s;
  }
  .cp-btn-submit:hover { filter:brightness(1.12); transform:translateY(-1px); }
  .cp-btn-submit:hover::before { opacity:1; }
  .cp-btn-submit:disabled { opacity:0.55; cursor:not-allowed; transform:none; }

  /* info icon box */
  .cp-icon-box {
    width:42px; height:42px; flex-shrink:0; border-radius:10px;
    background: rgba(118,19,5,0.45);
    border: 1px solid rgba(196,83,6,0.28);
    display:flex; align-items:center; justify-content:center;
    transition: background 0.22s, box-shadow 0.22s;
  }
  .cp-icon-box:hover {
    background: rgba(196,83,6,0.22);
    box-shadow: 0 0 14px rgba(196,83,6,0.30);
  }

  /* social pill */
  .cp-social-pill {
    display:flex; align-items:center; gap:12px;
    padding:12px 14px;
    background: rgba(51,10,5,0.55);
    border: 1px solid rgba(196,83,6,0.20);
    border-radius:12px;
    text-decoration:none;
    transition: background 0.22s, border-color 0.22s, transform 0.22s;
  }
  .cp-social-pill:hover {
    background: rgba(118,19,5,0.45);
    border-color: rgba(196,83,6,0.45);
    transform: translateY(-2px);
  }

  /* whatsapp btn */
  .cp-wa-btn {
    display:inline-flex; align-items:center; gap:9px;
    padding:11px 22px;
    background:linear-gradient(135deg,#14532d,#16a34a);
    border:1px solid rgba(22,163,74,0.45);
    border-radius:999px;
    color:#fff;
    font-family:'DM Sans',sans-serif;
    font-weight:600; font-size:0.88rem;
    text-decoration:none;
    box-shadow:0 4px 18px rgba(22,163,74,0.28);
    transition:filter 0.22s, transform 0.22s;
  }
  .cp-wa-btn:hover { filter:brightness(1.12); transform:translateY(-1px); }

  /* spin utility */
  .cp-spin { animation:cp-spin 1s linear infinite; }

  /* divider ornament */
  .cp-ornament { display:flex; align-items:center; justify-content:center; gap:10px; }
  .cp-ornament-line { width:48px; height:1px; background:linear-gradient(90deg,transparent,#C45306,transparent); }
  .cp-ornament-gem  { width:7px; height:7px; border:1.5px solid #C45306; transform:rotate(45deg); }
  .cp-ornament-dot  { width:5px; height:5px; border-radius:50%; background:#C45306;
    animation:cp-pulse-dot 2.5s ease-in-out infinite; }
`;

/* ── animation variants ── */
const container = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const phone   = "94759715913";
    const text    = `*New Contact Form Message using Your portfolio website*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    await new Promise(r => setTimeout(r, 500));
    alert('WhatsApp opened! Please send the message to complete your inquiry.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CONTACT_STYLES }} />

      <section id="contact" className="cp-section cp-font-body py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* bg layers */}
        <div className="cp-grid-bg" aria-hidden="true" />
        <div className="cp-bloom-tl" aria-hidden="true" />
        <div className="cp-bloom-br" aria-hidden="true" />

        {/* rotating ring accent */}
        <div aria-hidden="true" style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%,-50%)',
          width:700, height:700, borderRadius:'50%',
          border:'1px dashed rgba(196,83,6,0.10)',
          animation:'cp-orbit 60s linear infinite',
          pointerEvents:'none',
        }} />

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign:'center', marginBottom: '3.5rem' }}
          >
            <span style={{
              display:'inline-block', marginBottom:18,
              padding:'6px 18px',
              background:'rgba(196,83,6,0.12)',
              border:'1px solid rgba(196,83,6,0.38)',
              borderRadius:999,
              fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase',
              color:'rgba(240,192,112,0.8)',
            }}>Let&apos;s Collaborate</span>

            <h2 className="cp-font-display cp-heading-grad" style={{
              fontSize:'clamp(2.2rem,5vw,3.5rem)',
              fontWeight:900, lineHeight:1.1, marginBottom:16,
            }}>
              Get In Touch
            </h2>

            <div className="cp-ornament" style={{ marginBottom:18 }}>
              <div className="cp-ornament-line" />
              <div className="cp-ornament-gem" />
              <div className="cp-ornament-dot" />
              <div className="cp-ornament-gem" />
              <div className="cp-ornament-line" />
            </div>

            <p style={{
              color:'rgba(245,230,204,0.62)', fontSize:'clamp(0.9rem,2vw,1.05rem)',
              lineHeight:1.8, maxWidth:580, margin:'0 auto',
            }}>
              Ready to bring your ideas to life? Let&apos;s discuss your project and explore how we can{' '}
              <span style={{ color:'#C45306', fontWeight:600 }}>work together</span>.
            </p>
          </motion.div>

          {/* ── Grid ── */}
          <motion.div
            variants={container} initial="hidden" animate="show"
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ gap:24 }}
          >

            {/* ── Contact Form ── */}
            <motion.div variants={item}>
              <div className="cp-card">
                <div className="cp-card-accent" />
                <div style={{ padding:'2rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
                    <div className="cp-icon-box">
                      <svg width="18" height="18" fill="none" stroke="#C45306" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <h3 className="cp-font-display" style={{ fontSize:'1.3rem', fontWeight:700, color:'#f5e6cc' }}>Send a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
                    <div>
                      <label htmlFor="name" className="cp-label">Full Name</label>
                      <input className="cp-input" type="text" id="name" name="name"
                        value={formData.name} onChange={handleInputChange}
                        required placeholder="Your full name" />
                    </div>

                    <div>
                      <label htmlFor="email" className="cp-label">Email Address</label>
                      <input className="cp-input" type="email" id="email" name="email"
                        value={formData.email} onChange={handleInputChange}
                        required placeholder="your.email@example.com" />
                    </div>

                    <div>
                      <label htmlFor="message" className="cp-label">Message</label>
                      <textarea className="cp-input" id="message" name="message"
                        value={formData.message} onChange={handleInputChange}
                        required rows={5} placeholder="Tell me about your project..."
                        style={{ resize:'none' }} />
                    </div>

                    <button type="submit" className="cp-btn-submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <svg className="cp-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="rgba(245,230,204,0.3)" strokeWidth="3"/>
                            <path d="M12 2a10 10 0 0 1 10 10" stroke="#f0c070" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                          Opening WhatsApp…
                        </>
                      ) : (
                        <>
                          <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* ── Right column ── */}
            <motion.div variants={item} style={{ display:'flex', flexDirection:'column', gap:18 }}>

              {/* Contact Info */}
              <div className="cp-card">
                <div className="cp-card-accent" />
                <div style={{ padding:'1.75rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
                    <div className="cp-icon-box">
                      <svg width="16" height="16" fill="none" stroke="#C45306" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <h3 className="cp-font-display" style={{ fontSize:'1.2rem', fontWeight:700, color:'#f5e6cc' }}>Contact Information</h3>
                  </div>

                  <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                    {[
                      {
                        href:'mailto:shamenrathnasiri@gmail.com',
                        label:'Email',
                        value:'shamenrathnasiri@gmail.com',
                        icon: (
                          <svg width="17" height="17" fill="none" stroke="#C45306" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                          </svg>
                        ),
                      },
                      {
                        href:'tel:+94759715913',
                        label:'Phone',
                        value:'+94 75 971 5913',
                        icon: (
                          <svg width="17" height="17" fill="none" stroke="#C45306" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                          </svg>
                        ),
                      },
                    ].map(({ href, label, value, icon }) => (
                      <div key={label} style={{ display:'flex', alignItems:'center', gap:12 }}>
                        <div className="cp-icon-box">{icon}</div>
                        <div>
                          <p style={{ fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(196,83,6,0.65)', marginBottom:2 }}>{label}</p>
                          <a href={href} style={{
                            fontSize:'0.9rem', fontWeight:600, color:'#f5e6cc', textDecoration:'none',
                            transition:'color 0.2s',
                            overflowWrap:'anywhere',
                          }}
                            onMouseEnter={e => e.currentTarget.style.color='#f0c070'}
                            onMouseLeave={e => e.currentTarget.style.color='#f5e6cc'}
                          >{value}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="cp-card">
                <div className="cp-card-accent" />
                <div style={{ padding:'1.75rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:18 }}>
                    <div className="cp-icon-box">
                      <svg width="16" height="16" fill="none" stroke="#C45306" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <h3 className="cp-font-display" style={{ fontSize:'1.2rem', fontWeight:700, color:'#f5e6cc' }}>Connect With Me</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap:10 }}>
                    {[
                      {
                        href:'https://www.linkedin.com/in/bhanuka-shamen-859183288/',
                        name:'LinkedIn', sub:'Professional Network',
                        icon:(
                          <svg width="16" height="16" fill="#C45306" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        ),
                      },
                      {
                        href:'https://github.com/shamenrathnasiri',
                        name:'GitHub', sub:'Code Repository',
                        icon:(
                          <svg width="16" height="16" fill="#C45306" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        ),
                      },
                    ].map(({ href, name, sub, icon }) => (
                      <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="cp-social-pill">
                        <div className="cp-icon-box" style={{ width:36, height:36 }}>{icon}</div>
                        <div>
                          <p style={{ fontSize:'0.88rem', fontWeight:600, color:'#f5e6cc', marginBottom:1 }}>{name}</p>
                          <p style={{ fontSize:'0.72rem', color:'rgba(245,230,204,0.45)' }}>{sub}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp card */}
              <div style={{
                background:'linear-gradient(135deg, rgba(85,15,5,0.75), rgba(51,10,5,0.88))',
                border:'1px solid rgba(196,83,6,0.30)',
                borderRadius:18,
                padding:'1.75rem',
                position:'relative',
                overflow:'hidden',
                boxShadow:'0 16px 48px rgba(51,10,5,0.55)',
              }}>
                {/* decorative arc */}
                <div aria-hidden="true" style={{
                  position:'absolute', top:-60, right:-60,
                  width:180, height:180, borderRadius:'50%',
                  border:'1px dashed rgba(196,83,6,0.18)',
                  pointerEvents:'none',
                }} />
                <div aria-hidden="true" style={{
                  position:'absolute', top:-30, right:-30,
                  width:100, height:100, borderRadius:'50%',
                  border:'1px dashed rgba(196,83,6,0.12)',
                  pointerEvents:'none',
                }} />

                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                  <div className="cp-icon-box">
                    <svg width="16" height="16" fill="#C45306" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h4 className="cp-font-display" style={{ fontSize:'1.1rem', fontWeight:700, color:'#f5e6cc' }}>Prefer Direct Communication?</h4>
                </div>

                <p style={{ color:'rgba(245,230,204,0.58)', fontSize:'0.88rem', lineHeight:1.7, marginBottom:18 }}>
                  For immediate responses, reach out via{' '}
                  <span style={{ color:'#C45306', fontWeight:600 }}>WhatsApp</span>.
                </p>

                <a href="https://wa.me/94759715913" target="_blank" rel="noopener noreferrer" className="cp-wa-btn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Start Chat on WhatsApp
                </a>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}