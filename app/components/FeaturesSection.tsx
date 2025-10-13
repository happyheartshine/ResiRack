'use client'

import { useEffect, useRef, useState } from 'react'
import { Shield, Zap, Globe, MessageCircle } from 'lucide-react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const featuresRef = useRef<HTMLDivElement>(null)

  // Rive animations for each feature
  const { rive: latencyRive, RiveComponent: LatencyRive } = useRive({
    src: '/animations/latency-animation.riv',
    stateMachines: 'LatencyAnimation',
    autoplay: false,
  })

  const { rive: countryRive, RiveComponent: CountryRive } = useRive({
    src: '/animations/country-animation.riv',
    stateMachines: 'CountryAnimation',
    autoplay: false,
  })

  const { rive: iconRive, RiveComponent: IconRive } = useRive({
    src: '/animations/icon-animation.riv',
    stateMachines: 'IconAnimation',
    autoplay: false,
  })

  // Animation inputs
  const latencyInput = useStateMachineInput(latencyRive, 'LatencyAnimation', 'play')
  const countryInput = useStateMachineInput(countryRive, 'CountryAnimation', 'play')
  const iconInput = useStateMachineInput(iconRive, 'IconAnimation', 'play')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleFeatures(prev => [...prev, index])
            
            // Trigger specific Rive animations based on feature
            setTimeout(() => {
              if (index === 1 && latencyInput) latencyInput.value = true
              if (index === 2 && countryInput) countryInput.value = true
              if (index === 0 && iconInput) iconInput.value = true
            }, index * 200)
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
  }, [latencyInput, countryInput, iconInput])
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First.",
      description: "Hide your IP and browse safely without leaving a trace.",
      visual: (
        <div className="flex items-center justify-center relative">
          <img src="resirack.png" alt="Resirack" className="w-60 h-60 object-contain" />
          <div className="absolute inset-0">
            <IconRive className="w-full h-full" />
          </div>
        </div>
      )
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "speed.",
      description: "Experience lightning-fast connections with minimal latency for smooth, delay-free tasks.",
      visual: (
        <div className="flex items-center justify-center relative">
          <img src="/latency.png" alt="Latency" className="w-60 h-60 object-contain" />
          <div className="absolute inset-0">
            <LatencyRive className="w-full h-full" />
          </div>
        </div>
      )
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Access.",
      description: "Reach websites anywhere in the world, no matter where you are.",
      visual: (
        <div className="flex items-center justify-center relative">
          <img src="/country.png" alt="Country" className="w-60 h-60 object-contain" />
          <div className="absolute inset-0">
            <CountryRive className="w-full h-full" />
          </div>
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
