
import React, { useState } from 'react';
import { ArrowRight, Code, Database, Bot, Zap, ShieldCheck, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServiceShowcase = () => {
  const [activeTab, setActiveTab] = useState("web");

  const services = [
    {
      id: "web",
      title: 'Web Development',
      description: 'Modern, responsive, and high-performance web applications built with the latest technologies.',
      icon: <Code className="h-8 w-8" />,
      features: ['Responsive Design', 'API Integration', 'SEO Optimization'],
      color: 'from-blue-500 to-cyan-400',
      iconBg: 'bg-blue-100 text-blue-500',
      link: '/solutions/web-development',
      mockup: (
        <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <div className="absolute top-0 w-full h-8 bg-gray-200 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="absolute top-8 w-full h-8 bg-gray-300 flex items-center justify-center">
            <div className="w-32 h-4 bg-gray-400 rounded-full"></div>
          </div>
          <div className="absolute top-16 w-full bottom-0 flex p-4">
            <div className="w-1/4 h-full bg-gray-200 rounded">
              <div className="w-full h-8 bg-gray-300 m-2 rounded"></div>
              <div className="w-full h-8 bg-gray-300 m-2 rounded"></div>
              <div className="w-full h-8 bg-gray-300 m-2 rounded"></div>
            </div>
            <div className="w-3/4 h-full pl-4">
              <div className="w-full h-8 bg-gray-300 mb-3 rounded"></div>
              <div className="w-full h-24 bg-gray-200 rounded"></div>
              <div className="w-full flex space-x-2 mt-3">
                <div className="w-1/3 h-10 bg-blue-400 rounded"></div>
                <div className="w-1/3 h-10 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          {/* Animation effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 border-4 border-blue-500 rounded-full opacity-0 animate-ping"></div>
          </div>
        </div>
      )
    },
    {
      id: "mobile",
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
      icon: <Database className="h-8 w-8" />,
      features: ['iOS & Android', 'User-Centric Design', 'Offline Capabilities'],
      color: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-purple-100 text-purple-500',
      link: '/solutions/mobile-app-development',
      mockup: (
        <div className="relative w-full h-64 flex justify-center">
          <div className="w-32 h-full bg-gray-800 rounded-2xl overflow-hidden border-4 border-gray-700 relative">
            <div className="absolute top-3 w-16 h-2 bg-gray-700 rounded-full left-1/2 transform -translate-x-1/2"></div>
            <div className="w-full h-full pt-8 bg-white">
              <div className="w-full h-8 bg-purple-500"></div>
              <div className="p-2">
                <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-20 bg-gray-100 rounded mb-2"></div>
                <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-6 bg-gray-200 rounded"></div>
              </div>
              <div className="absolute bottom-0 w-full h-12 bg-gray-100 border-t border-gray-200 flex justify-evenly items-center">
                <div className="w-6 h-6 rounded-full bg-purple-400"></div>
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
          {/* Animation effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-40 h-40 border-4 border-purple-500 rounded-full opacity-0 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      )
    },
    {
      id: "ai",
      title: 'AI App Development',
      description: 'Custom AI-powered applications that transform your business processes.',
      icon: <Bot className="h-8 w-8" />,
      features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing'],
      color: 'from-yellow-500 to-orange-400',
      iconBg: 'bg-yellow-100 text-yellow-500',
      link: '/solutions/ai-app-development',
      mockup: (
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-yellow-50 to-orange-50 p-4">
          <div className="absolute top-4 left-4 right-4 h-10 bg-white rounded-lg shadow-sm flex items-center px-3">
            <div className="w-6 h-6 rounded-full bg-yellow-400 mr-3 flex items-center justify-center">
              <Bot className="w-3 h-3 text-white" />
            </div>
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="absolute top-20 left-4 right-4 bottom-16 overflow-hidden">
            <div className="w-full h-full bg-white rounded-lg p-3 shadow-sm">
              <div className="flex mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                <div className="w-2/3">
                  <div className="w-full h-4 bg-gray-100 rounded mb-1"></div>
                  <div className="w-1/2 h-3 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="flex justify-end mb-3">
                <div className="w-2/3 ml-3">
                  <div className="w-full h-4 bg-yellow-100 rounded mb-1"></div>
                  <div className="w-3/4 h-3 bg-yellow-100 rounded"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-yellow-200 ml-3"></div>
              </div>
              <div className="flex mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                <div className="w-1/2">
                  <div className="w-full h-4 bg-gray-100 rounded mb-1"></div>
                  <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 h-8">
            <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center px-3">
              <div className="w-full h-4 bg-gray-100 rounded"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 ml-3 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          {/* Animation effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 border-4 border-yellow-500 rounded-full opacity-0 animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      )
    },
    {
      id: "automation",
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI solutions.',
      icon: <Zap className="h-8 w-8" />,
      features: ['Process Automation', 'Data Extraction', 'Intelligent Workflows'],
      color: 'from-green-500 to-emerald-400',
      iconBg: 'bg-green-100 text-green-500',
      link: '/solutions/ai-automation',
      mockup: (
        <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 shadow-md">
          <div className="absolute top-4 left-4 h-8 px-3 bg-white rounded-md shadow-sm flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-400 mr-2"></div>
            <div className="w-20 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="absolute top-16 left-4 right-4 flex flex-col space-y-3">
            <div className="w-full h-12 bg-white rounded-lg shadow-sm flex items-center p-3">
              <div className="w-6 h-6 rounded-full bg-green-100 mr-3 flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
              </div>
              <div className="flex-1">
                <div className="w-1/3 h-3 bg-gray-200 rounded mb-1"></div>
                <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
              </div>
              <div className="w-16 h-6 bg-green-400 rounded-md"></div>
            </div>
            <div className="w-full h-12 bg-white rounded-lg shadow-sm flex items-center p-3">
              <div className="w-6 h-6 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
              </div>
              <div className="flex-1">
                <div className="w-1/4 h-3 bg-gray-200 rounded mb-1"></div>
                <div className="w-2/5 h-2 bg-gray-100 rounded"></div>
              </div>
              <div className="w-16 h-6 bg-gray-200 rounded-md"></div>
            </div>
            <div className="w-full h-12 bg-white rounded-lg shadow-sm flex items-center p-3">
              <div className="w-6 h-6 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
              </div>
              <div className="flex-1">
                <div className="w-2/5 h-3 bg-gray-200 rounded mb-1"></div>
                <div className="w-1/3 h-2 bg-gray-100 rounded"></div>
              </div>
              <div className="w-16 h-6 bg-gray-200 rounded-md"></div>
            </div>
          </div>
          {/* Animation effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 border-4 border-green-500 rounded-full opacity-0 animate-ping" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      )
    },
    {
      id: "agents",
      title: 'AI Agents & Solutions',
      description: 'Autonomous AI agents that learn, adapt, and solve complex problems.',
      icon: <ShieldCheck className="h-8 w-8" />,
      features: ['Custom AI Agents', 'Advanced Reasoning', 'Continuous Learning'],
      color: 'from-red-500 to-pink-500',
      iconBg: 'bg-red-100 text-red-500',
      link: '/solutions/ai-agents',
      mockup: (
        <div className="relative w-full h-64 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg shadow-md overflow-hidden">
          <div className="absolute top-0 w-full h-10 bg-white border-b border-gray-100 flex items-center px-4">
            <div className="w-6 h-6 rounded-full bg-red-400 mr-3 flex items-center justify-center">
              <ShieldCheck className="w-3 h-3 text-white" />
            </div>
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="absolute top-10 w-full bottom-0 flex">
            <div className="w-1/3 h-full bg-white p-3 border-r border-gray-100">
              <div className="w-full h-8 bg-red-100 rounded-md mb-3 flex items-center px-2">
                <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                <div className="w-16 h-3 bg-red-200 rounded"></div>
              </div>
              <div className="w-full h-6 bg-gray-100 rounded-md mb-2"></div>
              <div className="w-full h-6 bg-gray-100 rounded-md mb-2"></div>
              <div className="w-full h-6 bg-gray-100 rounded-md"></div>
            </div>
            <div className="w-2/3 h-full bg-white p-3">
              <div className="w-full h-8 bg-gray-100 rounded-md mb-3"></div>
              <div className="w-full h-24 bg-red-50 rounded-md p-2">
                <div className="w-full h-4 bg-red-100 rounded mb-1"></div>
                <div className="w-2/3 h-4 bg-red-100 rounded mb-1"></div>
                <div className="w-1/2 h-4 bg-red-100 rounded"></div>
              </div>
              <div className="w-full flex space-x-2 mt-3">
                <div className="w-1/3 h-8 bg-red-400 rounded-md"></div>
                <div className="w-1/3 h-8 bg-gray-100 rounded-md"></div>
              </div>
            </div>
          </div>
          {/* Animation effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 border-4 border-red-500 rounded-full opacity-0 animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      )
    },
    {
      id: "it",
      title: 'Other IT Services',
      description: 'Comprehensive IT solutions to support your digital transformation journey.',
      icon: <Server className="h-8 w-8" />,
      features: ['Cloud Infrastructure', 'Cybersecurity', 'Technical Support'],
      color: 'from-quipus-500 to-quipus-700',
      iconBg: 'bg-quipus-100 text-quipus-500',
      link: '/solutions/other-it-services',
      mockup: (
        <div className="relative w-full h-64 bg-gradient-to-br from-quipus-50 to-white rounded-lg shadow-md overflow-hidden">
          <div className="absolute top-0 w-full h-12 bg-quipus-600 flex items-center px-4">
            <div className="w-32 h-4 bg-white/30 rounded"></div>
            <div className="ml-auto flex space-x-2">
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
            </div>
          </div>
          <div className="absolute top-12 w-full bottom-0 flex p-4">
            <div className="w-1/4 h-full bg-white rounded shadow-sm p-3">
              <div className="w-full h-6 bg-quipus-100 rounded mb-2"></div>
              <div className="w-full h-6 bg-gray-100 rounded mb-2"></div>
              <div className="w-full h-6 bg-gray-100 rounded mb-2"></div>
              <div className="w-full h-6 bg-gray-100 rounded"></div>
            </div>
            <div className="w-3/4 h-full pl-4">
              <div className="w-full h-8 bg-quipus-100 rounded mb-3"></div>
              <div className="w-full h-32 bg-white rounded shadow-sm p-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-12 bg-gray-100 rounded"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Animation effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 border-4 border-quipus-500 rounded-full opacity-0 animate-ping" style={{ animationDelay: '2.5s' }}></div>
          </div>
        </div>
      )
    }
  ];

  const getService = (id) => services.find(s => s.id === id) || services[0];
  const currentService = getService(activeTab);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-quipus-600">Innovative Solutions</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive suite of IT and AI services designed to 
            transform your business and drive innovation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="web" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-center mb-8 bg-transparent">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id}
                  value={service.id}
                  className="px-4 py-2 m-1 data-[state=active]:bg-quipus-100 data-[state=active]:text-quipus-700"
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${service.iconBg} mr-2`}>
                      {React.cloneElement(service.icon, { className: 'h-4 w-4' })}
                    </div>
                    {service.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <motion.div 
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 p-8">
                      <div className={`p-4 rounded-full inline-block ${service.iconBg} mb-6`}>
                        {React.cloneElement(service.icon, { className: 'h-8 w-8' })}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 mb-3">FEATURES</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <div className="h-1.5 w-1.5 rounded-full bg-quipus-500 mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="bg-quipus-600 hover:bg-quipus-700 text-white" asChild>
                        <Link to={service.link}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="w-full lg:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
                      {service.mockup}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
