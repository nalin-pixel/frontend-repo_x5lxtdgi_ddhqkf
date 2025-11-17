import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 backdrop-blur-xl">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-blue-600 shadow-[0_0_24px_rgba(56,189,248,0.5)]" />
            <span className="text-sm font-semibold tracking-wide text-white">Neon Labs</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-cyan-100/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-lg bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white"
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </header>
  )
}
