import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Fingerprint, 
  RotateCcw, 
  Lock,
  Globe,
  CheckCircle
} from 'lucide-react';

// --- Sub-Component: Hero ---
const Hero = () => (
  <section className="relative bg-[#002147] text-[#F4F7F9] pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9933] opacity-10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
    <div className="max-w-7xl mx-auto relative z-10 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-xs font-medium tracking-wide uppercase">Network Live: Vishvasya Stack 2.0</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
        The Trusted Ledger for <br/>
        <span className="text-[#FF9933]">1.4 Billion Citizens.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        BharatChain is India’s official, identity-gated blockchain infrastructure. 
        Secure. Sovereign. Unloseable.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-[#FF9933] hover:bg-[#e68a2e] text-[#002147] font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all shadow-lg">
          Explore Documentation <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        <button className="border border-white/30 hover:bg-white/10 py-4 px-8 rounded-lg font-semibold transition-all backdrop-blur-sm">
          View the Sovereign Ledger
        </button>
      </div>
    </div>
  </section>
);

// --- Sub-Component: Features ---
const Features = () => {
  const pillars = [
    {
      title: "Identity-Gated",
      desc: "Every wallet is cryptographically linked to a verified DigiLocker ID, ensuring 1:1 citizen mapping.",
      icon: <Fingerprint className="text-[#FF9933] w-10 h-10" />
    },
    {
      title: "Sovereign Recovery",
      desc: "Lost your device? Recover your assets via Aadhaar biometrics. No seed phrases required.",
      icon: <RotateCcw className="text-[#FF9933] w-10 h-10" />
    },
    {
      title: "ZK-Privacy",
      desc: "Zero-Knowledge Proofs ensure 100% privacy for citizens while maintaining 100% regulatory compliance.",
      icon: <Lock className="text-[#FF9933] w-10 h-10" />
    }
  ];

  return (
    <section className="bg-[#F4F7F9] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">Sovereign Pillars</h2>
          <div className="h-1.5 w-20 bg-[#FF9933] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6 bg-[#F4F7F9] w-16 h-16 rounded-xl flex items-center justify-center">{p.icon}</div>
              <h3 className="text-xl font-bold text-[#002147] mb-4">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component: Footer ---
const Footer = () => (
  <footer className="bg-[#002147] text-gray-400 py-16 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="max-w-sm">
        <h3 className="text-white text-2xl font-bold mb-4">BharatChain</h3>
        <p className="text-sm leading-relaxed mb-6">
          The national blockchain backbone for the world's largest democracy. 
          Built for scale, security, and the future of Digital India.
        </p>
        <div className="flex gap-4">
          <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center">🇮🇳</div>
          <p className="text-xs self-center">A MeitY Initiative</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Infrastructure</h4>
          <ul className="space-y-2">
            <li className="hover:text-[#FF9933] cursor-pointer">Vishvasya Stack</li>
            <li className="hover:text-[#FF9933] cursor-pointer">Node Operators</li>
            <li className="hover:text-[#FF9933] cursor-pointer">API Gateway</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Governance</h4>
          <ul className="space-y-2">
            <li className="hover:text-[#FF9933] cursor-pointer">DPDP Compliance</li>
            <li className="hover:text-[#FF9933] cursor-pointer">Smart Contracts</li>
            <li className="hover:text-[#FF9933] cursor-pointer">Policy Framework</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs tracking-widest uppercase opacity-60">
      Built in alignment with the Digital Personal Data Protection (DPDP) Act 2023.
    </div>
  </footer>
);

// --- Main App Assembly ---
function App() {
  return (
    <div className="min-h-screen bg-[#F4F7F9] selection:bg-[#FF9933]/30">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

// CRITICAL: This line fixes your Netlify Build Error
export default App;