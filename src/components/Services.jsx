import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Bot, Waveform, Code2, Rocket } from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'Automations',
    desc: 'End-to-end AI automation to streamline and scale operations.',
    accent: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Bot,
    title: 'Chatbots',
    desc: 'AI chat systems for support, sales, and engagement.',
    accent: 'from-fuchsia-500 to-cyan-400'
  },
  {
    icon: Waveform,
    title: 'Voice Bots',
    desc: 'AI calling assistants for bookings, reminders, and IVR.',
    accent: 'from-violet-500 to-fuchsia-500'
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Custom websites, apps, and digital platforms.',
    accent: 'from-blue-500 to-violet-500'
  },
  {
    icon: Rocket,
    title: 'Marketing Agency',
    desc: 'SEO, ads, funnels, and brand growth campaigns.',
    accent: 'from-cyan-400 to-emerald-400'
  }
]

function ServiceCard({ icon: Icon, title, desc, accent }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative h-full rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`} />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-cyan-100/70">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">Our Capabilities</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Services engineered for growth</h2>
          <p className="mt-3 text-cyan-100/70">From automated workflows to AI-powered experiences, we build systems that perform at scale.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
