import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import AnimatedSection from './AnimatedSection'

const StatCard = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({ threshold: 0.5 })
  
  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`card flex-1 min-w-[150px] hover-lift hover-scale transition-all duration-500 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-bold text-primary-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

const About = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, primary-600 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <AnimatedSection animation="fade-in">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <AnimatedSection animation="slide-right" delay={200}>
              <p className="text-lg text-gray-700 leading-relaxed">
                こんにちは！空飛ぶカメラマンです。
                ドローンと一眼カメラであなたの思い出を。
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-right" delay={400}>
              <p className="text-lg text-gray-700 leading-relaxed">
                コードの品質とパフォーマンスを重視し、常に最新の技術トレンドを学び続けています。
                チームワークを大切にし、協力して素晴らしいプロダクトを作り上げることを楽しんでいます。
              </p>
            </AnimatedSection>
            <div className="flex flex-wrap gap-4">
              <StatCard value="3+" label="年の経験" delay={600} />
              <StatCard value="20+" label="プロジェクト" delay={800} />
              <StatCard value="10+" label="クライアント" delay={1000} />
            </div>
          </div>
          <AnimatedSection animation="slide-left" delay={400}>
            <div className="relative">
              <div className="glass-strong rounded-lg p-8 text-gray-800 shadow-glass-lg hover-scale transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gradient">私の価値観</h3>
                <ul className="space-y-3">
                  {[
                    'ユーザー中心の設計思考',
                    'クリーンで保守可能なコード',
                    '継続的な学習と成長',
                    'チームワークとコラボレーション',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-slide-up"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <span className="mr-3 text-primary-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </section>
  )
}

export default About

