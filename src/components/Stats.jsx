import React from 'react'

export default function Stats({ containerRef }) {
  const statsData = [
    {
      value: '58%',
      label: 'DIGITAL REACH',
      trend: '+18.4%',
      description: 'Expanded brand footprint across multi-channel digital touchpoints',
    },
    {
      value: '23%',
      label: 'FASTER DELIVERY',
      trend: 'Optimized',
      description: 'Accelerated development cycles via modern automated workflows',
    },
    {
      value: '27%',
      label: 'USER ENGAGEMENT',
      trend: '+27.2%',
      description: 'Sustained audience retention driven by immersive interaction',
    },
    {
      value: '40%',
      label: 'BUSINESS GROWTH',
      trend: 'Scaled',
      description: 'Measurable conversion multiplier for modern enterprise solutions',
    },
  ]

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto px-2 sm:px-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-20"
    >
      {statsData.map((stat, idx) => (
        <div
          key={idx}
          className="stat-card glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 group bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-xl"
        >
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              0{idx + 1} // METRIC
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950/90 text-cyan-400 border border-cyan-700/50">
              {stat.trend}
            </span>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-400 group-hover:scale-105 origin-left transition-transform duration-300">
              {stat.value}
            </div>
            <div className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-200 uppercase mb-1">
              {stat.label}
            </div>
          </div>

          <p className="text-[10px] sm:text-[11px] text-slate-400 leading-snug line-clamp-2 border-t border-slate-800/80 pt-1.5 mt-1">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  )
}
