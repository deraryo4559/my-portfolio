import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Lightbulb, Heart } from 'lucide-react';
import { Page } from '../../types';

const Photographer = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  const concepts = [
    {
      icon: <Camera className="w-8 h-8 text-emerald-400" />,
      title: 'Emotion',
      subtitle: '感情を写す',
      description: '被写体の内面にある感情を、光と構図で引き出す。表面的な美しさではなく、その瞬間に宿る真実を追求します。',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
      title: 'Light',
      subtitle: '光を操る',
      description: '自然光の移ろいを読み取り、最適なタイミングでシャッターを切る。光が物語を語りかける瞬間を捉えます。',
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-400" />,
      title: 'Moment',
      subtitle: '瞬間を永遠に',
      description: '二度と訪れない一瞬を、永遠の美として定着させる。時間の流れを止め、記憶を形にします。',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Home</span>
          </button>
          <h1 className="text-4xl md:text-7xl font-serif font-medium mb-6">
            Photographer
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
            写真を通じて、見えないものを可視化する。<br />
            静寂の中に潜む物語を、光で描き出す。
          </p>
        </motion.div>

        {/* Concepts */}
        <div className="space-y-32">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="mb-6">{concept.icon}</div>
                <span className="text-xs uppercase tracking-widest text-zinc-500 mb-4 block">
                  {concept.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                  {concept.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed font-light">
                  {concept.description}
                </p>
              </div>
              <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-sm" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photographer;

