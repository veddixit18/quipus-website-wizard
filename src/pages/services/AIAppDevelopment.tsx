
import React from 'react';
import { ArrowRight, Bot, Code, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import AIMockup from '@/components/services/AIMockup';

const AIAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="gradient-text">AI App Development</span>
                <br />
                for the Modern Enterprise
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                We build custom AI applications that transform business processes, 
                unlock new insights, and create competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-quipus-600 hover:bg-quipus-700 text-white px-8 py-6 text-lg button-hover-effect">
                  Discuss Your AI Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-quipus-200 text-quipus-700 hover:bg-quipus-50 px-8 py-6 text-lg button-hover-effect">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <AIMockup />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful <span className="gradient-text">AI Capabilities</span> for Your Business
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We leverage the latest AI technologies to create applications that solve real business problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Bot className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Natural Language Processing</h3>
              <p className="text-gray-600 mb-4">
                Create applications that understand, analyze, and generate human language.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-2"></div>
                  Sentiment Analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-2"></div>
                  Text Classification
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-2"></div>
                  Conversational AI
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Systems that learn from data to make predictions and automate decision-making.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></div>
                  Predictive Analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></div>
                  Anomaly Detection
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></div>
                  Recommendation Systems
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Computer Vision</h3>
              <p className="text-gray-600 mb-4">
                Applications that can see, analyze, and understand visual information.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Image Recognition
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Object Detection
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Visual Inspection
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Server className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Large Language Models</h3>
              <p className="text-gray-600 mb-4">
                Harnessing the power of LLMs like GPT-4 for advanced AI applications.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></div>
                  Content Generation
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></div>
                  Knowledge Management
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></div>
                  Intelligent Assistants
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Turn your data into actionable insights with AI-powered analytics.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Business Intelligence
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Trend Analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Performance Monitoring
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-quipus-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Bot className="h-8 w-8 text-quipus-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate AI capabilities into your existing systems and workflows.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-quipus-500 mr-2"></div>
                  API Development
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-quipus-500 mr-2"></div>
                  System Integration
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-quipus-500 mr-2"></div>
                  Legacy System Modernization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              AI Solutions for <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We've helped organizations across industries leverage AI to transform their operations and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold mb-1">Healthcare</h3>
              <p className="text-sm text-gray-600">Diagnostic assistance, patient care optimization</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold mb-1">Finance</h3>
              <p className="text-sm text-gray-600">Fraud detection, algorithmic trading, risk analysis</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold mb-1">Retail</h3>
              <p className="text-sm text-gray-600">Inventory forecasting, personalized recommendations</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold mb-1">Manufacturing</h3>
              <p className="text-sm text-gray-600">Predictive maintenance, quality control</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold mb-1">Education</h3>
              <p className="text-sm text-gray-600">Personalized learning, automated grading</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold mb-1">Logistics</h3>
              <p className="text-sm text-gray-600">Route optimization, demand forecasting</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-quipus-600 to-quipus-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you solve complex problems and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-quipus-700 hover:bg-white/90 px-8 py-6 text-lg button-hover-effect">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg button-hover-effect">
                Explore Our AI Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The Quipus</h3>
              <p className="text-gray-400">
                Connecting businesses to the future with innovative IT & AI solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="/solutions/web-development" className="text-gray-400 hover:text-white">Web Development</a></li>
                <li><a href="/solutions/mobile-app-development" className="text-gray-400 hover:text-white">Mobile App Development</a></li>
                <li><a href="/solutions/ai-app-development" className="text-gray-400 hover:text-white">AI App Development</a></li>
                <li><a href="/solutions/ai-automation" className="text-gray-400 hover:text-white">AI Automation</a></li>
                <li><a href="/solutions/ai-agents" className="text-gray-400 hover:text-white">AI Agents & Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} The Quipus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIAppDevelopment;
