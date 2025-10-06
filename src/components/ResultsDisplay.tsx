import { motion } from 'framer-motion';
import { Heart, RefreshCw, Share2, Sparkles, Home } from 'lucide-react';
import { LoveMeterResult } from '../types';
import { getCompatibilityCategory } from '../utils/loveCalculator';

interface ResultsDisplayProps {
  result: LoveMeterResult;
  onTryAgain: () => void;
  onBackToHome: () => void;
}

export default function ResultsDisplay({ result, onTryAgain, onBackToHome }: ResultsDisplayProps) {
  if (!result || !result.input || !result.input.partner1 || !result.input.partner2) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="text-white text-2xl font-bold">Loading results...</div>
          <motion.button
            onClick={onBackToHome}
            className="mt-8 bg-gradient-to-r from-green-500 to-teal-600 text-white text-xl font-black px-8 py-4 border-4 border-white hover:border-green-400 transition-all duration-300 uppercase tracking-wide"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <Home className="w-6 h-6" />
              HOME
            </div>
          </motion.button>
        </div>
      </section>
    );
  }

  const { emoji } = getCompatibilityCategory(result.compatibility);
  
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'from-green-400 to-emerald-600';
    if (score >= 50) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-600';
  };

  const handleShare = () => {
    const partner1Name = result.input?.partner1?.name || 'Unknown';
    const partner2Name = result.input?.partner2?.name || 'Unknown';
    const text = `${partner1Name} ❤️ ${partner2Name} = ${result.compatibility}% compatibility on PREDIKTA! ${emoji}`;
    if (navigator.share) {
      navigator.share({
        title: 'PREDIKTA Love Meter Result',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text + ' ' + window.location.href);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            RESULTS ARE IN!
          </h2>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-2 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="bg-black p-8">
            <div className="flex items-center justify-center gap-8 mb-8">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-black text-pink-400 mb-2 uppercase tracking-wide">
                  {result.input?.partner1?.name || 'Unknown'}
                </div>
                <Heart className="w-8 h-8 text-pink-400 mx-auto" />
              </motion.div>

              <motion.div
                className="text-6xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {emoji}
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-black text-blue-400 mb-2 uppercase tracking-wide">
                  {result.input?.partner2?.name || 'Unknown'}
                </div>
                <Heart className="w-8 h-8 text-blue-400 mx-auto" />
              </motion.div>
            </div>

            <motion.div
              className="relative w-80 h-80 mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 100 }}
            >
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - result.compatibility / 100) }}
                  transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff0066" />
                    <stop offset="50%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#0066ff" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <div className={`text-6xl font-black bg-gradient-to-r ${getScoreColor(result.compatibility)} bg-clip-text text-transparent mb-2`}>
                    {result.compatibility}%
                  </div>
                  <Sparkles className="w-8 h-8 text-yellow-400 mx-auto" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <h3 className="text-4xl font-black text-white mb-4 uppercase tracking-wide">
                {result.category || 'Unknown'}
              </h3>
              <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">
                {result.description || 'No description available'}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.button
            onClick={onTryAgain}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-black px-8 py-4 border-4 border-white hover:border-pink-400 transition-all duration-300 uppercase tracking-wide"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 6, 102, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <RefreshCw className="w-6 h-6" />
              TRY AGAIN
            </div>
          </motion.button>

          <motion.button
            onClick={handleShare}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xl font-black px-8 py-4 border-4 border-white hover:border-blue-400 transition-all duration-300 uppercase tracking-wide"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 102, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <Share2 className="w-6 h-6" />
              SHARE RESULT
            </div>
          </motion.button>

          <motion.button
            onClick={onBackToHome}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white text-xl font-black px-8 py-4 border-4 border-white hover:border-green-400 transition-all duration-300 uppercase tracking-wide"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <Home className="w-6 h-6" />
              HOME
            </div>
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-pink-500 rotate-45"
          animate={{ 
            rotate: [45, 405],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 bg-blue-500 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}