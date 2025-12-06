import { X, Calendar, Camera, MapPin } from 'lucide-react';
import { WorkItem } from '../../types';

const WorkModal = ({ work, onClose }: { work: WorkItem | null; onClose: () => void }) => {
  if (!work) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-zinc-950/95 flex items-center justify-center p-4 md:p-12 animate-fade-in" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform duration-300"><X size={32} /></button>
      <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full h-full md:h-auto items-center" onClick={e => e.stopPropagation()}>
        <div className={`w-full md:w-2/3 h-[50vh] md:h-[80vh] ${work.imageColor} relative shadow-2xl overflow-hidden rounded-sm group`}>
            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-serif text-9xl">IMG</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="w-full md:w-1/3 text-white space-y-8 animate-fade-in-up">
          <div>
            <p className="text-zinc-500 text-sm tracking-widest uppercase mb-2">{work.category}</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">{work.title}</h2>
            <p className="text-zinc-400 leading-relaxed font-light">{work.description}</p>
          </div>
          <div className="border-t border-zinc-800 pt-8 space-y-4 text-sm font-mono text-zinc-500">
             <div className="flex justify-between items-center"><span className="flex items-center gap-2"><Calendar size={14}/> Date</span> <span className="text-zinc-300">{work.date}</span></div>
             <div className="flex justify-between items-center"><span className="flex items-center gap-2"><Camera size={14}/> Gear</span> <span className="text-zinc-300">{work.equipment}</span></div>
             <div className="flex justify-between items-center"><span className="flex items-center gap-2"><MapPin size={14}/> Location</span> <span className="text-zinc-300">{work.location}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;

