import { X } from 'lucide-react';
import { NewsItem } from '../../types';

const NewsModal = ({ news, onClose }: { news: NewsItem | null; onClose: () => void }) => {
  if (!news) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all animate-fade-in" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-lg p-8 rounded-sm relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white"><X /></button>
        <span className="text-xs text-zinc-500 border border-zinc-800 px-2 py-1 rounded mb-4 inline-block">{news.category}</span>
        <div className="text-sm font-mono text-zinc-500 mb-2">{news.date}</div>
        <h3 className="text-2xl font-serif text-white mb-6">{news.title}</h3>
        <p className="text-zinc-300 text-sm leading-loose whitespace-pre-wrap">{news.content}</p>
      </div>
    </div>
  );
};

export default NewsModal;

