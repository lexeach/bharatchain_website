import React from 'react';
import { Database, Shield, Link, Key } from 'lucide-react';

const VishvasyaStack = () => {
  const layers = [
    {
      title: "Infrastructure Layer",
      icon: Database,
      items: ["Geographically Distributed Nodes", "Sovereign Cloud Hosting", "State-Level Validators"]
    },
    {
      title: "Security Layer",
      icon: Shield,
      items: ["Protocol-Level KYC", "Hardware Security Modules", "Encrypted Data Vaults"]
    },
    {
      title: "Protocol Layer",
      icon: Link,
      items: ["Proof of Authority (PoA)", "Sub-second Finality", "EVM Compatibility"]
    },
    {
      title: "Access Layer",
      icon: Key,
      items: ["DigiLocker Integration", "eSign Support", "Zero-Knowledge Proofs"]
    }
  ];

  return (
    <section className="py-20 bg-[#002147] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Vishvasya Stack</h2>
          <p className="text-[#FF9933] font-medium uppercase tracking-widest">A Unified Trust Architecture</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {layers.map((layer, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF9933]/50 transition-colors group">
              <layer.icon className="w-10 h-10 text-[#FF9933] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">{layer.title}</h3>
              <ul className="space-y-3">
                {layer.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#FF9933] rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VishvasyaStack;