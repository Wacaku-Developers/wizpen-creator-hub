
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-wizpen-primary to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 leading-tight">
              {t('cta', 'title')}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              {t('cta', 'subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-wizpen-accent hover:bg-opacity-90 text-white text-lg px-8 py-6">
                {t('cta', 'button')}
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-wizpen-accent/30 rounded-2xl transform rotate-3 scale-95"></div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 relative">
                <div className="mb-6">
                  <div className="text-xl font-montserrat font-semibold mb-2">
                    {t('cta', 'testimonial_title')}
                  </div>
                  <div className="h-1 w-20 bg-wizpen-accent"></div>
                </div>
                <blockquote className="mb-6">
                  <p className="text-lg italic">"{t('cta', 'testimonial_quote')}"</p>
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-wizpen-accent/50 mr-4"></div>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm opacity-75">Wattpad Author</div>
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
