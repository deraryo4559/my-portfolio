import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setMousePosition({ x, y })
  }

  return (
    <AnimatedSection animation="scale-in" delay={index * 150}>
      <div
        className="perspective-3d transform-3d"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setMousePosition({ x: 0, y: 0 })
        }}
        onMouseMove={handleMouseMove}
      >
        <div
          className="card group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500"
          style={{
            transform: isHovered
              ? `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.02)`
              : 'rotateY(0) rotateX(0) scale(1)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-600/0 to-primary-700/0 group-hover:from-primary-500/10 group-hover:via-primary-600/10 group-hover:to-primary-700/10 transition-all duration-500 pointer-events-none"></div>

          <div className="relative overflow-hidden rounded-lg mb-4 transform-3d">
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isHovered ? 'scale-125 brightness-110' : 'scale-100'
                }`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-600/80 to-primary-500/70 flex items-center justify-center gap-6 transition-all duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform-3d hover:scale-125 transition-transform duration-300"
                  style={{
                    transform: isHovered ? `translateZ(50px) scale(1.1)` : 'translateZ(0) scale(1)',
                  }}
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                    <FaGithub size={24} />
                  </div>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform-3d hover:scale-125 transition-transform duration-300"
                  style={{
                    transform: isHovered ? `translateZ(50px) scale(1.1)` : 'translateZ(0) scale(1)',
                  }}
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                    <FaExternalLinkAlt size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 rounded-full text-sm font-medium hover:from-primary-200 hover:to-primary-100 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'Eコマースプラットフォーム',
      description: 'ReactとTypeScriptを使用したモダンなEコマースアプリケーション。決済機能、商品管理、ユーザー認証を実装。',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400?text=E-commerce+Platform',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'タスク管理アプリ',
      description: 'リアルタイムでタスクを管理できるアプリケーション。チームコラボレーション機能を搭載。',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      image: 'https://via.placeholder.com/600x400?text=Task+Manager',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: '天気予報アプリ',
      description: 'リアルタイムの天気情報を表示するレスポンシブなWebアプリケーション。',
      technologies: ['React', 'JavaScript', 'API', 'CSS'],
      image: 'https://via.placeholder.com/600x400?text=Weather+App',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ]

  return (
    <section id="projects" className="section-container relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, primary-600 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <AnimatedSection animation="fade-in">
        <h2 className="section-title relative z-10">プロジェクト</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

export default Projects

