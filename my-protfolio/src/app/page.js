import React from 'react'
import HomeSection from './components/HomeSection.js'
import AboutSection from './components/AboutSection.js'
import ProjectSection from './components/ProjectSection.js'
import ContactSection from './components/ContactSection.js'
import Link from 'next/link'

function page() {
  return (
    <div>
      <HomeSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  )
}

export default page
