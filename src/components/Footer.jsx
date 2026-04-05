export default function Footer() {
  return (
    <footer className="bg-sovereignBlue text-gray-400 py-12 px-6 border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm">© 2026 BharatChain Infrastructure.</p>
          <p className="text-xs mt-2 uppercase tracking-widest text-ashokaSaffron">Built for the Nation.</p>
        </div>
        <div className="max-w-md text-center md:text-right">
          <p className="text-xs leading-relaxed">
            Built in alignment with the Digital Personal Data Protection (DPDP) Act 2023. 
            Operated by the Ministry of Electronics and IT (MeitY).
          </p>
        </div>
      </div>
    </footer>
  );
}