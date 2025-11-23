import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative bg-[#0a0a0a] py-12 md:py-20 overflow-hidden font-['Poppins']">
      
      {/* Top Fade from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
      
      {/* Bottom Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

      {/* Red Glow Effect - Top Left */}
      <div className="absolute top-20 left-10 md:left-20 w-48 md:w-64 h-48 md:h-64 bg-red-600/40 rounded-full blur-[120px] animate-pulse"></div>
      
      {/* Red Glow Effect - Bottom Right */}
      <div className="absolute bottom-20 right-10 md:right-20 w-60 md:w-80 h-60 md:h-80 bg-red-900/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-red-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={`twinkle-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle 3s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none">
              <span className="text-white">About</span>{' '}
              <span className="text-red-600">Us</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              <p>
                At RV Lights and Sounds, we're passionate about making events unforgettable.
              </p>
              <p>
                Founded by experienced professionals in lighting and audio production, our mission is to bring creativity, reliability, and cutting-edge technology to every project.
              </p>
              <p>
                Our team handles concerts, weddings, corporate functions, and private gatherings of all sizes, providing tailored solutions for each client's unique vision. With expert planning and seamless execution, we deliver clear sound, vibrant lights, and lasting impact—every time.
              </p>
              <p>
                Let us help you create memories with the perfect blend of lights and sound.
              </p>
            </div>
          </div>

          {/* Right Side - Image with Glow */}
          <div className="relative mt-8 lg:mt-0">
            {/* Red Glow Behind Image */}
            <div className="absolute inset-0 bg-red-600/20 rounded-3xl blur-2xl transform scale-105"></div>
            
            {/* Image Container */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] md:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800"
                alt="Concert event with red lights"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
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

export default About

