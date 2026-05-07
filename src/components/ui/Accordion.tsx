import { useState } from 'react';
import { Plus } from 'lucide-react';

const Accordion = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-stone-500"
      >
        <span className="font-serif text-xl">{q}</span>
        <Plus
          size={20}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-6 pr-8 text-sm leading-7 text-stone-600">{a}</p>
      </div>
    </div>
  );
};

export default Accordion;
