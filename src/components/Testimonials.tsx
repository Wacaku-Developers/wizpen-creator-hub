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
  const {
    t
  } = useLanguage();
  return;
};
export default Testimonials;