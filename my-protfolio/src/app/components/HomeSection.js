import bgImg from '../../../public/My.jpg'
import React from 'react';
import Link from 'next/link';

export default function page() {
return (
  <section id='home'>
    <div
    className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-screen bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row items-start sm:items-center px-6 sm:px-10 lg:px-20 py-10 sm:py-0"
    style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      {/* Vertical Bar */}
    <div className="w-1 h-20 sm:h-52 bg-amber-800 mb-4 sm:mb-0 sm:mr-4 rounded-3xl fadeInUp" style={{ animationDelay: '0.1s' }}></div>

      {/* Content Section */}
    <div className="text-left space-y-4 sm:space-y-6 max-w-4xl">
        <h1
        className="text-2xl sm:text-4xl md:text-6xl font-bold fadeInUp bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
        style={{ animationDelay: '0.3s' }}
        >
        Welcome to My Portfolio
        </h1>
        <p
        className="text-base sm:text-lg md:text-4xl font-bold fadeInUp -mt-4"
        style={{ animationDelay: '0.5s' }}
        >
        Hi, I&apos;m Bhanuka Shamen
        </p>
        <p
        className="text-sm sm:text-base md:text-xl fadeInUp -mt-4"
        style={{ animationDelay: '0.7s' }}
        >
        Fullstack Developer | UI/UX Designer | Graphic Designer
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4  sm:pt-2 fadeInUp" style={{ animationDelay: '0.9s' }}>
<a href="#projects" className="w-fit">
    <button className="px-5 py-2 text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-md transition duration-300 text-sm sm:text-base ">
    Go to Projects
    </button>
</a>
<a href="#contact" className="w-fit">
    <button className="px-5 py-2 text-red-800 border border-red-800 hover:bg-red-600 hover:text-white rounded-lg shadow-md transition duration-300 text-sm sm:text-base ">
    Contact Me
    </button>
</a>
</div>
</div>
</div>
</section>

);
}