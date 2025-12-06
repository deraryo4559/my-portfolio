import FadeIn from '../ui/FadeIn';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';
import { SERVICE_DATA, FAQ_DATA } from '../../data';
import { Page } from '../../types';

const Service = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="py-20 px-6 container mx-auto max-w-5xl">
    <FadeIn>
      <SectionTitle title="Service" subtitle="撮影プラン・料金" />
    </FadeIn>

    <div className="grid md:grid-cols-3 gap-6 mb-32">
      {SERVICE_DATA.map((service, idx) => (
        <FadeIn key={idx} delay={idx * 150} className="h-full">
          <div className="relative p-8 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 flex flex-col h-full group bg-zinc-900/30 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent -z-10 group-hover:from-white/10 transition-colors" />
            <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
            <div className="text-2xl font-light text-zinc-200 mb-6">{service.price}</div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 whitespace-pre-line flex-grow">
              {service.description}
            </p>
            <ul className="space-y-3 pt-6 border-t border-zinc-800">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="text-zinc-500 text-xs flex items-center gap-2">
                  <div className="w-1 h-1 bg-zinc-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => onNavigate('contact')} className="mt-8 w-full py-3 border border-zinc-700 text-zinc-400 text-xs tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              BOOK NOW
            </button>
          </div>
        </FadeIn>
      ))}
    </div>
    
    <FadeIn delay={400}>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-serif text-white mb-8">FAQ</h3>
          <p className="text-zinc-500 text-sm mb-8">よくいただくご質問をまとめました。</p>
        </div>
        <div>
          {FAQ_DATA.map((faq, idx) => (
            <Accordion key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </FadeIn>
  </div>
);

export default Service;

