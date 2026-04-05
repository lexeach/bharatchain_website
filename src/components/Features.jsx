import { Fingerprint, RotateCcw, Lock } from 'lucide-react';

const pillars = [
  {
    title: "Identity-Gated",
    desc: "Every wallet is cryptographically linked to a verified DigiLocker ID.",
    icon: <Fingerprint className="text-ashokaSaffron w-10 h-10" />
  },
  {
    title: "Sovereign Recovery",
    desc: "Lost your device? Recover your assets via Aadhaar biometrics.",
    icon: <RotateCcw className="text-ashokaSaffron w-10 h-10" />
  },
  {
    title: "ZK-Privacy",
    desc: "Zero-Knowledge Proofs ensure 100% privacy with 100% compliance.",
    icon: <Lock className="text-ashokaSaffron w-10 h-10" />
  }
];

export default function Features() {
  return (
    <section className="bg-digitalWhite py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">{p.icon}</div>
            <h3 className="text-xl font-bold text-sovereignBlue mb-3">{p.title}</h3>
            <p className="text-gray-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}