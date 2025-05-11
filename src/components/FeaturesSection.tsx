
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Pencil, ShoppingBag, BarChart3, DollarSign, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  const featureItems = [
    {
      icon: <Pencil className="h-8 w-8 text-wizpen-accent" />,
      title: t('features', 'studio_title'),
      description: t('features', 'studio_desc')
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-wizpen-accent" />,
      title: t('features', 'direct_sales_title'),
      description: t('features', 'direct_sales_desc')
    },
    {
      icon: <Shield className="h-8 w-8 text-wizpen-accent" />,
      title: t('features', 'ownership_title'),
      description: t('features', 'ownership_desc')
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-wizpen-accent" />,
      title: t('features', 'analytics_title'),
      description: t('features', 'analytics_desc')
    },
    {
      icon: <DollarSign className="h-8 w-8 text-wizpen-accent" />,
      title: t('features', 'withdrawals_title'),
      description: t('features', 'withdrawals_desc')
    },
    {
      icon: <Zap className="h-8 w-8 text-wizpen-accent" />,
      title: t('features', 'speed_title'),
      description: t('features', 'speed_desc')
    }
  ];
  
  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-wizpen-primary mb-4">
            {t('features', 'title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('features', 'subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
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
