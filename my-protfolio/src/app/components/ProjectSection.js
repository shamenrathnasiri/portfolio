import Image from 'next/image';
import Link from 'next/link'; // Import the Link component
import development from '../../../public/Development.jpg';
import uiuxdesign from '../../../public/UIUX.jpg';
import graphicdesign from '../../../public/graphic.jpg';

export default function Page() {
return (
    <section id="project" className="overflow-hidden">
    <div className="bg-gradient-to-br from-red-900 to-red-950 py-12 px-4 sm:px-6 flex flex-col items-center mt-8">
        <h2 className="text-white font-bold text-3xl sm:text-4xl mb-10 text-center">My Projects</h2>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 w-full max-w-6xl">
          {/* Project 1 - Development */}
        <Link href="/development" className="w-full sm:w-[300px] transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 animate-slide-up opacity-100 group">
            <div className="relative w-full h-[200px] sm:h-[200px] overflow-hidden rounded-xl shadow-lg">
            <Image
                src={development}
                alt="Development"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px"
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                placeholder="blur"
                quality={75}
                priority={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-xl">Development</span>
            </div>
            </div>
        </Link>

          {/* Project 2 - UI/UX Design */}
        <Link href="/uiux" className="w-full sm:w-[300px] transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 animate-slide-up opacity-100 delay-100 group">
            <div className="relative w-full h-[200px] sm:h-[200px] overflow-hidden rounded-xl shadow-lg">
            <Image
                src={uiuxdesign}
                alt="UI/UX Design"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px"
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                placeholder="blur"
                quality={75}
                priority={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-xl">UI/UX Design</span>
            </div>
            </div>
        </Link>

          {/* Project 3 - Graphic Design */}
        <div className="w-full sm:w-[300px] transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 animate-slide-up opacity-100 delay-200 group">
            <div className="relative w-full h-[200px] sm:h-[200px] overflow-hidden rounded-xl shadow-lg">
            <Image
                src={graphicdesign}
                alt="Graphic Design"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px"
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                placeholder="blur"
                quality={75}
                priority={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-xl">Graphic Design</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
);
}