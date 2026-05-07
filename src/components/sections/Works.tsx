import { useMemo, useState } from 'react';
import { WORKS_DATA } from '../../data';
import { WorkCategory, WorkItem } from '../../types';

const categories: WorkCategory[] = [
  'All',
  'Portrait',
  'Landscape',
  'Aerial',
  'Event',
];

const categoryLabel = (category: WorkItem['category']) =>
  category === 'Commercial' ? 'Shop / Brand' : category;

const Works = ({ onSelectWork }: { onSelectWork: (work: WorkItem) => void }) => {
  const [filter, setFilter] = useState<WorkCategory>('All');

  const filteredWorks = useMemo(
    () =>
      filter === 'All'
        ? WORKS_DATA
        : WORKS_DATA.filter((work) => work.category === filter),
    [filter],
  );

  return (
    <div className="min-h-screen bg-[#f7f5f0] px-5 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
              Works
            </p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Selected Portfolio
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600 md:justify-self-end">
            人物、風景、商用、イベント、空撮まで。ジャンルを問わず相談いただけます。
          </p>
        </div>

        <div className="mb-10 flex gap-2 overflow-x-auto border-b border-stone-200 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`whitespace-nowrap border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                filter === category
                  ? 'border-stone-950 bg-stone-950 text-white'
                  : 'border-stone-200 text-stone-500 hover:border-stone-950 hover:text-stone-950'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {filteredWorks.map((work, index) => (
            <button
              key={work.id}
              type="button"
              onClick={() => onSelectWork(work)}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden bg-white text-left"
            >
              <div className="relative overflow-hidden bg-stone-200">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                  loading={index < 6 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
              <div className="border-x border-b border-stone-200 p-4">
                <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  {categoryLabel(work.category)}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-serif text-xl text-stone-950">
                    {work.title}
                  </h2>
                  <span className="text-xs text-stone-500">{work.date}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
