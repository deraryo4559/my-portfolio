import { motion } from "framer-motion";

const IdentityTicker = () => {
  const skills = [
    "Portrait Photography",
    "Aerial Photography",
    "Landscape Photography",
    "Commercial Photography",
    "Drone Photography",
    "Wedding Photography",
    "Event Photography",
    "Product Photography",
    "Architectural Photography",
    "Street Photography",
  ];

  return (
    <div className="relative overflow-hidden bg-black border-y border-zinc-900 py-8">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -50 * 100],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8">
            {skills.map((skill, idx) => (
              <div key={`${i}-${idx}`} className="flex items-center gap-8">
                <span className="text-2xl md:text-4xl font-serif text-zinc-700 hover:text-zinc-500 transition-colors">
                  {skill}
                </span>
                <span className="text-zinc-800 text-2xl">×</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default IdentityTicker;
