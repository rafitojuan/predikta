import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import LoveMeterForm from '@/components/LoveMeterForm';
import LoadingAnimation from '@/components/LoadingAnimation';
import ResultsDisplay from '@/components/ResultsDisplay';
import ParticleBackground from '@/components/ParticleBackground';
import { calculateLoveCompatibility } from '@/utils/loveCalculator';
import { LoveMeterInput, LoveMeterResult } from '@/types';

type AppState = 'hero' | 'form' | 'loading' | 'results';

export default function Home() {
  const [currentState, setCurrentState] = useState<AppState>('hero');
  const [result, setResult] = useState<LoveMeterResult | null>(null);

  const handleStartClick = () => {
    setCurrentState('form');
  };

  const handleFormSubmit = (input: LoveMeterInput) => {
    setCurrentState('loading');
    
    setTimeout(() => {
      const calculatedResult = calculateLoveCompatibility(input);
      setResult(calculatedResult);
      setCurrentState('results');
    }, 3000);
  };

  const handleTryAgain = () => {
    setResult(null);
    setCurrentState('form');
  };

  const handleBackToHome = () => {
    setResult(null);
    setCurrentState('hero');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {currentState === 'hero' && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSection onStartClick={handleStartClick} />
            </motion.div>
          )}

          {currentState === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <LoveMeterForm 
                onSubmit={handleFormSubmit} 
                onBack={handleBackToHome}
              />
            </motion.div>
          )}

          {currentState === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <LoadingAnimation />
            </motion.div>
          )}

          {currentState === 'results' && result && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ResultsDisplay 
                result={result} 
                onTryAgain={handleTryAgain}
                onBackToHome={handleBackToHome}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}