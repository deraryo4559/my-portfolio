import { ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in'
  delay?: number
  className?: string
}

const AnimatedSection = ({
  children,
  animation = 'fade-in',
  delay = 0,
  className = '',
}: AnimatedSectionProps) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    'scale-in': 'animate-scale-in',
  }

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${hasIntersected ? animationClasses[animation] : 'opacity-0'} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection

