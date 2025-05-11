
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Wizpen Studio gave me everything I need to monetize my writing without the usual platform restrictions. The best part? My readers appreciate the seamless experience.",
    name: "Alex Rivera",
    title: "Fiction Writer"
  },
  {
    quote: "After years of fighting algorithms on other platforms, I now have direct access to my audience with total control over my income and content strategy.",
    name: "Mia Chen",
    title: "Tech Educator"
  },
  {
    quote: "The analytics alone are worth it. I now know exactly what content resonates with my audience and how to maximize my revenue potential.",
    name: "Jordan Taylor",
    title: "Finance Creator"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-wizpen-primary mb-4">
            Trusted by creators worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join the community of writers, educators, and digital creators who have taken control of their content and income.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col">
              <div className="flex-grow">
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 border-2 border-wizpen-accent">
                  <AvatarFallback className="bg-wizpen-primary text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold text-wizpen-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
