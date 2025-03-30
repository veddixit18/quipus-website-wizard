
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTASection = () => {
  const benefits = [
    "Free initial consultation",
    "Personalized project roadmap",
    "Transparent pricing",
    "Ongoing technical support"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-quipus-700 to-quipus-900 z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-quipus-400 blur-3xl"></div>
          <div className="absolute -left-20 top-1/2 w-80 h-80 rounded-full bg-quipus-300 blur-3xl"></div>
          <div className="absolute right-10 bottom-10 w-60 h-60 rounded-full bg-quipus-500 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <motion.div 
              className="w-full lg:w-3/5 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with Innovative IT & AI Solutions?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Take the first step towards digital transformation. Schedule a consultation with our experts today and discover how our solutions can drive your business forward.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quipus-300 mr-3" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-2/5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Book Your Free Consultation</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                  <input type="text" placeholder="Your Name" className="w-full bg-transparent text-white placeholder-white/60 outline-none" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                  <input type="email" placeholder="Your Email" className="w-full bg-transparent text-white placeholder-white/60 outline-none" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                  <input type="text" placeholder="Your Company" className="w-full bg-transparent text-white placeholder-white/60 outline-none" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                  <select className="w-full bg-transparent text-white/60 outline-none">
                    <option value="" disabled selected>Service of Interest</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="ai">AI App Development</option>
                    <option value="automation">AI Automation</option>
                    <option value="agents">AI Agents & Solutions</option>
                    <option value="other">Other IT Services</option>
                  </select>
                </div>
                
                <Button className="w-full bg-white text-quipus-700 hover:bg-white/90 hover:text-quipus-800 py-6 text-lg button-hover-effect">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
