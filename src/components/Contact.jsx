import React, { useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          source: 'website',
        }),
      })
      if (!res.ok) throw new Error('Failed to submit. Please try again.')
      const data = await res.json()
      if (data?.status === 'ok') {
        setStatus('Thanks! Your message has been received. We will reach out shortly.')
        setForm({ name: '', email: '', message: '' })
      } else {
        throw new Error('Unexpected response. Please try again.')
      }
    } catch (err) {
      setStatus(err.message || 'Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">Let’s Automate Your Business</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Get a Free Strategy Call</h2>
          <p className="mt-3 text-cyan-100/70">Tell us about your goals. We’ll craft a custom AI roadmap.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-cyan-200">Name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-white placeholder:text-cyan-200/50 outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-cyan-200">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-white placeholder:text-cyan-200/50 outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="jane@company.com"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm text-cyan-200">What do you want to build?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-white placeholder:text-cyan-200/50 outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-cyan-200/70">No spam. We’ll get back within 24 hours.</p>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="rounded-lg bg-cyan-400 px-5 py-2.5 font-semibold text-slate-900 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.7)] hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Sending…' : 'Request Call'}
            </motion.button>
          </div>
          {status && <p className="mt-4 text-center text-cyan-200">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}
