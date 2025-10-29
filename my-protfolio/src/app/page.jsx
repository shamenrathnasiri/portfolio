import React from 'react'
import HomeSection from './components/HomeSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import ProfessionalExpSection from './components/ProfessionalExpSection.jsx'
import Link from 'next/link'

function page() {
  return (
    <div>
      <HomeSection/>
      <AboutSection/>
      <ProfessionalExpSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  )
}

export default page
