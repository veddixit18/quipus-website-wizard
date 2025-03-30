
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { ArrowRight, Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$2,999",
      duration: "/project",
      features: [
        "Custom Website Development",
        "Responsive Design",
        "Up to 5 Pages",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "1 Month Support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Growth",
      description: "For growing businesses with advanced needs",
      price: "$5,999",
      duration: "/project",
      features: [
        "Everything in Starter",
        "Custom Web Application",
        "Database Integration",
        "User Authentication System",
        "Admin Dashboard",
        "API Development",
        "3 Months Support",
      ],
      popular: true,
      buttonText: "Get Started",
      buttonVariant: "default"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      price: "Custom",
      duration: "",
      features: [
        "Everything in Growth",
        "Custom AI Solution",
        "Advanced Analytics",
        "Integration with Existing Systems",
        "Scaled Infrastructure",
        "Dedicated Support Team",
        "12 Months Support & Maintenance",
      ],
      popular: false,
      buttonText: "Contact Us",
      buttonVariant: "outline"
    }
  ];

  const faqs = [
    {
      question: "Do you offer custom pricing for specific needs?",
      answer: "Yes, we understand that every business has unique requirements. Contact us for a personalized quote tailored to your specific project needs."
    },
    {
      question: "What's included in the support period?",
      answer: "Our support includes bug fixes, minor updates, and technical assistance. We also offer extended support plans for ongoing maintenance and updates."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can start with a lower tier and upgrade as your needs grow. We'll work with you to ensure a smooth transition."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A basic website might take 2-4 weeks, while complex AI applications could take 2-6 months. We'll provide a detailed timeline during our consultation."
    },
    {
      question: "Do you offer ongoing maintenance services?",
      answer: "Yes, we offer various maintenance packages to keep your solution running smoothly, secure, and up-to-date after the initial support period ends."
    },
    {
      question: "What technologies do you use?",
      answer: "We work with a wide range of modern technologies including React, Node.js, Python, TensorFlow, PyTorch, AWS, Google Cloud, and more. We select the best technology stack for each project's specific requirements."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative hero-gradient pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-quipus-100 rounded-full filter blur-3xl opacity-30 animate-pulse-light"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-quipus-200 rounded-full filter blur-3xl opacity-20 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Choose the right plan for your business needs. All plans include our commitment to quality and excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden border ${
                  tier.popular 
                    ? 'border-quipus-500 shadow-lg shadow-quipus-100/50' 
                    : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="bg-quipus-600 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-600">{tier.duration}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-quipus-600 mr-2 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      tier.buttonVariant === 'default' 
                        ? 'bg-quipus-600 hover:bg-quipus-700 text-white' 
                        : 'border-quipus-200 text-quipus-700 hover:bg-quipus-50'
                    } button-hover-effect`}
                  >
                    {tier.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Customize your solution with these add-on services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                Extended Support
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-60">Ongoing technical support, bug fixes, and updates beyond the initial support period.</p>
                  </TooltipContent>
                </Tooltip>
              </h3>
              <p className="text-gray-600 mb-2">Starting at $899/month</p>
              <p className="text-sm text-gray-500">Keep your solution running smoothly with our extended support packages.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                Custom Integrations
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-60">Integrate your solution with third-party services, APIs, and existing systems.</p>
                  </TooltipContent>
                </Tooltip>
              </h3>
              <p className="text-gray-600 mb-2">Starting at $1,499</p>
              <p className="text-sm text-gray-500">Connect your new solution with existing tools and platforms.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                Performance Optimization
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-60">Enhance the speed, efficiency, and scalability of your application.</p>
                  </TooltipContent>
                </Tooltip>
              </h3>
              <p className="text-gray-600 mb-2">Starting at $1,299</p>
              <p className="text-sm text-gray-500">Improve load times, user experience, and overall performance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                AI Model Training
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-60">Custom AI model development and training using your business data.</p>
                  </TooltipContent>
                </Tooltip>
              </h3>
              <p className="text-gray-600 mb-2">Starting at $3,999</p>
              <p className="text-sm text-gray-500">Develop tailored AI models specific to your business needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                Security Audits
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-60">Comprehensive security assessment and vulnerability testing.</p>
                  </TooltipContent>
                </Tooltip>
              </h3>
              <p className="text-gray-600 mb-2">Starting at $1,999</p>
              <p className="text-sm text-gray-500">Ensure your application is secure and protected against threats.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                User Experience Design
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-60">Advanced UX research, design, and optimization services.</p>
                  </TooltipContent>
                </Tooltip>
              </h3>
              <p className="text-gray-600 mb-2">Starting at $2,499</p>
              <p className="text-sm text-gray-500">Create intuitive, engaging user experiences that drive results.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Find answers to common questions about our pricing and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-quipus-600 to-quipus-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Contact us for a personalized quote tailored to your specific requirements. Our team will work with you to create the perfect solution for your business.
            </p>
            
            <Button className="bg-white text-quipus-700 hover:bg-white/90 px-8 py-6 text-lg button-hover-effect">
              Request Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
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
                <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Mobile App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">AI App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">AI Automation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">AI Agents & Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
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

export default Pricing;
