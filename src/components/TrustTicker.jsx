import React, { useState, useEffect } from 'react';

const TrustTicker = () => {
  const [blocks, setBlocks] = useState(8429102);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Blocks Validated", value: blocks.toLocaleString() },
    { label: "Node Operators", value: "24" },
    { label: "TPS Capacity", value: "10,000+" },
    { label: "Avg. Finality", value: "0.8s" }
  ];

  return (
    <div className="bg-[#002147] border-t border-b border-[#FF9933]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className={i !== stats.length - 1 ? "md:border-r border-white/10" : ""}>
              <p className="text-[#FF9933] text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-white text-2xl font-mono font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustTicker;