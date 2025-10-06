import { motion } from 'framer-motion';
import { Heart, Zap } from 'lucide-react';

interface HeroSectionProps {
  onStartClick: () => void;
}

export default function HeroSection({ onStartClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter"
            animate={{ 
              textShadow: [
                "0 0 20px #ff0066",
                "0 0 40px #0066ff", 
                "0 0 20px #ff0066"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            PREDIKTA
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Heart className="w-8 h-8 text-pink-500" />
            <Zap className="w-8 h-8 text-blue-500" />
            <Heart className="w-8 h-8 text-pink-500" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
            DISCOVER YOUR LOVE COMPATIBILITY
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            BRUTAL. RAW. HONEST. LOVE PREDICTIONS.
          </p>
        </motion.div>

        <motion.button
          onClick={onStartClick}
          className="bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xl md:text-2xl font-black px-12 py-6 border-4 border-white hover:border-pink-500 transition-all duration-300 uppercase tracking-wider shadow-2xl"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(255, 6, 102, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          CALCULATE LOVE
        </motion.button>

        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-pink-500 rotate-45"
          animate={{ 
            rotate: [45, 135, 45],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 bg-blue-500"
          animate={{ 
            rotate: [0, 180, 360],
            y: [0, -20, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-1/2 left-10 w-8 h-8 bg-green-500 rounded-full"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}