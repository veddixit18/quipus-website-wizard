
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import DarkModeToggle from './DarkModeToggle';
import SolutionsDropdown from './SolutionsDropdown';
import MobileMenu from './MobileMenu';

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
                <SolutionsDropdown />
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
            <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
            
            <Button className="bg-quipus-600 hover:bg-quipus-700 text-white button-hover-effect">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
            
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
      <MobileMenu isOpen={mobileMenuOpen} onItemClick={closeMobileMenu} />
    </>
  );
};

export default Navbar;
