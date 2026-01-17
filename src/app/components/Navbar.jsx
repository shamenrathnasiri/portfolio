'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const handleScrollTo = (hash) => {
    if (pathname === '/') {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = `/#${hash}`
    }
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-800 to-black px-6 py-4 shadow-md">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl sm:text-2xl md:text-[28px] bg-gradient-to-tr from-yellow-300 to-yellow-600 bg-clip-text text-transparent transition-colors duration-300"
          >
            Bhanuka Shamen
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-white transition hover:border-white/40 hover:bg-white/10 md:hidden active:scale-95"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full mt-2 flex-col items-center gap-1 rounded-2xl border border-white/10 bg-black/95 px-4 py-4 text-center shadow-2xl backdrop-blur md:static md:mt-0 md:ml-10 md:flex md:flex-row md:items-center md:gap-8 md:rounded-none md:border-none md:bg-transparent md:px-0 md:py-0 md:text-left md:shadow-none md:backdrop-blur-0`}
        >
          <Link
            href="/"
            className="w-full rounded-lg px-4 py-3 text-base font-medium text-white transition hover:text-red-400 hover:bg-white/5 md:w-auto md:rounded-none md:px-0 md:py-0 md:hover:bg-transparent"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#about"
            className="w-full rounded-lg px-4 py-3 text-base font-medium text-white transition hover:text-red-400 hover:bg-white/5 md:w-auto md:rounded-none md:px-0 md:py-0 md:hover:bg-transparent"
            onClick={(event) => {
              event.preventDefault()
              handleScrollTo('about')
            }}
          >
            AboutMe
          </a>
          <a
            href="#experience"
            className="w-full rounded-lg px-4 py-3 text-base font-medium text-white transition hover:text-red-400 hover:bg-white/5 md:w-auto md:rounded-none md:px-0 md:py-0 md:hover:bg-transparent"
            onClick={(event) => {
              event.preventDefault()
              handleScrollTo('resume')
            }}
          >
            Resume
          </a>
          <a
            href="#project"
            className="w-full rounded-lg px-4 py-3 text-base font-medium text-white transition hover:text-red-400 hover:bg-white/5 md:w-auto md:rounded-none md:px-0 md:py-0 md:hover:bg-transparent"
            onClick={(event) => {
              event.preventDefault()
              handleScrollTo('project')
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="w-full rounded-lg px-4 py-3 text-base font-medium text-white transition hover:text-red-400 hover:bg-white/5 md:w-auto md:rounded-none md:px-0 md:py-0 md:hover:bg-transparent"
            onClick={(event) => {
              event.preventDefault()
              handleScrollTo('contact')
            }}
          >
            ContactMe
          </a>
        </div>
      </div>
    </nav>
  )
}