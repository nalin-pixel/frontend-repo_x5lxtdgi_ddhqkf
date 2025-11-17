import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="container mx-auto px-6 py-10 text-center text-cyan-200/70">
          © {new Date().getFullYear()} Neon Labs — Futuristic systems for modern brands
        </div>
      </footer>
    </div>
  )
}

export default App
