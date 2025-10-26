import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ParallaxShowcase from './components/ParallaxShowcase'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-400/30 selection:text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(0,255,255,0.15),transparent_60%),radial-gradient(800px_400px_at_90%_-10%,rgba(147,51,234,0.12),transparent_60%)]" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)'
        }} />
      </div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Features />
      </main>
      <ParallaxShowcase />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} AURIS Performance. All rights reserved.</span>
          <a href="#top" className="text-zinc-300 hover:text-white transition">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
