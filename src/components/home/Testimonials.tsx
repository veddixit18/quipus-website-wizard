
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Quipus transformed our business with their AI automation solutions. We've reduced processing times by 70% and improved accuracy significantly.",
      author: "Sarah Johnson",
      position: "CTO, TechInnovate",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "Their web development team delivered a stunning, high-performance website that has increased our conversion rate by 35%. The attention to detail was exceptional.",
      author: "Michael Chen",
      position: "Marketing Director, GrowthFirst",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=8"
    },
    {
      quote: "The custom AI solution developed by The Quipus has given us insights we never thought possible. It's completely changed how we approach our market strategy.",
      author: "Emily Rodriguez",
      position: "CEO, DataVision",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 relative"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-8 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="absolute -top-2 -left-2 w-12 h-12 bg-quipus-100 rounded-full flex items-center justify-center">
                <span className="text-quipus-600 text-2xl font-bold">"</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
