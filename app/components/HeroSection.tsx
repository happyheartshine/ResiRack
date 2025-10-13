'use client'

import { useEffect, useRef, useState } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Rive animation for the main image
  const { rive, RiveComponent } = useRive({
    src: '/animations/hero-animation.riv', // We'll create this
    stateMachines: 'HeroAnimation',
    autoplay: true,
  })

  // Animation inputs
  const fadeInInput = useStateMachineInput(rive, 'HeroAnimation', 'fadeIn')
  const slideInInput = useStateMachineInput(rive, 'HeroAnimation', 'slideIn')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Trigger Rive animations
          if (fadeInInput) fadeInInput.value = true
          if (slideInInput) slideInInput.value = true
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [fadeInInput, slideInInput])
  return (
    <section ref={heroRef} className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline - Animated */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Speed That Never Gets Blocked
        </h1>

        {/* Sub-text - Animated */}
        <p className={`text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Grow without limits. Our proxy network ensures uninterrupted scaling while protecting you from bans and restrictions.
        </p>

        {/* CTA Buttons - Animated */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Get started now
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Learn more
          </button>
        </div>

        {/* Main Image - Rive Animated */}
        <div className={`relative flex justify-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="relative">
            {/* Fallback image for when Rive animation isn't available */}
            <img 
              src="/main1.png" 
              alt="ResiRack Server Illustration" 
              className="w-auto h-auto max-w-full max-h-96 object-contain"
            />
            {/* Rive Animation Overlay */}
            <div className="absolute inset-0">
              <RiveComponent 
                className="w-full h-full"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
