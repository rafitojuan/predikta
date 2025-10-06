import { motion } from 'framer-motion';
import { Heart, Zap, Star } from 'lucide-react';

export default function LoadingAnimation() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-black">
      <div className="text-center relative">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            CALCULATING...
          </h2>
          <p className="text-xl text-gray-300 font-bold uppercase tracking-wide">
            THE ALGORITHM IS WORKING
          </p>
        </motion.div>

        <div className="relative w-64 h-64 mx-auto mb-12">
          <motion.div
            className="absolute inset-0 border-8 border-pink-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute inset-4 border-8 border-blue-500 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute inset-8 border-8 border-green-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-16 h-16 text-white" />
          </motion.div>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-white rounded-full"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <motion.div
          className="text-lg text-gray-400 font-bold uppercase tracking-wide"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ANALYZING COMPATIBILITY...
        </motion.div>

        <motion.div
          className="absolute -top-20 -left-20 w-12 h-12 bg-pink-500 rotate-45"
          animate={{ 
            rotate: [45, 405],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute -bottom-20 -right-20 w-10 h-10 bg-blue-500 rounded-full"
          animate={{ 
            scale: [1, 2, 1],
            x: [0, -80, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-10 right-10"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-8 h-8 text-yellow-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10"
          animate={{ 
            rotate: [0, -360],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Star className="w-6 h-6 text-green-400" />
        </motion.div>
      </div>
    </section>
  );
}