
Action: file_editor create /app/frontend/src/components/Header.jsx --file-text "import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, FileText, Code } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Use Cases', href: '#usecases' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
        }
      `}
    >
      <nav className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"flex items-center justify-between h-20\">
          {/* Logo */}
          <a href=\"#\" className=\"flex items-center gap-3 group\">
            <div className=\"w-10 h-10 bg-gradient-to-br from-[#FF9933] to-[#FF7700] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg\">
              <Shield className=\"w-6 h-6 text-white\" />
            </div>
            <span className=\"text-xl font-bold text-[#002147]\">BharatChain</span>
          </a>

          {/* Desktop Navigation */}
          <div className=\"hidden md:flex items-center gap-8\">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className=\"text-[#002147] hover:text-[#FF9933] font-medium transition-colors duration-300 relative group\"
              >
                {link.label}
                <span className=\"absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9933] group-hover:w-full transition-all duration-300\"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className=\"hidden md:flex items-center gap-4\">
            <Button 
              variant=\"ghost\"
              className=\"text-[#002147] hover:text-[#FF9933] hover:bg-[#FF9933]/10\"
            >
              <FileText className=\"w-4 h-4 mr-2\" />
              Documentation
            </Button>
            <Button 
              className=\"bg-[#002147] hover:bg-[#003366] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl\"
            >
              <Code className=\"w-4 h-4 mr-2\" />
              Developer Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=\"md:hidden p-2 rounded-lg hover:bg-[#002147]/10 transition-colors duration-300\"
          >
            {isMobileMenuOpen ? (
              <X className=\"w-6 h-6 text-[#002147]\" />
            ) : (
              <Menu className=\"w-6 h-6 text-[#002147]\" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className=\"md:hidden absolute top-20 left-0 right-0 bg-white shadow-2xl border-t border-[#002147]/10 animate-in slide-in-from-top duration-300\">
            <div className=\"px-4 py-6 space-y-4\">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className=\"block py-3 px-4 text-[#002147] hover:bg-[#FF9933]/10 hover:text-[#FF9933] rounded-lg font-medium transition-all duration-300\"
                >
                  {link.label}
                </a>
              ))}
              <div className=\"pt-4 space-y-3\">
                <Button 
                  variant=\"outline\"
                  className=\"w-full border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white\"
                >
                  <FileText className=\"w-4 h-4 mr-2\" />
                  Documentation
                </Button>
                <Button 
                  className=\"w-full bg-[#002147] hover:bg-[#003366] text-white\"
                >
                  <Code className=\"w-4 h-4 mr-2\" />
                  Developer Portal
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
"
Observation: Create successful: /app/frontend/src/components/Header.jsx