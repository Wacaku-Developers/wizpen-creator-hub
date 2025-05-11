
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Create Your Content",
    description: "Use our powerful studio to craft bite-sized posts or comprehensive eBooks with ease."
  },
  {
    number: "02",
    title: "Set Your Price",
    description: "Choose your pricing strategy with complete flexibility — subscriptions, one-time sales, or bundles."
  },
  {
    number: "03",
    title: "Publish & Share",
    description: "Launch your content to the world and share it directly with your audience."
  },
  {
    number: "04",
    title: "Grow & Monetize",
    description: "Track performance, understand what works, and maximize your revenue potential."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-wizpen-primary mb-4">
            How Wizpen Studio Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Launch your creator business in minutes with our streamlined process.
            No coding required, no complex setup — just pure creation and monetization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Step number */}
              <div className="text-5xl font-montserrat font-bold text-wizpen-accent/20 mb-4">
                {step.number}
              </div>
              
              <h3 className="text-xl font-montserrat font-semibold text-wizpen-primary mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-2 w-2 bg-wizpen-accent rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
