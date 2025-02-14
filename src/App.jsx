import React from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/SplineModel'

export default function App() {
  return (
    <div>
      {/* <Home /> */}
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      {/*   <Experience /> */}
      <Contact />
      <Footer />
    </div>
  )
}
