
Action: file_editor create /app/frontend/src/components/VishvasyaStack.jsx --file-text "import React from 'react';
import { vishvasyaStack } from '../mock';
import { ArrowUp, Layers } from 'lucide-react';

const VishvasyaStack = () => {
  return (
    <section className=\"py-20 bg-gradient-to-br from-[#002147] to-[#003366] text-white relative overflow-hidden\">
      {/* Background Pattern */}
      <div className=\"absolute inset-0 opacity-5\">
        <svg className=\"w-full h-full\" xmlns=\"http://www.w3.org/2000/svg\">
          <defs>
            <pattern id=\"stack-pattern\" width=\"60\" height=\"60\" patternUnits=\"userSpaceOnUse\">
              <circle cx=\"30\" cy=\"30\" r=\"2\" fill=\"white\"/>
            </pattern>
          </defs>
          <rect width=\"100%\" height=\"100%\" fill=\"url(#stack-pattern)\" />
        </svg>
      </div>

      <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
        {/* Section Header */}
        <div className=\"text-center mb-16\">
          <div className=\"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4\">
            <Layers className=\"w-4 h-4 text-[#FF9933]\" />
            <span className=\"text-sm font-medium\">Technical Architecture</span>
          </div>
          <h2 className=\"text-4xl lg:text-5xl font-bold mb-4\">
            {vishvasyaStack.title}
          </h2>
          <p className=\"text-lg text-white/80 max-w-3xl mx-auto\">
            {vishvasyaStack.description}
          </p>
        </div>

        {/* Stack Visualization */}
        <div className=\"max-w-4xl mx-auto space-y-6\">
          {vishvasyaStack.layers.map((layer, idx) => (
            <div key={layer.level} className=\"relative\">
              {/* Layer Card */}
              <div 
                className={`
                  bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 
                  ${layer.level === 2 ? 'border-[#FF9933] shadow-2xl scale-105' : 'border-white/20'}
                  transition-all duration-500 hover:scale-105 hover:shadow-2xl
                `}
              >
                <div className=\"flex items-start gap-6\">
                  {/* Level Number */}
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center font-bold text-2xl
                    ${layer.level === 2 ? 'bg-[#FF9933] text-white' : 'bg-white/20 text-white'}
                  `}>
                    {layer.level}
                  </div>

                  {/* Layer Content */}
                  <div className=\"flex-1\">
                    <h3 className={`
                      text-2xl font-bold mb-4
                      ${layer.level === 2 ? 'text-[#FF9933]' : 'text-white'}
                    `}>
                      {layer.name}
                    </h3>
                    <div className=\"flex flex-wrap gap-3\">
                      {layer.services.map((service, serviceIdx) => (
                        <div 
                          key={serviceIdx}
                          className=\"px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors duration-300\"
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BharatChain Highlight Badge */}
                {layer.level === 2 && (
                  <div className=\"absolute -top-3 -right-3 bg-[#FF9933] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg\">
                    Core Infrastructure
                  </div>
                )}
              </div>

              {/* Connection Arrow */}
              {idx < vishvasyaStack.layers.length - 1 && (
                <div className=\"flex justify-center my-4\">
                  <div className=\"flex flex-col items-center\">
                    <ArrowUp className=\"w-6 h-6 text-[#FF9933] animate-bounce\" />
                    <div className=\"w-0.5 h-4 bg-[#FF9933]/50\"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Integration Flow */}
        <div className=\"mt-16 text-center\">
          <div className=\"inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10\">
            <div className=\"flex items-center gap-2\">
              <div className=\"w-3 h-3 bg-[#22c55e] rounded-full animate-pulse\"></div>
              <span className=\"text-sm\">Seamless Integration</span>
            </div>
            <div className=\"w-px h-6 bg-white/20\"></div>
            <div className=\"flex items-center gap-2\">
              <div className=\"w-3 h-3 bg-[#FF9933] rounded-full animate-pulse\"></div>
              <span className=\"text-sm\">Zero Downtime</span>
            </div>
            <div className=\"w-px h-6 bg-white/20\"></div>
            <div className=\"flex items-center gap-2\">
              <div className=\"w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse\"></div>
              <span className=\"text-sm\">API-First Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VishvasyaStack;
"
Observation: Create successful: /app/frontend/src/components/VishvasyaStack.jsx