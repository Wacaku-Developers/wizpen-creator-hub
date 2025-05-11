
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [{
  quote: "Wizpen Studio gave me everything I need to monetize my writing without the usual platform restrictions. The best part? My readers appreciate the seamless experience.",
  name: "Alex Rivera",
  title: "Fiction Writer"
}, {
  quote: "After years of fighting algorithms on other platforms, I now have direct access to my audience with total control over my income and content strategy.",
  name: "Mia Chen",
  title: "Tech Educator"
}, {
  quote: "The analytics alone are worth it. I now know exactly what content resonates with my audience and how to maximize my revenue potential.",
  name: "Jordan Taylor",
  title: "Finance Creator"
}];

const Testimonials = () => {
  const { t } = useLanguage();
  
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-wizpen-primary mb-4">
            {t('testimonials', 'title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('testimonials', 'subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col h-full">
              <blockquote className="mb-6 flex-grow">
                <p className="text-gray-700 italic">
                  {t('testimonials', 'quote1')}
                </p>
              </blockquote>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="" alt="Alex Rivera" />
                  <AvatarFallback className="bg-wizpen-accent/20 text-wizpen-accent">AR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-wizpen-primary">Alex Rivera</div>
                  <div className="text-sm text-gray-500">Fiction Writer</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col h-full">
              <blockquote className="mb-6 flex-grow">
                <p className="text-gray-700 italic">
                  {t('testimonials', 'quote2')}
                </p>
              </blockquote>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="" alt="Mia Chen" />
                  <AvatarFallback className="bg-wizpen-accent/20 text-wizpen-accent">MC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-wizpen-primary">Mia Chen</div>
                  <div className="text-sm text-gray-500">Tech Educator</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col h-full">
              <blockquote className="mb-6 flex-grow">
                <p className="text-gray-700 italic">
                  {t('testimonials', 'quote3')}
                </p>
              </blockquote>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="" alt="Jordan Taylor" />
                  <AvatarFallback className="bg-wizpen-accent/20 text-wizpen-accent">JT</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-wizpen-primary">Jordan Taylor</div>
                  <div className="text-sm text-gray-500">Finance Creator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
