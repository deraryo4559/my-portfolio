import { useEffect, useRef, useState } from 'react';
import AuroraBackground from '../effects/AuroraBackground';
import Hero from './home/Hero';
import IdentityTicker from './home/IdentityTicker';
import BioSummary from './home/BioSummary';
import { Page } from '../../types';

const safeNum = (val: number, fallback = 0) => {
  if (typeof val !== 'number' || isNaN(val) || !isFinite(val)) return fallback;
  return val;
};

const Home = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrolled = -top;
      const viewportHeight = window.innerHeight;
      const totalScrollable = height - viewportHeight;
      
      if (totalScrollable <= 1) {
        setScrollProgress(0);
        return;
      }
      
      let progress = scrolled / totalScrollable;
      progress = safeNum(progress);
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <AuroraBackground scrollProgress={scrollProgress} />
      <Hero onNavigate={onNavigate} />
      <IdentityTicker />
      <BioSummary onNavigate={onNavigate} />
    </div>
  );
};

export default Home;

