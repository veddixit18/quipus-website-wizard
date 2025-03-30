
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { solutionsData } from './data/solutionsData';

const SolutionsDropdown = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-gray-800 hover:text-quipus-600 font-medium bg-transparent hover:bg-transparent focus:bg-transparent">
        Solutions
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[600px] p-4 md:grid md:grid-cols-2 lg:w-[800px] bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-100">
          {solutionsData.map((solution, index) => (
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
  );
};

export default SolutionsDropdown;
