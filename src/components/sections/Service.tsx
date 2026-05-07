import { ArrowRight, Check } from 'lucide-react';
import { FAQ_DATA, FLOW_DATA, SERVICE_DATA } from '../../data';
import Accordion from '../ui/Accordion';
import { Page } from '../../types';

const Service = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="min-h-screen bg-[#f7f5f0] px-5 pb-24 pt-32 md:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
            Services
          </p>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            ニーズに合わせた撮影プランを組み立てます。
          </h1>
        </div>
        <p className="text-sm leading-7 text-stone-600">
          何を撮ればよいか分からない段階でも大丈夫です。使用媒体、目的、雰囲気を伺いながら、撮影内容をご提案します。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {SERVICE_DATA.map((service) => (
          <article
            key={service.title}
            className="flex min-h-[360px] flex-col border border-stone-200 bg-white p-6"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-stone-500">
              {service.label}
            </p>
            <h2 className="font-serif text-4xl">{service.title}</h2>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              {service.description}
            </p>
            <div className="mt-6 grid gap-3">
              {service.uses.map((use) => (
                <div key={use} className="flex items-center gap-2 text-sm text-stone-700">
                  <Check size={15} />
                  {use}
                </div>
              ))}
            </div>
            <div className="mt-auto border-t border-stone-200 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Price
              </p>
              <p className="mt-2 font-serif text-2xl">{service.price}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 border-y border-stone-200 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
              Flow
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              撮影までの流れ
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FLOW_DATA.map((item) => (
              <div key={item.step} className="bg-white p-5">
                <p className="mb-4 text-xs uppercase tracking-[0.24em] text-stone-400">
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

      <section className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
            FAQ
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            よくある質問
          </h2>
        </div>
        <div className="border-t border-stone-200">
          {FAQ_DATA.map((faq) => (
            <Accordion key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <section className="mt-20 bg-stone-950 p-8 text-white md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/65">
              Inquire
            </p>
            <h2 className="font-serif text-4xl leading-tight">
              撮影内容が決まっていなくても、まずはご相談ください。
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm uppercase tracking-[0.2em] text-stone-950 transition-colors hover:bg-stone-200"
          >
            Contact
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  </div>
);

export default Service;
