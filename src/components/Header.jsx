import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#002147] rounded-lg flex items-center justify-center font-bold text-white text-xl">B</div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#002147]' : 'text-[#002147]'}`}>BharatChain</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#002147] font-medium hover:text-[#FF9933]">Features</a>
            <a href="#architecture" className="text-[#002147] font-medium hover:text-[#FF9933]">Architecture</a>
            <button className="bg-[#002147] text-white px-6 py-2 rounded-full font-bold hover:bg-[#003366] transition-all">
              Build Now
            </button>
          </div>

          <button className="md:hidden text-[#002147]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          <a href="#features" className="block text-[#002147] font-medium">Features</a>
          <a href="#architecture" className="block text-[#002147] font-medium">Architecture</a>
          <button className="w-full bg-[#002147] text-white py-3 rounded-xl font-bold">Build Now</button>
        </div>
      )}
    </nav>
  );
};

export default Header;