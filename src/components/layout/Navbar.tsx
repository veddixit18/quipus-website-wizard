
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

  return (
    <>
      <nav
        className={`floating-navbar w-11/12 max-w-6xl transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-3'
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-800 hover:text-quipus-600 font-medium">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white/90 backdrop-blur-md">
                <DropdownMenuItem asChild>
                  <Link to="/solutions/web-development" className="cursor-pointer">Web Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/mobile-app-development" className="cursor-pointer">Mobile App Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/ai-app-development" className="cursor-pointer">AI App Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/ai-automation" className="cursor-pointer">AI Automation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/ai-agents" className="cursor-pointer">AI Agents & Solutions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/other-it-services" className="cursor-pointer">Other IT Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
                  <Link 
                    to="/solutions/web-development" 
                    className="text-gray-700 dark:text-gray-300 hover:text-quipus-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link 
                    to="/solutions/mobile-app-development" 
                    className="text-gray-700 dark:text-gray-300 hover:text-quipus-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mobile App Development
                  </Link>
                  <Link 
                    to="/solutions/ai-app-development" 
                    className="text-gray-700 dark:text-gray-300 hover:text-quipus-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    AI App Development
                  </Link>
                  <Link 
                    to="/solutions/ai-automation" 
                    className="text-gray-700 dark:text-gray-300 hover:text-quipus-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    AI Automation
                  </Link>
                  <Link 
                    to="/solutions/ai-agents" 
                    className="text-gray-700 dark:text-gray-300 hover:text-quipus-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    AI Agents & Solutions
                  </Link>
                  <Link 
                    to="/solutions/other-it-services" 
                    className="text-gray-700 dark:text-gray-300 hover:text-quipus-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Other IT Services
                  </Link>
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
