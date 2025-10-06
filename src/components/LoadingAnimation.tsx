import { motion } from 'framer-motion';

export default function LoadingAnimation() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8 tracking-tight">
            CALCULATING...
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Analyzing compatibility
          </p>
        </motion.div>

        <div className="relative w-32 h-32 mx-auto mb-16">
          <motion.div
            className="absolute inset-0 border-4 border-accent"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute inset-2 border-4 border-black"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-black"
              animate={{ 
                opacity: [0.3, 1, 0.3]
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
          className="text-sm text-gray-500 font-medium uppercase tracking-wide"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Please wait...
        </motion.div>
      </div>
    </section>
  );
}