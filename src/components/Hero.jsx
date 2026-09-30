import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollVisual from './ScrollVisual'
import Stats from './Stats'
import { ChevronDown } from 'lucide-react'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const pinContainerRef = useRef(null)
  const heroContentRef = useRef(null)
  const headlineRef = useRef(null)
  const carWrapperRef = useRef(null)
  const statsContainerRef = useRef(null)
  const progressBarRef = useRef(null)
  const scrollPromptRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PAGE LOAD INTRO TIMELINE
      const introTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      // Prepare initial states
      gsap.set('.hero-word', { opacity: 0, y: 35, filter: 'blur(6px)' })
      gsap.set('.stat-card', { opacity: 0, y: 25, scale: 0.95 })
      gsap.set(carWrapperRef.current, {
        x: '-18vw',
        scale: 0.88,
        rotation: -2,
        opacity: 0,
      })

      // Animate Headline Letters/Words
      introTl
        .to('.hero-word', {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.06,
        })
        // Reveal Car Visual with smooth entrance
        .to(
          carWrapperRef.current,
          {
            opacity: 1,
            scale: 0.98,
            duration: 0.9,
            ease: 'back.out(1.2)',
          },
          '-=0.5'
        )
        // Stagger Statistics Entrance (Guarantees cards animate to full opacity & position)
        .to(
          '.stat-card',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.4'
        )

      // 2. SCROLL-DRIVEN GSAP SCROLLTRIGGER TIMELINE
      const mm = gsap.matchMedia()

      // Desktop & Laptop Sequence
      mm.add('(min-width: 768px)', () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: 'top top',
            end: '+=2200', // Scroll distance for pinning
            scrub: 1, // Smooth scrubbing
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                gsap.set(progressBarRef.current, { scaleX: self.progress })
              }
            },
          },
        })

        scrollTl
          // PHASE 1: Vehicle moves horizontally towards center
          .to(carWrapperRef.current, {
            x: '0vw',
            rotation: 2,
            scale: 1.05,
            ease: 'none',
            duration: 1,
          })
          // PHASE 2 & 3: Headline & Stats soften opacity as car reaches center
          .to(
            headlineRef.current,
            {
              opacity: 0.2,
              y: -25,
              scale: 0.96,
              ease: 'none',
              duration: 0.8,
            },
            '<+=0.2'
          )
          .to(
            statsContainerRef.current,
            {
              opacity: 0.2,
              y: 25,
              ease: 'none',
              duration: 0.8,
            },
            '<'
          )
          // PHASE 4: Car glides toward center-right
          .to(carWrapperRef.current, {
            x: '20vw',
            rotation: -3,
            scale: 1.1,
            ease: 'none',
            duration: 1.2,
          })
          // PHASE 5 & 6: Car moves toward right exit side and levels out
          .to(carWrapperRef.current, {
            x: '38vw',
            rotation: 0,
            scale: 0.95,
            opacity: 0.9,
            ease: 'none',
            duration: 1,
          })
          // Fade out scroll prompt
          .to(
            scrollPromptRef.current,
            {
              opacity: 0,
              duration: 0.3,
            },
            0.1
          )

        return () => scrollTl.kill()
      })

      // Mobile Sequence
      mm.add('(max-width: 767px)', () => {
        const mobileScrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: 'top top',
            end: '+=1600',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                gsap.set(progressBarRef.current, { scaleX: self.progress })
              }
            },
          },
        })

        mobileScrollTl
          .to(carWrapperRef.current, {
            x: '0vw',
            rotation: 1,
            scale: 1.02,
            duration: 1,
          })
          .to(
            headlineRef.current,
            {
              opacity: 0.25,
              y: -15,
              duration: 0.8,
            },
            '<+=0.2'
          )
          .to(
            statsContainerRef.current,
            {
              opacity: 0.2,
              y: 20,
              duration: 0.8,
            },
            '<'
          )
          .to(carWrapperRef.current, {
            x: '12vw',
            rotation: -2,
            scale: 1.04,
            duration: 1.2,
          })
          .to(carWrapperRef.current, {
            x: '24vw',
            rotation: 0,
            scale: 0.9,
            duration: 1,
          })

        return () => mobileScrollTl.kill()
      })

      // Refresh ScrollTrigger so triggers below calculate accurately after pinning spacer is added
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 200)
    }, pinContainerRef)

    return () => ctx.revert()
  }, [])

  const headlineText = 'WELCOME ITZFIZZ'
  const words = headlineText.split(' ')

  return (
    <div ref={pinContainerRef} className="relative w-full overflow-hidden bg-[#07080c]">
      {/* Scroll Progress Bar at Top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50 pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 origin-left scale-x-0 transition-transform duration-75"
        />
      </div>

      {/* Hero Viewport Container */}
      <div
        ref={heroContentRef}
        className="relative h-screen min-h-[600px] max-h-[1080px] w-full flex flex-col items-center justify-between pt-16 sm:pt-20 pb-4 px-4 sm:px-6 lg:px-12 bg-grid-pattern bg-radial-gradient overflow-hidden"
      >
        {/* Ambient Lighting Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

        {/* HERO HEADLINE */}
        <div ref={headlineRef} className="text-center z-20 mt-2 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-2 shadow-lg shadow-cyan-950/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            DIGITAL INNOVATION EVALUATION
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-[0.16em] uppercase text-white leading-tight">
            {words.map((word, wIdx) => (
              <span key={wIdx} className="inline-block whitespace-nowrap mx-1.5">
                {word.split('').map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="hero-word inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-2 text-[10px] sm:text-xs text-slate-400 font-medium tracking-widest max-w-xl mx-auto uppercase">
            Scroll-Driven Motion Experience // Next-Gen Digital Engineering
          </p>
        </div>

        {/* CENTRAL VEHICLE VISUAL */}
        <div
          ref={carWrapperRef}
          className="relative z-10 w-full max-w-2xl lg:max-w-3xl my-auto flex items-center justify-center pointer-events-none transform-gpu"
        >
          <ScrollVisual />
        </div>

        {/* ANIMATED STATISTICS GRID */}
        <div ref={statsContainerRef} className="w-full z-20 my-1">
          <Stats />
        </div>

        {/* SCROLL PROMPT */}
        <div
          ref={scrollPromptRef}
          className="relative z-20 flex flex-col items-center gap-1 mt-1 text-slate-400 text-[10px] font-mono tracking-widest uppercase animate-bounce"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
        </div>
      </div>
    </div>
  )
}
