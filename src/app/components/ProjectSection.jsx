import Link from 'next/link';
import { FaCode, FaPaintBrush, FaDesktop } from 'react-icons/fa';

export default function Page() {
  return (
    <section id="project" className="relative overflow-hidden bg-gradient-to-br from-black via-red-950 to-black py-20 min-h-screen">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 px-4 sm:px-6 flex flex-col items-center">
        {/* Enhanced Title */}
        <div className="relative mb-16">
          <h2 className="relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center tracking-tight drop-shadow-[0_0_20px_rgba(255,0,0,0.45)]">
            My Projects
          </h2>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full blur-sm "></div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 w-full max-w-6xl">
          {/* Project 1 - Development */}
          <Link href="/development" className="group relative w-full sm:w-[320px]">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-red-950/80 to-black/90 backdrop-blur-xl border border-red-800/50 rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 hover:border-red-500/80 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-600/20 to-transparent rounded-bl-full"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-red-500/30 rounded-full blur-xl group-hover:bg-red-400/50 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-red-600 to-red-800 p-5 rounded-2xl group-hover:rotate-6 transition-all duration-300">
                    <FaCode className="text-white text-4xl" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3 group-hover:text-red-300 transition-colors duration-300">Development</h3>
                <p className="text-red-200/70 text-sm sm:text-base leading-relaxed">Building robust web applications with modern technologies</p>
                <div className="mt-6 flex items-center gap-2 text-red-400 group-hover:text-red-300 transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 2 - UI/UX Design */}
          <Link href="/uiux" className="group relative w-full sm:w-[320px]">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-700 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-red-950/80 to-black/90 backdrop-blur-xl border border-red-800/50 rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 hover:border-red-500/80 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-600/20 to-transparent rounded-bl-full"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-rose-500/30 rounded-full blur-xl group-hover:bg-rose-400/50 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-rose-500 to-red-700 p-5 rounded-2xl group-hover:scale-110 transition-all duration-300">
                    <FaDesktop className="text-white text-4xl" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3 group-hover:text-rose-300 transition-colors duration-300">UI/UX Design</h3>
                <p className="text-red-200/70 text-sm sm:text-base leading-relaxed">Creating intuitive and engaging user experiences</p>
                <div className="mt-6 flex items-center gap-2 text-rose-400 group-hover:text-rose-300 transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 3 - Graphic Design */}
          <Link href="/graphics" className="group relative w-full sm:w-[320px]">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-red-950/80 to-black/90 backdrop-blur-xl border border-red-800/50 rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 hover:border-red-500/80 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-600/20 to-transparent rounded-bl-full"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-xl group-hover:bg-orange-400/50 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-red-500 to-orange-600 p-5 rounded-2xl group-hover:-rotate-6 transition-all duration-300">
                    <FaPaintBrush className="text-white text-4xl" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3 group-hover:text-orange-300 transition-colors duration-300">Graphic Design</h3>
                <p className="text-red-200/70 text-sm sm:text-base leading-relaxed">Designing visually stunning graphics and branding</p>
                <div className="mt-6 flex items-center gap-2 text-orange-400 group-hover:text-orange-300 transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}