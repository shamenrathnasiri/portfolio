

"use client";

import React from "react";

export default function HomeSection() {
  const particles = [
    { top: "12%", left: "10%", size: "text-xs", opacity: 0.45, dur: 10, delay: 0 },
    { top: "22%", left: "72%", size: "text-sm", opacity: 0.35, dur: 12, delay: 1.5 },
    { top: "48%", left: "18%", size: "text-xs", opacity: 0.28, dur: 14, delay: 0.6 },
    { top: "62%", left: "78%", size: "text-sm", opacity: 0.3, dur: 11, delay: 2.2 },
    { top: "78%", left: "40%", size: "text-xs", opacity: 0.22, dur: 16, delay: 1.2 },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes techGridMove {
            0% { background-position: 0px 0px, 0px 0px; }
            100% { background-position: 160px 120px, -120px 90px; }
          }

          @keyframes techScan {
            0% { transform: translate3d(0, -120%, 0); opacity: 0; }
            10% { opacity: 1; }
            60% { opacity: 0.6; }
            100% { transform: translate3d(0, 120%, 0); opacity: 0; }
          }

          @keyframes techFloat {
            0% { transform: translate3d(0, 0, 0) rotate(0deg); }
            50% { transform: translate3d(0, -18px, 0) rotate(2deg); }
            100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          }

          .tech-grid {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0.30;
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            animation: techGridMove 18s linear infinite;
            mask-image: radial-gradient(circle at 35% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 75%);
          }

          .tech-grid::after {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.35;
            background-image:
              radial-gradient(circle at 20% 25%, rgba(239, 68, 68, 0.18) 0px, rgba(239, 68, 68, 0.18) 1px, transparent 1px),
              radial-gradient(circle at 70% 55%, rgba(239, 68, 68, 0.16) 0px, rgba(239, 68, 68, 0.16) 1px, transparent 1px),
              radial-gradient(circle at 45% 80%, rgba(239, 68, 68, 0.14) 0px, rgba(239, 68, 68, 0.14) 1px, transparent 1px);
            background-size: 140px 140px;
            mix-blend-mode: screen;
          }

          .tech-scanline {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: linear-gradient(to bottom, transparent 0%, rgba(239, 68, 68, 0.18) 50%, transparent 100%);
            height: 35%;
            width: 100%;
            animation: techScan 6.5s linear infinite;
            mix-blend-mode: screen;
            filter: blur(0.2px);
          }

          .tech-particle {
            position: absolute;
            pointer-events: none;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            letter-spacing: 0.12em;
            color: rgba(255, 255, 255, 0.65);
            text-shadow: 0 0 14px rgba(239, 68, 68, 0.35);
            animation-name: techFloat;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .tech-grid, .tech-scanline, .tech-particle { animation: none !important; }
          }
        `
      }} />
      <section
        id="home"
        className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 py-10 relative overflow-hidden"
        style={{
          background: "radial-gradient(1200px circle at 20% 20%, rgba(220, 38, 38, 0.35), transparent 55%), radial-gradient(1000px circle at 80% 30%, rgba(255, 255, 255, 0.10), transparent 60%), linear-gradient(180deg, #09090b 0%, #000000 70%)",
        }}
      >
        <div className="tech-grid" aria-hidden="true" />
        <div className="tech-scanline" aria-hidden="true" />
        {particles.map((p, idx) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            aria-hidden="true"
            className={`tech-particle ${p.size}`}
            style={{
              top: p.top,
              left: p.left,
              opacity: p.opacity,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            0101 0010 1100 1010
          </div>
        ))}

        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center px-2 sm:px-4 max-w-full">
  
          <p className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Hi, I&apos;m Bhanuka Shamen
          </p>

          <p className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90 text-white">
            Software Engineer · UI/UX Designer · Graphic Designer
          </p>
          <p className="text-red-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-5xl px-2">Software Engineer Intern and Computer Science undergraduate at Eastern University, Sri Lanka, passionate about Full-Stack Development and UI/UX Design. Skilled in React, Angular, Express.js, and Figma, I build scalable apps with clean code and creative design.</p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
            <a
              href="#contact"
              className="bg-red-600 text-base sm:text-lg text-white px-5 py-3 rounded-full hover:bg-red-700 transition duration-300 flex items-center justify-center min-h-[48px]"
            >
              Get in Touch 
            </a>
            <a
              href="https://github.com/shamenrathnasiri?tab=overview&from=2024-10-01&to=2024-10-31"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-3 rounded-full hover:bg-gray-200 transition duration-300 flex items-center justify-center min-h-[48px] min-w-[48px]"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/bhanuka-shamen-859183288/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-3 rounded-full bg-gradient-to-r from-red-700 to-red-900 transition duration-300 flex items-center justify-center min-h-[48px] min-w-[48px]"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}