import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Layers, Sparkles, Target } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutSection() {
  const sectionRef = useRef(null)
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation on scroll entry
      gsap.from(leftColRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from(rightColRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const highlights = [
    {
      icon: Cpu,
      title: 'High Performance',
      text: 'Engineered with lightweight modern frameworks & optimized asset rendering.',
    },
    {
      icon: Layers,
      title: 'Modular Architecture',
      text: 'Scalable React structure built for seamless maintenance and future extension.',
    },
    {
      icon: Sparkles,
      title: 'Cinematic Motion',
      text: 'Subtle scroll-synchronised animations powered by GSAP ScrollTrigger.',
    },
    {
      icon: Target,
      title: 'User-Centric UX',
      text: 'Designed to captivate audiences with strong typography and fluid interaction.',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-8 lg:px-12 bg-[#090b10] border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Heading & Narrative */}
          <div ref={leftColRef} className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              01 // MISSION & VISION
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              BUILDING DIGITAL <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                EXPERIENCES
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              At <strong className="text-white font-semibold">ITZFIZZ Digital</strong>, we combine cutting-edge frontend architecture with cinematic motion design to craft immersive digital ecosystems. We bridge the gap between creative visual artistry and robust engineering.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every pixel, interaction, and scroll velocity is meticulously tuned. By connecting motion directly to user scroll progress, web platforms evolve from static pages into living interactive brand showcases.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                ⚡ SCROLL-DRIVEN MOTION
              </div>
              <div className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                🎯 60FPS OPTIMIZED
              </div>
              <div className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                💻 MODERN REACT STACK
              </div>
            </div>
          </div>

          {/* Right Column: Key Feature Cards Grid */}
          <div ref={rightColRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
