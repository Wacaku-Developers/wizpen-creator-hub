
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      className="text-sm font-medium"
      onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
    >
      {language === 'en' ? '🇮🇩 ID' : '🇺🇸 EN'}
    </Button>
  );
};

export default LanguageToggle;
