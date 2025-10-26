import React from 'react'
import { Cpu, Zap, Shield, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'AI-Enhanced Fit',
    desc: 'Adaptive mesh maps your stride in real-time for tailored support and balance.'
  },
  {
    icon: Zap,
    title: 'Reactive Cushioning',
    desc: 'Energy return midsole with micro-chambers delivers spring without bulk.'
  },
  {
    icon: Shield,
    title: 'Stability Matrix',
    desc: 'Lateral lock frame stabilizes cuts and landings for uncompromised control.'
  },
  {
    icon: Sparkles,
    title: 'Metallic Gradients',
    desc: 'Aerospace finish with luminous metallic gradients—built to stand out in dark mode.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-10 sm:py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Tech that moves with you</h2>
        <a href="#showcase" className="text-sm text-cyan-300 hover:text-cyan-200">See it in action →</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="absolute -inset-px rounded-2xl opacity-30" style={{
              background: 'linear-gradient(120deg, rgba(56,189,248,0.15), rgba(217,70,239,0.15))'
            }} />
            <div className="relative">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        <SpecCard label="Weight" value="285g" />
        <SpecCard label="Drop" value="6mm" />
        <SpecCard label="Energy Return" value="+28%" />
      </div>
    </section>
  )
}

function SpecCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-5 flex items-center justify-between">
      <span className="text-zinc-400">{label}</span>
      <span className="text-xl font-semibold bg-clip-text text-transparent" style={{
        backgroundImage: 'linear-gradient(120deg, #22d3ee, #a21caf)'
      }}>{value}</span>
    </div>
  )
}
