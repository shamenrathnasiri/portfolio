import Image from 'next/image';
import My2 from '../components/my2.jpg';
import React from 'react';
import Link from 'next/link';

export default function page()  {
return (
    <section id='about'>
    <div className="mt-16 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Image and Text Section */}
    <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div
        className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] shadow-2xl rounded-2xl overflow-hidden
            animate-slideInLeft"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
        <Image
            src={My2}
            alt="My Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            priority
        />
        </div>

        {/* Text */}
        <div
        className="text-gray-800 dark:text-white max-w-3xl text-justify space-y-1
            animate-slideInRight"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
        <h2 className="text-3xl sm:text-4xl font-bold
            md:text-left text-center">
            <span className="text-red-800">About</span> me?
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
            I m a dedicated <strong>Computer Science undergraduate</strong> at <strong>Eastern University, Sri Lanka</strong>,
            passionate about Full-Stack Development, Software Engineering, and UI/UX Design. I thrive in
            building <strong>scalable, high-performance applications</strong> using modern tools and frameworks.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
            Proficient in technologies like <strong>React, Angular, and Express.js</strong>, and fluent in
            <strong> JavaScript, TypeScript, Java, HTML, and Python</strong>, I enjoy solving real-world
            problems through clean, efficient code and innovative solutions.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
            As a skilled <strong>UI/UX Designer</strong> with experience in <strong>Figma</strong> and
            <strong> Adobe Photoshop</strong>, <strong> Adobe Illustrator</strong>, <strong> Canva</strong> I bridge functionality with aesthetics  designing
            interfaces that are both intuitive and visually engaging.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
            I m constantly exploring new technologies, contributing to team-driven projects,
            and aiming to make an impact in the tech industry. Whether it’s <strong>backend logic</strong>,
            <strong> pixel-perfect UI</strong>, or <strong>end-to-end deployment</strong>, I bring a
            strong mix of technical expertise and creativity to every challenge.
        </p>
        </div>
    </div>
    </div>
    </section>
);
}