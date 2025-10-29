import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
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
      { id: 1, image: Flayer1, title: 'Flyer Design 1', description: 'Event promotion' },
      { id: 2, image: Flayer2, title: 'Flyer Design 2', description: 'Product launch' },
      { id: 3, image: Flayer3, title: 'Flyer Design 3', description: 'Music festival' },
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-8 px-4 md:px-12 border-b border-red-600">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Graphic Design</h1>
        <p className="text-gray-300 max-w-2xl">
          A collection of my graphic design work including tutorial covers, social media posts, and flyers.
        </p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-black z-10 border-b border-red-600">
        <div className="container mx-auto px-4 py-4 flex overflow-x-auto space-x-6">
          <a href="#tute-covers" className="text-red-500 font-medium whitespace-nowrap">
            Tute Covers
          </a>
          <a href="#posts" className="text-white hover:text-red-500 font-medium whitespace-nowrap">
            Posts
          </a>
          <a href="#flayes" className="text-white hover:text-red-500 font-medium whitespace-nowrap">
            Flayes
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Tute Covers Section */}
        <section id="tute-covers" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-4 h-8 bg-red-600 mr-4"></span>
            Tute Covers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.tuteCovers.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-w-4 aspect-h-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    width={500}
                    height={600}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-xl font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Posts Section */}
        <section id="posts" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-4 h-8 bg-red-600 mr-4"></span>
            Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            ].map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-w-4 aspect-h-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    width={500}
                    height={600}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-xl font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Flayes Section */}
        <section id="flayes">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-4 h-8 bg-red-600 mr-4"></span>
            Flayes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.flayes.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-w-4 aspect-h-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    width={500}
                    height={600}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-medium">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default GraphicsPage;