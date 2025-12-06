import { useEffect, useState } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver'

interface UseCountUpOptions {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export const useCountUp = ({ end, duration = 2000, suffix = '', prefix = '' }: UseCountUpOptions) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({ threshold: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!hasIntersected) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [hasIntersected, end, duration])

  return { elementRef, count: `${prefix}${count}${suffix}` }
}

