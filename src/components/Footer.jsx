import React from 'react';
import { FileText, Code, Shield, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#002147] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FF9933] rounded-lg flex items-center justify-center font-bold text-white text-xl">B</div>
              <span className="text-2xl font-bold tracking-tight">BharatChain</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's sovereign blockchain infrastructure, purpose-built for governance, identity, and trust.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Infrastructure</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#architecture" className="hover:text-[#FF9933] transition-colors">Vishvasya Stack</a></li>
              <li><a href="#" className="hover:text-[#FF9933] transition-colors">Protocol Nodes</a></li>
              <li><a href="#" className="hover:text-[#FF9933] transition-colors">Identity Gateway</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#FF9933] transition-colors">Developer Docs</a></li>
              <li><a href="#" className="hover:text-[#FF9933] transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-[#FF9933] transition-colors">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#FF9933] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FF9933] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#FF9933] transition-colors">Governance Framework</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} BharatChain. All rights reserved. Managed by Autasis Edutech.
          </p>
          <div className="flex gap-6">
             <Shield className="w-5 h-5 text-gray-500 hover:text-[#FF9933] cursor-pointer" />
             <Award className="w-5 h-5 text-gray-500 hover:text-[#FF9933] cursor-pointer" />
             <Code className="w-5 h-5 text-gray-500 hover:text-[#FF9933] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;