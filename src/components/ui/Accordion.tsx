import { useState } from 'react';
import { Plus } from 'lucide-react';

const Accordion = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex justify-between items-center text-left hover:text-white transition-colors group">
        <span className={`text-lg font-light ${isOpen ? 'text-white' : 'text-zinc-400'}`}>{q}</span>
        <Plus size={20} className={`text-zinc-600 transition-transform duration-300 ${isOpen ? 'rotate-45 text-white' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-500 text-sm leading-relaxed pr-8 pl-4 border-l border-zinc-800 ml-1">{a}</p>
      </div>
    </div>
  );
};

export default Accordion;

