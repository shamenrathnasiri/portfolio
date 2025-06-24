'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

return (
    <nav className="bg-white shadow-md px-4 py-3 md:flex md:items-center md:justify-between">

    <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl text-blue-700">Bhanuka Shamen</h1>
        <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl md:hidden focus:outline-none"
        >
        ☰
        </button>
    </div>

    <div className={`mt-2 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:flex space-y-2 md:space-y-0 md:space-x-6`}>
        <Link href="/" className="block hover:text-blue-600">Home</Link>
        <Link href="/about" className="block hover:text-blue-600">About Me</Link>
        <Link href="/projects" className="block hover:text-blue-600">Projects</Link>
        <Link href="/contact" className="block hover:text-blue-600">Contact Me</Link>
    </div>
    </nav>
)
}
