
import React, { useState, useEffect } from 'react';

const AIMockup = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [conversation, setConversation] = useState([
    { role: 'user', content: 'Can you analyze this sales data and identify trends?' },
    { role: 'ai', content: 'Analyzing your sales data...' },
    { role: 'ai', content: 'I\'ve identified several key trends:' },
    { role: 'ai', content: '1. Revenue increased 24% in Q2 compared to Q1' },
    { role: 'ai', content: '2. Customer retention improved by 12%' },
    { role: 'ai', content: '3. Product X is outperforming expectations by 35%' },
    { role: 'ai', content: 'Would you like me to generate a detailed report?' },
    { role: 'user', content: 'Yes, please create a report and send it to my team.' },
    { role: 'ai', content: 'Generating comprehensive report...' },
    { role: 'ai', content: 'Report has been created and distributed to your team members.' },
  ]);
  
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  
  useEffect(() => {
    if (currentLine < conversation.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, currentLine]);
        setCurrentLine(prev => prev + 1);
        setIsTyping(conversation[currentLine].role === 'ai');
      }, 1500);
      
      return () => clearTimeout(timer);
    } else {
      // Reset animation after completion
      const resetTimer = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLine(0);
        setIsTyping(true);
      }, 4000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [currentLine, conversation.length]);
  
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Mockup header */}
      <div className="bg-quipus-600 px-6 py-4 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-white font-medium text-center flex-grow">AI Assistant</div>
      </div>
      
      {/* Conversation area */}
      <div className="bg-gray-100 p-4 h-80 overflow-y-auto flex flex-col space-y-3">
        {visibleLines.map((lineIndex, index) => {
          const line = conversation[lineIndex];
          return (
            <div 
              key={index}
              className={`flex ${line.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-2xl px-4 py-2 max-w-xs animate-fade-in ${
                  line.role === 'user' 
                    ? 'bg-quipus-600 text-white' 
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}
              >
                <p className="text-sm">{line.content}</p>
              </div>
            </div>
          );
        })}
        
        {/* Typing indicator */}
        {isTyping && currentLine < conversation.length && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '400ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input area */}
      <div className="bg-white px-4 py-3 border-t">
        <div className="flex items-center">
          <div className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
            Type your message...
          </div>
          <button className="ml-3 w-10 h-10 rounded-full bg-quipus-600 text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="m22 2-7 20-4-9-9-4Z"/>
              <path d="M22 2 11 13"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIMockup;
