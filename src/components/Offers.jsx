import React, { useState } from 'react'

const Offers = () => {
  const [currentIndex, setCurrentIndex] = useState(1)

  const offers = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
      text: 'Lights that inspire.',
      text2: 'Sound that moves.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
      text: 'Lights that inspire.',
      text2: 'Sound that moves.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
      text: 'Lights that inspire.',
      text2: 'Sound that moves.'
    }
  ]

  const nextOffer = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length)
  }

  const prevOffer = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length)
  }

  return (
    <section id="offers" className="relative bg-[#0a0a0a] py-12 md:py-20 overflow-hidden font-['Poppins']">
      
      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

      {/* Red gradient effects */}
      <div className="absolute top-20 left-10 md:left-20 w-60 md:w-96 h-60 md:h-96 bg-red-900/30 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 md:right-20 w-60 md:w-96 h-60 md:h-96 bg-red-800/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-red-500/25 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {[...Array(18)].map((_, i) => (
          <div
            key={`twinkle-${i}`}
            className="absolute w-1 h-1 bg-white/35 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle 3s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 md:mb-16">Offers</h2>

        {/* Offers Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
            
            {/* Previous Button */}
            <button
              onClick={prevOffer}
              className="text-white/70 hover:text-white transition-colors flex-shrink-0"
            >
              <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Offer Cards */}
            <div className="flex gap-2 sm:gap-4 md:gap-8 justify-center items-center overflow-hidden">
              {offers.map((offer, index) => {
                const isActive = index === currentIndex
                const isLeft = index === (currentIndex - 1 + offers.length) % offers.length
                const isRight = index === (currentIndex + 1) % offers.length

                return (
                  <div
                    key={offer.id}
                    className={`transition-all duration-500 ${
                      isActive 
                        ? 'scale-100 opacity-100' 
                        : (isLeft || isRight)
                        ? 'scale-75 md:scale-90 opacity-60 md:opacity-80 hidden sm:block'
                        : 'scale-75 opacity-0 hidden'
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-b from-gray-900/80 to-gray-950/90 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
                        isActive 
                          ? 'border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.5)]' 
                          : 'border-gray-800/50'
                      }`}
                      style={{ width: '280px', maxWidth: '90vw' }}
                    >
                      {/* Image with rounded corners inside */}
                      <div className="p-3 md:p-4">
                        <div className="rounded-xl md:rounded-2xl overflow-hidden">
                          <img
                            src={offer.image}
                            alt={offer.text}
                            className="w-full h-48 sm:h-56 md:h-64 object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="px-4 md:px-6 pb-4 md:pb-6">
                        <p className="text-white text-base md:text-xl font-medium mb-0.5 md:mb-1">{offer.text}</p>
                        <p className="text-white text-base md:text-xl font-medium mb-4 md:mb-6">{offer.text2}</p>
                        <button className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-2.5 md:py-3.5 rounded-full text-sm md:text-base font-semibold transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-105 duration-300">
                          Book Us
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={nextOffer}
              className="text-white/70 hover:text-white transition-colors flex-shrink-0"
            >
              <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-red-600 w-6 md:w-8' : 'bg-gray-600 w-1.5 md:w-2 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 0.8; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </section>
  )
}

export default Offers

