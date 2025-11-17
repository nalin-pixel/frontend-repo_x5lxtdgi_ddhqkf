import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Support Chatbot',
    tags: ['Chatbots', 'Automation', 'NLP'],
  },
  {
    title: 'Voice Booking Agent',
    tags: ['Voice Bots', 'Telephony', 'IVR'],
  },
  {
    title: 'E-commerce Rebuild',
    tags: ['Web Dev', 'Next.js', 'Performance'],
  },
  {
    title: 'Lead Gen Funnels',
    tags: ['Marketing', 'CRO', 'Analytics'],
  },
]

function ProjectCard({ title, tags }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-blue-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="aspect-video w-full rounded-xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(56,189,248,0.2),rgba(124,58,237,0.1))] ring-1 ring-white/10" />
        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-2 py-1 text-xs text-cyan-100/80">{t}</span>
          ))}
        </div>
        <button className="mt-4 rounded-lg border border-cyan-400/30 px-3 py-1.5 text-sm text-cyan-200 hover:border-cyan-300/80">View Case Study</button>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-slate-950 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">Selected Work</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">A showcase of intelligent systems</h2>
          <p className="mt-3 text-cyan-100/70">Hover to preview. Each project includes a mini case study highlighting outcomes.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
