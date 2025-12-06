import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ScrollProgress = () => {
  const { scrollProgress } = useScrollAnimation()

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress * 100}%`,
        }}
      />
    </div>
  )
}

export default ScrollProgress

