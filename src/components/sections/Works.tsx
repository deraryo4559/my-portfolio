import { useState } from 'react';
import FadeIn from '../ui/FadeIn';
import TiltCard from '../ui/TiltCard';
import { WORKS_DATA } from '../../data';
import { WorkCategory, WorkItem } from '../../types';

const Works = ({ onSelectWork }: { onSelectWork: (work: WorkItem) => void }) => {
  const [filter, setFilter] = useState<WorkCategory>('All');
  const filteredWorks = filter === 'All' ? WORKS_DATA : WORKS_DATA.filter(w => w.category === filter);

  return (
    <div className="py-20 px-6 container mx-auto">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">Works</h2>
            <p className="text-zinc-500 text-sm tracking-[0.2em]">Selected Portfolio 2024-2025</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {['All', 'Portrait', 'Cityscape', 'Nature', 'Commercial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as WorkCategory)}
                className={`text-xs uppercase tracking-wider px-3 py-1 border transition-all duration-300 ${filter === cat ? 'border-white text-white' : 'border-transparent text-zinc-600 hover:text-zinc-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {filteredWorks.map((work, idx) => (
          <FadeIn key={work.id} delay={idx * 100} className="break-inside-avoid">
            <div onClick={() => onSelectWork(work)}>
              <TiltCard className="group cursor-pointer relative">
                <div className={`w-full ${work.height} ${work.imageColor} relative overflow-hidden rounded-sm`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-serif text-4xl opacity-20 group-hover:scale-110 transition-transform duration-700">
                    IMG
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-xs text-zinc-400 uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{work.category}</span>
                      <h3 className="text-xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{work.title}</h3>
                  </div>
                </div>
              </TiltCard>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Works;

