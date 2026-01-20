"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaFacebook, FaExternalLinkAlt, FaPalette, FaImages } from 'react-icons/fa'
import Tute1 from '../../../public/(graphics)/Tute1.jpg'
import Tute2 from '../../../public/(graphics)/Tute2.jpg'
import Tute3 from '../../../public/(graphics)/Tute3.jpg'
import Tute4 from '../../../public/(graphics)/Tute4.jpg'
import Tute5 from '../../../public/(graphics)/Tute5.jpg'
import Tute6 from '../../../public/(graphics)/Tute6.jpg'
import Post1 from '../../../public/(graphics)/post1.jpg'
import Post2 from '../../../public/(graphics)/post2.jpg'
import Post3 from '../../../public/(graphics)/post3.jpg'
import Post4 from '../../../public/(graphics)/post4.jpg'
import Post5 from '../../../public/(graphics)/post5.jpg'
import Post6 from '../../../public/(graphics)/post6.jpg'
import Post7 from '../../../public/(graphics)/post7.jpg'
import Post8 from '../../../public/(graphics)/post8.jpg'
import Post9 from '../../../public/(graphics)/post9.jpg'
import Post10 from '../../../public/(graphics)/post10.jpg'
import Flayer1 from '../../../public/(graphics)/flayer1.jpg'
import Flayer2 from '../../../public/(graphics)/flayer2.jpg'
import Flayer3 from '../../../public/(graphics)/flayer3.jpg'
import Post11 from '../../../public/(graphics)/post11.jpg'
import Post12 from '../../../public/(graphics)/post12.jpg'
import Post13 from '../../../public/(graphics)/post13.jpg'

