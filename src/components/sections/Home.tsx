import { ArrowRight, Camera, MapPin } from 'lucide-react';
import {
  ABOUT_IMAGE,
  FLOW_DATA,
  HERO_IMAGE,
  SERVICE_DATA,
  WORKS_DATA,
} from '../../data';
import { Page, WorkItem } from '../../types';

const featuredWorks = WORKS_DATA.filter((work) => work.featured).slice(0, 12);
const homeFlow = [FLOW_DATA[0], FLOW_DATA[1], FLOW_DATA[5]];
const categoryLabel = (category: WorkItem['category']) =>
  category === 'Commercial' ? 'Shop / Brand' : category;

const Home = ({
  onNavigate,
  onSelectWork,
}: {
  onNavigate: (page: Page) => void;
  onSelectWork: (work: WorkItem) => void;
}) => {
  return (
    <div className="bg-[#f7f5f0]">
      <section className="relative min-h-[92vh] overflow-hidden bg-stone-950 text-white">
        <img
          src={HERO_IMAGE}
          alt="富士山と街を写したR.PHOTOの代表作"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <p className="mb-5 inline-flex w-fit items-center gap-2 border border-white/40 px-3 py-2 text-xs uppercase tracking-[0.24em] text-white/85">
            <Camera size={14} />
            KAWASAKI BASED PHOTOGRAPHER
          </p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            R.PHOTO
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            プロフィール・店舗・イベント・空撮まで。ニーズに合わせた撮影プランをご提案します。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('works')}
              className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-stone-950 transition-colors hover:bg-stone-200"
            >
              作品を見る
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 border border-white/70 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-stone-950"
            >
              撮影を相談する
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
              Selected Works
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              この人に撮ってほしい、そう思える一枚を。
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('works')}
            className="inline-flex w-fit items-center gap-2 border-b border-stone-950 pb-1 text-sm uppercase tracking-[0.18em]"
          >
            View all Works
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
          {featuredWorks.map((work, index) => {
            const isLarge = work.featuredSize === 'large';
            const isTall = work.orientation === 'portrait' && !isLarge;
            const mobileAspect =
              work.orientation === 'portrait' ? 'aspect-[4/5]' : 'aspect-[4/3]';
            return (
              <button
                key={work.id}
                type="button"
                onClick={() => onSelectWork(work)}
                className={`group relative overflow-hidden bg-stone-200 text-left ${mobileAspect} md:aspect-auto ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                } ${isTall ? 'md:row-span-2' : ''}`}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-white/70">
                    {categoryLabel(work.category)}
                  </p>
                  <h3 className="font-serif text-xl">{work.title}</h3>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="overflow-hidden bg-stone-200">
            <img
              src={ABOUT_IMAGE}
              alt="撮影現場の雰囲気を伝える写真"
              className="h-full max-h-[520px] min-h-[320px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
              About
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              目的と空気感に合わせて、必要な一枚を提案します。
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-stone-600">
              R.PHOTOは川崎・横浜を拠点に活動するフォトグラファーです。プロフィール、店舗、イベント、地域プロモーションなど、写真の使い道から撮影内容を一緒に整理します。
            </p>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="mt-7 inline-flex items-center gap-2 border-b border-stone-950 pb-1 text-sm uppercase tracking-[0.18em]"
            >
              Aboutを見る
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
              Services
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              ニーズに合わせた撮影プランを組み立てます。
            </h2>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              プロフィール、店舗、イベント、空撮まで。用途や掲載先を伺い、必要なカットと撮影内容をご提案します。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICE_DATA.map((service) => (
              <button
                key={service.title}
                type="button"
                onClick={() => onNavigate('service')}
                className="group border border-stone-200 bg-[#f7f5f0] p-6 text-left transition-colors hover:border-stone-950"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">
                  {service.label}
                </p>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-3xl">{service.title}</h3>
                  <ArrowRight
                    size={18}
                    className="mt-2 transition-transform group-hover:translate-x-1"
                  />
                </div>
                <p className="text-sm leading-7 text-stone-600">
                  {service.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-stone-200 px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
              Shooting Flow
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              はじめての相談でも、進め方が分かるように。
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeFlow.map((item) => (
              <div key={item.step} className="border-t border-stone-300 pt-5">
                <p className="mb-5 text-xs uppercase tracking-[0.24em] text-stone-400">
                  {item.step}
                </p>
                <h3 className="mb-3 font-serif text-2xl">{item.title}</h3>
                <p className="text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/55">
              <MapPin size={14} />
              Kawasaki / Yokohama
            </p>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              撮影内容が固まっていない段階でも、まずはご相談ください。
            </h2>
          </div>
          <div className="md:text-right">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 bg-white px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-stone-950 transition-colors hover:bg-stone-200"
            >
              Contact
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
