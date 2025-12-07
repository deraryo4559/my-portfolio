import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, ImageOff, Search, Bot } from 'lucide-react';
import { useRef } from 'react';
import { Page } from '../../types';

const AiPhotographer = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "AI Object Removal",
      subtitle: "高度な遺物除去・修復",
      description: "Generative Fill技術を応用し、風景写真に映り込んだ不要な電線、看板、観光客などを自然に除去。まるで最初から存在しなかったかのように、写真の純粋な美しさを引き出します。AIが写真の文脈を理解し、違和感なく背景を再構築することで、クリエイターの意図を最大限に尊重した作品が生まれます。",
      image: "https://images.unsplash.com/photo-1516321497487-e288ad9ab135?q=80&w=2070&auto=format&fit=crop",
      icon: <ImageOff className="w-8 h-8 text-emerald-400" />,
      alignment: 'left'
    },
    {
      id: 2,
      title: "Photographer Analysis AI",
      subtitle: "撮影者特定・スタイル分析",
      description: "独自のAIモデルが、写真の構図、色使い、被写界深度、レタッチスタイルなどから撮影者の個性を分析。膨大なデータセットから類似する作品や撮影者を特定し、新たなインスピレーションの源を提供します。また、著作権侵害の可能性のある画像の検出にも応用可能です。",
      image: "https://images.unsplash.com/photo-1516321497487-e288ad9ab135?q=80&w=2070&auto=format&fit=crop",
      icon: <Search className="w-8 h-8 text-blue-400" />,
      alignment: 'right'
    },
    {
      id: 3,
      title: "AI Gimbal Agent",
      subtitle: "自律型撮影アシスタント",
      description: "ジンバルにAIエージェントを組み込み、被写体の動きや表情をリアルタイムで解析。最適なフレーミングとカメラワークを自動で実行します。これにより、カメラマンはクリエイティブなディレクションに集中でき、より高度で複雑な映像表現が可能になります。まるでAIがもう一人のカメラマンのように機能します。",
      image: "https://images.unsplash.com/photo-1511376770601-0fc525909805?q=80&w=2070&auto=format&fit=crop",
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      alignment: 'left'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white pt-24 pb-20 px-6 relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,10 C20,5 40,15 60,10 C80,5 100,15"
            stroke="url(#gradient1)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M0,30 C15,35 30,25 50,30 C70,35 85,25 100,30"
            stroke="url(#gradient2)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          />
          <motion.path
            d="M0,50 C25,45 50,55 75,50 C90,45 100,55"
            stroke="url(#gradient3)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 4 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#8a2be2" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8a2be2" />
              <stop offset="100%" stopColor="#00f0ff" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#8a2be2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
          <Sparkles className="w-16 h-16 mb-6 text-emerald-400 opacity-80" />
          <h1 className="text-4xl md:text-7xl font-serif font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-600 italic">
            Co-Creation with Intelligence
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
            最先端のテクノロジーが、クリエイティブの可能性を拡張する。<br />
            AIと共に、まだ見ぬ表現領域へ。
          </p>
        </motion.div>

        {/* Project Sections */}
        <div className="space-y-32">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col ${project.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
            >
              <div className="w-full md:w-1/2 relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg shadow-xl border border-zinc-800"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white/50 text-sm">
                  <span className="flex items-center gap-2 animate-pulse">
                    <Sparkles size={20} /> Analyzing...
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6 text-left">
                <div className="flex items-center gap-3 text-emerald-400">
                  {project.icon}
                  <span className="text-sm uppercase tracking-widest">{project.subtitle}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                  {project.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white px-10 py-4 rounded-sm font-serif tracking-widest transition-all hover:scale-105 shadow-lg"
          >
            AIを活用した撮影を相談する
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AiPhotographer;

