import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-20 lg:pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering every person on the planet.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We create technology to help people and organizations reach their full potential. Explore our latest innovations in AI, Cloud, and Personal Computing.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-[#0067b8] text-white font-semibold rounded-sm hover:bg-[#005da6] transition-colors flex items-center gap-2">
                For Home <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 bg-white text-[#0067b8] border-2 border-[#0067b8] font-semibold rounded-sm hover:bg-gray-50 transition-colors">
                For Business
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/430c9181-c5ec-4d76-8f4c-c28b7701b88d/hero-bg-bd6b6e86-1772206749369.webp" 
                alt="Innovatech Future Tech" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-[#ffb900] px-3 py-1 text-sm font-bold text-black uppercase mb-2 inline-block">
                  New Release
                </span>
                <h3 className="text-2xl font-bold">InnovaBook 6</h3>
                <p className="text-sm opacity-90">Experience the future of productivity</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 opacity-60"></div>
    </div>
  );
};

export default Hero;