import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ProgramTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

interface ProgramsContextType {
  tiers: ProgramTier[];
  headerContent: {
    title: string;
    description: string[];
  };
  updateTier: (id: string, tier: ProgramTier) => void;
  updateHeaderContent: (content: { title: string; description: string[] }) => void;
}

const ProgramsContext = createContext<ProgramsContextType | undefined>(undefined);

const defaultTiers: ProgramTier[] = [
  {
    id: "bronze",
    name: "Bronze",
    price: 5,
    description: "Perfect for those starting their faith journey",
    features: [
      "Early access to episodes",
      "Monthly newsletter (Twi + English)",
      "Community forum access",
      "Basic prayer support"
    ]
  },
  {
    id: "silver",
    name: "Silver",
    price: 15,
    description: "Enhanced experience for growing believers",
    features: [
      "All Bronze benefits",
      "HD video downloads (Twi subtitles)",
      "Exclusive live Q&A sessions",
      "Priority prayer support",
      "Monthly devotionals"
    ],
    recommended: true
  },
  {
    id: "gold",
    name: "Gold",
    price: 25,
    description: "Premium support for dedicated partners",
    features: [
      "All Silver benefits",
      "Direct pastor access (Accra studio)",
      "Priority prayer chain",
      "Exclusive village crusade invites",
      "Quarterly retreats in Ghana",
      "Personal mentorship (Twi/English)"
    ]
  }
];

const defaultHeaderContent = {
  title: "Support AGTV",
  description: [
    "AGTV is Ghana's 24-hour Christian television network, broadcasting from Accra to every region, village and hospital. Every cedi you give keeps the signal on air, produces fresh Twi/English Gospel content, and reaches millions who have never heard the name of Jesus.",
    "When you subscribe you don't just watch — you partner. You fund village crusades in the Northern Region, youth outreaches in Kumasi, emergency relief in Takoradi, and the daily costs of our Accra studio uplink. In return you get early access, HD downloads with Twi subtitles, direct pastor chat, and the joy of knowing you are literally sending the Gospel into homes, hospitals, prisons and remote villages across Ghana.",
    "Join the family today. Cancel anytime. 100 % of every cedi goes to ministry operations — no admin fees, no middle-men, just Jesus on air, 24/7."
  ]
};

export const ProgramsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tiers, setTiers] = useState<ProgramTier[]>(defaultTiers);
  const [headerContent, setHeaderContent] = useState(defaultHeaderContent);

  const updateTier = (id: string, tier: ProgramTier) => {
    setTiers(prevTiers => prevTiers.map(t => t.id === id ? tier : t));
  };

  const updateHeaderContent = (content: { title: string; description: string[] }) => {
    setHeaderContent(content);
  };

  return (
    <ProgramsContext.Provider value={{ tiers, headerContent, updateTier, updateHeaderContent }}>
      {children}
    </ProgramsContext.Provider>
  );
};

export const usePrograms = () => {
  const context = useContext(ProgramsContext);
  if (!context) {
    throw new Error('usePrograms must be used within ProgramsProvider');
  }
  return context;
};
