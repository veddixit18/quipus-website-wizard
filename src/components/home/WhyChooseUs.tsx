
import React from 'react';
import { Shield, Clock, Users, Zap, Award, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="h-10 w-10 mb-4 text-quipus-600" />,
      title: 'Expertise & Experience',
      description: 'Our team brings decades of combined experience in IT and AI innovation.'
    },
    {
      icon: <Clock className="h-10 w-10 mb-4 text-quipus-600" />,
      title: 'Rapid Delivery',
      description: 'We deliver solutions quickly without compromising on quality.'
    },
    {
      icon: <Users className="h-10 w-10 mb-4 text-quipus-600" />,
      title: 'Client-Focused Approach',
      description: 'Your business goals and requirements are at the center of our solutions.'
    },
    {
      icon: <Zap className="h-10 w-10 mb-4 text-quipus-600" />,
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies to build future-proof solutions.'
    },
    {
      icon: <Award className="h-10 w-10 mb-4 text-quipus-600" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control ensure exceptional results.'
    },
    {
      icon: <TrendingUp className="h-10 w-10 mb-4 text-quipus-600" />,
      title: 'Continuous Support',
      description: 'We provide ongoing support and maintenance for all our solutions.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We combine technical excellence with business understanding to deliver solutions that drive real value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center">
                {reason.icon}
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-quipus-600 to-quipus-700 rounded-2xl shadow-xl max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="mb-6 text-white/80">
              Join the many businesses that have accelerated their growth with our innovative IT and AI solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-white/80">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
