
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-quipus-600 to-quipus-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Innovative IT & AI Solutions?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Take the first step towards digital transformation. Schedule a consultation with our experts today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-quipus-700 hover:bg-white/90 px-8 py-6 text-lg button-hover-effect">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg button-hover-effect">
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
