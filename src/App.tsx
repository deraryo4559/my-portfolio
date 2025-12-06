import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import SectionDivider from './components/SectionDivider'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header isScrolled={isScrolled} />
      <Hero />
      <SectionDivider variant="wave" />
      <About />
      <SectionDivider variant="curve" />
      <Skills />
      <SectionDivider variant="diagonal" />
      <Projects />
      <SectionDivider variant="wave" />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

