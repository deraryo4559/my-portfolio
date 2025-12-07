import { motion } from "framer-motion";
import { Plane, Camera, ArrowDown, Brain } from "lucide-react";
import { Page } from "../../../types";

const Hero = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-black flex items-center justify-center">
      {/* Background - Drone/Aerial View */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transform scale-110 animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Icon Group */}
          <div className="flex items-center gap-4 mb-8 text-white/80">
            <Plane
              className="w-8 h-8 md:w-10 md:h-10 animate-float"
              strokeWidth={1.5}
            />
            <span className="text-xl font-light">×</span>
            <Camera className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            <span className="text-xl font-light">×</span>
            <Brain className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
          </div>

          <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter italic mb-4 drop-shadow-2xl">
            Sky Photographer{" "}
            <span className="text-emerald-400">with AI Technology</span>
          </h1>

          <p className="text-emerald-400 tracking-[0.3em] text-xs md:text-sm uppercase mb-8 font-medium">
            The Flying Photographer
          </p>

          <p className="text-zinc-300 max-w-lg mx-auto leading-relaxed mb-12 font-light text-sm md:text-base">
            空からの壮大な視点と、地上の一瞬の美しさ。
            <br />
            ドローンと一眼レフ、そしてAIを操り、誰も見たことのない世界を切り撮る。
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("works")}
              className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
            >
              VIEW GALLERY
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("ai-photographer")}
              className="px-8 py-3 bg-emerald-600/80 backdrop-blur-sm text-white tracking-[0.2em] text-xs md:text-sm hover:bg-emerald-500 transition-all duration-500 rounded-sm flex items-center justify-center gap-2"
            >
              <Brain size={14} />
              AI PROJECTS
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;
