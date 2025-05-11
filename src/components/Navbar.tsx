
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-montserrat font-bold text-2xl text-wizpen-primary">
            Wizpen<span className="text-wizpen-accent">Studio</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-wizpen-accent transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-wizpen-accent transition-colors duration-200">How it works</a>
          <a href="#pricing" className="text-gray-700 hover:text-wizpen-accent transition-colors duration-200">Pricing</a>
          <Button variant="outline" className="border-wizpen-primary text-wizpen-primary hover:bg-wizpen-primary hover:text-white">Log in</Button>
          <Button className="bg-wizpen-accent hover:bg-opacity-90 text-white">Get started</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-wizpen-accent transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 z-40">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-wizpen-accent transition-colors duration-200">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-wizpen-accent transition-colors duration-200">How it works</a>
            <a href="#pricing" className="text-gray-700 hover:text-wizpen-accent transition-colors duration-200">Pricing</a>
            <Button variant="outline" className="w-full border-wizpen-primary text-wizpen-primary hover:bg-wizpen-primary hover:text-white">Log in</Button>
            <Button className="w-full bg-wizpen-accent hover:bg-opacity-90 text-white">Get started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
