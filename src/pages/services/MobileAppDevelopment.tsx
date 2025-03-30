
import React, { useState, useEffect } from 'react';
import { ArrowRight, Smartphone, Mail, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import { useIsMobile } from '@/hooks/use-mobile';

// Animation for the mockup
const MobileMockup = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const screens = [
    {
      name: 'Home',
      content: (
        <div className="flex flex-col h-full bg-gradient-to-b from-purple-100 to-white p-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
          <div className="bg-purple-500 text-white p-3 rounded-lg mb-4">
            <h3 className="text-sm font-bold">Welcome Back</h3>
            <p className="text-xs opacity-80">Your tasks for today</p>
          </div>
          <div className="bg-white shadow rounded-lg p-3 mb-3">
            <div className="w-full h-2 bg-purple-200 rounded-full mb-2" />
            <div className="w-3/4 h-2 bg-gray-200 rounded-full" />
          </div>
          <div className="bg-white shadow rounded-lg p-3 mb-3">
            <div className="w-full h-2 bg-purple-200 rounded-full mb-2" />
            <div className="w-2/4 h-2 bg-gray-200 rounded-full" />
          </div>
          <div className="bg-white shadow rounded-lg p-3 mb-3">
            <div className="w-full h-2 bg-purple-200 rounded-full mb-2" />
            <div className="w-5/6 h-2 bg-gray-200 rounded-full" />
          </div>
          <div className="mt-auto flex justify-around pt-4">
            <div className="w-6 h-6 rounded-full bg-purple-200" />
            <div className="w-6 h-6 rounded-full bg-purple-400" />
            <div className="w-6 h-6 rounded-full bg-purple-200" />
            <div className="w-6 h-6 rounded-full bg-purple-200" />
          </div>
        </div>
      )
    },
    {
      name: 'Analytics',
      content: (
        <div className="flex flex-col h-full bg-gradient-to-b from-blue-100 to-white p-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
          <div className="bg-blue-500 text-white p-3 rounded-lg mb-4">
            <h3 className="text-sm font-bold">Analytics Dashboard</h3>
            <p className="text-xs opacity-80">Monthly overview</p>
          </div>
          <div className="bg-white shadow rounded-lg p-3 mb-4">
            <div className="flex justify-between mb-2">
              <div className="w-2/5 h-2 bg-blue-200 rounded-full" />
              <div className="w-1/5 h-2 bg-blue-400 rounded-full" />
            </div>
            <div className="flex h-20 items-end space-x-2">
              <div className="w-1/6 bg-blue-200 rounded-t-lg" style={{height: '40%'}} />
              <div className="w-1/6 bg-blue-300 rounded-t-lg" style={{height: '60%'}} />
              <div className="w-1/6 bg-blue-400 rounded-t-lg" style={{height: '80%'}} />
              <div className="w-1/6 bg-blue-500 rounded-t-lg" style={{height: '100%'}} />
              <div className="w-1/6 bg-blue-400 rounded-t-lg" style={{height: '70%'}} />
              <div className="w-1/6 bg-blue-300 rounded-t-lg" style={{height: '50%'}} />
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-3">
            <div className="w-1/3 h-2 bg-blue-200 rounded-full mb-3" />
            <div className="w-full h-1 bg-gray-200 rounded-full mb-2" />
            <div className="w-4/5 h-1 bg-gray-200 rounded-full mb-2" />
            <div className="w-3/5 h-1 bg-gray-200 rounded-full" />
          </div>
          <div className="mt-auto flex justify-around pt-4">
            <div className="w-6 h-6 rounded-full bg-blue-200" />
            <div className="w-6 h-6 rounded-full bg-blue-200" />
            <div className="w-6 h-6 rounded-full bg-blue-400" />
            <div className="w-6 h-6 rounded-full bg-blue-200" />
          </div>
        </div>
      )
    },
    {
      name: 'Profile',
      content: (
        <div className="flex flex-col h-full bg-gradient-to-b from-green-100 to-white p-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-300 mb-2 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <h3 className="text-sm font-bold">John Doe</h3>
            <p className="text-xs text-gray-600">Premium Member</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 mb-3">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-green-200 mr-2 flex items-center justify-center">
                <Mail className="w-4 h-4 text-green-600" />
              </div>
              <div className="w-4/5 h-2 bg-gray-200 rounded-full" />
            </div>
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-green-200 mr-2 flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-600" />
              </div>
              <div className="w-3/5 h-2 bg-gray-200 rounded-full" />
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-200 mr-2 flex items-center justify-center">
                <Globe className="w-4 h-4 text-green-600" />
              </div>
              <div className="w-2/5 h-2 bg-gray-200 rounded-full" />
            </div>
          </div>
          <div className="mt-auto flex justify-around pt-4">
            <div className="w-6 h-6 rounded-full bg-green-200" />
            <div className="w-6 h-6 rounded-full bg-green-200" />
            <div className="w-6 h-6 rounded-full bg-green-200" />
            <div className="w-6 h-6 rounded-full bg-green-400" />
          </div>
        </div>
      )
    }
  ];

  // Auto-rotate screens every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-64 h-[500px] bg-gray-900 rounded-[40px] p-2 shadow-xl mx-auto">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-full"></div>
        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
          {/* Active screen */}
          <div className="w-full h-full transition-all duration-500 ease-in-out">
            {screens[activeScreen].content}
          </div>
        </div>
      </div>
      
      {/* Screen selector */}
      <div className="flex justify-center mt-4 space-x-2">
        {screens.map((screen, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeScreen ? 'bg-quipus-600' : 'bg-gray-300'}`}
            onClick={() => setActiveScreen(index)}
          />
        ))}
      </div>
    </div>
  );
};

const MobileAppDevelopment = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Mobile App Development</span>
                <br />
                that Transforms User Experience
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                We build cross-platform mobile applications that deliver exceptional user experiences, 
                connect with your audience, and drive business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-quipus-600 hover:bg-quipus-700 text-white px-8 py-6 text-lg button-hover-effect">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-quipus-200 text-quipus-700 hover:bg-quipus-50 px-8 py-6 text-lg button-hover-effect">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <MobileMockup />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              We Build Mobile Apps for <span className="gradient-text">Every Platform</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our dedicated team of mobile developers ensures your app looks and performs flawlessly across all devices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-quipus-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-quipus-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">iOS Development</h3>
              <p className="text-gray-600 mb-4">
                Native iOS apps built with Swift for performance and seamless Apple ecosystem integration.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-quipus-500 mr-2"></div>
                  Swift & SwiftUI
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-quipus-500 mr-2"></div>
                  App Store Optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-quipus-500 mr-2"></div>
                  Apple Design Guidelines
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Android Development</h3>
              <p className="text-gray-600 mb-4">
                High-performance Android apps built with Kotlin for the diverse Android ecosystem.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Kotlin & Jetpack Compose
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Play Store Optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Material Design Guidelines
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-Platform Apps</h3>
              <p className="text-gray-600 mb-4">
                Build once, deploy everywhere with React Native and Flutter solutions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  React Native & Flutter
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Code Reusability
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Faster Time-to-Market
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Mobile App <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your mobile app project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
                    <p className="text-gray-600">
                      We work closely with you to understand your goals, target audience, and business requirements.
                    </p>
                  </div>
                  <div className="flex items-center justify-center z-10 w-12 h-12 rounded-full bg-quipus-600 text-white font-bold text-xl">1</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right order-1 md:order-1"></div>
                  <div className="flex items-center justify-center z-10 w-12 h-12 rounded-full bg-quipus-600 text-white font-bold text-xl">2</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left order-2 md:order-2">
                    <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
                    <p className="text-gray-600">
                      Creating intuitive interfaces and engaging user experiences that delight your users.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Development</h3>
                    <p className="text-gray-600">
                      Our engineers build your app using clean, efficient code following best practices.
                    </p>
                  </div>
                  <div className="flex items-center justify-center z-10 w-12 h-12 rounded-full bg-quipus-600 text-white font-bold text-xl">3</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right order-1 md:order-1"></div>
                  <div className="flex items-center justify-center z-10 w-12 h-12 rounded-full bg-quipus-600 text-white font-bold text-xl">4</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left order-2 md:order-2">
                    <h3 className="text-xl font-bold mb-2">Testing & QA</h3>
                    <p className="text-gray-600">
                      Rigorous testing across devices and scenarios to ensure quality and reliability.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Deployment</h3>
                    <p className="text-gray-600">
                      Publishing your app to app stores with optimized listings to maximize visibility.
                    </p>
                  </div>
                  <div className="flex items-center justify-center z-10 w-12 h-12 rounded-full bg-quipus-600 text-white font-bold text-xl">5</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right order-1 md:order-1"></div>
                  <div className="flex items-center justify-center z-10 w-12 h-12 rounded-full bg-quipus-600 text-white font-bold text-xl">6</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left order-2 md:order-2">
                    <h3 className="text-xl font-bold mb-2">Support & Growth</h3>
                    <p className="text-gray-600">
                      Ongoing maintenance, updates, and feature enhancements to keep your app competitive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-quipus-600 to-quipus-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business with a Custom Mobile App?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss your project and create a mobile strategy that drives results.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-quipus-700 hover:bg-white/90 px-8 py-6 text-lg button-hover-effect">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg button-hover-effect">
                View Our Portfolio
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

export default MobileAppDevelopment;
