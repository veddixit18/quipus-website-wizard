
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in IT and AI, Alex leads our vision and strategy.",
      image: "https://i.pravatar.cc/300?img=11"
    },
    {
      name: "Sophia Chen",
      position: "CTO",
      bio: "Sophia oversees our technology development and ensures we deliver cutting-edge solutions.",
      image: "https://i.pravatar.cc/300?img=5"
    },
    {
      name: "Marcus Johnson",
      position: "AI Research Director",
      bio: "Marcus leads our AI research initiatives and keeps us at the forefront of innovation.",
      image: "https://i.pravatar.cc/300?img=13"
    },
    {
      name: "Olivia Martinez",
      position: "Head of Client Solutions",
      bio: "Olivia works closely with clients to understand their needs and deliver tailored solutions.",
      image: "https://i.pravatar.cc/300?img=3"
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
              About <span className="gradient-text">The Quipus</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We're a team of passionate technologists dedicated to transforming businesses through innovative IT and AI solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                The Quipus was founded in 2018 with a simple mission: to help businesses harness the power of technology and artificial intelligence to achieve their full potential.
              </p>
              <p className="text-gray-700 mb-4">
                Our name is inspired by the ancient Inca communication system called "quipus" - knotted cords that were used to record and transmit information. Like these ancient tools, we connect businesses to the valuable information and insights they need to thrive.
              </p>
              <p className="text-gray-700">
                Just as the quipus transformed how civilizations communicated and stored knowledge, we aim to transform how modern businesses operate in the digital age.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Values</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-quipus-500 mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Innovation</h4>
                    <p className="text-gray-600">We continuously explore new technologies and approaches to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-quipus-500 mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Excellence</h4>
                    <p className="text-gray-600">We strive for excellence in everything we do, from code quality to client communication.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-quipus-500 mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Client-Centricity</h4>
                    <p className="text-gray-600">Our clients' success is our success. We partner closely with them to understand their unique needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-quipus-500 mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Integrity</h4>
                    <p className="text-gray-600">We operate with transparency, honesty, and ethical business practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our diverse team of experts brings together deep expertise in technology, business, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-quipus-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Join the many businesses that have accelerated their growth with our innovative IT and AI solutions.
            </p>
            
            <Button className="bg-white text-quipus-700 hover:bg-white/90 px-8 py-6 text-lg button-hover-effect">
              Get in Touch
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

export default About;
