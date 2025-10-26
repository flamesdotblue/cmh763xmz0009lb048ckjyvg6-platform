import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const MetallicText = ({ children, className = '' }) => (
  <span
    className={`bg-clip-text text-transparent ${className}`}
    style={{
      backgroundImage:
        'linear-gradient(120deg, rgba(200,200,200,0.95) 0%, rgba(255,255,255,0.85) 20%, rgba(120,120,120,0.9) 40%, rgba(240,240,240,0.95) 60%, rgba(150,150,150,0.9) 80%, rgba(255,255,255,0.85) 100%)'
    }}
  >
    {children}
  </span>
)

export default function Hero() {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-200, 200], [12, -12])
  const rotateY = useTransform(x, [-200, 200], [-16, 16])
  const [hover, setHover] = useState(false)

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx)
    y.set(dy)
  }

  return (
    <section className="pt-16 sm:pt-24 lg:pt-28 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <MetallicText>Athletic Luxury</MetallicText>
            <br />
            for the Future
          </h1>
          <p className="mt-6 text-lg text-zinc-300 max-w-xl">
            Meet AURIS—premium performance shoes engineered with AI-enhanced materials, adaptive cushioning, and a sculpted silhouette. Built for speed, crafted for presence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#buy" className="inline-flex items-center rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-neutral-950 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_50px_rgba(217,70,239,0.45)] transition">
              Preorder Now
            </a>
            <a href="#showcase" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 hover:bg-white/10 transition">
              Explore Tech
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-cyan-400/90" />AI-enhanced stability</div>
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-fuchsia-500/90" />Reactive cushioning</div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => {
              setHover(false); x.set(0); y.set(0)
            }}
            style={{ perspective: 1200 }}
            className="mx-auto w-full max-w-xl"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              className="relative rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 shadow-2xl"
            >
              <div className="absolute inset-0 rounded-3xl" style={{
                background:
                  'conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.12), rgba(217,70,239,0.12), rgba(56,189,248,0.12))'
              }} />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900">
                <GridGlow />
                <ShoeSVG hover={hover} />
              </div>
              <div className="relative mt-5 flex items-center justify-between text-zinc-300">
                <span className="text-sm">AURIS X1 — Titanium Black</span>
                <span className="text-sm font-semibold text-white">$249</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GridGlow() {
  return (
    <div className="absolute inset-0">
      <div className="absolute -inset-[2px] opacity-40" style={{
        backgroundImage: 'radial-gradient(60% 60% at 20% 10%, rgba(56,189,248,0.25), transparent 60%), radial-gradient(60% 60% at 80% 0%, rgba(217,70,239,0.25), transparent 60%)'
      }} />
      <div className="absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
    </div>
  )
}

function ShoeSVG({ hover }) {
  return (
    <motion.svg
      initial={{ y: 10, scale: 0.96, filter: 'drop-shadow(0px 40px 80px rgba(0,0,0,0.35))' }}
      animate={{ y: hover ? -4 : 0, scale: hover ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 100, damping: 12 }}
      viewBox="0 0 900 600"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="metal" x1="0" x2="1">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="15%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#a3a3a3" />
          <stop offset="55%" stopColor="#f5f5f5" />
          <stop offset="80%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="neon" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a21caf" />
        </linearGradient>
      </defs>

      <g transform="translate(60,160)">
        <path d="M50 210 C 140 120, 250 100, 380 140 C 480 170, 620 160, 730 180 C 760 190, 790 210, 800 240 C 780 260, 720 280, 650 290 C 560 300, 470 305, 400 300 C 310 295, 210 285, 150 260 C 100 240, 70 230, 50 210 Z" fill="url(#metal)" opacity="0.85" />
        <path d="M120 220 C 210 180, 310 170, 420 195 C 510 215, 610 215, 740 230" stroke="url(#neon)" strokeWidth="8" fill="none" opacity="0.9" />
        <path d="M520 250 C 560 245, 610 245, 660 255" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
        <path d="M170 245 C 210 235, 260 235, 320 245" stroke="#a21caf" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
        <circle cx="700" cy="285" r="34" fill="#0a0a0a" stroke="url(#neon)" strokeWidth="6" />
        <circle cx="700" cy="285" r="18" fill="#111827" stroke="#374151" strokeWidth="4" />
        <circle cx="220" cy="295" r="30" fill="#0a0a0a" stroke="url(#neon)" strokeWidth="6" />
        <circle cx="220" cy="295" r="16" fill="#111827" stroke="#374151" strokeWidth="4" />
        <path d="M80 205 C 95 220, 120 235, 150 245" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
        <path d="M470 160 C 500 150, 560 150, 620 160" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="10" strokeLinecap="round" />
        <path d="M120 200 C 160 165, 230 150, 320 155" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="18" strokeLinecap="round" />
      </g>
      <ellipse cx="470" cy="480" rx="260" ry="40" fill="black" opacity="0.35" />
    </motion.svg>
  )
}
