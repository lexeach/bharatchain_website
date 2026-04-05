import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-sovereignBlue text-digitalWhite pt-32 pb-20 px-6 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ashokaSaffron opacity-10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The Trusted Ledger for <br/>
          <span className="text-ashokaSaffron text-opacity-90">1.4 Billion Citizens.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          BharatChain is India’s official, identity-gated blockchain infrastructure built on the Vishvasya Stack. 
          Secure. Sovereign. Unloseable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-ashokaSaffron hover:bg-orange-500 text-sovereignBlue font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all">
            Explore Documentation <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="border border-white hover:bg-white hover:text-sovereignBlue py-4 px-8 rounded-lg font-semibold transition-all">
            View the Sovereign Ledger
          </button>
        </div>
      </div>
    </section>
  );
}