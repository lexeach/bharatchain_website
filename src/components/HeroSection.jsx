import React from 'react';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-bold mb-6">
              <Shield className="w-4 h-4" /> SECURE GOVERNANCE STACK
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#002147] leading-tight mb-6">
              India's Sovereign <span className="text-[#FF9933]">Blockchain</span> Infrastructure
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              A high-performance, identity-gated protocol designed to power the next generation of Digital Public Infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#002147] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#003366] transition-all shadow-lg">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#002147] text-[#002147] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                View Whitepaper
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF9933]/20 to-[#002147]/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white border border-gray-100 p-8 rounded-3xl shadow-2xl">
               <div className="space-y-4">
                  {[
                    "Protocol-Level KYC Integration",
                    "Native DigiLocker Support",
                    "Sovereign Node Governance",
                    "Sub-second Transaction Finality"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <span className="font-semibold text-[#002147]">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;