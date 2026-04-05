import React from 'react';
import { ShieldCheck, Zap, Globe, Users } from 'lucide-react';

const SovereignPillars = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Protocol KYC",
      desc: "Identity-gated entry ensuring only verified entities participate in the network."
    },
    {
      icon: Zap,
      title: "High Throughput",
      desc: "Optimized for the scale of 1.4 billion citizens with sub-second finality."
    },
    {
      icon: Globe,
      title: "Data Sovereignty",
      desc: "Compliance with Indian DPDP Act by keeping all nodes within national borders."
    },
    {
      icon: Users,
      title: "Public Good",
      desc: "Open infrastructure for startups to build trusted digital public services."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002147] mb-4">Sovereign Pillars</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Built on the foundation of trust, transparency, and Indian technological excellence.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#002147]/5 rounded-xl flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-[#FF9933]" />
              </div>
              <h3 className="text-xl font-bold text-[#002147] mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SovereignPillars;