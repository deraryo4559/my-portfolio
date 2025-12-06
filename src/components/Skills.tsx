import { useState } from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaAws,
  FaDocker
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiMongodb,
  SiPostgresql,
  SiNextdotjs
} from 'react-icons/si'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import AnimatedSection from './AnimatedSection'

interface SkillItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  level: number
}

const SkillCard = ({ skill, delay = 0 }: { skill: SkillItem; delay?: number }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({ threshold: 0.5 })
  const [isHovered, setIsHovered] = useState(false)
  const IconComponent = skill.icon

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`perspective-3d transform-3d transition-all duration-500 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform-3d ${
          isHovered ? 'rotate-y-6 scale-105' : ''
        }`}
        style={{
          transform: isHovered ? 'rotateY(6deg) rotateX(-6deg) scale(1.05)' : 'rotateY(0) rotateX(0) scale(1)',
        }}
      >
        <div className="flex flex-col items-center mb-4">
          <div className={`${skill.color} text-5xl mb-3 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
            <IconComponent />
          </div>
          <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-1000 ease-out ${
              hasIntersected ? 'w-full' : 'w-0'
            }`}
            style={{
              width: hasIntersected ? `${skill.level}%` : '0%',
              transitionDelay: `${delay + 200}ms`,
            }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-1 text-right">{skill.level}%</div>
      </div>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: 'フロントエンド',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-blue-500', level: 90 },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', level: 85 },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', level: 95 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900', level: 80 },
      ] as SkillItem[],
    },
    {
      title: 'バックエンド',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600', level: 85 },
        { name: 'Python', icon: FaPython, color: 'text-blue-400', level: 80 },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 75 },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700', level: 70 },
      ] as SkillItem[],
    },
    {
      title: 'ツール & その他',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', level: 90 },
        { name: 'AWS', icon: FaAws, color: 'text-orange-500', level: 75 },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500', level: 80 },
      ] as SkillItem[],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, primary-600 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <AnimatedSection animation="fade-in">
        <h2 className="section-title relative z-10">スキル</h2>
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 200}
            >
              <div className="card hover-lift bg-white/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      skill={skill}
                      delay={index * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

export default Skills

