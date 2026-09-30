import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import { useScrollAnimation } from './hooks/useScrollAnimation'

export default function App() {
  // Register GSAP ScrollTrigger & monitor reduced motion preferences
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Core Hero Section with Pinned Scroll-Driven Visual */}
        <Hero />

        {/* About Showcase Section */}
        <AboutSection />

        {/* Services Grid Section */}
        <ServicesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
