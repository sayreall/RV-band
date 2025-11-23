import React from 'react'

const OurBand = () => {
  const bandPhotos = [
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
  ]

  const members = [
    { name: 'Marlon Portugal', role: 'Keyboardist', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100' },
    { name: 'Marlon Portugal', role: 'Keyboardist', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100' },
    { name: 'Marlon Portugal', role: 'Keyboardist', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100' },
    { name: 'Marlon Portugal', role: 'Keyboardist', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100' },
    { name: 'Marlon Portugal', role: 'Keyboardist', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100' },
    { name: 'Marlon Portugal', role: 'Keyboardist', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100' },
  ]

  return (
    <section id="our-band" className="relative bg-[#0a0a0a] py-12 md:py-20 overflow-hidden font-['Poppins']">
      
      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

      {/* Red gradient effects */}
      <div className="absolute top-20 left-10 md:left-20 w-60 md:w-96 h-60 md:h-96 bg-red-900/30 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 md:right-20 w-60 md:w-96 h-60 md:h-96 bg-red-800/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.2s' }}></div>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-16 leading-none">
          <span className="text-white">Our</span>{' '}
          <span className="text-red-600">Band</span>
        </h2>

        {/* Band Photos Grid - Matching Screenshot Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          
          {/* Top Row - Two Images */}
          <div className="sm:col-span-2">
            <img
              src={bandPhotos[0]}
              alt="Band performance"
              className="w-full h-48 sm:h-56 md:h-72 object-cover rounded-2xl md:rounded-3xl"
            />
          </div>

          <div>
            <img
              src={bandPhotos[1]}
              alt="Band performance"
              className="w-full h-48 sm:h-56 md:h-72 object-cover rounded-2xl md:rounded-3xl"
            />
          </div>

          {/* Bottom Row - Two Images */}
          <div>
            <img
              src={bandPhotos[2]}
              alt="Band performance"
              className="w-full h-48 sm:h-56 md:h-72 object-cover rounded-2xl md:rounded-3xl"
            />
          </div>

          <div className="sm:col-span-2">
            <img
              src={bandPhotos[3]}
              alt="Band performance"
              className="w-full h-48 sm:h-56 md:h-72 object-cover rounded-2xl md:rounded-3xl"
            />
          </div>
        </div>

        {/* Members Section */}
        <div className="mt-16 md:mt-32">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-8 md:mb-16">
            Members
          </h3>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {members.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-sm border-2 border-red-600/50 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300 cursor-pointer"
              >
                {/* Member Avatar */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-red-600/50 group-hover:border-red-600 transition-all duration-300 flex-shrink-0"
                />
                
                {/* Member Info */}
                <div className="min-w-0">
                  <h4 className="text-white text-base md:text-lg font-bold truncate">{member.name}</h4>
                  <p className="text-gray-400 text-xs md:text-sm">{member.role}</p>
                </div>
              </div>
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

export default OurBand

