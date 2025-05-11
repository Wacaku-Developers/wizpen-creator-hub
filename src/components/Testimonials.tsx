
import React from 'react';

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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-wizpen-primary mb-4">
            Trusted by creators worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join the community of content creators who have taken control of their digital business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="h-10 flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-wizpen-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <blockquote className="mb-6">
                <p className="text-gray-700 italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              
              <div>
                <div className="font-medium text-wizpen-primary">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
