import React from 'react'
import { ArrowUp, Github, Linkedin, Twitter, Zap } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="relative bg-[#050608] text-slate-300 border-t border-slate-800/80 pt-20 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Zap className="w-5 h-5 text-black fill-current" />
              </div>
              <span className="text-2xl font-black font-display tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-400">
                ITZFIZZ
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Digital Experiences & Next-Gen Motion Engineering. Created for the Web Development Internship evaluation assignment.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT US</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">SERVICES</a></li>
              <li><a href="#work" className="hover:text-cyan-400 transition-colors">FEATURED WORK</a></li>
              <li><a href="#footer" className="hover:text-cyan-400 transition-colors">CONTACT</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">
              CONNECT
            </h4>
            <div className="flex gap-3">
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© 2026 ITZFIZZ Digital Experiences</span>
            <span>•</span>
            <span className="text-slate-400">All rights reserved</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
