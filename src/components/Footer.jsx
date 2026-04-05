
Action: file_editor create /app/frontend/src/components/Footer.jsx --file-text "import React from 'react';
import { FileText, Code, Shield, Award } from 'lucide-react';
import { compliancePartners, footerData } from '../mock';

const Footer = () => {
  return (
    <footer className=\"bg-gradient-to-br from-[#002147] to-[#001530] text-white\">
      {/* Compliance Partners Section */}
      <div className=\"border-b border-white/10\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\">
          <div className=\"text-center mb-8\">
            <h3 className=\"text-2xl font-bold mb-2\">Proposed Integration Partners</h3>
            <p className=\"text-white/70 text-sm\">Subject to formal partnership agreements</p>
          </div>
          
          <div className=\"grid md:grid-cols-3 gap-8\">
            {compliancePartners.map((partner) => (
              <div 
                key={partner.name}
                className=\"bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center\"
              >
                <div className=\"w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4\">
                  <Shield className=\"w-8 h-8 text-[#FF9933]\" />
                </div>
                <h4 className=\"text-xl font-bold mb-1\">{partner.name}</h4>
                <p className=\"text-sm text-white/70\">{partner.fullName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\">
        <div className=\"grid md:grid-cols-4 gap-8 mb-12\">
          {/* Brand */}
          <div className=\"md:col-span-1\">
            <div className=\"flex items-center gap-2 mb-4\">
              <div className=\"w-10 h-10 bg-gradient-to-br from-[#FF9933] to-[#FF7700] rounded-lg flex items-center justify-center\">
                <Shield className=\"w-6 h-6 text-white\" />
              </div>
              <span className=\"text-2xl font-bold\">BharatChain</span>
            </div>
            <p className=\"text-white/70 text-sm leading-relaxed\">
              India's sovereign blockchain infrastructure built on the Vishvasya Stack.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className=\"font-bold mb-4 flex items-center gap-2\">
              <FileText className=\"w-4 h-4 text-[#FF9933]\" />
              Resources
            </h4>
            <ul className=\"space-y-2\">
              {footerData.links.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className=\"text-white/70 hover:text-[#FF9933] text-sm transition-colors duration-300\"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className=\"font-bold mb-4 flex items-center gap-2\">
              <Code className=\"w-4 h-4 text-[#FF9933]\" />
              Developers
            </h4>
            <ul className=\"space-y-2\">
              {footerData.links.slice(2).map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className=\"text-white/70 hover:text-[#FF9933] text-sm transition-colors duration-300\"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className=\"font-bold mb-4 flex items-center gap-2\">
              <Award className=\"w-4 h-4 text-[#FF9933]\" />
              Compliance
            </h4>
            <div className=\"bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10\">
              <p className=\"text-xs text-white/70 leading-relaxed\">
                {footerData.complianceText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=\"border-t border-white/10 pt-8\">
          <div className=\"flex flex-col md:flex-row justify-between items-center gap-4\">
            <p className=\"text-white/70 text-sm\">
              © 2025 BharatChain. A sovereign blockchain initiative.
            </p>
            <div className=\"flex items-center gap-6 text-sm\">
              <a href=\"#privacy\" className=\"text-white/70 hover:text-[#FF9933] transition-colors duration-300\">
                Privacy Policy
              </a>
              <a href=\"#terms\" className=\"text-white/70 hover:text-[#FF9933] transition-colors duration-300\">
                Terms of Service
              </a>
              <a href=\"#contact\" className=\"text-white/70 hover:text-[#FF9933] transition-colors duration-300\">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"
Observation: Create successful: /app/frontend/src/components/Footer.jsx