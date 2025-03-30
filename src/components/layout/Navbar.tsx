
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun, Moon, Code, Database, Bot, Zap, ShieldCheck, Server, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const solutions = [
    {
      title: 'Web Development',
      href: '/solutions/web-development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: <Code className="h-8 w-8 text-blue-500" />,
      gif: <div className="w-full h-24 bg-blue-50 rounded flex items-center justify-center overflow-hidden">
        <div className="w-10 h-10 relative">
          <div className="absolute inset-0 border-2 border-blue-400 rounded-md animate-pulse"></div>
          <div className="absolute inset-2 bg-blue-100 rounded-sm flex items-center justify-center">
            <Code className="h-4 w-4 text-blue-500" />
          </div>
        </div>
      </div>
    },
    {
      title: 'Mobile App Development',
      href: '/solutions/mobile-app-development',
      description: 'Cross-platform mobile applications with exceptional user experiences.',
      icon: <Database className="h-8 w-8 text-purple-500" />,
      gif: <div className="w-full h-24 bg-purple-50 rounded flex items-center justify-center overflow-hidden">
        <div className="w-8 h-16 bg-gray-800 rounded-xl relative">
          <div className="absolute inset-1 bg-purple-100 rounded-lg"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    },
    {
      title: 'AI App Development',
      href: '/solutions/ai-app-development',
      description: 'Custom AI applications that transform your business processes.',
      icon: <Bot className="h-8 w-8 text-yellow-500" />,
      gif: <div className="w-full h-24 bg-yellow-50 rounded flex items-center justify-center overflow-hidden">
        <div className="relative">
          <Bot className="h-10 w-10 text-yellow-400" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-4 h-4 bg-yellow-200 rounded-full animate-ping opacity-75"></div>
          </div>
        </div>
      </div>
    },
    {
      title: 'AI Automation',
      href: '/solutions/ai-automation',
      description: 'Intelligent automation solutions for repetitive tasks and workflows.',
      icon: <Zap className="h-8 w-8 text-green-500" />,
      gif: <div className="w-full h-24 bg-green-50 rounded flex items-center justify-center overflow-hidden">
        <div className="relative">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-6 bg-green-200 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-10 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-8 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            <div className="w-2 h-12 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '450ms' }}></div>
            <div className="w-2 h-8 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
            <div className="w-2 h-6 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '750ms' }}></div>
            <div className="w-2 h-4 bg-green-200 rounded-full animate-bounce" style={{ animationDelay: '900ms' }}></div>
          </div>
        </div>
      </div>
    },
    {
      title: 'AI Agents & Solutions',
      href: '/solutions/ai-agents',
      description: 'Autonomous AI agents that learn, adapt, and solve complex problems.',
      icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
      gif: <div className="w-full h-24 bg-red-50 rounded flex items-center justify-center overflow-hidden">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-4 border-red-200 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-red-300 animate-ping opacity-50"></div>
          </div>
        </div>
      </div>
    },
    {
      title: 'Other IT Services',
      href: '/solutions/other-it-services',
      description: 'Comprehensive IT solutions supporting your digital transformation.',
      icon: <Server className="h-8 w-8 text-quipus-500" />,
      gif: <div className="w-full h-24 bg-quipus-50 rounded flex items-center justify-center overflow-hidden">
        <div className="relative">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-4 h-4 bg-quipus-200 rounded animate-pulse"></div>
            <div className="w-4 h-4 bg-quipus-300 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 bg-quipus-400 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-4 h-4 bg-quipus-500 rounded animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
    },
  ];

  return (
    <>
      <nav
        className={`floating-navbar w-11/12 max-w-6xl transition-all duration-300 ${
          isScrolled ? 'py-2 shadow-lg bg-white/90' : 'py-3 bg-white/80'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl gradient-text">The Quipus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-quipus-600 font-medium">
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-quipus-600 font-medium bg-transparent hover:bg-transparent focus:bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4 md:grid md:grid-cols-2 lg:w-[800px] bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-100">
                      {solutions.map((solution, index) => (
                        <div key={index} className="p-4">
                          <NavigationMenuLink asChild>
                            <Link
                              to={solution.href}
                              className="block rounded-lg p-4 hover:bg-gray-50 transition-colors"
                            >
                              <div className="mb-3">
                                {solution.gif}
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="p-1 rounded-md bg-gray-100">
                                  {React.cloneElement(solution.icon, { className: 'h-5 w-5' })}
                                </div>
                                <span className="text-lg font-medium">{solution.title}</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{solution.description}</p>
                              <div className="text-quipus-600 text-sm font-medium flex items-center">
                                Learn more <ArrowRight className="ml-1 h-3 w-3" />
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/about" className="text-gray-800 hover:text-quipus-600 font-medium">
              About Us
            </Link>
            
            <Link to="/pricing" className="text-gray-800 hover:text-quipus-600 font-medium">
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="rounded-full">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button className="bg-quipus-600 hover:bg-quipus-700 text-white button-hover-effect">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="rounded-full">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl p-6 transition transform">
            <div className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="text-gray-800 dark:text-white hover:text-quipus-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-3">
                <p className="font-medium text-gray-800 dark:text-white">Solutions</p>
                <div className="flex flex-col space-y-2 pl-4">
                  {solutions.map((solution, index) => (
                    <Link 
                      key={index}
                      to={solution.href} 
                      className="text-gray-700 dark:text-gray-300 hover:text-quipus-600 flex items-center gap-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {React.cloneElement(solution.icon, { className: 'h-4 w-4' })}
                      {solution.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="text-gray-800 dark:text-white hover:text-quipus-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              <Link 
                to="/pricing" 
                className="text-gray-800 dark:text-white hover:text-quipus-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <Button className="bg-quipus-600 hover:bg-quipus-700 text-white button-hover-effect w-full mt-4">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
