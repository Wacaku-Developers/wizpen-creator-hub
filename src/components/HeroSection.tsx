import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-wizpen-primary leading-tight appear-animation">
              Create, Sell, and Manage
              <span className="text-wizpen-accent"> Digital Content</span>
              <span> with Full Control</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-700 appear-animation appear-animation-delay-1">
              A powerful all-in-one platform for creators to publish and monetize content — 
              from bite-sized posts to full eBooks, with complete ownership over your pricing, sales, and revenue.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 appear-animation appear-animation-delay-2">
              <Button size="lg" className="bg-wizpen-primary hover:bg-opacity-90 text-white text-lg px-8 py-6">
                Start creating for free
              </Button>
              
            </div>
            
            <div className="mt-10 appear-animation appear-animation-delay-3">
              <p className="text-gray-500 flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">NEW</span>
                Launch your creator platform in minutes, not weeks
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 appear-animation appear-animation-delay-2">
            <div className="relative h-full min-h-[400px] p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-wizpen-accent/20 to-wizpen-primary/20 rounded-2xl transform rotate-3 scale-95"></div>
              <div className="absolute inset-0 bg-white rounded-2xl border border-gray-200 shadow-xl backdrop-blur-sm">
                <div className="p-6">
                  <div className="h-10 w-32 bg-wizpen-primary rounded mb-4"></div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-6 w-1/2 bg-gray-200 rounded mb-6"></div>
                  
                  <div className="flex space-x-2 mb-6">
                    <div className="h-10 w-20 bg-wizpen-accent rounded"></div>
                    <div className="h-10 w-20 bg-gray-200 rounded"></div>
                  </div>
                  
                  <div className="h-32 bg-gray-100 rounded mb-4"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;