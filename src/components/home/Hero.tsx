
import React from 'react';
import { ArrowRight, Code, Database, Bot, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative hero-gradient min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-quipus-100 rounded-full filter blur-3xl opacity-30 animate-pulse-light"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-quipus-200 rounded-full filter blur-3xl opacity-20 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Innovative IT & AI Solutions</span><br />
            <span>for the Modern Enterprise</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            The Quipus connects your business to the future with cutting-edge AI and IT services that drive growth, efficiency, and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button className="bg-quipus-600 hover:bg-quipus-700 text-white px-8 py-6 text-lg button-hover-effect">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-quipus-200 text-quipus-700 hover:bg-quipus-50 px-8 py-6 text-lg button-hover-effect">
              Explore Solutions
            </Button>
          </div>
        </div>

        {/* Floating Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
          <div className="glass-card p-5 flex flex-col items-center text-center animate-float" style={{ animationDelay: '0s' }}>
            <div className="p-3 bg-quipus-100 rounded-full text-quipus-600 mb-3">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-gray-800">Web Development</h3>
          </div>
          
          <div className="glass-card p-5 flex flex-col items-center text-center animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="p-3 bg-quipus-100 rounded-full text-quipus-600 mb-3">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-gray-800">Mobile Development</h3>
          </div>
          
          <div className="glass-card p-5 flex flex-col items-center text-center animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="p-3 bg-quipus-100 rounded-full text-quipus-600 mb-3">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-gray-800">AI App Development</h3>
          </div>
          
          <div className="glass-card p-5 flex flex-col items-center text-center animate-float" style={{ animationDelay: '0.6s' }}>
            <div className="p-3 bg-quipus-100 rounded-full text-quipus-600 mb-3">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-gray-800">AI Automation</h3>
          </div>
          
          <div className="glass-card p-5 flex flex-col items-center text-center animate-float" style={{ animationDelay: '0.8s' }}>
            <div className="p-3 bg-quipus-100 rounded-full text-quipus-600 mb-3">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-gray-800">AI Agents</h3>
          </div>
          
          <div className="glass-card p-5 flex flex-col items-center text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="p-3 bg-quipus-100 rounded-full text-quipus-600 mb-3">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-gray-800">IT Solutions</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
