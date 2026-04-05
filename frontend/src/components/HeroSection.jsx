
Action: file_editor create /app/frontend/src/components/HeroSection.jsx --file-text "import React from 'react';
import { ArrowRight, FileText, ExternalLink } from 'lucide-react';
import { heroData } from '../mock';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className=\"relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F4F7F9] to-white\">
      {/* Geometric Background Pattern */}
      <div className=\"absolute inset-0 opacity-5\">
        <svg className=\"w-full h-full\" xmlns=\"http://www.w3.org/2000/svg\">
          <defs>
            <pattern id=\"grid\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\">
              <path d=\"M 40 0 L 0 0 0 40\" fill=\"none\" stroke=\"#002147\" strokeWidth=\"1\"/>
            </pattern>
          </defs>
          <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />
        </svg>
      </div>

      {/* Ashoka Stambh Wireframe (Geometric) */}
      <div className=\"absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-10\">
        <svg viewBox=\"0 0 200 300\" className=\"w-full h-full\">
          {/* Stylized Pillar */}
          <rect x=\"85\" y=\"150\" width=\"30\" height=\"120\" fill=\"none\" stroke=\"#002147\" strokeWidth=\"2\"/>
          {/* Capital Base */}
          <circle cx=\"100\" cy=\"150\" r=\"40\" fill=\"none\" stroke=\"#FF9933\" strokeWidth=\"2\"/>
          {/* Top Elements */}
          <circle cx=\"100\" cy=\"130\" r=\"25\" fill=\"none\" stroke=\"#002147\" strokeWidth=\"2\"/>
          <circle cx=\"100\" cy=\"110\" r=\"15\" fill=\"none\" stroke=\"#FF9933\" strokeWidth=\"2\"/>
          {/* Connecting Lines */}
          <line x1=\"70\" y1=\"150\" x2=\"130\" y2=\"150\" stroke=\"#002147\" strokeWidth=\"1\"/>
          <line x1=\"85\" y1=\"130\" x2=\"115\" y2=\"130\" stroke=\"#002147\" strokeWidth=\"1\"/>
        </svg>
      </div>

      <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10\">
        <div className=\"grid lg:grid-cols-2 gap-12 items-center\">
          {/* Left Content */}
          <div className=\"space-y-8\">
            {/* Badge */}
            <div className=\"inline-flex items-center gap-2 px-4 py-2 bg-[#002147]/5 rounded-full border border-[#002147]/10\">
              <div className=\"w-2 h-2 bg-[#22c55e] rounded-full animate-pulse\"></div>
              <span className=\"text-sm font-medium text-[#002147]\">Live on Vishvasya Stack</span>
            </div>

            {/* Headline */}
            <h1 className=\"text-5xl lg:text-6xl font-bold text-[#002147] leading-tight\">
              {heroData.headline}
            </h1>

            {/* Subheadline */}
            <p className=\"text-lg lg:text-xl text-gray-700 leading-relaxed\">
              {heroData.subheadline}
            </p>

            {/* CTAs */}
            <div className=\"flex flex-col sm:flex-row gap-4\">
              <Button 
                className=\"bg-[#002147] hover:bg-[#003366] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl\"
              >
                <FileText className=\"w-5 h-5 mr-2\" />
                {heroData.primaryCTA}
              </Button>
              <Button 
                variant=\"outline\"
                className=\"border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300\"
              >
                {heroData.secondaryCTA}
                <ExternalLink className=\"w-5 h-5 ml-2\" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className=\"flex items-center gap-8 pt-4\">
              <div className=\"flex items-center gap-2\">
                <div className=\"w-3 h-3 bg-[#22c55e] rounded-full\"></div>
                <span className=\"text-sm text-gray-600\">DPDP Act 2023 Compliant</span>
              </div>
              <div className=\"flex items-center gap-2\">
                <div className=\"w-3 h-3 bg-[#FF9933] rounded-full\"></div>
                <span className=\"text-sm text-gray-600\">Sovereign Infrastructure</span>
              </div>
            </div>
          </div>

          {/* Right: Animated Network Visualization */}
          <div className=\"relative\">
            <div className=\"bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-[#002147]/10 shadow-2xl\">
              <svg viewBox=\"0 0 400 400\" className=\"w-full h-full\">
                {/* Central Node (India) */}
                <circle cx=\"200\" cy=\"200\" r=\"40\" fill=\"#002147\" className=\"animate-pulse\"/>
                <text x=\"200\" y=\"205\" textAnchor=\"middle\" fill=\"white\" fontSize=\"12\" fontWeight=\"bold\">Bharat</text>
                
                {/* Outer Nodes (Citizens/Sectors) */}
                {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
                  const x = 200 + 120 * Math.cos((angle * Math.PI) / 180);
                  const y = 200 + 120 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <g key={idx}>
                      <line x1=\"200\" y1=\"200\" x2={x} y2={y} stroke=\"#FF9933\" strokeWidth=\"2\" opacity=\"0.3\" className=\"animate-pulse\"/>
                      <circle cx={x} cy={y} r=\"20\" fill=\"#FF9933\" opacity=\"0.8\"/>
                    </g>
                  );
                })}

                {/* Connecting Ring */}
                <circle cx=\"200\" cy=\"200\" r=\"120\" fill=\"none\" stroke=\"#002147\" strokeWidth=\"1\" strokeDasharray=\"5,5\" opacity=\"0.3\"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
"
Observation: Create successful: /app/frontend/src/components/HeroSection.jsx