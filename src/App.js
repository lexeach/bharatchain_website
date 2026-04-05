import React from 'react';
import Header from './components/Header';
import SovereignPillars from './components/SovereignPillars'; // Ensure this matches the file name
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import TrustTicker from './components/TrustTicker';
import VishvasyaStack from './components/VishvasyaStack';
import ContactSection from './components/ContactSection';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FF9933]/30">
      {/* Toast notifications for form submissions */}
      <Toaster position="top-center" expand={false} richColors />
      
      <Header />
      
      <main>
        <HeroSection />
        <TrustTicker />
        
        <section id="features">
          <SovereignPillars />
        </section>
        
        <section id="architecture">
          <VishvasyaStack />
        </section>
        
        {/* Use Cases section can be added here or integrated into Pillars */}
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;