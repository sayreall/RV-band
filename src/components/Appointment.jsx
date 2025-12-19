import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
// Import local event images
import eventImage1 from '../assets/images/583048166_1153531953160512_6880170682527200680_n.jpg'
import eventImage2 from '../assets/images/582695076_2617630148602354_3722048634573263992_n.jpg'
import eventImage3 from '../assets/images/582001913_721984314254455_3555283768912345584_n.jpg'
import eventImage4 from '../assets/images/582084898_1176150047228203_5657782980348705638_n.jpg'
import eventImage5 from '../assets/images/582283967_1940908839824359_3512379180942013471_n.jpg'
import eventImage6 from '../assets/images/582290225_1933940290527507_7135578705968404593_n.jpg'
import eventImage7 from '../assets/images/582045107_810687021999435_6019288298365366748_n.jpg'
import eventImage8 from '../assets/images/582272070_2620479911655700_52137253618084341_n.jpg'
import eventImage9 from '../assets/images/582288603_2038509166928298_4158169005903112811_n.jpg'
import eventImage10 from '../assets/images/582706413_2443418052790632_71835046533602200_n.jpg'

const Appointment = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    location: '',
    guests: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Successful event images - automatic transition using local images
  const eventImages = [
    { 
      id: 0, 
      image: eventImage1,
      title: 'Our Successful Event'
    },
    { 
      id: 1, 
      image: eventImage2,
      title: 'Professional Production'
    },
    { 
      id: 2, 
      image: eventImage3,
      title: 'Memorable Celebration'
    },
    { 
      id: 3, 
      image: eventImage4,
      title: 'Excellence in Sound & Light'
    },
    { 
      id: 4, 
      image: eventImage5,
      title: 'World Class Event'
    },
    { 
      id: 5, 
      image: eventImage6,
      title: 'Unforgettable Experience'
    },
    { 
      id: 6, 
      image: eventImage7,
      title: 'Premium Production'
    },
    { 
      id: 7, 
      image: eventImage8,
      title: 'Stunning Performance'
    },
    { 
      id: 8, 
      image: eventImage9,
      title: 'Professional Setup'
    },
    { 
      id: 9, 
      image: eventImage10,
      title: 'Top Quality Service'
    },
  ]

  // Auto-advance slides with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventImages.length)
    }, 4000) // Change image every 4 seconds
    return () => clearInterval(interval)
  }, [eventImages.length])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Get EmailJS configuration from environment variables
      // Create a .env file in the root directory with:
      // VITE_EMAILJS_PUBLIC_KEY=your_public_key
      // VITE_EMAILJS_SERVICE_ID=your_service_id
      // VITE_EMAILJS_TEMPLATE_ID=your_template_id
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'psL0QBsMhnV-Oz7Ee'
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_fv0necg'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_02mt8pg'
      const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL || 'rvlightsandsounds@gmail.com'

      // Initialize EmailJS with your public key
      emailjs.init(publicKey)

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          event_type: formData.eventType,
          event_date: formData.eventDate,
          event_time: formData.eventTime,
          location: formData.location,
          guests: formData.guests,
          message: formData.message,
          to_email: recipientEmail
        }
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          eventTime: '',
          location: '',
          guests: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="appointment" className="relative bg-[#0a0a0a] py-12 md:py-20 overflow-hidden font-['Poppins']">
      
      {/* Top Fade from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
      
      {/* Bottom Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

      {/* Red Glow Effects */}
      <div className="absolute top-20 left-10 md:left-20 w-48 md:w-64 h-48 md:h-64 bg-red-600/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 md:right-20 w-60 md:w-80 h-60 md:h-80 bg-red-900/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-orange-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

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
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-4">
            <span className="text-white">Book</span>{' '}
            <span className="text-red-600">Appointment</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Fill out the form below to schedule your event. We'll get back to you as soon as possible.
          </p>
        </div>

        {/* Two Column Layout: Image Carousel (Left) and Form (Right) */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Side: Automatic Image Transition */}
          <div className="relative order-2 lg:order-1">
            {/* Red Glow Behind Images */}
            <div className="absolute inset-0 bg-red-600/20 rounded-3xl blur-2xl transform scale-105"></div>
            
            <div className="relative">
              {/* Image Container with Automatic Transition */}
              <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-3xl overflow-hidden">
                {eventImages.map((event, index) => (
                  <div
                    key={event.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Event Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="bg-gradient-to-r from-red-800/90 to-red-600/90 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                        <p className="text-white text-sm md:text-base font-semibold">
                          {event.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Subtle Red Glow Border */}
                <div className="absolute inset-0 ring-2 md:ring-4 ring-red-600/50 rounded-2xl md:rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Container */}
          <div className="relative order-1 lg:order-2">
            {/* Red Glow Behind Form */}
            <div className="absolute inset-0 bg-red-600/10 rounded-3xl blur-2xl transform scale-105"></div>
            
            {/* Form Card */}
            <div className="relative bg-gradient-to-br from-gray-900/90 via-[#1a1a1a]/90 to-gray-900/90 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-300 text-sm md:text-base">
                ✓ Appointment request sent successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-sm md:text-base">
                ✗ Failed to send appointment request. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Event Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all"
                    placeholder="+63 986 458 4684"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-gray-300 text-sm font-medium mb-2">
                    Event Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all"
                  >
                    <option value="">Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Concert">Concert</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Festival">Festival</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-gray-300 text-sm font-medium mb-2">
                    Event Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="eventTime" className="block text-gray-300 text-sm font-medium mb-2">
                    Event Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all"
                  />
                </div>
              </div>

              {/* Location and Guests Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-gray-300 text-sm font-medium mb-2">
                    Event Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all"
                    placeholder="Event venue address"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-gray-300 text-sm font-medium mb-2">
                    Expected Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all"
                    placeholder="Number of guests"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all resize-none"
                  placeholder="Tell us more about your event requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Book Appointment'}
                </button>
              </div>

            </form>
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

export default Appointment

