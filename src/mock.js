Perfect! I have all the details I need. Let me build the BharatChain landing page with a Government-Official aesthetic, starting with the frontend using mock data.

I'll create:
- SVG-based geometric illustrations
- Animated use-case slider with all 4 verticals
- Live "Trust Ticker" for blocks and identities
- Contact form (backend integration later)
- Mobile-first, low-bandwidth optimized design

Let me start building the frontend now:
Action: file_editor create /app/frontend/src/mock.js --file-text "// Mock data for BharatChain Landing Page

export const heroData = {
  headline: \"The Trusted Ledger for 1.4 Billion Citizens.\",
  subheadline: \"BharatChain is India's official, identity-gated blockchain infrastructure built on the Vishvasya Stack. Secure. Sovereign. Unloseable.\",
  primaryCTA: \"Explore Documentation\",
  secondaryCTA: \"View the Sovereign Ledger\"
};

export const sovereignPillars = [
  {
    id: 1,
    title: \"Identity-Gated\",
    description: \"Every wallet linked to a verified DigiLocker ID.\",
    icon: \"shield-check\"
  },
  {
    id: 2,
    title: \"Sovereign Recovery\",
    description: \"Lost your device? Recover your assets via Aadhaar biometrics.\",
    icon: \"fingerprint\"
  },
  {
    id: 3,
    title: \"ZK-Privacy\",
    description: \"Zero-Knowledge Proofs ensure 100% privacy with 100% compliance.\",
    icon: \"lock\"
  }
];

export const useCases = [
  {
    id: 1,
    vertical: \"Agriculture\",
    title: \"Fertilizer Subsidies\",
    description: \"Direct Benefit Transfer of agricultural subsidies to verified farmers via blockchain-backed wallets.\",
    icon: \"sprout\",
    color: \"#22c55e\"
  },
  {
    id: 2,
    vertical: \"Education\",
    title: \"Immutable Degrees\",
    description: \"Tamper-proof academic credentials stored on-chain, instantly verifiable by employers worldwide.\",
    icon: \"graduation-cap\",
    color: \"#3b82f6\"
  },
  {
    id: 3,
    vertical: \"Finance\",
    title: \"e-Rupee Integration\",
    description: \"Seamless integration with India's Central Bank Digital Currency for instant settlements.\",
    icon: \"coins\",
    color: \"#f59e0b\"
  },
  {
    id: 4,
    vertical: \"Real Estate\",
    title: \"Smart Title Deeds\",
    description: \"Digitized property records with automated transfer of ownership and zero paperwork.\",
    icon: \"building-2\",
    color: \"#8b5cf6\"
  }
];

export const vishvasyaStack = {
  title: \"Built on the Vishvasya Stack\",
  description: \"BharatChain seamlessly integrates with India's digital infrastructure\",
  layers: [
    {
      level: 3,
      name: \"Government Services\",
      services: [\"DBT\", \"Land Records\", \"e-Rupee\", \"Digital Degrees\"]
    },
    {
      level: 2,
      name: \"BharatChain Layer\",
      services: [\"Identity-Gated Wallets\", \"ZK-Privacy\", \"Sovereign Recovery\"]
    },
    {
      level: 1,
      name: \"India Stack\",
      services: [\"Aadhaar\", \"UPI\", \"DigiLocker\", \"eKYC\"]
    }
  ]
};

export const trustMetrics = {
  blocksValidated: 12847562,
  identitiesVerified: 8459302,
  transactionsProcessed: 45678912,
  uptimePercentage: 99.97
};

export const compliancePartners = [
  { name: \"MeitY\", fullName: \"Ministry of Electronics & IT\" },
  { name: \"C-DAC\", fullName: \"Centre for Development of Advanced Computing\" },
  { name: \"NIC\", fullName: \"National Informatics Centre\" }
];

export const footerData = {
  complianceText: \"Built in alignment with the Digital Personal Data Protection (DPDP) Act 2023.\",
  links: [
    { label: \"Technical Documentation\", href: \"#docs\" },
    { label: \"Developer API\", href: \"#api\" },
    { label: \"Governance Model\", href: \"#governance\" },
    { label: \"Security Audits\", href: \"#security\" }
  ]
};
"
Observation: Create successful: /app/frontend/src/mock.js