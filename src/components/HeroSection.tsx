import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
const HeroSection = () => {
  const {
    t
  } = useLanguage();
  return <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-wizpen-primary leading-tight appear-animation">
              {t('hero', 'title1')}
              <span className="text-wizpen-accent"> {t('hero', 'title2')}</span>
              <span> {t('hero', 'title3')}</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-700 appear-animation appear-animation-delay-1">
              {t('hero', 'subtitle')}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 appear-animation appear-animation-delay-2">
              <Button size="lg" className="bg-wizpen-primary hover:bg-opacity-90 text-white text-lg px-8 py-6">
                {t('hero', 'cta')}
              </Button>
            </div>
            
            <div className="mt-10 appear-animation appear-animation-delay-3">
              
            </div>
          </div>
          
          <div className="lg:col-span-5 appear-animation appear-animation-delay-2">
            <div className="relative h-full min-h-[400px] p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-wizpen-accent/20 to-wizpen-primary/20 rounded-2xl transform rotate-3 scale-95"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img alt="Person using laptop" src="/lovable-uploads/2b8d0072-900d-4fa2-8de0-ada2cbafca91.png" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;