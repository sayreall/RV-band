import React, { useState } from 'react'
// Import local event images
import heroImage1 from '../assets/images/583048166_1153531953160512_6880170682527200680_n.jpg'
import heroImage2 from '../assets/images/582695076_2617630148602354_3722048634573263992_n.jpg'
import heroImage3 from '../assets/images/582283967_1940908839824359_3512379180942013471_n.jpg'
import heroImage4 from '../assets/images/582706413_2443418052790632_71835046533602200_n.jpg'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  const slides = [
    { id: 0, image: heroImage1 },
    { id: 1, image: heroImage2 },
    { id: 2, image: heroImage3 },
    { id: 3, image: heroImage4 },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-['Poppins'] px-4">
      
      {/* Dark Gradient Background with Red Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a] via-[#2d1515] to-[#0a0a0a]">
        <div className="absolute top-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-900/40 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-red-800/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-orange-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-red-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute w-1.5 h-1.5 bg-orange-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-3 h-3 bg-red-400/20 rounded-full blur-sm animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom Fade to Black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

      {/* Red Badge at Top */}
      <div className="relative z-10 mb-8 md:mb-12 mt-24 md:mt-32">
        <div className="bg-gradient-to-r from-red-800 to-red-600 text-white px-6 md:px-10 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] shadow-[0_0_30px_rgba(220,38,38,0.5)]">
          RV LIGHTS AND SOUNDS
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight">
          We set the stage for unforgettable experiences
        </h1>
        
        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
          We specialize in professional lighting design, crystal-clear audio setup, and dynamic effects that transform ordinary spaces into extraordinary experiences.
        </p>

        {/* Image Carousel */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-8 mb-8 md:mb-12">
          
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="text-white/70 hover:text-white transition-colors z-30 flex-shrink-0"
          >
            <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container - Responsive */}
          <div className="relative flex items-center justify-center w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[1000px]" style={{ height: '300px', minHeight: '300px' }}>
            {slides.map((slide, index) => {
              const position = (index - currentSlide + slides.length) % slides.length
              const isActive = position === 0
              const isLeft = position === slides.length - 1
              const isRight = position === 1

              return (
                <div
                  key={slide.id}
                  className={`absolute transition-all duration-700 ease-out ${
                    isActive
                      ? 'z-20 scale-100 rotate-0 opacity-100'
                      : isLeft
                      ? 'z-10 scale-75 md:scale-90 -rotate-6 md:-rotate-12 -translate-x-32 md:-translate-x-64 opacity-60 md:opacity-80 hidden sm:block'
                      : isRight
                      ? 'z-10 scale-75 md:scale-90 rotate-6 md:rotate-12 translate-x-32 md:translate-x-64 opacity-60 md:opacity-80 hidden sm:block'
                      : 'scale-50 opacity-0 hidden'
                  }`}
                  style={{
                    transformOrigin: 'center center',
                  }}
                >
                  <div
                    className={`relative rounded-2xl md:rounded-3xl overflow-hidden ${
                      isActive 
                        ? 'ring-2 md:ring-4 ring-red-600 shadow-[0_0_30px_rgba(220,38,38,0.7)] md:shadow-[0_0_60px_rgba(220,38,38,0.7)]' 
                        : 'ring-1 md:ring-2 ring-white/10'
                    }`}
                    style={{ 
                      width: '200px',
                      height: '280px'
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="text-white/70 hover:text-white transition-colors z-30 flex-shrink-0"
          >
            <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mb-12 md:mb-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-red-600 w-6 md:w-8' : 'bg-white/30 w-1.5 md:w-2 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0.8;
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-150px) translateX(-80px) scale(1.5);
            opacity: 0.5;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-float-slow {
          animation: float-slow ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero

