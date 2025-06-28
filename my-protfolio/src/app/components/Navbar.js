'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false)
const pathname = usePathname()

const handleScrollTo = (hash) => {
    if (pathname === '/') {
      // If we're already on home page, scroll to section
    const element = document.getElementById(hash)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
    } else {
      // If we're on another page, navigate to home first
    window.location.href = `/#${hash}`
    }
    setMenuOpen(false)
}

return (
    <nav className="bg-gradient-to-r from-red-800 to-black shadow-md px-4 py-3 md:flex md:items-center md:justify-between sticky top-0 z-50">
    <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-white hover:text-yellow-600">Bhanuka Shamen</Link>
        <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl md:hidden focus:outline-none text-white"
        >
        ☰
        </button>
    </div>

      <div className={`mt-2 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:flex space-y-2 md:space-y-0 md:space-x-6`}>
        <Link href="/" className="block text-white hover:text-yellow-600" onClick={() => setMenuOpen(false)}>Home</Link>
        <a 
          href="#about" 
          className="block text-white hover:text-yellow-600 cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            handleScrollTo('about')
          }}
        >
          About Me
        </a>
        <a 
          href="#project" 
          className="block text-white hover:text-yellow-600 cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            handleScrollTo('project')
          }}
        >
          Projects
        </a>
        <Link href="#contact" className="block text-white hover:text-yellow-600" onClick={() => setMenuOpen(false)}>
        Contact Me</Link>
      </div>
    </nav>
  )
}