
import React from 'react';
import { ArrowRight, Code, Database, Bot, Zap, ShieldCheck, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiceShowcase = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive, and high-performance web applications built with the latest technologies.',
      icon: <Code className="h-8 w-8 service-card-icon" />,
      features: ['Responsive Design', 'API Integration', 'SEO Optimization'],
      color: 'from-blue-500 to-cyan-400',
      iconBg: 'bg-blue-100 text-blue-500',
      link: '/solutions/web-development'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
      icon: <Database className="h-8 w-8 service-card-icon" />,
      features: ['iOS & Android', 'User-Centric Design', 'Offline Capabilities'],
      color: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-purple-100 text-purple-500',
      link: '/solutions/mobile-app-development'
    },
    {
      title: 'AI App Development',
      description: 'Custom AI-powered applications that transform your business processes.',
      icon: <Bot className="h-8 w-8 service-card-icon" />,
      features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing'],
      color: 'from-yellow-500 to-orange-400',
      iconBg: 'bg-yellow-100 text-yellow-500',
      link: '/solutions/ai-app-development'
    },
    {
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI solutions.',
      icon: <Zap className="h-8 w-8 service-card-icon" />,
      features: ['Process Automation', 'Data Extraction', 'Intelligent Workflows'],
      color: 'from-green-500 to-emerald-400',
      iconBg: 'bg-green-100 text-green-500',
      link: '/solutions/ai-automation'
    },
    {
      title: 'AI Agents & Solutions',
      description: 'Autonomous AI agents that learn, adapt, and solve complex problems.',
      icon: <ShieldCheck className="h-8 w-8 service-card-icon" />,
      features: ['Custom AI Agents', 'Advanced Reasoning', 'Continuous Learning'],
      color: 'from-red-500 to-pink-500',
      iconBg: 'bg-red-100 text-red-500',
      link: '/solutions/ai-agents'
    },
    {
      title: 'Other IT Services',
      description: 'Comprehensive IT solutions to support your digital transformation journey.',
      icon: <Server className="h-8 w-8 service-card-icon" />,
      features: ['Cloud Infrastructure', 'Cybersecurity', 'Technical Support'],
      color: 'from-quipus-500 to-quipus-700',
      iconBg: 'bg-quipus-100 text-quipus-500',
      link: '/solutions/other-it-services'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Innovative Solutions</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive suite of IT and AI services designed to 
            transform your business and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <div className={`p-4 rounded-full mb-4 inline-block ${service.iconBg}`}>
                {React.cloneElement(service.icon, { className: 'h-6 w-6' })}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-quipus-500 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="link" className="text-quipus-600 hover:text-quipus-800 p-0" asChild>
                <Link to={service.link}>
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
