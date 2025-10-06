import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  onStartClick: () => void;
}

export default function HeroSection({ onStartClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-black text-black mb-8 tracking-tight">
            PREDIKTA
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-12 h-12 text-accent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-wide">
            DISCOVER YOUR LOVE COMPATIBILITY
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-medium">
            Simple. Direct. Honest love predictions.
          </p>
        </motion.div>

        <motion.button
          onClick={onStartClick}
          className="bg-black text-white text-xl font-bold px-12 py-6 border-4 border-black hover:bg-accent hover:border-accent transition-colors duration-200 uppercase tracking-wide"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          CALCULATE LOVE
        </motion.button>

        <div className="absolute top-20 left-20 w-16 h-16 bg-accent"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-black"></div>
      </div>
    </section>
  );
}