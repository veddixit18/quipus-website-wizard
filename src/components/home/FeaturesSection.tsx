
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Code, BarChart2, Bot } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-quipus-500" />,
      title: "Lightning Fast Development",
      description: "Get your products to market faster with our agile development approach."
    },
    {
      icon: <Shield className="h-6 w-6 text-quipus-500" />,
      title: "Enterprise-Grade Security",
      description: "Your data and applications are secured with industry-leading practices."
    },
    {
      icon: <Code className="h-6 w-6 text-quipus-500" />,
      title: "Clean, Scalable Code",
      description: "Our solutions are built to grow with your business needs."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-quipus-500" />,
      title: "Data-Driven Insights",
      description: "Turn your data into actionable intelligence with AI-powered analytics."
    },
    {
      icon: <Bot className="h-6 w-6 text-quipus-500" />,
      title: "AI-Powered Automation",
      description: "Streamline operations with intelligent automation solutions."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-quipus-500" />,
      title: "Dedicated Support",
      description: "Our team is committed to your success every step of the way."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features That <span className="text-quipus-600">Drive Results</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive suite of features empowers your business to achieve outstanding outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-quipus-50 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
