import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-[#2a2a2a] to-[#1a1a1a] overflow-hidden font-['Poppins']">
      
      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>

      {/* Red gradient effects */}
      <div className="absolute top-0 left-0 w-60 md:w-96 h-60 md:h-96 bg-red-900/40 rounded-full blur-[150px]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-red-900/50 via-red-950/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-20">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* Logo Section - 3 columns */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="mb-4">
              <img 
                src={logo}
                alt="RV Lights & Sounds" 
                className="h-40 sm:h-48 md:h-60 w-auto"
              />
            </div>
          </div>

          {/* Navigation - 2 columns */}
          <div className="lg:col-span-2">
            <nav className="space-y-2 md:space-y-3 text-center lg:text-left">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">Home</a>
              <a href="#about" className="block text-red-500 hover:text-red-400 transition-colors text-sm md:text-base font-medium">About</a>
              <a href="#offers" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">Offers</a>
              <a href="#equipment" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">Equipment</a>
              <a href="#our-band" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">Our Band</a>
            </nav>
          </div>

          {/* About Us - 4 columns */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4">About Us</h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Founded by experienced professionals in lighting and audio production, our mission is to bring creativity, reliability, and cutting-edge technology to every project.
            </p>
          </div>

          {/* Contact Information - 3 columns */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div>
                <p className="text-gray-400 text-xs md:text-sm mb-1">Call:</p>
                <a href="tel:+639864584684" className="text-white hover:text-red-400 transition-colors text-sm md:text-base">
                  +63 986 458 4684
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs md:text-sm mb-1">Email:</p>
                <a href="mailto:RV@gmail.com" className="text-white hover:text-red-400 transition-colors text-sm md:text-base">
                  RV@gmail.com
                </a>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-105 duration-300">
              Book Us
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 md:mt-12 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.5!2d121.0!3d14.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMwJzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[250px] md:h-[350px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 RV Lights and Sounds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

