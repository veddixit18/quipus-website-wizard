
import React from 'react';
import { ArrowRight, Code, Database, Bot, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-quipus-50/40 via-white to-quipus-100/30"></div>
        <div className="absolute h-96 w-96 -top-12 -right-12 rounded-full bg-quipus-100/30 blur-3xl animate-pulse"></div>
        <div className="absolute h-96 w-96 top-1/2 -left-20 rounded-full bg-quipus-200/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Animated Mesh Grid */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute w-full h-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="relative">
                <div 
                  className="absolute rounded-full bg-quipus-600/20" 
                  style={{
                    width: Math.random() * 4 + 1 + 'px',
                    height: Math.random() * 4 + 1 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 10 + 10 + 's',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left Text Column */}
          <motion.div 
            className="w-full lg:w-1/2 text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="text-quipus-600 block">Transform Your Business</span>
              with Innovative IT &amp; AI Solutions
            </h1>
            
            <p className="text-lg text-gray-700 max-w-xl">
              The Quipus connects enterprises to the future with cutting-edge AI and IT services 
              that drive growth, efficiency, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-quipus-600 hover:bg-quipus-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-md w-full sm:w-auto">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-quipus-300 text-quipus-700 hover:bg-quipus-50 px-8 py-6 text-lg w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-gray-500 text-sm mb-3">Trusted by innovative companies</p>
              <div className="flex flex-wrap gap-6 items-center opacity-70">
                <div className="h-8 w-auto">
                  <div className="h-full w-20 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="h-8 w-auto">
                  <div className="h-full w-24 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="h-8 w-auto">
                  <div className="h-full w-16 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="h-8 w-auto">
                  <div className="h-full w-28 bg-gray-300 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Animation/Mockup Column */}
          <motion.div 
            className="w-full lg:w-1/2 h-[400px] relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-quipus-100">
              <div className="absolute inset-0 bg-gradient-to-br from-quipus-600/5 to-quipus-200/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-quipus-600/90 rounded-full flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-64 h-8 bg-white rounded-lg shadow-md mb-3 flex items-center px-4">
                    <div className="w-40 h-3 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                  <div className="w-72 h-8 bg-white rounded-lg shadow-md mb-3 flex items-center px-4">
                    <div className="w-56 h-3 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                  <div className="w-64 h-8 bg-white rounded-lg shadow-md mb-3 flex items-center px-4">
                    <div className="w-48 h-3 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                  <div className="w-32 h-10 bg-quipus-500 rounded-md mt-4 flex items-center justify-center">
                    <div className="w-20 h-3 bg-white/60 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
