import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yBack = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const yMid = useTransform(scrollYProgress, [0, 1], ['-5%', '6%'])
  const yFront = useTransform(scrollYProgress, [0, 1], ['0%', '2%'])

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="showcase" ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y: mounted ? yBack : 0 }} className="absolute inset-0 opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: mounted ? yMid : 0 }} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Immersive by design
            </h2>
            <p className="text-zinc-300">
              AURIS pairs minimalist form with tech-driven function. Metallic gradients reflect motion, while parallax layers create depth as you scroll. Built responsive for every stride and screen.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-300">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">3D tilt interactions</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Parallax showcase</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Dark mode native</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Smooth scroll visuals</li>
            </ul>
            <div className="pt-2">
              <a id="buy" href="#" className="inline-flex items-center rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-neutral-950 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_50px_rgba(217,70,239,0.45)] transition">
                Reserve AURIS X1 — $249
              </a>
            </div>
          </motion.div>

          <motion.div style={{ y: mounted ? yFront : 0 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/60">
              <LayeredParallax />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LayeredParallax() {
  return (
    <div className="relative aspect-[4/3]">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(80% 80% at 80% 10%, rgba(217,70,239,0.18), transparent 60%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(80% 80% at 20% 90%, rgba(56,189,248,0.18), transparent 60%)' }} />

      <ParallaxLayer speed={-10} className="opacity-60">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 to-fuchsia-500/30 blur-2xl" />
      </ParallaxLayer>

      <ParallaxLayer speed={-4} className="">
        <div className="absolute left-8 top-8 right-8 bottom-8 rounded-2xl border border-white/10" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </ParallaxLayer>

      <ParallaxLayer speed={2} className="">
        <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-40 rounded-xl bg-gradient-to-r from-white/10 to-white/0 backdrop-blur-sm border border-white/10" />
      </ParallaxLayer>

      <ParallaxLayer speed={6} className="">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-white/5 border border-white/10" />
        <div className="absolute left-1/2 top-[58%] -translate-x-1/2 h-2 w-52 rounded-full bg-black/40 blur" />
      </ParallaxLayer>

      <ParallaxLayer speed={10} className="">
        <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
          <svg width="340" height="160" viewBox="0 0 900 400" className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
            <defs>
              <linearGradient id="shoeMetal" x1="0" x2="1">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="40%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="shoeNeon" x1="0" x2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a21caf" />
              </linearGradient>
            </defs>
            <g transform="translate(60,120)">
              <path d="M50 140 C 140 80, 250 60, 380 90 C 480 110, 620 105, 730 120 C 760 130, 790 150, 800 170 C 780 185, 720 200, 650 210 C 560 220, 470 225, 400 220 C 310 215, 210 205, 150 190 C 100 175, 70 160, 50 140 Z" fill="url(#shoeMetal)" opacity="0.9" />
              <path d="M120 150 C 210 120, 310 110, 420 128 C 510 142, 610 142, 740 156" stroke="url(#shoeNeon)" strokeWidth="10" fill="none" opacity="0.9" />
              <circle cx="700" cy="208" r="28" fill="#0a0a0a" stroke="url(#shoeNeon)" strokeWidth="6" />
              <circle cx="220" cy="215" r="24" fill="#0a0a0a" stroke="url(#shoeNeon)" strokeWidth="6" />
            </g>
          </svg>
        </div>
      </ParallaxLayer>
    </div>
  )
}

function ParallaxLayer({ speed = 0, className = '', children }) {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const [offsetTop, setOffsetTop] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setOffsetTop(el.getBoundingClientRect().top + window.scrollY)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const y = useTransform(scrollY, [offsetTop - 800, offsetTop + 800], [-speed * 8, speed * 8])

  return (
    <motion.div ref={ref} style={{ y }} className={`absolute inset-0 ${className}`}>
      {children}
    </motion.div>
  )
}
