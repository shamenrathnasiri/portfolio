import React from 'react'
import HomeSection from './components/HomeSection.js'
import AboutSection from './components/AboutSection.js'
import ProjectSection from './components/ProjectSection.js'
import Link from 'next/link'

function page() {
  return (
    <div>
      <HomeSection/>
      <AboutSection/>
      <ProjectSection/>
    </div>
  )
}

export default page
