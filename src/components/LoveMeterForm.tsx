import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, ArrowLeft } from 'lucide-react';
import { LoveMeterInput } from '../types';

interface LoveMeterFormProps {
  onSubmit: (data: LoveMeterInput) => void;
  onBack: () => void;
}

export default function LoveMeterForm({ onSubmit, onBack }: LoveMeterFormProps) {
  const [partner1Name, setPartner1Name] = useState('');
  const [partner2Name, setPartner2Name] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!partner1Name.trim() || !partner2Name.trim()) return;

    const data: LoveMeterInput = {
      partner1: {
        name: partner1Name.trim()
      },
      partner2: {
        name: partner2Name.trim()
      },
      timestamp: new Date()
    };

    onSubmit(data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="container mx-auto px-8 max-w-4xl">
        <motion.button
          onClick={onBack}
          className="absolute top-8 left-8 bg-black text-white text-lg font-bold px-6 py-3 border-4 border-black hover:bg-accent hover:border-accent transition-colors duration-200 uppercase tracking-wide"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            BACK
          </div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-black mb-8 tracking-tight">
            ENTER NAMES
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Enter both names to calculate compatibility
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-4 border-black p-8">
                <label className="flex items-center gap-3 text-black font-bold text-xl mb-6 uppercase tracking-wide">
                  <User className="w-6 h-6" />
                  PERSON 1
                </label>
                <input
                  type="text"
                  value={partner1Name}
                  onChange={(e) => setPartner1Name(e.target.value)}
                  placeholder="Enter first name"
                  className="w-full bg-white border-4 border-gray-300 text-black text-lg font-medium p-4 placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-4 border-black p-8">
                <label className="flex items-center gap-3 text-black font-bold text-xl mb-6 uppercase tracking-wide">
                  <User className="w-6 h-6" />
                  PERSON 2
                </label>
                <input
                  type="text"
                  value={partner2Name}
                  onChange={(e) => setPartner2Name(e.target.value)}
                  placeholder="Enter second name"
                  className="w-full bg-white border-4 border-gray-300 text-black text-lg font-medium p-4 placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button
              type="submit"
              disabled={!partner1Name.trim() || !partner2Name.trim()}
              className="bg-accent text-white text-xl font-bold px-16 py-6 border-4 border-accent hover:bg-accent-dark hover:border-accent-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 uppercase tracking-wide"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              CALCULATE LOVE
            </motion.button>
          </motion.div>
        </motion.form>

        <div className="absolute top-20 right-20 w-16 h-16 bg-accent"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-black"></div>
      </div>
    </section>
  );
}