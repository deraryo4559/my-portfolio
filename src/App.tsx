import { useEffect, useState } from 'react';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import Works from './components/sections/Works';
import Service from './components/sections/Service';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import WorkModal from './components/ui/WorkModal';
import { WORKS_DATA } from './data';
import { Page, WorkItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const selectedWorkIndex = selectedWork
    ? WORKS_DATA.findIndex((work) => work.id === selectedWork.id)
    : -1;

  const selectAdjacentWork = (direction: -1 | 1) => {
    if (selectedWorkIndex < 0) return;
    const nextIndex =
      (selectedWorkIndex + direction + WORKS_DATA.length) % WORKS_DATA.length;
    setSelectedWork(WORKS_DATA[nextIndex]);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#f7f5f0] text-stone-950 selection:bg-stone-950 selection:text-white">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />

        <main className="relative z-10">
          {currentPage === 'home' && (
            <Home onNavigate={setCurrentPage} onSelectWork={setSelectedWork} />
          )}
          {currentPage === 'works' && <Works onSelectWork={setSelectedWork} />}
          {currentPage === 'service' && <Service onNavigate={setCurrentPage} />}
          {currentPage === 'about' && <About onNavigate={setCurrentPage} />}
          {currentPage === 'contact' && <Contact />}
        </main>

        <Footer onNavigate={setCurrentPage} />
        <WorkModal
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
          onPrevious={
            selectedWork ? () => selectAdjacentWork(-1) : undefined
          }
          onNext={selectedWork ? () => selectAdjacentWork(1) : undefined}
        />
      </div>
    </ErrorBoundary>
  );
}
