import React, { useState } from 'react'
// Import local event images
import equipImage1 from '../assets/images/583048166_1153531953160512_6880170682527200680_n.jpg'
import equipImage2 from '../assets/images/582695076_2617630148602354_3722048634573263992_n.jpg'
import equipImage3 from '../assets/images/582001913_721984314254455_3555283768912345584_n.jpg'
import equipImage4 from '../assets/images/582084898_1176150047228203_5657782980348705638_n.jpg'
import equipImage5 from '../assets/images/582283967_1940908839824359_3512379180942013471_n.jpg'
import equipImage6 from '../assets/images/582290225_1933940290527507_7135578705968404593_n.jpg'
import equipImage7 from '../assets/images/582045107_810687021999435_6019288298365366748_n.jpg'
import equipImage8 from '../assets/images/582272070_2620479911655700_52137253618084341_n.jpg'
import equipImage9 from '../assets/images/582288603_2038509166928298_4158169005903112811_n.jpg'
import equipImage10 from '../assets/images/582706413_2443418052790632_71835046533602200_n.jpg'

const Equipment = () => {
  const [activeTab, setActiveTab] = useState('lights')

  const lightsImages = [
    { url: equipImage1, title: 'Stage Beams', desc: 'High intensity LED' },
    { url: equipImage2, title: 'Mood Lighting', desc: 'Ambient control' },
    { url: equipImage3, title: 'Spotlights', desc: 'Focus tracking' },
    { url: equipImage4, title: 'Laser Arrays', desc: 'Dynamic effects' },
    { url: equipImage5, title: 'Neon Strips', desc: 'Cyberpunk aesthetic' },
    { url: equipImage6, title: 'Strobes', desc: 'High frequency' },
  ]

  const soundsImages = [
    { url: equipImage7, title: 'Line Arrays', desc: 'Crystal clear audio' },
    { url: equipImage8, title: 'Mixing Consoles', desc: 'Digital control' },
    { url: equipImage9, title: 'Microphones', desc: 'Vocal precision' },
    { url: equipImage10, title: 'Monitors', desc: 'Stage feedback' },
    { url: equipImage1, title: 'Amplifiers', desc: 'Raw power' },
    { url: equipImage2, title: 'Guitars', desc: 'Electric soul' },
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

