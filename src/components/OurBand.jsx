import React from 'react'
// Import local event images
import bandPhoto1 from '../assets/images/582001913_721984314254455_3555283768912345584_n.jpg'
import bandPhoto2 from '../assets/images/582288603_2038509166928298_4158169005903112811_n.jpg'
import bandPhoto3 from '../assets/images/582290225_1933940290527507_7135578705968404593_n.jpg'
import bandPhoto4 from '../assets/images/582045107_810687021999435_6019288298365366748_n.jpg'
import memberImage1 from '../assets/images/582272070_2620479911655700_52137253618084341_n.jpg'
import memberImage2 from '../assets/images/582695076_2617630148602354_3722048634573263992_n.jpg'
import memberImage3 from '../assets/images/583048166_1153531953160512_6880170682527200680_n.jpg'
import memberImage4 from '../assets/images/582283967_1940908839824359_3512379180942013471_n.jpg'
import memberImage5 from '../assets/images/582706413_2443418052790632_71835046533602200_n.jpg'
import memberImage6 from '../assets/images/582084898_1176150047228203_5657782980348705638_n.jpg'
import memberImage7 from '../assets/images/582084898_1176150047228203_5657782980348705638_n.jpg'

const OurBand = () => {
  const bandPhotos = [
    bandPhoto1,
    bandPhoto2,
    bandPhoto3,
    bandPhoto4,
  ]

  const members = [
    { name: 'Richard Villafor', role: 'Drummer', image: memberImage1 },
    { name: 'Joyce Ann Remolin', role: 'Female Vocalist', image: memberImage2 },
    { name: 'Richard De Jesus ', role: 'Male Vocalist', image: memberImage3 },
    { name: 'Maycee San Miguel', role: 'Female Vocalist', image: memberImage4 },
    { name: 'Ryniel Santos', role: 'Keyboard', image: memberImage5 },
    { name: 'Eleazar Sapin', role: 'Lead Guitarist', image: memberImage6 },
    { name: 'Glenn Grabrido', role: 'Bass Guitarist', image: memberImage7 }
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

