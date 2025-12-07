import { motion } from 'framer-motion';
import { Page } from '../../../types';

const BioSummary = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  return (
    <section className="py-40 px-6 bg-black relative z-10 overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[20vw] font-serif font-bold leading-none text-white block">STORY</span>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/20 z-[-1]" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-white/20 z-[-1]" />
          </motion.div>

          {/* Right: Text Content */}
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-purple-400 text-xs tracking-[0.3em] uppercase block mb-6"
            >
              The Photographer
            </motion.span>
            
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight"
            >
              小野寺諒
            </motion.h3>
            
            <motion.h4 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif text-zinc-500 mb-10 leading-tight italic"
            >
              Silence, Speaks Louder.
            </motion.h4>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-zinc-400 leading-relaxed font-light text-sm md:text-base space-y-6"
            >
              <p>
                写真とは、単に時間を止めることではありません。<br/>
                それは、目に見えない「気配」や「感情」を、光というインクで空間に定着させる行為です。
              </p>
              <p>
                私は、静寂の中に潜む力強い物語を追い求めています。<br/>
                都市の喧騒の隙間にある孤独、自然が見せる一瞬の表情、人の瞳の奥にある揺らぎ。
              </p>
              <p>
                「言葉にできないもの」こそが、最も雄弁に語りかける。<br/>
                その瞬間を逃さず、永遠の美しさとして昇華させることが私の使命です。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <button 
                onClick={() => onNavigate('photographer')}
                className="group flex items-center gap-4 text-white hover:text-purple-400 transition-colors duration-300"
              >
                <span className="text-sm tracking-[0.2em] uppercase border-b border-transparent group-hover:border-purple-400 pb-1">Read Concept</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSummary;

