import { motion } from 'framer-motion';
import { Share2, RotateCcw } from 'lucide-react';
import { LoveMeterResult } from '../types';

interface ResultsDisplayProps {
  result: LoveMeterResult;
  onTryAgain: () => void;
  onBackToHome: () => void;
}

export default function ResultsDisplay({ result, onTryAgain, onBackToHome }: ResultsDisplayProps) {
  if (!result || !result.input || !result.input.partner1 || !result.input.partner2) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Loading...</h2>
          <p className="text-gray-600">Please wait while we calculate your results.</p>
        </div>
      </section>
    );
  }

  const handleShare = () => {
    const shareText = `${result.input.partner1.name} & ${result.input.partner2.name}: ${result.compatibility}% Love Compatibility - ${result.category}`;
    if (navigator.share) {
      navigator.share({
        title: 'Predikta Love Meter Result',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="container mx-auto px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8 tracking-tight">
            COMPATIBILITY RESULT
          </h2>
          <div className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
            {result.input.partner1.name} & {result.input.partner2.name}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative w-64 h-64 mx-auto mb-12">
            <div className="absolute inset-0 border-8 border-gray-200"></div>
            <motion.div
              className="absolute inset-0 border-8 border-accent"
              initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
              animate={{ 
                clipPath: `polygon(0 100%, 100% 100%, 100% ${100 - result.compatibility}%, 0 ${100 - result.compatibility}%)`
              }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-6xl font-black text-black mb-2">
                  {result.compatibility}%
                </div>
                <div className="text-lg font-bold text-gray-600 uppercase tracking-wide">
                  {result.category}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gray-50 border-4 border-gray-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
              ANALYSIS
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {result.description || 'Your compatibility has been calculated based on name analysis and birth date compatibility.'}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            onClick={handleShare}
            className="bg-black text-white text-lg font-bold px-8 py-4 border-4 border-black hover:bg-accent hover:border-accent transition-colors duration-200 uppercase tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5" />
              SHARE RESULT
            </div>
          </motion.button>

          <motion.button
            onClick={onTryAgain}
            className="bg-white text-black text-lg font-bold px-8 py-4 border-4 border-black hover:bg-gray-50 transition-colors duration-200 uppercase tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5" />
              TRY AGAIN
            </div>
          </motion.button>

          <motion.button
            onClick={onBackToHome}
            className="bg-gray-600 text-white text-lg font-bold px-8 py-4 border-4 border-gray-600 hover:bg-gray-700 hover:border-gray-700 transition-colors duration-200 uppercase tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            HOME
          </motion.button>
        </motion.div>

        <div className="absolute top-20 left-20 w-16 h-16 bg-accent"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-black"></div>
      </div>
    </section>
  );
}