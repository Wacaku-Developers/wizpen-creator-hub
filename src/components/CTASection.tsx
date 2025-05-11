
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-wizpen-primary to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 leading-tight">
              Ready to take control of your creator business?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of creators who are building sustainable businesses with complete ownership using Wizpen Studio. Launch in minutes, not weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-wizpen-accent hover:bg-opacity-90 text-white text-lg px-8 py-6">
                Get started for free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-wizpen-primary text-lg px-8 py-6"
              >
                Schedule a demo
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-wizpen-accent/30 rounded-2xl transform rotate-3 scale-95"></div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 relative">
                <div className="mb-6">
                  <div className="text-xl font-montserrat font-semibold mb-2">What creators are saying</div>
                  <div className="h-1 w-20 bg-wizpen-accent"></div>
                </div>
                <blockquote className="mb-6">
                  <p className="text-lg italic">
                    "Wizpen Studio revolutionized my content business. Complete control, better margins, and a direct relationship with my audience."
                  </p>
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-wizpen-accent/50 mr-4"></div>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm opacity-75">Digital Creator & Author</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
