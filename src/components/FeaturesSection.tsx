
import React from 'react';
import { Pencil, ShoppingBag, BarChart3, DollarSign, Shield, Zap } from 'lucide-react';

const featureItems = [
  {
    icon: <Pencil className="h-8 w-8 text-wizpen-accent" />,
    title: "Studio",
    description: "Create and publish bite-sized or longform content with an intuitive editor designed for creators."
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-wizpen-accent" />,
    title: "Direct Sales",
    description: "Sell directly to your fans with customizable pricing and flexible packaging options."
  },
  {
    icon: <Shield className="h-8 w-8 text-wizpen-accent" />,
    title: "Full Ownership",
    description: "Keep 100% ownership of your content and maintain complete control over your revenue."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-wizpen-accent" />,
    title: "Analytics",
    description: "Track performance with in-depth analytics to understand your audience and growth."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-wizpen-accent" />,
    title: "Simple Withdrawals",
    description: "Manage your income with an intuitive dashboard and easy withdrawal options."
  },
  {
    icon: <Zap className="h-8 w-8 text-wizpen-accent" />,
    title: "Speed & Clarity",
    description: "An easy-to-use interface designed for speed, clarity, and seamless content management."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-wizpen-primary mb-4">
            Everything creators need in one platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            No more juggling between different tools. Wizpen Studio gives you everything 
            you need to create, sell, and grow — all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="h-14 w-14 bg-wizpen-primary/5 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-wizpen-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
