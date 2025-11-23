import React, { useState } from 'react'

const Equipment = () => {
  const [activeTab, setActiveTab] = useState('lights')

  const lightsImages = [
    { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600', title: 'Stage Beams', desc: 'High intensity LED' },
    { url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600', title: 'Mood Lighting', desc: 'Ambient control' },
    { url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600', title: 'Spotlights', desc: 'Focus tracking' },
    { url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600', title: 'Laser Arrays', desc: 'Dynamic effects' },
    { url: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600', title: 'Neon Strips', desc: 'Cyberpunk aesthetic' },
    { url: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600', title: 'Strobes', desc: 'High frequency' },
  ]

  const soundsImages = [
    { url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600', title: 'Line Arrays', desc: 'Crystal clear audio' },
    { url: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600', title: 'Mixing Consoles', desc: 'Digital control' },
    { url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600', title: 'Microphones', desc: 'Vocal precision' },
    { url: 'https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=600', title: 'Monitors', desc: 'Stage feedback' },
    { url: 'https://images.unsplash.com/photo-1482442120256-9c03866de390?w=600', title: 'Amplifiers', desc: 'Raw power' },
    { url: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600', title: 'Guitars', desc: 'Electric soul' },
  ]

  const currentItems = activeTab === 'lights' ? lightsImages : soundsImages

  return (
    <section id="equipment" className="relative bg-[#0a0a0a] py-12 md:py-24 overflow-hidden">
      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-60 md:w-96 h-60 md:h-96 bg-red-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-60 md:w-96 h-60 md:h-96 bg-orange-600/10 rounded-full blur-[128px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-orange-500/25 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {[...Array(16)].map((_, i) => (
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
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-xl">
            <h4 className="text-red-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Our Gear</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              World Class <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Production.</span>
            </h2>
          </div>
          
          {/* Modern Toggle Switch */}
          <div className="bg-white/5 backdrop-blur-lg p-1 md:p-1.5 rounded-full border border-white/10 flex w-full md:w-auto">
            <button
              onClick={() => setActiveTab('lights')}
              className={`flex-1 md:flex-none px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeTab === 'lights' 
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              LIGHTS
            </button>
            <button
              onClick={() => setActiveTab('sounds')}
              className={`flex-1 md:flex-none px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeTab === 'sounds' 
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              SOUNDS
            </button>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 md:h-80 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-gray-900"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>
              
              {/* Hover Reveal Content */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-10 md:w-12 h-1 bg-red-600 mb-3 md:mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.desc}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
          ))}
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

export default Equipment

