import React from 'react'

/**
 * ScrollVisual Component
 * Custom futuristic hypercar SVG illustration engineered for smooth GSAP transforms & scaling.
 * Features neon energy lines, metallic body gradients, rim details, headlights flare & ground shadow.
 */
export default function ScrollVisual({ className = '' }) {
  return (
    <div className={`relative w-full max-w-4xl mx-auto flex items-center justify-center select-none ${className}`}>
      {/* Ambient Glow Background behind the car */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 blur-3xl rounded-full scale-110 pointer-events-none animate-pulse-glow" />

      {/* Main Hypercar SVG */}
      <svg
        viewBox="0 0 1200 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,242,254,0.25)] relative z-10 filter"
        aria-label="ITZFIZZ Futuristic Cyber Vehicle Visual"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="bodyPaint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="40%" stopColor="#1e293b" />
            <stop offset="70%" stopColor="#090d16" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="cyberAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="50%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>

          <linearGradient id="headlightBeam" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#00f2fe" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="tailBeam" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#ff0055" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff0055" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="wheelRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Dynamic Ground Contact Shadow */}
        <ellipse cx="600" cy="420" rx="520" ry="35" fill="url(#groundShadow)" />

        {/* Speed Trails / Energy Lines under chassis */}
        <path d="M 50 415 L 1150 415" stroke="url(#cyberAccent)" strokeWidth="3" strokeDasharray="16 12" strokeOpacity="0.6" />
        <path d="M 150 425 L 1050 425" stroke="url(#cyberAccent)" strokeWidth="2" strokeDasharray="24 18" strokeOpacity="0.3" />

        {/* Front Headlight Projection Flares (Facing Right) */}
        <polygon points="1050,300 1200,260 1200,370 1050,330" fill="url(#headlightBeam)" />
        <line x1="1050" y1="305" x2="1190" y2="280" stroke="#00f2fe" strokeWidth="2" strokeOpacity="0.8" />

        {/* Tail light rear glow (Left) */}
        <polygon points="180,295 20,280 20,320 180,305" fill="url(#tailBeam)" />

        {/* CAR CHASSIS / MAIN BODY SLICED HYPERCAR SHAPE */}
        {/* Underbody */}
        <path
          d="M 180 340 L 260 350 L 400 355 L 800 355 L 940 345 L 1060 325 L 1080 310 L 1060 295 L 980 270 L 860 240 L 680 180 L 480 180 L 320 220 L 220 255 L 160 280 L 160 315 Z"
          fill="url(#bodyPaint)"
          stroke="#334155"
          strokeWidth="3"
        />

        {/* Aerodynamic Roof / Cockpit Canopy */}
        <path
          d="M 380 220 C 460 170, 600 160, 720 210 L 840 245 L 340 245 Z"
          fill="#070a12"
          stroke="url(#cyberAccent)"
          strokeWidth="2"
          strokeOpacity="0.8"
        />

        {/* Tinted Cockpit Glass Highlight */}
        <path
          d="M 440 215 C 500 180, 590 175, 680 210 L 780 240 L 390 240 Z"
          fill="url(#cyberAccent)"
          fillOpacity="0.15"
        />

        {/* Side Body Contour Line & Aerodynamic Air Vent */}
        <path
          d="M 170 300 C 300 280, 500 275, 750 285 L 1040 300"
          stroke="url(#cyberAccent)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M 460 280 Q 520 260 580 340"
          stroke="#4facfe"
          strokeWidth="3"
          fill="none"
          strokeOpacity="0.7"
        />

        {/* Front Grill & Splitter Accent */}
        <path d="M 1040 310 L 1085 315 L 1070 335 L 990 345 Z" fill="#00f2fe" fillOpacity="0.8" />

        {/* Rear Spoiler Accent */}
        <path d="M 150 280 L 210 245 L 240 245 L 180 285 Z" fill="#0f172a" stroke="#00f2fe" strokeWidth="2" />

        {/* HEADLIGHT LED STRIP (Right end) */}
        <path d="M 1020 295 L 1075 308 L 1030 315 Z" fill="#00f2fe" />
        <circle cx="1060" cy="308" r="6" fill="#ffffff" className="animate-pulse" />

        {/* REAR LED LIGHT BAR (Left end) */}
        <path d="M 160 285 L 200 290 L 195 300 L 160 298 Z" fill="#ff0055" />

        {/* WHEEL ARCHES AND HIGH-TECH CYBER WHEELS */}

        {/* REAR WHEEL (Left side: ~320px center) */}
        <g id="rear-wheel">
          {/* Wheel Arch Cutout */}
          <path d="M 230 340 A 75 75 0 0 1 390 340 Z" fill="#07080c" />
          {/* Outer Tire */}
          <circle cx="310" cy="340" r="65" fill="#090d16" stroke="#1e293b" strokeWidth="12" />
          {/* Rim Rim Outer Ring */}
          <circle cx="310" cy="340" r="50" fill="#0f172a" stroke="url(#wheelRim)" strokeWidth="5" />
          {/* Cyber Alloy Spokes */}
          <line x1="310" y1="290" x2="310" y2="390" stroke="#00f2fe" strokeWidth="4" />
          <line x1="260" y1="340" x2="360" y2="340" stroke="#00f2fe" strokeWidth="4" />
          <line x1="275" y1="305" x2="345" y2="375" stroke="#60a5fa" strokeWidth="3" />
          <line x1="275" y1="375" x2="345" y2="305" stroke="#60a5fa" strokeWidth="3" />
          {/* Center Hub */}
          <circle cx="310" cy="340" r="16" fill="#00f2fe" />
          <circle cx="310" cy="340" r="8" fill="#ffffff" />
        </g>

        {/* FRONT WHEEL (Right side: ~890px center) */}
        <g id="front-wheel">
          {/* Wheel Arch Cutout */}
          <path d="M 810 340 A 75 75 0 0 1 970 340 Z" fill="#07080c" />
          {/* Outer Tire */}
          <circle cx="890" cy="340" r="65" fill="#090d16" stroke="#1e293b" strokeWidth="12" />
          {/* Rim Rim Outer Ring */}
          <circle cx="890" cy="340" r="50" fill="#0f172a" stroke="url(#wheelRim)" strokeWidth="5" />
          {/* Cyber Alloy Spokes */}
          <line x1="890" y1="290" x2="890" y2="390" stroke="#00f2fe" strokeWidth="4" />
          <line x1="840" y1="340" x2="940" y2="340" stroke="#00f2fe" strokeWidth="4" />
          <line x1="855" y1="305" x2="925" y2="375" stroke="#60a5fa" strokeWidth="3" />
          <line x1="855" y1="375" x2="925" y2="305" stroke="#60a5fa" strokeWidth="3" />
          {/* Center Hub */}
          <circle cx="890" cy="340" r="16" fill="#00f2fe" />
          <circle cx="890" cy="340" r="8" fill="#ffffff" />
        </g>

        {/* Futuristic Graphic Decal Lines */}
        <text
          x="600"
          y="315"
          fill="#38bdf8"
          fillOpacity="0.4"
          fontSize="22"
          fontWeight="900"
          fontFamily="Space Grotesk, sans-serif"
          letterSpacing="8"
          textAnchor="middle"
        >
          ITZFIZZ GT-X
        </text>
      </svg>
    </div>
  )
}
