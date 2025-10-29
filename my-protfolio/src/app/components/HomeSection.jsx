

"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomeSection() {
  const rightRef = useRef(null);
  const circleRefs = useRef([]);
  const bubbleRefs = useRef([]);
  const targets = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const positions = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const bubblePositions = useRef(Array(10).fill().map(() => ({ x: 0, y: 0, scale: 1 })));
  const speeds = useRef([1, 1.5, 0.8, 2, 1.2, 0.6, 1.8, 0.9, 2.5, 1.3]);
  const rafRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    let mounted = true;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Initialize bubble positions for horizontal movement
    for (let i = 0; i < 10; i++) {
      bubblePositions.current[i].x = -100 - i * 20;
      bubblePositions.current[i].y = centerY + (i - 5) * 30;
      bubblePositions.current[i].scale = 0.6 + (i % 4) * 0.2;
    }

    const lerp = (a, b, t) => a + (b - a) * t;

    function animate() {
      if (!mounted) return;
      for (let i = 0; i < 3; i++) {
        positions.current[i].x = lerp(positions.current[i].x, targets.current[i].x, 0.12);
        positions.current[i].y = lerp(positions.current[i].y, targets.current[i].y, 0.12);
        const el = circleRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${positions.current[i].x}px, ${positions.current[i].y}px, 0)`;
        }
      }
      // Update bubble positions moving across the screen
      for (let i = 0; i < 10; i++) {
        bubblePositions.current[i].x += speeds.current[i];
        if (bubblePositions.current[i].x > window.innerWidth + 100) {
          bubblePositions.current[i].x = -100;
        }
        const el = bubbleRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${bubblePositions.current[i].x}px, ${bubblePositions.current[i].y}px, 0) scale(${bubblePositions.current[i].scale})`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    const panel = rightRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    // Get normalized -0.5..0.5
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    // Set different multipliers for parallax feel
    targets.current[0].x = nx * 28; targets.current[0].y = ny * 18;
    targets.current[1].x = nx * 48; targets.current[1].y = ny * 32;
    targets.current[2].x = nx * -36; targets.current[2].y = ny * 24;
  };

  const handleMouseLeave = () => {
    targets.current.forEach(t => { t.x = 0; t.y = 0; });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `
      }} />
      <section
        id="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 py-10 relative"
        style={{
          background: 'linear-gradient(45deg, #dc2626, #000000, #dc2626, #000000)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 10s ease infinite'
        }}
      >
        {/* Background bubble animations */}
        {Array(10).fill().map((_, i) => (
          <div
            key={i}
            ref={el => (bubbleRefs.current[i] = el)}
            className={`absolute rounded-full bg-white/10 backdrop-blur-sm transition-all duration-1000 ease-out pointer-events-none ${
              i % 2 === 0 ? 'shadow-lg' : 'shadow-xl'
            }`}
            style={{
              width: [30, 50, 40, 60, 35, 55, 45, 65, 25, 70][i],
              height: [30, 50, 40, 60, 35, 55, 45, 65, 25, 70][i],
              left: 0,
              top: 0,
              zIndex: -1,
              transform: 'translate3d(0px, 0px, 0) scale(1)'
            }}
          />
        ))}

        <div className="flex flex-col items-center gap-4 text-center">
  
          <p className="mt-3  text-4xl sm:text-7xl md:text-6xl font-bold text-white">
            Hi, I&apos;m Bhanuka Shamen
          </p>

          <p className="mt-2 text-lg sm:text-xl md:text-2xl opacity-90 text-white">
            Software Engineer · UI/UX Designer · Graphic Designer
          </p>
          <p className="text-red-200 text-base sm:text-lg md:text-sm leading-relaxed max-w-2xl">Software Engineer Intern and Computer Science undergraduate at Eastern University, Sri Lanka, passionate about Full-Stack Development and UI/UX Design. Skilled in React, Angular, Express.js, and Figma, I build scalable apps with clean code and creative design.</p>

          <div className="flex gap-4 mt-6">
            <a
              href="#contact"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 flex items-center justify-center"
            >
              Get in Touch 
            </a>
            <a
              href="https://github.com/shamenrathnasiri?tab=overview&from=2024-10-01&to=2024-10-31"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/bhanuka-shamen-859183288/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white px-4 py-2 rounded-full bg-gradient-to-r from-red-700 to-red-900 transition duration-300 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <div ref={rightRef} className="hidden md:block absolute right-0 top-0 w-1/2 h-64 sm:h-80 lg:h-96">
          <div
            ref={el => (circleRefs.current[0] = el)}
            className="absolute right-12 top-8 w-28 h-28 rounded-full bg-white/12 backdrop-blur-sm shadow-lg pointer-events-none"
            style={{ transform: 'translate3d(0px, 0px, 0)' }}
          />

          <div
            ref={el => (circleRefs.current[1] = el)}
            className="absolute right-28 top-24 w-40 h-40 rounded-full bg-white/6 shadow-2xl pointer-events-none"
            style={{ transform: 'translate3d(0px, 0px, 0)' }}
          />

          <div
            ref={el => (circleRefs.current[2] = el)}
            className="absolute right-6 bottom-8 w-20 h-20 rounded-full border border-white/20 bg-transparent pointer-events-none"
            style={{ transform: 'translate3d(0px, 0px, 0)' }}
          />

          {/* Optional subtle grid or pattern for depth */}
          <div className="absolute left-6 top-6 w-32 h-32 bg-gradient-to-tr from-white/3 to-transparent rounded-lg opacity-30 pointer-events-none" />
        </div>
      
    </section>
    </>
  );
}