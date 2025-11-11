import Link from 'next/link'; // Import the Link component
import { FaCode, FaPaintBrush, FaDesktop } from 'react-icons/fa';

export default function Page() {
return (
    <section id="project" className="overflow-hidden">
    <div className="bg-gradient-to-br from-red-900 to-red-950 py-12 px-4 sm:px-6 flex flex-col items-center mt-8">
        <h2 className="text-white font-bold text-3xl sm:text-4xl mb-10 text-center">My Projects</h2>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 w-full max-w-6xl">
          {/* Project 1 - Development */}
        <Link href="/development" className="w-full sm:w-[300px] bg-black bg-opacity-20 backdrop-blur-sm border border-red-700 rounded-xl p-6 transition-all duration-500 transform hover:scale-105 hover:bg-opacity-30 hover:shadow-2xl hover:shadow-red-500/20 group animate-fade-in">
            <div className="flex flex-col items-center text-center">
                <FaCode className="text-red-400 text-6xl mb-4 group-hover:text-red-300 transition-all duration-300 group-hover:animate-bounce" />
                <h3 className="text-white font-semibold text-xl mb-2">Development</h3>
                <p className="text-gray-300 text-sm">Building robust web applications with modern technologies</p>
            </div>
        </Link>

          {/* Project 2 - UI/UX Design */}
        <Link href="/uiux" className="w-full sm:w-[300px] bg-black bg-opacity-20 backdrop-blur-sm border border-red-700 rounded-xl p-6 transition-all duration-500 transform hover:scale-105 hover:bg-opacity-30 hover:shadow-2xl hover:shadow-red-500/20 group animate-fade-in delay-100">
            <div className="flex flex-col items-center text-center">
                <FaDesktop className="text-red-400 text-6xl mb-4 group-hover:text-red-300 transition-all duration-300 group-hover:animate-pulse" />
                <h3 className="text-white font-semibold text-xl mb-2">UI/UX Design</h3>
                <p className="text-gray-300 text-sm">Creating intuitive and engaging user experiences</p>
            </div>
        </Link>

          {/* Project 3 - Graphic Design */}
        <Link href="/graphics" className="w-full sm:w-[300px] bg-black bg-opacity-20 backdrop-blur-sm border border-red-700 rounded-xl p-6 transition-all duration-500 transform hover:scale-105 hover:bg-opacity-30 hover:shadow-2xl hover:shadow-red-500/20 group animate-fade-in delay-200">
            <div className="flex flex-col items-center text-center">
                <FaPaintBrush className="text-red-400 text-6xl mb-4 group-hover:text-red-300 transition-all duration-300 group-hover:rotate-12" />
                <h3 className="text-white font-semibold text-xl mb-2">Graphic Design</h3>
                <p className="text-gray-300 text-sm">Designing visually stunning graphics and branding</p>
            </div>
        </Link>
        </div>
    </div>
    </section>
);
}