
import React from 'react';
import { Code, Database, Bot, Zap, ShieldCheck, Server } from 'lucide-react';

export const solutionsData = [
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
