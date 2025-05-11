
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      title: t('how_it_works', 'step1_title'),
      description: t('how_it_works', 'step1_desc')
    },
    {
      number: "02",
      title: t('how_it_works', 'step2_title'),
      description: t('how_it_works', 'step2_desc')
    },
    {
      number: "03",
      title: t('how_it_works', 'step3_title'),
      description: t('how_it_works', 'step3_desc')
    },
    {
      number: "04",
      title: t('how_it_works', 'step4_title'),
      description: t('how_it_works', 'step4_desc')
    }
  ];
  
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-wizpen-primary mb-4">
            {t('how_it_works', 'title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('how_it_works', 'subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
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
