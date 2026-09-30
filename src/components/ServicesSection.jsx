import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, MonitorPlay, Palette, Gauge } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ServicesSection() {
  const sectionRef = useRef(null)

  const services = [
    {
      icon: Code2,
      number: '01',
      title: 'WEB DEVELOPMENT',
      subtitle: 'Scalable Engineering',
      description:
        'Building responsive, high-speed web applications leveraging React, Vite, and modern JavaScript architectures.',
    },
    {
      icon: Palette,
      number: '02',
      title: 'UI / UX DESIGN',
      subtitle: 'Intuitive Interfaces',
      description:
        'Crafting minimal, cinematic visual systems with focused typography, dark mode contrast, and user ergonomics.',
    },
    {
      icon: MonitorPlay,
      number: '03',
      title: 'DIGITAL EXPERIENCES',
      subtitle: 'Interactive Storytelling',
      description:
        'Connecting user interaction directly with motion, creating scroll-driven product launches and hero experiences.',
    },
    {
      icon: Gauge,
      number: '04',
      title: 'PERFORMANCE',
      subtitle: '60FPS Optimization',
      description:
        'GPU-accelerated animations using CSS transforms, minimal re-renders, and optimized asset pipelines.',
    },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-8 lg:px-12 bg-[#07080c] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              02 // OUR CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              CORE SERVICES
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Specialized solutions tailored for modern digital products, interactive brand identities, and high-conversion web platforms.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="service-card glass-card p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 group bg-slate-900/60 border border-slate-800/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl font-bold font-display text-white mt-1 mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>EXPLORE SERVICE</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
