import { useState, useEffect } from 'react';
import ErrorBoundary from './components/ui/ErrorBoundary';
import ParticleBackground from './components/effects/ParticleBackground';
import CustomCursor from './components/effects/CustomCursor';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import Works from './components/sections/Works';
import Service from './components/sections/Service';
import News from './components/sections/News';
import Contact from './components/sections/Contact';
import WorkModal from './components/ui/WorkModal';
import NewsModal from './components/ui/NewsModal';
import { Page, WorkItem, NewsItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-white selection:text-black overflow-x-hidden">
        {/* Background is handled within Home component for better control, or globally if preferred */}
        {currentPage !== 'home' && <ParticleBackground />} 
        <CustomCursor />
        
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />

        <main className="pt-20 min-h-screen relative z-10">
          {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
          {currentPage === 'works' && <Works onSelectWork={setSelectedWork} />}
          {currentPage === 'service' && <Service onNavigate={setCurrentPage} />}
          {currentPage === 'news' && <News onSelectNews={setSelectedNews} />}
          {currentPage === 'contact' && <Contact />}
        </main>

        {currentPage !== 'home' && <Footer onNavigate={setCurrentPage} />}

        <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />

        <style>{`
          @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
          .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
          .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }
          .perspective-1000 { perspective: 1000px; }
          .transform-gpu { transform: translate3d(0,0,0); }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #09090b; }
          ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 3px; }
          ::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
        `}</style>
      </div>
    </ErrorBoundary>
  );
}
