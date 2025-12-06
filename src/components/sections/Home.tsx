import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AuroraBackground from '../effects/AuroraBackground';
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
      
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
           <div className="animate-fade-in-up mix-blend-difference">
             <p className="text-zinc-400 tracking-[0.6em] text-xs md:text-sm mb-8 uppercase">Photographer Portfolio</p>
             <h1 className="text-5xl md:text-8xl font-serif font-medium text-white mb-8 leading-tight drop-shadow-2xl">
              Capture<br />the Silence
            </h1>
            <div className="mt-12 animate-bounce text-zinc-500 text-[10px] tracking-widest uppercase flex flex-col items-center gap-2">
              Scroll
              <ChevronDown size={16} />
            </div>
           </div>
        </section>

        {/* Concepts */}
        <section className="w-full max-w-4xl mx-auto px-6 py-32 space-y-40">
          
          <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
            <div className="w-full md:w-1/2 text-right md:text-left">
               <span className="text-emerald-400/80 text-xs tracking-widest uppercase mb-4 block">01. Vision</span>
               <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">静寂が、<br/>音を奏でる。</h2>
               <p className="text-zinc-300 leading-loose font-light">
                 都市の喧騒がふと止む瞬間。森の霧が晴れる刹那。<br/>
                 目に見えない「気配」を写し撮ることで、<br/>
                 静止画の中に永遠の物語を閉じ込めます。
               </p>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-emerald-900/20 to-black border border-white/10 rounded-sm backdrop-blur-sm" />
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 animate-fade-in-up">
            <div className="w-full md:w-1/2 text-left md:text-right">
               <span className="text-purple-400/80 text-xs tracking-widest uppercase mb-4 block">02. Light & Shadow</span>
               <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">光を編み、<br/>影を描く。</h2>
               <p className="text-zinc-300 leading-loose font-light">
                 写真は光の芸術ですが、その深みを作るのは常に影です。<br/>
                 オーロラのように揺らめく感情のグラデーションを、<br/>
                 繊細なライティングと構図で表現します。
               </p>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-gradient-to-bl from-purple-900/20 to-black border border-white/10 rounded-sm backdrop-blur-sm" />
          </div>

          <div className="flex flex-col items-center text-center py-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-widest">
              物語を、<br/>始めよう。
            </h2>
            <button onClick={() => onNavigate('works')} className="group relative overflow-hidden bg-white text-black px-12 py-4 text-sm tracking-[0.2em] transition-all duration-500 hover:scale-105">
              <span className="relative z-10">VIEW ALL WORKS</span>
              <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Home;

