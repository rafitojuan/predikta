import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-3 h-3 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
    </div>
  );
}