function GraphicsPage() {
  // Sample data for each collection
  const collections = {
    tuteCovers: [
      { id: 1, image: Tute1, title: 'Tutorial Cover 1' },
      { id: 2, image: Tute2, title: 'Tutorial Cover 2' },
      { id: 3, image: Tute3, title: 'Tutorial Cover 3' },
      { id: 4, image: Tute4, title: 'Tutorial Cover 4' },
      { id: 5, image: Tute5, title: 'Tutorial Cover 5' },
      { id: 6, image: Tute6, title: 'Tutorial Cover 6' },
    ],
    flayes: [
      { id: 1, image: Flayer1, title: 'Flyer Design 1', description: 'for shop' },
      { id: 2, image: Flayer2, title: 'Flyer Design 2', description: 'for class' },
      { id: 3, image: Flayer3, title: 'Flyer Design 3', description: 'for class' },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-gray-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 w-[60vw] h-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.35),transparent_70%)] blur-[120px]"></div>
        <div className="absolute top-20 right-16 w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute inset-y-16 right-12 w-1 bg-gradient-to-b from-red-600/40 to-transparent opacity-60"></div>
      </div>

      <div className="relative z-10">
        <div className="px-4 sm:px-6 md:px-12 pt-5 sm:pt-6">
          <Link
            href="/#project"
            className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base text-red-100 hover:text-white transition-all duration-300 bg-gradient-to-r from-red-900/80 to-red-800/60 hover:from-red-800 hover:to-red-700 border-2 border-red-600/50 hover:border-red-500 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-lg shadow-red-900/50 hover:shadow-xl hover:shadow-red-800/60 hover:scale-105 transform"
          >
            <FaArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="font-semibold">Back to Projects</span>
          </Link>
        </div>

        {/* Enhanced Header */}
        <header className="py-6 sm:py-8 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10 sm:mb-12 space-y-4 sm:space-y-6"
            >
              <div className="relative inline-block">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 relative z-10 drop-shadow-2xl">
                  Graphic Design Gallery
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 blur-2xl opacity-30 animate-pulse"></div>
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full animate-pulse"></span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
                Visual storytelling through vibrant compositions, bold typography, and red-hot creativity.
              </p>
              <div className="flex justify-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </motion.div>

          </div>
        </header>

        {/* ABC Graphics - Enhanced */}
        <section className="px-4 sm:px-6 md:px-12 mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[28px] sm:rounded-[32px] border border-red-700/50 bg-gradient-to-br from-red-900/80 via-black/60 to-black/80 p-5 sm:p-8 overflow-hidden shadow-[0_0_45px_rgba(220,38,38,0.35)]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 right-6 w-48 h-48 bg-red-500/40 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-12 left-10 w-56 h-56 bg-red-600/20 blur-3xl"></div>
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-900/50">
                  <FaFacebook className="h-8 w-8" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <p className="text-xs tracking-[0.5em] uppercase text-red-400 mb-2">Featured Studio</p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">ABC Graphics</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                    Freelance graphic design studio crafting bold social posts, eye-catching flyers, professional tute covers, and cohesive branding systems.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="https://www.abcgraphics.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-red-600/60 bg-black/40 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white hover:border-red-500 hover:bg-red-900/30 transition-all duration-300 shadow-lg hover:shadow-red-900/40 hover:scale-105"
                    >
                      Website
                      <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100095599507570"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-red-600/60 bg-black/40 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white hover:border-red-500 hover:bg-red-900/30 transition-all duration-300 shadow-lg hover:shadow-red-900/40 hover:scale-105"
                    >
                      Facebook
                      <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Navigation */}
        <nav className="sticky top-0 bg-gradient-to-r from-black via-red-950/30 to-black backdrop-blur-lg z-20 border-b-2 border-red-600/50 shadow-lg shadow-red-900/20">
          <div className="container mx-auto px-4 py-3 sm:py-4 flex overflow-x-auto space-x-6 sm:space-x-8 scrollbar-hide">
            <a href="#tute-covers" className="relative text-red-500 font-bold whitespace-nowrap text-sm sm:text-base py-2 min-h-[44px] flex items-center group">
              <span className="relative z-10">Tute Covers</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></span>
            </a>
            <a href="#posts" className="relative text-white hover:text-red-400 font-bold whitespace-nowrap text-sm sm:text-base py-2 min-h-[44px] flex items-center group transition-colors">
              <span className="relative z-10">Posts</span>
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300"></span>
            </a>
            <a href="#flayes" className="relative text-white hover:text-red-400 font-bold whitespace-nowrap text-sm sm:text-base py-2 min-h-[44px] flex items-center group transition-colors">
              <span className="relative z-10">Flyers</span>
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300"></span>
            </a>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-10 sm:py-12 relative z-10">
          {/* Tute Covers Section */}
          <section id="tute-covers" className="mb-12 sm:mb-20">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-3">
                <span className="w-1 h-12 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
                <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Tutorial Covers
                </h2>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm ml-6 pl-3">Educational materials with bold, attention-grabbing designs</p>
            </div>
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {collections.tuteCovers.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border-2 border-red-900/30 hover:border-red-500/80 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-900/40"
                >
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                    <span className="w-10 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full opacity-60"></span>
                    <span className="w-7 h-0.5 bg-gradient-to-r from-red-400 to-transparent rounded-full opacity-40"></span>
                  </div>
                  <div className="aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                      width={500}
                      height={600}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white text-sm sm:text-base font-black mb-1">{item.title}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                    <div className="w-7 h-7 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/50 flex items-center justify-center">
                      <span className="text-red-400 text-sm">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Posts Section */}
          <section id="posts" className="mb-12 sm:mb-20">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-3">
                <span className="w-1 h-12 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
                <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Social Media Posts
                </h2>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm ml-6 pl-3">Engaging content crafted for maximum social impact</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[
              { id: 1, image: Post1, title: 'Social Media Post 1' },
              { id: 2, image: Post2, title: 'Social Media Post 2' },
              { id: 3, image: Post3, title: 'Social Media Post 3' },
              { id: 4, image: Post4, title: 'Social Media Post 4' },
              { id: 5, image: Post5, title: 'Social Media Post 5' },
              { id: 6, image: Post6, title: 'Social Media Post 6' },
              { id: 7, image: Post7, title: 'Social Media Post 7' },
              { id: 8, image: Post8, title: 'Social Media Post 8' },
              { id: 9, image: Post9, title: 'Social Media Post 9' },
              { id: 10, image: Post10, title: 'Social Media Post 10' },
              { id: 11, image: Post11, title: 'Social Media Post 11' },
              { id: 12, image: Post12, title: 'Social Media Post 12' },
              { id: 13, image: Post13, title: 'Social Media Post 13' },

            ].map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-red-900/30 hover:border-red-500/80 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-900/40"
              >
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                  <span className="w-10 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full opacity-60"></span>
                  <span className="w-7 h-0.5 bg-gradient-to-r from-red-400 to-transparent rounded-full opacity-40"></span>
                </div>
                <div className="aspect-[4/5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    width={500}
                    height={600}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white text-xs sm:text-sm font-black mb-1">{item.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                  <div className="w-7 h-7 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/50 flex items-center justify-center">
                    <span className="text-red-400 text-sm">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </section>

          {/* Flyers Section */}
          <section id="flayes">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-3">
                <span className="w-1 h-12 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
                <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Flyers & Print Design
                </h2>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm ml-6 pl-3">Professional print materials for businesses and classes</p>
            </div>
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {collections.flayes.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border-2 border-red-900/30 hover:border-red-500/80 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-900/40"
                >
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                    <span className="w-10 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full opacity-60"></span>
                    <span className="w-7 h-0.5 bg-gradient-to-r from-red-400 to-transparent rounded-full opacity-40"></span>
                  </div>
                  <div className="aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                      width={500}
                      height={600}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-sm sm:text-base font-black mb-1">{item.title}</h3>
                    <p className="text-red-400 text-xs sm:text-sm font-semibold mb-2">{item.description}</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                    <div className="w-7 h-7 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/50 flex items-center justify-center">
                      <span className="text-red-400 text-sm">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GraphicsPage;