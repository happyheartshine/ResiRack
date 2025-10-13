'use client'

import { useEffect, useRef, useState } from 'react'
import { Shield, Zap, Globe, MessageCircle } from 'lucide-react'

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleFeatures(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    if (featuresRef.current) {
      const featureCards = featuresRef.current.querySelectorAll('.feature-card')
      featureCards.forEach(card => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First.",
      description: "Hide your IP and browse safely without leaving a trace.",
      visual: (
        <div className="flex items-center justify-center relative group">
          <img src="/resirack.png" alt="Resirack" className="w-60 h-60 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 animate-float" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-blue-400/10 rounded-lg animate-pulse"></div>
        </div>
      )
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "speed.",
      description: "Experience lightning-fast connections with minimal latency for smooth, delay-free tasks.",
      visual: (
        <div className="flex items-center justify-center relative group">
          <img src="/latency.png" alt="Latency" className="w-60 h-60 object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 animate-float" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-green-400/10 rounded-lg animate-pulse"></div>
        </div>
      )
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Access.",
      description: "Reach websites anywhere in the world, no matter where you are.",
      visual: (
        <div className="flex items-center justify-center relative group">
          <img src="/country.png" alt="Country" className="w-60 h-60 object-contain transition-all duration-500 group-hover:scale-110 group-hover:contrast-110 animate-float" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-orange-400/10 rounded-lg animate-pulse"></div>
        </div>
      )
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "247 Support.",
      description: "Our team is here around the clock to help you with any issue, big or small.",
      visual: (
        <div className="w-full max-w-xs w-60 h-60 pt-20">
          <div className="bg-white border border-blue-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <input
              type="text"
              placeholder="How do I set up my proxies?"
              className="w-full text-gray-800 placeholder-gray-800 focus:outline-none"
              readOnly
            />
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="features" className="py-60 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for security, speed, and to scale
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our solutions are designed to grow with your business, protect your data, and deliver lightning-fast performance across every device
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                visibleFeatures.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Visual */}
              <div className="mb-6 flex justify-center">
                {feature.visual}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
