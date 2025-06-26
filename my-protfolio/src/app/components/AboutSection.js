"use client"; // Essential for Framer Motion in Next.js 13+

import Image from 'next/image';
import My2 from '../../../public/my2.jpg';
import { motion } from 'framer-motion';

export default function AboutSection() {
  // Animation variants for cleaner code
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97], // Custom easing for smoother motion
        when: "beforeChildren"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
        staggerChildren: 0.1
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id='about' className="mt-4 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Image and Text Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
        {/* Image with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px 0px -100px 0px", amount: 0.2 }}
          variants={slideInLeft}
          className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] shadow-2xl rounded-2xl overflow-hidden"
        >
          <Image
            src={My2}
            alt="My Profile"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </motion.div>

        {/* Text content with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px 0px -100px 0px", amount: 0.2 }}
          variants={slideInRight}
          className="text-gray-800 dark:text-white max-w-3xl text-justify space-y-4"
        >
          <motion.h2 
            variants={paragraphVariants}
            className="text-3xl sm:text-4xl font-bold md:text-left text-center mb-6"
          >
            <span className="text-red-800 dark:text-red-600">About</span> me?
          </motion.h2>

          <motion.p variants={paragraphVariants} className="text-base sm:text-lg leading-relaxed">
            I&apos;m a dedicated <strong className="text-bold">Computer Science undergraduate</strong> at <strong>Eastern University, Sri Lanka
                </strong>, passionate about Full-Stack Development, Software Engineering, and UI/UX Design. I thrive in building 
            <strong className="text-bold">scalable, high-performance applications</strong> using modern tools and frameworks.
          </motion.p>

          <motion.p variants={paragraphVariants} className="text-base sm:text-lg leading-relaxed">
            Proficient in technologies like <strong className="text-bold">React, Angular, and Express.js</strong>, and fluent in 
            <strong className="text-bold">JavaScript, TypeScript, Java, HTML, and Python</strong>, I enjoy solving real-world problems through clean, efficient code and innovative solutions.
          </motion.p>

          <motion.p variants={paragraphVariants} className="text-base sm:text-lg leading-relaxed">
            As a skilled <strong className="text-bold">UI/UX Designer</strong> with experience in <strong>Figma</strong>, <strong>Adobe Photoshop</strong>, <strong>Adobe Illustrator</strong>, and
             <strong>Canva</strong>, I bridge functionality with aesthetics designing interfaces that are both intuitive and visually engaging.
          </motion.p>

          <motion.p variants={paragraphVariants} className="text-base sm:text-lg leading-relaxed">
            I&apos;m constantly exploring new technologies, contributing to team-driven projects, and aiming to make an impact in the tech industry. Whether it&apos;s 
            <strong className="ttext-bold">backend logic</strong>, 
            <strong className="text-bold">pixel-perfect UI</strong>, 
            or <strong className="text-bold">end-to-end deployment</strong>, I bring a strong mix of technical expertise and creativity to every challenge.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}