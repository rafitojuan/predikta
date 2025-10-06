import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, User, Calendar, ArrowLeft } from 'lucide-react';
import { LoveMeterInput } from '../types';

interface LoveMeterFormProps {
  onSubmit: (data: LoveMeterInput) => void;
  onBack: () => void;
}

export default function LoveMeterForm({ onSubmit, onBack }: LoveMeterFormProps) {
  const [partner1Name, setPartner1Name] = useState('');
  const [partner2Name, setPartner2Name] = useState('');
  const [partner1Birth, setPartner1Birth] = useState('');
  const [partner2Birth, setPartner2Birth] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!partner1Name.trim() || !partner2Name.trim()) return;

    const data: LoveMeterInput = {
      partner1: {
        name: partner1Name.trim(),
        birthDate: partner1Birth || undefined
      },
      partner2: {
        name: partner2Name.trim(),
        birthDate: partner2Birth || undefined
      },
      timestamp: new Date()
    };

    onSubmit(data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.button
          onClick={onBack}
          className="absolute top-8 left-8 bg-gradient-to-r from-gray-600 to-gray-800 text-white text-lg font-black px-6 py-3 border-4 border-white hover:border-gray-400 transition-all duration-300 uppercase tracking-wide"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            BACK
          </div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            ENTER NAMES
          </h2>
          <p className="text-xl text-gray-300 font-bold uppercase tracking-wide">
            LET THE ALGORITHM DECIDE YOUR FATE
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-1">
                <div className="bg-black p-6">
                  <label className="flex items-center gap-3 text-white font-black text-xl mb-4 uppercase tracking-wide">
                    <User className="w-6 h-6" />
                    PERSON 1
                  </label>
                  <input
                    type="text"
                    value={partner1Name}
                    onChange={(e) => setPartner1Name(e.target.value)}
                    placeholder="ENTER FIRST NAME"
                    className="w-full bg-transparent border-4 border-white text-white text-xl font-bold p-4 placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors uppercase tracking-wide"
                    required
                  />
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-1">
                <div className="bg-black p-6">
                  <label className="flex items-center gap-3 text-white font-black text-lg mb-4 uppercase tracking-wide">
                    <Calendar className="w-5 h-5" />
                    BIRTH DATE (OPTIONAL)
                  </label>
                  <input
                    type="date"
                    value={partner1Birth}
                    onChange={(e) => setPartner1Birth(e.target.value)}
                    className="w-full bg-transparent border-4 border-white text-white text-lg font-bold p-4 focus:border-pink-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-1">
                <div className="bg-black p-6">
                  <label className="flex items-center gap-3 text-white font-black text-xl mb-4 uppercase tracking-wide">
                    <User className="w-6 h-6" />
                    PERSON 2
                  </label>
                  <input
                    type="text"
                    value={partner2Name}
                    onChange={(e) => setPartner2Name(e.target.value)}
                    placeholder="ENTER SECOND NAME"
                    className="w-full bg-transparent border-4 border-white text-white text-xl font-bold p-4 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors uppercase tracking-wide"
                    required
                  />
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-1">
                <div className="bg-black p-6">
                  <label className="flex items-center gap-3 text-white font-black text-lg mb-4 uppercase tracking-wide">
                    <Calendar className="w-5 h-5" />
                    BIRTH DATE (OPTIONAL)
                  </label>
                  <input
                    type="date"
                    value={partner2Birth}
                    onChange={(e) => setPartner2Birth(e.target.value)}
                    className="w-full bg-transparent border-4 border-white text-white text-lg font-bold p-4 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              type="submit"
              disabled={!partner1Name.trim() || !partner2Name.trim()}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-2xl md:text-3xl font-black px-16 py-6 border-4 border-white hover:border-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 uppercase tracking-wider shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-4">
                <Heart className="w-8 h-8" />
                REVEAL DESTINY
                <Heart className="w-8 h-8" />
              </div>
            </motion.button>
          </motion.div>
        </motion.form>

        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-pink-500 rotate-45"
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}