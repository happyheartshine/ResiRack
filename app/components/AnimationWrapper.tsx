'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimationWrapperProps {
  children: React.ReactNode
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'float'
  delay?: number
  threshold?: number
  className?: string
}

const AnimationWrapper = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  threshold = 0.1,
  className = ''
}: AnimationWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0'
    
    switch (animation) {
      case 'fadeInUp':
        return 'animate-fadeInUp'
      case 'slideInLeft':
        return 'animate-slideInLeft'
      case 'slideInRight':
        return 'animate-slideInRight'
      case 'scaleIn':
        return 'animate-scaleIn'
      case 'float':
        return 'animate-float'
      default:
        return 'animate-fadeInUp'
    }
  }

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}

export default AnimationWrapper
