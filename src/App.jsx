import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Offers from './components/Offers'
import Equipment from './components/Equipment'
import OurBand from './components/OurBand'
import Appointment from './components/Appointment'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Offers />
      <Equipment />
      <OurBand />
      <Appointment />
      <Footer />
    </div>
  )
}

export default App

