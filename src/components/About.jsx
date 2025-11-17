import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mx-auto h-48 w-48 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#06b6d4_0deg,#a855f7_120deg,#60a5fa_240deg,#06b6d4_360deg)] p-[2px]">
              <div className="h-full w-full rounded-full bg-slate-900/80" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">About Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">We engineer outcomes, not just deliverables</h2>
            <p className="mt-4 text-cyan-100/80">We are a team of builders obsessed with performance and automation. Our mission is to create systems that let you grow faster with fewer resources.</p>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-cyan-100/80">
              <li className="rounded-xl border border-white/10 bg-slate-900/60 p-4">• Strategy-first approach</li>
              <li className="rounded-xl border border-white/10 bg-slate-900/60 p-4">• AI-native architecture</li>
              <li className="rounded-xl border border-white/10 bg-slate-900/60 p-4">• Performance & reliability</li>
              <li className="rounded-xl border border-white/10 bg-slate-900/60 p-4">• Transparent communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
