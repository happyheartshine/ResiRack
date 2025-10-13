'use client'

import { useEffect, useRef, useState } from 'react'
import { Wifi, Download, Infinity } from 'lucide-react'

const PricingSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const pricingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    if (pricingRef.current) {
      const pricingCards = pricingRef.current.querySelectorAll('.pricing-card')
      pricingCards.forEach(card => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])
  const pricingPlans = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "ISP's",
      description: "High-speed, stable proxies built on ISP infrastructure.",
      price: "$40",
      period: "/mo",
      features: [
        "Lightning fast connections",
        "Reliable uptime",
        "Perfect for data scrapping & automation",
        "Lightning fast connections",
        "Lightning fast connections"
      ],
      buttonText: "Get started",
      buttonStyle: "bg-blue-500 hover:bg-blue-600",
      recommended: false
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Resis per-gb",
      description: "Flexible pay-as-you-go access to real residential IPs.",
      price: "$3",
      period: "/GB",
      features: [
        "Pay only for the bandwidth you use",
        "Global coverage",
        "Ideal for small projects or testing",
        "Ideal for small projects or testing",
        "Ideal for small projects or testing"
      ],
      buttonText: "Get started",
      buttonStyle: "bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600",
      recommended: true
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "Resis unlimited",
      description: "High-speed, stable proxies built on ISP infrastructure.",
      price: "$40",
      period: "/mo",
      features: [
        "No bandwidth limits",
        "Diverse IP pool",
        "Best for scaling large projects",
        "Best for scaling large projects",
        "Best for scaling large projects"
      ],
      buttonText: "Get started",
      buttonStyle: "bg-blue-500 hover:bg-blue-600",
      recommended: false
    }
  ]

  return (
    <section id="pricing" className="py-40 bg-gradient-radial from-white via-gray-600 to-custom-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            No Surprises, Just Value
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing built to give you more speed, security, and reliability for less.
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={pricingRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              data-index={index}
              className={`pricing-card relative bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 hover:scale-105 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-3 right-6">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Recommend
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-blue-400 mb-6 transition-transform duration-300 hover:scale-110">
                {plan.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-lg">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className={`w-full ${plan.buttonStyle} text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
