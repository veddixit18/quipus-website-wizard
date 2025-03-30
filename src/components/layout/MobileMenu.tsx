
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { solutionsData } from './data/solutionsData';

interface MobileMenuProps {
  isOpen: boolean;
  onItemClick: () => void;
}

const MobileMenu = ({ isOpen, onItemClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
      <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl p-6 transition transform">
        <div className="flex flex-col space-y-6">
          <Link 
            to="/" 
            className="text-gray-800 dark:text-white hover:text-quipus-600 font-medium"
            onClick={onItemClick}
          >
            Home
          </Link>
          
          <div className="space-y-3">
            <p className="font-medium text-gray-800 dark:text-white">Solutions</p>
            <div className="flex flex-col space-y-2 pl-4">
              {solutionsData.map((solution, index) => (
                <Link 
                  key={index}
                  to={solution.href} 
                  className="text-gray-700 dark:text-gray-300 hover:text-quipus-600 flex items-center gap-2"
                  onClick={onItemClick}
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
            onClick={onItemClick}
          >
            About Us
          </Link>
          
          <Link 
            to="/pricing" 
            className="text-gray-800 dark:text-white hover:text-quipus-600 font-medium"
            onClick={onItemClick}
          >
            Pricing
          </Link>
          
          <Button className="bg-quipus-600 hover:bg-quipus-700 text-white button-hover-effect w-full mt-4">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
