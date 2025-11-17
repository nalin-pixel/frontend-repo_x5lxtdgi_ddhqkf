import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient overlay for mood */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_40%,rgba(56,189,248,0.15),transparent_60%)]" />

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/30 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_theme(colors.cyan.400)]" />
              <span className="text-xs tracking-wider text-cyan-200/80">Futuristic • Premium • AI-Driven</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(8,145,178,0.25)]">
              We Build AI-Powered Digital Systems That Scale Your Business
            </h1>

            <p className="mt-4 text-base md:text-lg text-cyan-100/80 max-w-2xl">
              Automations • Chatbots • Voice Bots • Web Development • Marketing
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.7)] transition hover:bg-cyan-300"
              >
                Get a Free Strategy Call
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-slate-900/60 px-6 py-3 font-semibold text-cyan-200 backdrop-blur-md hover:border-cyan-300/60"
              >
                See Our Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom gradient edge */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
