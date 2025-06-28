"use client"; // Required for animations in Next.js 13+

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const pulse = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const whatsappPulse = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-red-600 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-green-600 filter blur-3xl"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">
            LET&apos;S CONNECT
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Chat with me directly on WhatsApp.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Contact Information */}
          <motion.div 
            variants={item}
            className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white flex items-center">
              <span className="w-3 h-3 sm:w-4 sm:h-4 bg-red-600 rounded-full mr-2 sm:mr-3"></span>
              CONTACT INFO
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start group"
              >
                <div className="flex-shrink-0 bg-red-600 p-2 sm:p-3 rounded-lg group-hover:bg-red-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-400">Email</p>
                  <a href="mailto:shamenrathnasiri@gmail.com" className="text-sm sm:text-lg font-semibold hover:text-red-400 transition-colors">shamenrathnasiri@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start group"
              >
                <div className="flex-shrink-0 bg-red-600 p-2 sm:p-3 rounded-lg group-hover:bg-red-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-400">Phone</p>
                  <a href="tel:+94759715913" className="text-sm sm:text-lg font-semibold hover:text-red-400 transition-colors">+94 75 971 5913</a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={item}
            className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white flex items-center">
              <span className="w-3 h-3 sm:w-4 sm:h-4 bg-red-600 rounded-full mr-2 sm:mr-3"></span>
              SOCIAL LINKS
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <motion.a 
                variants={pulse}
                initial="initial"
                animate="pulse"
                href="https://www.linkedin.com/in/bhanuka-shamen-859183288/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
              >
                <div className="bg-black p-2 sm:p-3 rounded-lg group-hover:bg-red-600 transition-colors border border-gray-700">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-base sm:text-lg font-semibold">LinkedIn</p>
                  <p className="text-xs sm:text-sm text-gray-400">/in/bhanuka-shamen</p>
                </div>
              </motion.a>
              
              <motion.a 
                variants={pulse}
                initial="initial"
                animate="pulse"
                href="https://github.com/shamenrathnasiri?tab=overview&from=2024-10-01&to=2024-10-31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
              >
                <div className="bg-black p-2 sm:p-3 rounded-lg group-hover:bg-red-600 transition-colors border border-gray-700">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-base sm:text-lg font-semibold">GitHub</p>
                  <p className="text-xs sm:text-sm text-gray-400">github.com/shamen-rathnasiri</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* WhatsApp Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 sm:mt-16 bg-gradient-to-br from-green-900/50 to-gray-900 rounded-xl p-6 sm:p-8 border border-green-500/30 shadow-lg relative overflow-hidden"
        >
          {/* Floating WhatsApp bubbles */}
          <motion.div 
            className="absolute -top-8 -left-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/20 filter blur-xl"
            animate={{
              x: [0, 10, 0],
              y: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500/20 filter blur-xl"
            animate={{
              x: [0, -5, 0],
              y: [0, -5, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white flex items-center">
              <span className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full mr-2 sm:mr-3"></span>
              CHAT WITH ME DIRECTLY
            </h3>
            
            <motion.div
              variants={whatsappPulse}
              initial="initial"
              animate="pulse"
              className="flex flex-col items-center"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/94759715913"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md py-3 px-6 sm:py-4 sm:px-8 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors shadow-lg hover:shadow-green-500/30 flex items-center justify-center mb-4 sm:mb-6"
              >
                <svg className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-base sm:text-xl">Message on WhatsApp</span>
              </motion.a>

              <div className="text-center">
                <p className="text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">Typically replies within minutes</p>
                <p className="text-xs sm:text-sm text-gray-400">+94 75 971 5913</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}