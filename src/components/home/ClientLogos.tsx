
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const ClientLogos = () => {
  // Placeholder for client logos
  const clients = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
    { id: 3, name: 'Company C' },
    { id: 4, name: 'Company D' },
    { id: 5, name: 'Company E' },
    { id: 6, name: 'Company F' },
    { id: 7, name: 'Company G' },
    { id: 8, name: 'Company H' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Trusted by <span className="text-quipus-600">Leading Companies</span>
        </h2>
        
        <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
          <CarouselContent className="-ml-4">
            {clients.map((client) => (
              <CarouselItem key={client.id} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="h-32 w-full flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="w-full h-12 flex items-center justify-center">
                    <div className="w-36 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <span className="sr-only">{client.name}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientLogos;
