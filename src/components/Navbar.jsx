import React from 'react'
import { Rocket, ShoppingCart, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header id="top" className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="absolute inset-0 blur-md bg-gradient-to-tr from-cyan-400 to-fuchsia-500 opacity-60 group-hover:opacity-90 transition" />
            <Rocket className="relative z-10 h-6 w-6 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-white">AURIS</span>
          <span className="ml-1 text-xs px-2 py-0.5 rounded-full border border-white/10 text-zinc-300">LAB</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-zinc-300 hover:text-white transition">Technology</a>
          <a href="#showcase" className="text-zinc-300 hover:text-white transition">Showcase</a>
          <a href="#buy" className="text-zinc-300 hover:text-white transition">Buy</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-4 py-2 text-sm text-white hover:bg-neutral-800/60 transition">
            <ShoppingCart className="h-4 w-4" />
            Preorder
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 bg-neutral-900/60 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
