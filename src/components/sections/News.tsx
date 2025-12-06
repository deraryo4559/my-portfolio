import { ArrowRight } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import { NEWS_DATA } from '../../data';
import { NewsItem } from '../../types';

const News = ({ onSelectNews }: { onSelectNews: (news: NewsItem) => void }) => (
  <div className="py-20 px-6 container mx-auto max-w-4xl">
    <FadeIn>
      <div className="flex items-end gap-6 mb-20 border-b border-zinc-800 pb-8">
        <h2 className="text-5xl font-serif text-white">News</h2>
        <span className="text-zinc-500 text-sm tracking-widest pb-2">/ ARCHIVE</span>
      </div>
    </FadeIn>

    <div className="space-y-0">
      {NEWS_DATA.map((news, i) => (
        <FadeIn key={news.id} delay={i * 100}>
          <div 
            onClick={() => onSelectNews(news)}
            className="group relative border-b border-zinc-800 py-10 cursor-pointer hover:bg-zinc-900/30 transition-colors duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-6 relative z-10 px-4">
              <div className="w-32 flex-shrink-0">
                <span className="text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">{news.date}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[10px] uppercase tracking-wider border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full group-hover:border-zinc-600 transition-colors">{news.category}</span>
                </div>
                <h3 className="text-2xl font-serif text-zinc-300 group-hover:text-white transition-colors duration-300">{news.title}</h3>
                <p className="text-zinc-500 text-sm mt-4 line-clamp-2 md:w-2/3 group-hover:text-zinc-400 transition-colors">{news.content}</p>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);

export default News;

