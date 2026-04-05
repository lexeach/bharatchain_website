
Action: file_editor create /app/frontend/src/components/SovereignPillars.jsx --file-text "import React from 'react';
import { ShieldCheck, Fingerprint, Lock } from 'lucide-react';
import { sovereignPillars } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const iconMap = {
  'shield-check': ShieldCheck,
  'fingerprint': Fingerprint,
  'lock': Lock
};

const SovereignPillars = () => {
  return (
    <section className=\"py-20 bg-white\">
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
        {/* Section Header */}
        <div className=\"text-center mb-16\">
          <h2 className=\"text-4xl lg:text-5xl font-bold text-[#002147] mb-4\">
            The Sovereign Pillars
          </h2>
          <p className=\"text-lg text-gray-600 max-w-3xl mx-auto\">
            Three foundational principles that make BharatChain the most secure and accessible blockchain infrastructure in the world.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className=\"grid md:grid-cols-3 gap-8\">
          {sovereignPillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon];
            return (
              <Card 
                key={pillar.id}
                className=\"group hover:shadow-2xl transition-all duration-500 border-2 border-[#002147]/10 hover:border-[#FF9933] overflow-hidden relative\"
              >
                {/* Accent Line */}
                <div className=\"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9933] to-[#002147] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500\"></div>
                
                <CardHeader className=\"pt-8\">
                  {/* Icon Container */}
                  <div className=\"w-16 h-16 bg-gradient-to-br from-[#002147] to-[#003366] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg\">
                    <Icon className=\"w-8 h-8 text-[#FF9933]\" />
                  </div>
                  <CardTitle className=\"text-2xl text-[#002147] group-hover:text-[#FF9933] transition-colors duration-300\">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className=\"text-base text-gray-700 leading-relaxed\">
                    {pillar.description}
                  </CardDescription>
                </CardContent>

                {/* Geometric Background */}
                <div className=\"absolute bottom-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300\">
                  <svg viewBox=\"0 0 100 100\" className=\"w-full h-full\">
                    <rect x=\"10\" y=\"10\" width=\"35\" height=\"35\" fill=\"#002147\" transform=\"rotate(45 27.5 27.5)\"/>
                    <rect x=\"55\" y=\"55\" width=\"35\" height=\"35\" fill=\"#FF9933\" transform=\"rotate(45 72.5 72.5)\"/>
                  </svg>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Sovereign Recovery Flow Diagram */}
        <div className=\"mt-20 bg-gradient-to-br from-[#F4F7F9] to-white rounded-2xl p-8 lg:p-12 border border-[#002147]/10\">
          <h3 className=\"text-2xl lg:text-3xl font-bold text-[#002147] mb-8 text-center\">
            How Sovereign Recovery Works
          </h3>
          
          <div className=\"grid md:grid-cols-4 gap-4 relative\">
            {/* Step 1 */}
            <div className=\"relative bg-white rounded-xl p-6 shadow-lg border-2 border-[#FF9933]/20\">
              <div className=\"w-10 h-10 bg-[#FF9933] text-white rounded-full flex items-center justify-center font-bold mb-4\">1</div>
              <h4 className=\"font-bold text-[#002147] mb-2\">Device Lost</h4>
              <p className=\"text-sm text-gray-600\">User loses phone or hardware wallet</p>
            </div>

            {/* Arrow */}
            <div className=\"hidden md:flex items-center justify-center\">
              <div className=\"w-full h-0.5 bg-[#002147]/20 relative\">
                <div className=\"absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-[#002147]/20\"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className=\"relative bg-white rounded-xl p-6 shadow-lg border-2 border-[#FF9933]/20\">
              <div className=\"w-10 h-10 bg-[#FF9933] text-white rounded-full flex items-center justify-center font-bold mb-4\">2</div>
              <h4 className=\"font-bold text-[#002147] mb-2\">Aadhaar Auth</h4>
              <p className=\"text-sm text-gray-600\">Biometric verification via UIDAI</p>
            </div>

            {/* Arrow */}
            <div className=\"hidden md:flex items-center justify-center\">
              <div className=\"w-full h-0.5 bg-[#002147]/20 relative\">
                <div className=\"absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-[#002147]/20\"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className=\"relative bg-white rounded-xl p-6 shadow-lg border-2 border-[#22c55e]/20\">
              <div className=\"w-10 h-10 bg-[#22c55e] text-white rounded-full flex items-center justify-center font-bold mb-4\">3</div>
              <h4 className=\"font-bold text-[#002147] mb-2\">Assets Restored</h4>
              <p className=\"text-sm text-gray-600\">Full wallet recovery on new device</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SovereignPillars;
"
Observation: Create successful: /app/frontend/src/components/SovereignPillars.jsx