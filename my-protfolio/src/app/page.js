import React from 'react'
import HomeSection from './components/HomeSection.js'
import AboutSection from './components/AboutSection.js'
import Link from 'next/link'

function page() {
  return (
    <div>
      <HomeSection/>
      <AboutSection/>
    </div>
  )
}

export default page
