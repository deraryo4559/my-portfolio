import { Calendar, ChevronLeft, ChevronRight, MapPin, Tag, X } from 'lucide-react';
import { WorkItem } from '../../types';

const categoryLabel = (category: WorkItem['category']) =>
  category === 'Commercial' ? 'Shop / Brand' : category;

const WorkModal = ({
  work,
  onClose,
  onPrevious,
  onNext,
}: {
  work: WorkItem | null;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}) => {
  if (!work) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-950/95 p-4 text-white backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-stone-950"
        aria-label="Close work detail"
      >
        <X size={22} />
      </button>

      {onPrevious && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-stone-950 md:flex"
          aria-label="Previous work"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {onNext && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-stone-950 md:flex"
          aria-label="Next work"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div
        className="grid max-h-[90vh] w-full max-w-7xl gap-6 overflow-y-auto md:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.55fr)] md:items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex min-h-[45vh] items-center justify-center bg-black md:min-h-[78vh]">
          <img
            src={work.image}
            alt={work.title}
            className="max-h-[78vh] w-full object-contain"
          />
        </div>

        <aside className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/65">
            {categoryLabel(work.category)}
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            {work.title}
          </h2>
          <p className="mt-6 text-sm leading-8 text-white/80">
            {work.description}
          </p>

          <dl className="mt-8 grid gap-4 border-t border-white/10 pt-6 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="inline-flex items-center gap-2 text-white/65">
                <Tag size={15} />
                Category
              </dt>
              <dd>{categoryLabel(work.category)}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="inline-flex items-center gap-2 text-white/65">
                <Calendar size={15} />
                Year
              </dt>
              <dd>{work.date}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="inline-flex items-center gap-2 text-white/65">
                <MapPin size={15} />
                Location
              </dt>
              <dd>{work.location}</dd>
            </div>
          </dl>

          <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
            {onPrevious && (
              <button
                type="button"
                onClick={onPrevious}
                className="inline-flex items-center justify-center gap-2 border border-white/20 py-3 text-sm"
              >
                <ChevronLeft size={16} />
                Prev
              </button>
            )}
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center justify-center gap-2 border border-white/20 py-3 text-sm"
              >
                Next
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WorkModal;
