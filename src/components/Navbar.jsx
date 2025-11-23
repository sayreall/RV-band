import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 font-['Poppins'] ${
      scrolled ? 'bg-gray-150/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Offers', href: '#offers' },
            { name: 'Equipment', href: '#equipment' },
            { name: 'Our Band', href: '#our-band' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Center: Logo - Made Larger */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img 
            src={logo}
            alt="RV Lights and Sounds Logo" 
            className="h-20 md:h-36 w-auto object-contain brightness-150"
          />
        </div>

        {/* Right: Book Us Button */}
        <button className="hidden lg:block bg-gradient-to-r from-red-700 to-red-600 text-white px-8 py-2.5 rounded-full text-sm font-semibold hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300">
          Book Us
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <nav className="bg-gray-900/95 backdrop-blur-lg px-6 py-4 space-y-4">
          {['Home', 'About', 'Offers', 'Equipment', 'Our Band'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block text-gray-300 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full text-sm font-semibold">
            Book Us
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header