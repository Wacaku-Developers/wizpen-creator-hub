
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      className="text-sm font-medium transition-all duration-300 hover:bg-gray-100"
      onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
    >
      {language === 'en' ? '🇮🇩 Bahasa' : '🇺🇸 English'}
    </Button>
  );
};

export default LanguageToggle;
