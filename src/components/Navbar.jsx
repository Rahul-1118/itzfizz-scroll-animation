import React, { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#footer' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080c]/85 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-2xl font-black tracking-[0.25em] text-white transition-opacity hover:opacity-90 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <Zap className="w-5 h-5 text-black fill-current" />
          </div>
          <span className="font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-400">
            ITZFIZZ
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-xs font-semibold tracking-[0.2em] text-slate-300 hover:text-cyan-400 transition-colors py-1 group focus:outline-none"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#footer"
            onClick={(e) => handleNavClick(e, '#footer')}
            className="px-5 py-2 text-xs font-semibold tracking-wider text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            LET'S TALK
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-[#07080c]/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold tracking-[0.2em] text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#footer"
              onClick={(e) => handleNavClick(e, '#footer')}
              className="mt-2 text-center py-3 text-xs font-bold tracking-widest text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"
            >
              GET IN TOUCH
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
