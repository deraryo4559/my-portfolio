import { useState, useEffect } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import SnowEffect from './SnowEffect'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10 pointer-events-none"></div>

      {/* Snow Effect (Three.js) */}
      <SnowEffect />

      {/* Floating Orbs - Mouse Follow Effect (Subtle) */}
      <div 
        className="absolute w-96 h-96 bg-primary-600 rounded-full opacity-20 blur-3xl transition-all duration-700 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
      <div 
        className="absolute w-72 h-72 bg-primary-500 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${100 - mousePosition.x}%`,
          top: `${100 - mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

      <div className="section-container relative z-20 text-center perspective-3d">
        <div className={`transform-3d transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transform-3d drop-shadow-lg">
            <span className="block animate-slide-up animation-delay-200">
              こんにちは、私は
            </span>
            <span className="block text-primary-200 mt-2 animate-slide-up animation-delay-400 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-primary-300">
              フルスタック開発者
            </span>
            <span className="block animate-slide-up animation-delay-600">
              です
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-2xl mx-auto animate-fade-in animation-delay-800 drop-shadow-md">
            美しく機能的なWebアプリケーションを構築します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in animation-delay-600">
            <button
              onClick={scrollToAbout}
              className="group relative bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift overflow-hidden"
            >
              <span className="relative z-10">もっと知る</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                もっと知る
              </span>
            </button>
            <a
              href="#projects"
              className="group relative border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white overflow-hidden"
            >
              <span className="relative z-10">プロジェクトを見る</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <FaArrowDown size={24} className="text-white/80" />
      </div>
    </section>
  )
}

export default Hero

